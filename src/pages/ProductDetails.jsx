import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, ShoppingBag, Check } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const WHATSAPP_NUMBER = '2348104689746';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-display text-luxury-black mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-luxury-gold hover:underline">Return to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, selectedSize || null, selectedColor || null);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  const handleWhatsAppOrder = () => {
    let message = `Hi, I want to order:\n\n• ${product.name} — ${product.price}`;
    if (selectedSize) message += `\n  Size: ${selectedSize}`;
    if (selectedColor) message += `\n  Color: ${selectedColor}`;
    message += '\n\nPlease confirm availability. Thank you!';
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-luxury-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10 flex items-center gap-2 text-sm text-gray-500"
        >
          <Link to="/" className="hover:text-luxury-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-luxury-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-luxury-black capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-luxury-gold truncate max-w-[160px]">{product.name}</span>
        </motion.div>

        {/* Product Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

          {/* ── Image Gallery ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-luxury-cream shadow-2xl mb-4">
              <motion.img
                key={selectedImage}
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Badge overlay */}
              <div className="absolute top-5 left-5 flex flex-col gap-2">
                {product.new && (
                  <span className="px-3 py-1 bg-luxury-gold text-luxury-black text-xs font-bold rounded-full">NEW</span>
                )}
                {product.bestseller && (
                  <span className="px-3 py-1 bg-luxury-black text-luxury-gold text-xs font-bold rounded-full">BESTSELLER</span>
                )}
              </div>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-luxury-gold shadow-lg shadow-luxury-gold/30'
                        : 'border-transparent hover:border-luxury-gold/40'
                    }`}
                  >
                    <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>

          {/* ── Product Info ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <p className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4">
              {product.category}
            </p>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-luxury-black mb-4 leading-tight">
              {product.name}
            </h1>

            <p className="text-4xl font-bold text-luxury-gold mb-6">
              {product.price}
            </p>

            <p className="text-luxury-brown/80 leading-relaxed mb-8 text-base">
              {product.description}
            </p>

            {/* Divider */}
            <div className="h-px bg-luxury-gold/20 mb-8" />

            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div className="mb-7">
                <p className="font-semibold text-luxury-black mb-3 text-sm uppercase tracking-wider">
                  Select Size
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <motion.button
                      key={size}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedSize(size)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border-2 ${
                        selectedSize === size
                          ? 'bg-luxury-gold text-luxury-black border-luxury-gold shadow-lg'
                          : 'bg-white text-luxury-brown border-luxury-gold/30 hover:border-luxury-gold'
                      }`}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div className="mb-8">
                <p className="font-semibold text-luxury-black mb-3 text-sm uppercase tracking-wider">
                  Select Color
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color) => (
                    <motion.button
                      key={color}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedColor(color)}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border-2 ${
                        selectedColor === color
                          ? 'bg-luxury-gold text-luxury-black border-luxury-gold shadow-lg'
                          : 'bg-white text-luxury-brown border-luxury-gold/30 hover:border-luxury-gold'
                      }`}
                    >
                      {color}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-3 mb-8">
              {/* Add to Cart */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleAddToCart}
                className={`flex-1 px-6 py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-lg transition-all ${
                  addedToCart
                    ? 'bg-green-500 text-white'
                    : 'bg-luxury-black text-white hover:bg-luxury-brown'
                }`}
              >
                <AnimatePresence mode="wait">
                  {addedToCart ? (
                    <motion.span key="added" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <Check size={20} /> Added to Cart!
                    </motion.span>
                  ) : (
                    <motion.span key="add" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <ShoppingBag size={20} /> Add to Cart
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* WhatsApp */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleWhatsAppOrder}
                className="flex-1 px-6 py-4 bg-luxury-gold text-luxury-black font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
              >
                <ShoppingBag size={20} />
                Order on WhatsApp
              </motion.button>
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsFavorite(!isFavorite)}
                className={`flex-1 px-5 py-3 rounded-full border-2 font-medium transition-all flex items-center justify-center gap-2 ${
                  isFavorite
                    ? 'bg-red-50 border-red-400 text-red-500'
                    : 'border-luxury-gold/40 text-luxury-brown hover:border-luxury-gold'
                }`}
              >
                <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
                {isFavorite ? 'Wishlisted' : 'Wishlist'}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigator.share?.({ title: product.name, url: window.location.href })}
                className="px-5 py-3 border-2 border-luxury-gold/40 text-luxury-brown rounded-full hover:border-luxury-gold transition-all flex items-center gap-2"
              >
                <Share2 size={18} />
                Share
              </motion.button>
            </div>

            {/* Product Meta */}
            <div className="mt-8 border-t border-luxury-gold/20 pt-6 space-y-3">
              {[
                { label: 'Category', value: product.category, capitalize: true },
                { label: 'Availability', value: 'In Stock', green: true },
                { label: 'Delivery', value: 'Nationwide Delivery Available' },
                { label: 'Order via', value: 'WhatsApp (+234 810 468 9746)' },
              ].map(({ label, value, capitalize, green }) => (
                <div key={label} className="flex justify-between text-sm">
                  <span className="text-gray-500">{label}:</span>
                  <span className={`font-medium ${green ? 'text-green-600' : 'text-luxury-black'} ${capitalize ? 'capitalize' : ''}`}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <p className="text-luxury-gold tracking-[0.3em] uppercase text-sm mb-3">You Might Love</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-luxury-black">
                Related Products
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p, index) => (
                <ProductCard key={p.id} product={p} index={index} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
