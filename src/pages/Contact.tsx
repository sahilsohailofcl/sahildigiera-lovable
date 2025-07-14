/**
 * Contact Page
 */

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "Mumbai, Maharashtra, India"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9876543210"
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@sahildigiera.com"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM"
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
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Ready to start your project? Let's discuss your ideas and create 
              something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">Let's Talk</h2>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Have a project in mind? We'd love to hear about it. Send us a message 
                and we'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 rounded-lg glass flex items-center justify-center border border-white/10">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      <p className="text-foreground/70">{info.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass border-white/10">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          First Name
                        </label>
                        <Input 
                          className="bg-white/5 border-white/20 focus:border-primary"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Last Name
                        </label>
                        <Input 
                          className="bg-white/5 border-white/20 focus:border-primary"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input 
                        type="email"
                        className="bg-white/5 border-white/20 focus:border-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <Input 
                        type="tel"
                        className="bg-white/5 border-white/20 focus:border-primary"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Project Type
                      </label>
                      <select className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-md focus:border-primary focus:outline-none">
                        <option>Web Development</option>
                        <option>SEO Optimization</option>
                        <option>Digital Marketing</option>
                        <option>Full Package</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea 
                        className="bg-white/5 border-white/20 focus:border-primary min-h-[120px]"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full magnetic bg-primary text-primary-foreground hover:bg-primary-glow hover:shadow-glow"
                    >
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;