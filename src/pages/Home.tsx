/**
 * Homepage - Main landing page
 * Features: Hero with 3D blob, services, pricing, testimonials
 */

import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Sparkles, ArrowRight, Play, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Lazy load 3D component for better performance
const FloatingBlob = React.lazy(() => import("../components/3d/FloatingBlob"));

const Home = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies",
      icon: "🚀",
      href: "/services/web-development"
    },
    {
      title: "SEO Optimization",
      description: "Drive organic traffic and improve search engine rankings",
      icon: "📈",
      href: "/services/seo"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies that convert",
      icon: "💎",
      href: "/services/digital-marketing"
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "₹299",
      period: "/month",
      features: ["Basic Website", "SEO Setup", "Social Media", "24/7 Support"],
      popular: false
    },
    {
      name: "Growth",
      price: "₹799",
      period: "/month",
      features: ["Advanced Website", "Full SEO", "Marketing Campaign", "Analytics", "Priority Support"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹1499",
      period: "/month",
      features: ["Custom Solution", "Full-Stack Development", "Advanced Marketing", "Dedicated Manager", "24/7 Premium Support"],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, TechStart",
      content: "Sahil DigiEra transformed our digital presence completely. Our sales increased by 300% in just 6 months!",
      avatar: "👨‍💼"
    },
    {
      name: "Priya Sharma",
      role: "Founder, EcoLife",
      content: "The team's expertise in digital marketing is unmatched. They truly understand modern business needs.",
      avatar: "👩‍💼"
    },
    {
      name: "Amit Patel",
      role: "Director, InnovateTech",
      content: "Outstanding web development services. The site looks amazing and performs flawlessly.",
      avatar: "👨‍💻"
    }
  ];

  const logos = ["Aceme", "Quantum", "Echo", "Nexus", "Vertex", "Cipher"];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
              <FloatingBlob />
            </Suspense>
          </Canvas>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground/80">Empowering Ideas. Delivering Excellence.</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wide mb-6">
              <span className="gradient-text">DIGITAL</span><br />
              <span className="text-foreground">TRANSFORMATION</span>
            </h1>

            <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              We create stunning websites, boost your online presence, and deliver 
              marketing solutions that drive real results for your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                asChild
                size="lg"
                className="magnetic bg-primary text-primary-foreground hover:bg-primary-glow hover:shadow-glow text-lg px-8 py-6"
              >
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="magnetic border-white/20 text-foreground hover:bg-white/10 text-lg px-8 py-6"
              >
                <Play className="w-5 h-5 mr-2" />
                Play Showreel
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Logo Carousel */}
      <section className="py-16 border-y border-white/10">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-foreground/60 text-lg">Trusted by leading companies</p>
          </motion.div>

          <div className="flex items-center justify-center space-x-12 overflow-hidden">
            {logos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-foreground/30 hover:text-primary transition-colors duration-300 whitespace-nowrap"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              <span className="gradient-text">Your Growth,</span> Our Mission
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              At Sahil DigiEra, we don't just build websites - we craft digital experiences 
              that captivate, convert, and drive sustainable growth for your business. 
              Our team combines technical expertise with creative vision to deliver 
              solutions that exceed expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="glass border-white/10 hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="text-6xl mb-6 group-hover:animate-bounce">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="magnetic border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Link to={service.href}>
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Simple <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: plan.popular ? 1.02 : 1 }}
                className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <Card className={`glass border-white/10 hover:border-primary/50 transition-all duration-300 h-full ${plan.popular ? 'border-primary/30 shadow-glow' : ''}`}>
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">
                      {plan.name}
                    </h3>
                    <div className="mb-6">
                      <span className="text-4xl font-black text-primary">{plan.price}</span>
                      <span className="text-foreground/70">{plan.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-foreground/70 flex items-center justify-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className={`w-full magnetic ${plan.popular 
                        ? 'bg-primary text-primary-foreground hover:bg-primary-glow hover:shadow-glow' 
                        : 'variant-outline border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground'
                      }`}
                    >
                      <Link to="/contact">
                        Get Started
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Don't just take our word for it - here's what our clients think
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass border-white/10 hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <Quote className="w-8 h-8 text-primary mb-4" />
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{testimonial.avatar}</div>
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-foreground/60 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 text-center border border-white/10"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Let's Build Something <span className="gradient-text">Extraordinary</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Ready to transform your digital presence? Get in touch with our team 
              and let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                asChild
                size="lg"
                className="magnetic bg-primary text-primary-foreground hover:bg-primary-glow hover:shadow-glow text-lg px-8 py-6"
              >
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="magnetic border-white/20 text-foreground hover:bg-white/10 text-lg px-8 py-6"
              >
                <Link to="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;