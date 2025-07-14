/**
 * Services Overview Page
 * Features: Service cards, hero section, CTA
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Search, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
      icon: Code,
      href: "/services/web-development",
      features: ["Responsive Design", "Performance Optimized", "SEO Ready", "Modern Technologies"]
    },
    {
      title: "SEO Optimization",
      description: "Drive organic traffic and improve search engine rankings with our comprehensive SEO strategies.",
      icon: Search,
      href: "/services/seo",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics & Reporting"]
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies that increase brand awareness and drive conversions.",
      icon: TrendingUp,
      href: "/services/digital-marketing",
      features: ["Social Media Marketing", "PPC Campaigns", "Content Marketing", "Email Marketing"]
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the digital landscape. 
              From web development to digital marketing, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="glass border-white/10 hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <service.icon className="w-12 h-12 text-primary mb-6" />
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-foreground/60 flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="w-full magnetic bg-primary text-primary-foreground hover:bg-primary-glow hover:shadow-glow"
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
              Ready to Get <span className="gradient-text">Started?</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help you achieve your goals.
            </p>
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
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;