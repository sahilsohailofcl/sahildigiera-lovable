/**
 * Futuristic Footer
 * Features: Multi-column layout, social links, glassmorphic design
 */

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Github,
  ArrowUp 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "SEO Optimization", href: "/services/seo" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "UI/UX Design", href: "/services" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Process", href: "/process" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Careers", href: "/careers" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/portfolio" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  };

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/sahildigiera" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/sahildigiera" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/sahildigiera" },
    { name: "Github", icon: Github, href: "https://github.com/sahildigiera" },
  ];

  const contactInfo = [
    { icon: MapPin, text: "Mumbai, Maharashtra, India" },
    { icon: Phone, text: "+91 9876543210" },
    { icon: Mail, text: "hello@sahildigiera.com" },
  ];

  return (
    <footer className="relative mt-20 border-t border-white/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      <div className="relative container mx-auto px-4 lg:px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link to="/" className="inline-block mb-6">
                <div className="text-2xl font-black text-primary tracking-wider">
                  SAHIL DIGIERA
                </div>
              </Link>
              
              <p className="text-foreground/70 mb-6 max-w-md leading-relaxed">
                Empowering Ideas. Delivering Excellence. We transform your digital 
                vision into reality with cutting-edge web development and marketing solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 text-foreground/60">
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground/60 hover:text-primary transition-colors duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-foreground/60 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-foreground/60 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-foreground/60 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-foreground/50 text-sm mb-4 md:mb-0">
            © 2024 Sahil DigiEra. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-foreground/50 hover:text-primary transition-colors duration-200 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full glass flex items-center justify-center text-primary hover:shadow-glow transition-all duration-300 z-40"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;