import { motion } from 'framer-motion';
import { Award, Heart, Sparkles, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Every piece is meticulously crafted from the finest materials, ensuring lasting elegance and sophistication.'
    },
    {
      icon: Heart,
      title: 'Passionate Design',
      description: 'Our collection is born from a deep love for fashion and an unwavering commitment to timeless beauty.'
    },
    {
      icon: Sparkles,
      title: 'Luxury Experience',
      description: 'From browsing to delivery, we ensure every interaction reflects our dedication to excellence.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction and confidence inspire everything we do. We are here to serve your elegant lifestyle.'
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] mb-20 overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/70 to-luxury-black/40" />
        </motion.div>

        <div className="relative h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-luxury-cream mb-6">
              Our Story
            </h1>
            <p className="text-xl text-luxury-beige/90 max-w-3xl mx-auto">
              Where passion meets craftsmanship, creating timeless elegance for the modern woman
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32"
        >
          <div>
            <p className="text-luxury-gold tracking-[0.3em] uppercase text-sm mb-4">
              Est. 2020
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-luxury-black mb-6">
              A Legacy of Elegance
            </h2>
            <div className="space-y-4 text-luxury-brown/80 leading-relaxed">
              <p>
                Élégante was born from a vision to redefine luxury fashion for the discerning woman. 
                We believe that true elegance is timeless, transcending fleeting trends to create 
                pieces that speak to the soul.
              </p>
              <p>
                Our journey began with a simple promise: to curate the finest collection of fashion, 
                fragrances, accessories, and jewelry that embody sophistication and grace. Each piece 
                in our collection is carefully selected to ensure it meets our exacting standards of 
                quality and design.
              </p>
              <p>
                Today, we are proud to serve women who appreciate the finer things in life, offering 
                not just products, but an experience of luxury that enhances every moment.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
                alt="Luxury Fashion"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-64 h-64 bg-luxury-gold/20 rounded-full blur-3xl -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <p className="text-luxury-gold tracking-[0.3em] uppercase text-sm mb-4">
              Our Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-luxury-black mb-6">
              What We Stand For
            </h2>
            <p className="text-luxury-brown/70 max-w-2xl mx-auto">
              Our values guide every decision we make and every piece we offer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center p-8 rounded-2xl bg-luxury-cream hover:shadow-xl transition-shadow"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-luxury-gold rounded-full mb-6"
                >
                  <value.icon className="text-luxury-black" size={28} />
                </motion.div>
                <h3 className="text-xl font-display font-bold text-luxury-black mb-4">
                  {value.title}
                </h3>
                <p className="text-luxury-brown/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative py-20 rounded-3xl overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80)',
            }}
          />
          <div className="absolute inset-0 bg-luxury-black/80" />
          
          <div className="relative max-w-3xl mx-auto text-center px-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-luxury-cream mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-luxury-beige/90 leading-relaxed">
              To empower women through timeless elegance, offering curated luxury pieces that 
              celebrate individuality, confidence, and sophisticated style. We are committed to 
              providing an unparalleled shopping experience that honors the discerning taste of 
              our clients.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
