"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const sections = ["Privacy Policy", "Terms & Conditions"];

const privacyContent = [
  {
    heading: "1. Who We Are",
    body: `EC1 Drink Ltd ("EC1", "we", "our", "us") operates the website ec1drink.com. This Privacy Policy explains how we collect, use, and protect your personal data when you use our website or sign up to our waitlist. Our registered address is in England and Wales. For data protection queries, contact us at: privacy@ec1drink.com.`,
  },
  {
    heading: "2. What Data We Collect",
    body: `We collect the following personal data:
• Name and email address when you join our waitlist
• Name, email, subject and message content when you submit our contact form
• Technical data including IP address, browser type, and pages visited via cookies and analytics tools
• Usage data about how you interact with our website`,
  },
  {
    heading: "3. How We Use Your Data",
    body: `We use your data to:
• Send you waitlist updates, launch information, and exclusive offers (with your consent)
• Respond to enquiries submitted via our contact form
• Improve our website and understand how visitors use it
• Comply with legal obligations

We do not sell your personal data to third parties.`,
  },
  {
    heading: "4. Legal Basis for Processing",
    body: `We process your data on the following legal bases:
• Consent: when you sign up to our waitlist, you explicitly consent to receive communications from us
• Legitimate interests: for website analytics and improving our services
• Legal obligation: where required by applicable law`,
  },
  {
    heading: "5. Data Retention",
    body: `We retain your waitlist data until you unsubscribe or request deletion. Contact form data is retained for 12 months. You may request deletion of your data at any time by emailing privacy@ec1drink.com.`,
  },
  {
    heading: "6. Your Rights (UK GDPR)",
    body: `Under UK GDPR, you have the right to:
• Access your personal data
• Correct inaccurate data
• Request erasure of your data
• Object to processing
• Withdraw consent at any time
• Lodge a complaint with the ICO (ico.org.uk)

To exercise any of these rights, contact: privacy@ec1drink.com`,
  },
  {
    heading: "7. Cookies",
    body: `We use essential cookies required for the website to function, and analytics cookies (with your consent) to understand usage patterns. You can manage cookie preferences through your browser settings.`,
  },
  {
    heading: "8. Third-Party Services",
    body: `We use the following third-party services to operate our website:
• Supabase: for secure storage of waitlist sign-ups (data stored in EU/UK region)
• Vercel: for website hosting
• Google Analytics: for website analytics (anonymised)

Each service operates under its own privacy policy and appropriate data processing agreements.`,
  },
  {
    heading: "9. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time. We will notify waitlist members of material changes by email. The date of the latest revision is displayed at the top of this page.`,
  },
];

const termsContent = [
  {
    heading: "1. Acceptance of Terms",
    body: `By accessing ec1drink.com (the "Site"), you agree to be bound by these Terms & Conditions. If you do not agree, please do not use the Site. These terms are governed by the laws of England and Wales.`,
  },
  {
    heading: "2. About EC1",
    body: `EC1 Drink Ltd is a company registered in England and Wales. EC1 ONE is a wellness and performance drink currently in pre-launch phase. Product availability, pricing, and specifications are subject to change without notice.`,
  },
  {
    heading: "3. Waitlist",
    body: `By joining our waitlist, you agree to receive marketing communications from EC1 Drink Ltd. You may unsubscribe at any time by clicking the unsubscribe link in any email or by contacting us directly. Joining the waitlist does not constitute a purchase or reservation of product.`,
  },
  {
    heading: "4. Intellectual Property",
    body: `All content on this website, including but not limited to text, graphics, logos, product imagery, and copy, is the intellectual property of EC1 Drink Ltd and is protected by UK and international copyright law. Reproduction, distribution, or modification without express written permission is prohibited.`,
  },
  {
    heading: "5. Accuracy of Information",
    body: `We make reasonable efforts to ensure that the information on this website is accurate and up to date. However, we make no warranties regarding completeness or accuracy. Product descriptions, ingredient information, and nutritional data are subject to change. Always refer to product labelling for the most current information.`,
  },
  {
    heading: "6. Health Disclaimers",
    body: `The information on this website is for general informational purposes only and is not intended as medical advice. EC1 ONE is a food supplement drink, not a medicine. If you have a medical condition, are pregnant, breastfeeding, or taking medication, consult a healthcare professional before consuming EC1 ONE. Not suitable for individuals under 18, those sensitive to caffeine, or those with specific medical conditions.`,
  },
  {
    heading: "7. Limitation of Liability",
    body: `To the fullest extent permitted by law, EC1 Drink Ltd shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or any products purchased. Our total liability shall not exceed the amount paid for the relevant product.`,
  },
  {
    heading: "8. External Links",
    body: `Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or accuracy of external sites. Links do not constitute endorsement.`,
  },
  {
    heading: "9. Changes to Terms",
    body: `We reserve the right to modify these Terms & Conditions at any time. Continued use of the Site after changes constitutes acceptance of the updated terms. Material changes will be communicated where possible.`,
  },
  {
    heading: "10. Governing Law",
    body: `These Terms & Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.`,
  },
  {
    heading: "11. Contact",
    body: `For any questions about these Terms & Conditions, contact: legal@ec1drink.com`,
  },
];

export default function LegalPage() {
  const [activeSection, setActiveSection] = useState(0);

  const content = activeSection === 0 ? privacyContent : termsContent;

  return (
    <div className="min-h-screen pt-24">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <p className="text-[#b5e550] font-mono text-xs tracking-widest uppercase mb-4">
              Legal
            </p>
            <h1
              className="font-display text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Legal Documents
            </h1>
            <p className="text-[#8fa3bb]">
              Last updated: January 2025
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex gap-2 mb-10 border-b border-white/8 pb-5">
            {sections.map((s, i) => (
              <button
                key={s}
                onClick={() => setActiveSection(i)}
                id={i === 0 ? "privacy" : "terms"}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeSection === i
                    ? "bg-[#b5e550] text-[#040d1a]"
                    : "text-[#8fa3bb] hover:text-white bg-white/5"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-10"
          >
            {content.map((section) => (
              <div key={section.heading}>
                <h2
                  className="font-display text-2xl font-semibold text-[#b5e550] mb-4"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {section.heading}
                </h2>
                <p className="text-[#8fa3bb] leading-relaxed text-sm whitespace-pre-line">
                  {section.body}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
