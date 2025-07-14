/**
 * Process Page - 5-step timeline
 */

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We understand your business goals, target audience, and project requirements."
    },
    {
      number: "02",
      title: "Design",
      description: "Creating wireframes, mockups, and visual designs that align with your brand."
    },
    {
      number: "03",
      title: "Development",
      description: "Building your solution using modern technologies and best practices."
    },
    {
      number: "04",
      title: "Quality Assurance",
      description: "Rigorous testing to ensure everything works perfectly across all devices."
    },
    {
      number: "05",
      title: "Launch",
      description: "Deploying your project and providing ongoing support and maintenance."
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
              Our <span className="gradient-text">Process</span>
            </h1>
            <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto">
              A proven 5-step methodology that ensures successful project delivery 
              and exceptional results every time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center mb-16 last:mb-0"
              >
                <div className="flex-1">
                  <div className="glass rounded-2xl p-8 border border-white/10">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl font-black text-primary mr-4">
                        {step.number}
                      </span>
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-foreground/70">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;