/**
 * Pricing Page
 */

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹299",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic Website (5 pages)",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "Social Media Integration",
        "Contact Form",
        "24/7 Email Support"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "₹799",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced Website (10 pages)",
        "Custom Design & Development",
        "Full SEO Optimization",
        "Digital Marketing Campaign",
        "Analytics & Reporting",
        "E-commerce Integration",
        "Priority Support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹1499",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited Pages",
        "Custom Web Application",
        "Advanced SEO & Marketing",
        "Dedicated Account Manager",
        "Advanced Analytics",
        "API Integrations",
        "24/7 Premium Support",
        "Monthly Strategy Calls"
      ],
      popular: false
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
              Simple <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include 
              our core features with no hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
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
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <Card className={`glass border-white/10 hover:border-primary/50 transition-all duration-300 h-full ${plan.popular ? 'border-primary/30 shadow-glow' : ''}`}>
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold mb-2 text-foreground">
                        {plan.name}
                      </h3>
                      <p className="text-foreground/60 mb-4">{plan.description}</p>
                      <div className="mb-6">
                        <span className="text-4xl font-black text-primary">{plan.price}</span>
                        <span className="text-foreground/70">{plan.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-foreground/70 flex items-center">
                          <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
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
    </div>
  );
};

export default Pricing;