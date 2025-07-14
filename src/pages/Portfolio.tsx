/**
 * Portfolio Page
 */

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with advanced features",
      image: "🛍️",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "SEO Campaign",
      category: "Digital Marketing",
      description: "Increased organic traffic by 300% in 6 months",
      image: "📈",
      technologies: ["SEO", "Analytics", "Content"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Brand Identity",
      category: "Branding",
      description: "Complete brand redesign and digital presence",
      image: "🎨",
      technologies: ["Design", "Branding", "Marketing"],
      liveUrl: "#",
      githubUrl: "#"
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
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Explore our latest projects and see how we've helped businesses 
              achieve their digital goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="glass border-white/10 hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="text-6xl mb-4 text-center">
                      {project.image}
                    </div>
                    <span className="text-primary text-sm font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-foreground/70 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/20 text-primary rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <Button size="sm" variant="outline" className="flex-1">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
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

export default Portfolio;