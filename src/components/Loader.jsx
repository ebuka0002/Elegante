import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadComplete?.(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center luxury-gradient"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-display text-luxury-gold mb-8">
            Élégante
          </h1>
          
          <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden mx-auto">
            <motion.div
              className="h-full gold-gradient"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          <motion.p
            className="text-luxury-beige mt-6 text-sm tracking-[0.3em] uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Luxury Awaits
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
