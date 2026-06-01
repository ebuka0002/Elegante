import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [inputValue, setInputValue] = useState(searchParams.get('search') || '');
  const [showFilters, setShowFilters] = useState(false);

  // Keep state in sync with URL params when they change (e.g. from navbar search)
  useEffect(() => {
    const urlSearch = searchParams.get('search') || '';
    const urlCategory = searchParams.get('category') || 'all';
    setSearchQuery(urlSearch);
    setInputValue(urlSearch);
    setSelectedCategory(urlCategory);
  }, [searchParams]);

  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const params = {};
    if (category !== 'all') params.category = category;
    if (searchQuery) params.search = searchQuery;
    setSearchParams(params);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue);
    const params = {};
    if (selectedCategory !== 'all') params.category = selectedCategory;
    if (inputValue.trim()) params.search = inputValue.trim();
    setSearchParams(params);
  };

  const clearSearch = () => {
    setInputValue('');
    setSearchQuery('');
    const params = {};
    if (selectedCategory !== 'all') params.category = selectedCategory;
    setSearchParams(params);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-luxury-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-luxury-gold tracking-[0.3em] uppercase text-sm mb-3">Explore</p>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-luxury-black mb-4">
            Our Collection
          </h1>
          <p className="text-luxury-brown/70 text-lg max-w-2xl mx-auto">
            Discover exquisite pieces crafted for the modern woman who appreciates timeless elegance
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSearchSubmit}
          className="max-w-xl mx-auto mb-10 relative"
        >
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-luxury-brown/40" size={20} />
          <input
            type="text"
            placeholder="Search products..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full pl-14 pr-28 py-4 rounded-full border-2 border-luxury-gold/20 focus:border-luxury-gold outline-none transition-colors bg-white shadow-sm text-luxury-black"
          />
          {inputValue && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-24 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>
          )}
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 bg-luxury-gold text-luxury-black rounded-full font-semibold text-sm hover:shadow-lg transition-shadow"
          >
            Search
          </button>
        </motion.form>

        {/* Active Search Banner */}
        {searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-8 text-sm"
          >
            <span className="text-gray-600">
              Showing results for: <strong className="text-luxury-gold">"{searchQuery}"</strong>
            </span>
            <button
              onClick={clearSearch}
              className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-gray-600 hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <X size={14} /> Clear
            </button>
          </motion.div>
        )}

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {[{ slug: 'all', name: 'All Products' }, ...categories].map((cat) => (
              <motion.button
                key={cat.slug}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`px-6 py-3 rounded-full font-semibold transition-all text-sm ${
                  selectedCategory === cat.slug
                    ? 'bg-luxury-gold text-luxury-black shadow-lg shadow-luxury-gold/30'
                    : 'bg-white text-luxury-brown border-2 border-luxury-gold/20 hover:border-luxury-gold'
                }`}
              >
                {cat.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-luxury-brown/60 mb-8 text-center text-sm"
        >
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
        </motion.p>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-24"
          >
            <p className="text-5xl mb-4">🔍</p>
            <p className="text-2xl font-display text-luxury-brown/60 mb-3">
              No products found
            </p>
            <p className="text-luxury-brown/50 mb-6">
              Try a different search term or category
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => { clearSearch(); handleCategoryChange('all'); }}
              className="px-6 py-3 bg-luxury-gold text-luxury-black rounded-full font-semibold"
            >
              View All Products
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Shop;
