import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import FeaturedCollections from '../components/FeaturedCollections';
import ProductCard from '../components/ProductCard';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = products.filter(p => p.featured);
  const newArrivals = products.filter(p => p.new).slice(0, 4);
  const bestsellers = products.filter(p => p.bestseller);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Collections */}
      <FeaturedCollections />

      {/* New Arrivals */}
      <section className="py-20 bg-luxury-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-12"
          >
            <div>
              <p className="text-luxury-gold tracking-[0.3em] uppercase text-sm mb-4">
                Fresh Arrivals
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-luxury-black">
                New This Season
              </h2>
            </div>
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="hidden md:flex items-center gap-2 text-luxury-gold font-semibold"
              >
                View All
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-20 bg-luxury-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-luxury-gold tracking-[0.3em] uppercase text-sm mb-4">
              Customer Favorites
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-luxury-black mb-6">
              Bestsellers
            </h2>
            <p className="text-luxury-brown/70 max-w-2xl mx-auto">
              Discover our most loved pieces, chosen by women who appreciate true luxury
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestsellers.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Experience Banner */}
      <section className="py-20 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative h-[500px]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80)',
            }}
          />
          <div className="absolute inset-0 bg-luxury-black/60" />
          
          <div className="relative h-full flex items-center justify-center text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold text-luxury-cream mb-6">
                Experience True Luxury
              </h2>
              <p className="text-luxury-beige/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Every piece in our collection is carefully curated to bring you 
                timeless elegance and unmatched sophistication
              </p>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 gold-gradient text-luxury-black font-semibold rounded-full shadow-2xl"
                >
                  Our Story
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Home;
