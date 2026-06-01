import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../data/products';

const FeaturedCollections = () => {
  return (
    <section className="py-20 bg-luxury-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-luxury-gold tracking-[0.3em] uppercase text-sm mb-4"
          >
            Discover
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-luxury-black mb-6">
            Our Collections
          </h2>
          <p className="text-luxury-brown/70 max-w-2xl mx-auto">
            Curated selections of the finest pieces for the discerning woman
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
              style={{ height: index === 0 || index === 3 ? '500px' : '400px' }}
            >
              <Link to={`/shop?category=${category.slug}`}>
                {/* Background Image */}
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent" />
                </motion.div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <p className="text-luxury-beige/80 text-sm mb-2 tracking-wider uppercase">
                      {category.description}
                    </p>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-luxury-cream mb-4">
                      {category.name}
                    </h3>
                    
                    <motion.div
                      className="flex items-center gap-2 text-luxury-gold group-hover:gap-4 transition-all duration-300"
                    >
                      <span className="text-sm font-semibold tracking-wider uppercase">
                        Explore Collection
                      </span>
                      <ArrowRight size={20} />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-luxury-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
