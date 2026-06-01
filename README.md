# Élégante - Luxury Fashion Boutique 🌟

A world-class, award-winning luxury fashion website built with React, Framer Motion, and Tailwind CSS. Features stunning animations, premium design, and WhatsApp integration for seamless ordering.

## ✨ Features

### Design & Aesthetics
- 🎨 **Premium Luxury Design** - Inspired by Zara, House of CB, and Jacquemus
- 🎭 **Cinematic Animations** - Advanced Framer Motion animations throughout
- 💎 **Sophisticated Color Palette** - Black, beige, nude, gold accents
- 📱 **Fully Responsive** - Perfect on all devices
- 🎬 **Awwwards-Level Quality** - Professional, modern web design

### Animations & Interactions
- ⚡ Smooth page loader with progress bar
- 🌊 Parallax scrolling effects
- ✨ Floating particles and glow effects
- 🔄 Magnetic hover interactions
- 📊 Scroll-triggered animations
- 🎯 3D card tilt effects
- 💫 Staggered text reveals
- 🎨 Animated gradients
- 🖱️ Mouse-following elements

### Pages & Sections
1. **Home Page**
   - Fullscreen cinematic hero
   - Featured collections
   - New arrivals grid
   - Bestsellers showcase
   - Customer testimonials
   - Newsletter subscription
   - Premium footer

2. **Shop Page**
   - Category filtering
   - Search functionality
   - Animated product grids
   - Smooth transitions

3. **Product Details**
   - Image gallery with thumbnails
   - Size/color selection
   - WhatsApp ordering
   - Related products
   - Favorite & share options

4. **About Page**
   - Luxury brand storytelling
   - Company values
   - Mission statement
   - Editorial layouts

5. **Contact Page**
   - Contact form (WhatsApp integration)
   - Location information
   - Social media links

### Technical Features
- ⚛️ Built with React 18 & Vite
- 🎨 Tailwind CSS for styling
- 🎬 Framer Motion for animations
- 🗺️ React Router for navigation
- 📱 WhatsApp ordering integration
- 🎯 SEO-friendly structure
- ♿ Accessible UI
- 🚀 Optimized performance

## 🚀 Quick Start

### Installation

```bash
# Navigate to project directory
cd luxury-fashion

# Install dependencies
npm install

# Start development server
npm run dev
```

The website will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
luxury-fashion/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Animated navigation
│   │   ├── Hero.jsx                # Cinematic hero section
│   │   ├── ProductCard.jsx         # Product card with hover effects
│   │   ├── FeaturedCollections.jsx # Category showcase
│   │   ├── Testimonials.jsx        # Customer reviews
│   │   ├── Newsletter.jsx          # Subscription form
│   │   ├── Footer.jsx              # Premium footer
│   │   ├── FloatingWhatsApp.jsx    # WhatsApp button
│   │   └── Loader.jsx              # Loading animation
│   ├── pages/
│   │   ├── Home.jsx                # Homepage
│   │   ├── Shop.jsx                # Shop with filters
│   │   ├── ProductDetails.jsx      # Product page
│   │   ├── About.jsx               # About page
│   │   └── Contact.jsx             # Contact page
│   ├── data/
│   │   └── products.js             # Product data
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── index.html
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Customization

### Update Product Data
Edit `src/data/products.js` to add your own products:

```javascript
{
  id: 1,
  name: "Your Product Name",
  category: "clothes", // clothes, perfumes, bags, jewelry
  price: "₦89,000",
  image: "your-image-url.jpg",
  images: ["image1.jpg", "image2.jpg"],
  description: "Product description",
  sizes: ["S", "M", "L"],
  colors: ["Black", "White"],
  featured: true,
  new: true,
  bestseller: true
}
```

### WhatsApp Integration
Update the phone number in these files:
- `src/components/FloatingWhatsApp.jsx`
- `src/components/ProductCard.jsx`
- `src/pages/ProductDetails.jsx`
- `src/pages/Contact.jsx`

Replace `'2348012345678'` with your WhatsApp number.

### Brand Name & Colors
Update in:
- `tailwind.config.js` - Color palette
- `index.html` - Site title
- Components - Brand name "Élégante"

### Images
Replace placeholder images from Unsplash with your own:
- Product images
- Hero backgrounds
- Category images
- About page images

## 🌟 Key Components

### Animations
All animations use Framer Motion for smooth, performant effects:
- `initial` - Starting state
- `animate` - End state
- `whileInView` - Trigger on scroll
- `whileHover` - Hover interactions
- `transition` - Animation timing

### Responsive Design
Mobile-first approach with Tailwind breakpoints:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

## 📱 WhatsApp Ordering

When users click "Order on WhatsApp":
1. Pre-filled message is created with product details
2. Opens WhatsApp with the message
3. Customer can send directly to your business number

## 🎯 Performance Optimization

- Lazy loading for images
- Code splitting with React Router
- Optimized animations with Framer Motion
- Tailwind CSS purging for small bundle size
- Vite for fast development and build

## 🌐 Deployment

### Netlify (Recommended)
```bash
npm run build
# Deploy the 'dist' folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy the 'dist' folder to Vercel
```

## 📄 License

This is a custom-built luxury fashion website template.

## 🤝 Support

For questions or customization help, reach out through WhatsApp or email.

---

**Built with ❤️ for luxury fashion brands**

Featuring:
- Premium animations
- Luxury aesthetics
- WhatsApp integration
- Mobile-first design
- SEO optimization
- Accessibility features

Perfect for:
- Fashion boutiques
- Luxury brands
- Designer collections
- Premium e-commerce
- High-end retail
