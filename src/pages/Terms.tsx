/**
 * Terms of Service Page
 */

import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="pt-24">
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto prose prose-invert"
          >
            <h1 className="text-5xl font-black mb-8">
              <span className="gradient-text">Terms of Service</span>
            </h1>
            
            <p className="text-foreground/70 text-lg mb-8">
              Last updated: January 2024
            </p>

            <div className="space-y-8 text-foreground/70">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Acceptance of Terms</h2>
                <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Use License</h2>
                <p>Permission is granted to temporarily download one copy of the materials on Sahil DigiEra's website for personal, non-commercial transitory viewing only.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimer</h2>
                <p>The materials on Sahil DigiEra's website are provided on an 'as is' basis. Sahil DigiEra makes no warranties, expressed or implied.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p>If you have any questions about these Terms of Service, please contact us at legal@sahildigiera.com.</p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;