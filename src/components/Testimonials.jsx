import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/products';

const Testimonials = () => {
  return (
    <section className="py-20 luxury-gradient">
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
            Testimonials
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-luxury-cream mb-6">
            What Our Clients Say
          </h2>
          <p className="text-luxury-beige/70 max-w-2xl mx-auto">
            Discover why our customers love their luxury experience
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-2xl glass-effect backdrop-blur-xl border border-luxury-gold/20"
            >
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
                className="absolute -top-4 -left-4 w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center"
              >
                <Quote className="text-luxury-black" size={24} />
              </motion.div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.15 + i * 0.05 }}
                  >
                    <Star className="text-luxury-gold fill-luxury-gold" size={16} />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Text */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.15 }}
                className="text-luxury-beige/90 mb-6 leading-relaxed italic"
              >
                "{testimonial.text}"
              </motion.p>

              {/* Client Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.15 }}
                className="flex items-center gap-4"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-luxury-gold"
                />
                <div>
                  <p className="font-semibold text-luxury-cream">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-luxury-beige/60">
                    Verified Customer
                  </p>
                </div>
              </motion.div>

              {/* Decorative Element */}
              <motion.div
                className="absolute bottom-0 right-0 w-32 h-32 bg-luxury-gold/5 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
