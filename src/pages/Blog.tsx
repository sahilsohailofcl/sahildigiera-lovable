/**
 * Blog Page
 */

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  const posts = [
    {
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies that will shape the web",
      author: "Sahil Team",
      date: "2024-01-15",
      category: "Development",
      readTime: "5 min read"
    },
    {
      title: "SEO Best Practices for 2024",
      excerpt: "Essential SEO strategies to improve your search rankings",
      author: "Sahil Team",
      date: "2024-01-10",
      category: "SEO",
      readTime: "7 min read"
    },
    {
      title: "Digital Marketing Trends",
      excerpt: "Latest trends in digital marketing and how to leverage them",
      author: "Sahil Team",
      date: "2024-01-05",
      category: "Marketing",
      readTime: "6 min read"
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
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              Insights, tips, and updates from the world of web development 
              and digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="glass border-white/10 hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <span className="text-primary text-sm font-medium">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-foreground/60 text-sm mb-4 space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-foreground/60 text-sm">
                        {post.readTime}
                      </span>
                      <Button size="sm" variant="ghost" className="text-primary">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
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

export default Blog;