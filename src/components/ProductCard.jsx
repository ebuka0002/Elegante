import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, index = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-luxury-cream shadow-lg">
        {/* Product Image */}
        <Link to={`/product/${product.id}`}>
          <div className="relative aspect-[3/4] overflow-hidden">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.6 }}
            />

            {/* Gradient overlay always on */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-luxury-black/40 flex items-end justify-center pb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex gap-3"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddToCart}
                  className="px-5 py-2 bg-luxury-gold rounded-full text-luxury-black font-semibold shadow-xl flex items-center gap-2 text-sm"
                >
                  <ShoppingBag size={16} />
                  Add to Cart
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsFavorite(!isFavorite);
                  }}
                  className={`p-2 rounded-full shadow-xl transition-all ${
                    isFavorite ? 'bg-red-500 text-white' : 'bg-white text-luxury-black'
                  }`}
                >
                  <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.new && (
                <span className="px-3 py-1 bg-luxury-gold text-luxury-black text-xs font-bold rounded-full tracking-wide">
                  NEW
                </span>
              )}
              {product.bestseller && (
                <span className="px-3 py-1 bg-luxury-black text-luxury-gold text-xs font-bold rounded-full tracking-wide">
                  BESTSELLER
                </span>
              )}
            </div>

            {/* Added to Cart Toast */}
            <AnimatePresence>
              {showAddedMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute top-4 left-0 right-0 mx-4 bg-green-500 text-white text-center text-xs font-semibold py-2 rounded-full"
                >
                  ✓ Added to Cart!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Link>

        {/* Product Info */}
        <div className="p-5">
          <p className="text-xs text-luxury-brown/60 uppercase tracking-widest mb-1">
            {product.category}
          </p>
          <Link to={`/product/${product.id}`}>
            <h3 className="text-base font-serif font-semibold text-luxury-black mb-2 line-clamp-1 hover:text-luxury-gold transition-colors">
              {product.name}
            </h3>
          </Link>
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-luxury-gold">
              {product.price}
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleAddToCart}
              className="w-9 h-9 rounded-full bg-luxury-black text-white flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-black transition-all shadow-md"
            >
              <ShoppingBag size={15} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-luxury-gold/20 to-luxury-beige/20 rounded-2xl blur-xl -z-10"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ProductCard;
