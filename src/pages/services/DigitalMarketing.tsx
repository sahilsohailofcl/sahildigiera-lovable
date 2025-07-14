/**
 * Digital Marketing Service Page
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Share2, Mail, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const DigitalMarketing = () => {
  const features = [
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build your brand presence across all social platforms"
    },
    {
      icon: Target,
      title: "PPC Campaigns",
      description: "Targeted advertising campaigns that drive conversions"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Nurture leads and retain customers with email campaigns"
    },
    {
      icon: TrendingUp,
      title: "Content Marketing",
      description: "Engaging content that attracts and converts your audience"
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
              <span className="gradient-text">Digital Marketing</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Comprehensive digital marketing strategies that increase brand awareness, 
              drive traffic, and boost conversions across all digital channels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass border-white/10 hover:border-primary/50 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <feature.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-foreground/70 text-sm">{feature.description}</p>
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
            <h2 className="text-4xl font-black mb-6">
              Grow Your <span className="gradient-text">Business</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Ready to amplify your digital presence? Let's create a marketing strategy that works.
            </p>
            <Button
              asChild
              size="lg"
              className="magnetic bg-primary text-primary-foreground hover:bg-primary-glow hover:shadow-glow text-lg px-8 py-6"
            >
              <Link to="/contact">
                Start Marketing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;