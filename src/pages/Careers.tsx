/**
 * Careers Page
 */

import { motion } from "framer-motion";
import { MapPin, Clock, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Careers = () => {
  const jobs = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "3+ years",
      description: "Join our team to build amazing user experiences with React and modern web technologies."
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      description: "Help businesses grow their online presence through strategic digital marketing campaigns."
    },
    {
      title: "SEO Analyst",
      department: "Marketing",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "1+ years",
      description: "Optimize websites for search engines and help clients achieve better rankings."
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
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              We're always looking for talented individuals who share our passion 
              for creating exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="glass border-white/10 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                        <p className="text-foreground/70 mb-4">{job.description}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-2" />
                            {job.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <span className="w-4 h-4 mr-2">💼</span>
                            {job.experience}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 lg:mt-0 lg:ml-8">
                        <Button className="magnetic bg-primary text-primary-foreground hover:bg-primary-glow hover:shadow-glow">
                          Apply Now
                        </Button>
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
            <h2 className="text-4xl font-black mb-6">
              Don't See a Fit? <span className="gradient-text">Email Us</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              We're always interested in meeting talented people. Send us your resume 
              and we'll keep you in mind for future opportunities.
            </p>
            <Button
              size="lg"
              className="magnetic bg-primary text-primary-foreground hover:bg-primary-glow hover:shadow-glow text-lg px-8 py-6"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Your Resume
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;