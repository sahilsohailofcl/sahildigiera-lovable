/**
 * Privacy Policy Page
 */

import { motion } from "framer-motion";

const Privacy = () => {
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
              <span className="gradient-text">Privacy Policy</span>
            </h1>
            
            <p className="text-foreground/70 text-lg mb-8">
              Last updated: January 2024
            </p>

            <div className="space-y-8 text-foreground/70">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at privacy@sahildigiera.com.</p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;