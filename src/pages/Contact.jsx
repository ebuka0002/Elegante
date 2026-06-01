import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Instagram, Facebook, Twitter } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}
    `.trim();
    
    const phoneNumber = '2348104689746';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Luxury Avenue, Lagos, Nigeria',
      link: null
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+234 801 234 5678',
      link: 'tel:+2348012345678'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@elegante.com',
      link: 'mailto:hello@elegante.com'
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-luxury-black mb-6">
            Get in Touch
          </h1>
          <p className="text-luxury-brown/70 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for inquiries, orders, or just to say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-display font-bold text-luxury-black mb-6">
              Send Us a Message
            </h2>
            <p className="text-luxury-brown/70 mb-8">
              Fill out the form below and we'll respond via WhatsApp as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-luxury-black font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-lg border-2 border-luxury-gold/20 focus:border-luxury-gold outline-none transition-colors bg-white"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label className="block text-luxury-black font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-lg border-2 border-luxury-gold/20 focus:border-luxury-gold outline-none transition-colors bg-white"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label className="block text-luxury-black font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-lg border-2 border-luxury-gold/20 focus:border-luxury-gold outline-none transition-colors bg-white"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-luxury-black font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-6 py-4 rounded-lg border-2 border-luxury-gold/20 focus:border-luxury-gold outline-none transition-colors bg-white resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-luxury-gold text-luxury-black font-semibold rounded-full flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-shadow"
              >
                {isSubmitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send via WhatsApp
                    <Send size={20} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-display font-bold text-luxury-black mb-6">
              Contact Information
            </h2>
            <p className="text-luxury-brown/70 mb-12">
              Feel free to reach out through any of these channels. We're here to assist you.
            </p>

            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                    <info.icon className="text-luxury-black" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-luxury-black mb-1">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-luxury-brown/70 hover:text-luxury-gold transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-luxury-brown/70">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold text-luxury-black mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className={`w-12 h-12 rounded-full bg-luxury-cream flex items-center justify-center text-luxury-black transition-colors ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 aspect-video rounded-2xl overflow-hidden bg-luxury-cream"
            >
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                alt="Location Map"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center py-16 px-6 rounded-3xl luxury-gradient"
        >
          <h2 className="text-4xl font-display font-bold text-luxury-cream mb-4">
            Prefer to Chat Directly?
          </h2>
          <p className="text-luxury-beige/80 mb-8 max-w-2xl mx-auto">
            Click the WhatsApp button below for instant connection with our team
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const phoneNumber = '2348012345678';
              window.open(`https://wa.me/2348104689746`, '_blank');
            }}
            className="px-8 py-4 bg-green-500 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-shadow"
          >
            Chat on WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
