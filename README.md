# 🚀 Sahil DigiEra - Futuristic Digital Agency Website

A cutting-edge, futuristic website built for Sahil DigiEra - a digital marketing and web development agency. Features a black canvas with luminous lime gradients, glassmorphic effects, 3D elements, and smooth animations.

## ✨ Features

### 🎨 Design System
- **Futuristic Theme**: Black background with lime green (#D0E46B) accents
- **Glassmorphic Effects**: Transparent cards with backdrop blur
- **3D Elements**: Interactive floating blob with Three.js
- **Smooth Animations**: Framer Motion page transitions and GSAP effects
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### 📱 Pages & Functionality
- **Home**: Hero with 3D blob, services showcase, pricing, testimonials
- **Services**: Web Development, SEO, Digital Marketing with dedicated pages
- **Process**: 5-step timeline visualization
- **Pricing**: Interactive pricing cards with hover effects
- **Portfolio**: Project showcase with filtering
- **Blog**: Article listings with metadata
- **Contact**: Contact form with agency information
- **Careers**: Job listings and application CTA

### 🛠️ Technical Features
- **React 18** with TypeScript
- **Vite** for fast development and building
- **React Router** for multi-page navigation
- **Framer Motion** for page transitions and animations
- **Three.js & React Three Fiber** for 3D elements
- **GSAP** for advanced animations
- **Tailwind CSS** with custom design system
- **Shadcn/UI** components with custom styling

## 🏗️ Project Structure

```
src/
├── components/
│   ├── 3d/
│   │   └── FloatingBlob.tsx          # 3D floating blob component
│   ├── layout/
│   │   ├── Navbar.tsx                # Navigation with glassmorphic design
│   │   └── Footer.tsx                # Footer with links and social media
│   └── ui/                           # Shadcn UI components
├── pages/
│   ├── Home.tsx                      # Main landing page
│   ├── Services.tsx                  # Services overview
│   ├── services/
│   │   ├── WebDevelopment.tsx        # Web development service page
│   │   ├── SEO.tsx                   # SEO service page
│   │   └── DigitalMarketing.tsx      # Digital marketing service page
│   ├── Process.tsx                   # 5-step process timeline
│   ├── Pricing.tsx                   # Pricing plans
│   ├── Portfolio.tsx                 # Project showcase
│   ├── Blog.tsx                      # Blog listings
│   ├── Contact.tsx                   # Contact form and info
│   ├── Careers.tsx                   # Job listings
│   ├── Privacy.tsx                   # Privacy policy
│   ├── Terms.tsx                     # Terms of service
│   └── NotFound.tsx                  # 404 page
├── hooks/                            # Custom React hooks
├── lib/                              # Utility functions
├── App.tsx                           # Main app with routing
├── main.tsx                          # App entry point
└── index.css                         # Global styles and design system
```

## 🎨 Design System

### Colors
```css
/* Primary Brand Colors */
--primary: 72 65% 66%;           /* Lime Mist #D0E46B */
--secondary: 122 21% 55%;        /* Verdant Slate #71A573 */
--background: 0 0% 0%;           /* Pure Black #000000 */
--foreground: 0 0% 100%;         /* Pure White #FFFFFF */

/* Glassmorphic Effects */
--glass-bg: 0 0% 5% / 0.7;       /* Dark glass background */
--glass-border: 0 0% 100% / 0.1; /* Subtle white border */
--glass-blur: blur(20px);        /* Backdrop blur effect */
```

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: ExtraBold, tracking-wide, all-caps for logo
- **Body**: Regular weight, 1.6 line-height

### Animations
- **Page Transitions**: Fade and slide effects
- **Hover Effects**: Magnetic button animations
- **Scroll Animations**: Triggered counters and reveals
- **3D Elements**: Floating and rotating animations

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd sahil-digiera-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 🔧 Development

### Key Technologies
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type-safe JavaScript
- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Three.js**: 3D graphics library
- **React Router**: Client-side routing
- **Shadcn/UI**: Accessible component library

### Custom Hooks
- `useIsMobile`: Responsive breakpoint detection
- `useToast`: Toast notification system

### Performance Optimizations
- Lazy loading for 3D components
- Image optimization and compression
- Code splitting with React.lazy
- Preload critical fonts and assets

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+
- **Large**: 1440px+

## 🎯 SEO & Accessibility

### SEO Features
- Semantic HTML structure
- Meta tags and Open Graph data
- Structured data markup
- Optimized images with alt text
- Clean URL structure

### Accessibility
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management

## 🌟 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📊 Performance

Target Lighthouse scores:
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 95+
- **SEO**: 100

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Deployment Platforms
- **Vercel**: Recommended for React apps
- **Netlify**: Great for static sites
- **GitHub Pages**: Free hosting option

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary and belongs to Sahil DigiEra.

## 📞 Contact

- **Website**: https://sahildigiera.com
- **Email**: hello@sahildigiera.com
- **Phone**: +91 9876543210

---

**Built with ❤️ by Sahil DigiEra Team**
