import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartModal = ({ isOpen, onClose }) => {
  const { cart, updateQuantity, removeFromCart, getCartTotal, generateWhatsAppMessage, clearCart } = useCart();

  const handleCheckout = () => {
    const message = generateWhatsAppMessage();
    const phoneNumber = '2348104689746'; // Your WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full md:w-[480px] bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-display font-bold text-luxury-black">
                  Shopping Cart
                </h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="text-luxury-black hover:text-luxury-gold transition-colors"
                >
                  <X size={24} />
                </motion.button>
              </div>
              {cart.length > 0 && (
                <p className="text-sm text-gray-600 mt-2">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)} item(s) in cart
                </p>
              )}
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag size={64} className="text-gray-300 mb-4" />
                  <h3 className="text-xl font-display font-semibold text-gray-800 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Add some luxury items to get started!
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="px-6 py-3 bg-luxury-gold text-luxury-black rounded-full font-semibold"
                  >
                    Continue Shopping
                  </motion.button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      key={item.cartId}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      {/* Product Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />

                      {/* Product Details */}
                      <div className="flex-1">
                        <h4 className="font-semibold text-luxury-black mb-1">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {item.price}
                        </p>
                        {item.selectedSize && (
                          <p className="text-xs text-gray-500">
                            Size: {item.selectedSize}
                          </p>
                        )}
                        {item.selectedColor && (
                          <p className="text-xs text-gray-500">
                            Color: {item.selectedColor}
                          </p>
                        )}

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 mt-3">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="w-7 h-7 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:border-luxury-gold transition-colors"
                          >
                            <Minus size={14} />
                          </motion.button>
                          <span className="text-sm font-semibold w-8 text-center">
                            {item.quantity}
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="w-7 h-7 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:border-luxury-gold transition-colors"
                          >
                            <Plus size={14} />
                          </motion.button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeFromCart(item.cartId)}
                        className="text-red-500 hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={18} />
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                {/* Total */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-luxury-black">
                    Total:
                  </span>
                  <span className="text-2xl font-bold text-luxury-gold">
                    ₦{getCartTotal().toLocaleString()}
                  </span>
                </div>

                {/* Checkout Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  className="w-full px-6 py-4 bg-luxury-gold text-luxury-black font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center gap-2 mb-3"
                >
                  <ShoppingBag size={20} />
                  Order on WhatsApp
                </motion.button>

                {/* Clear Cart */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (window.confirm('Are you sure you want to clear your cart?')) {
                      clearCart();
                    }
                  }}
                  className="w-full px-6 py-2 text-sm text-gray-600 hover:text-red-500 transition-colors"
                >
                  Clear Cart
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartModal;
