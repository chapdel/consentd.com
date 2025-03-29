"use client"

import { motion } from "framer-motion"

export default function PrivacyPolicyContent() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8"
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-500 mb-6">LAST UPDATED: March 29, 2025</p>

            <p>
              At Consentd, Inc. ("we," "our," or "us"), your privacy is our top priority. This Privacy Policy explains
              how we collect, use, process, store, and disclose your personal information through our website
              (https://www.consentd.com), mobile and web applications (collectively, the "Platform"), and related
              services (the "Services").
            </p>

            <p>
              Consentd empowers you to take control of and ethically monetize your personal data. We enable individuals
              to decide what personal information to share with third parties ("Data Buyers"), such as brands,
              advertisers, research firms, and data platforms, in a transparent and consent-driven environment.
            </p>

            <p>
              By accessing or using the Platform, you agree to the terms of this Privacy Policy and provide your
              informed consent for the collection, use, processing, storage, and disclosure of your personal information
              as described herein.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mt-8 mb-4">Table of Contents</h2>
            <ol className="list-decimal pl-6 space-y-1">
              <li>
                <a href="#when-we-collect" className="text-turquoise-500 hover:text-turquoise-700">
                  When We Collect Information
                </a>
              </li>
              <li>
                <a href="#types-of-information" className="text-turquoise-500 hover:text-turquoise-700">
                  Types of Personal Information We Collect
                </a>
              </li>
              <li>
                <a href="#how-we-use" className="text-turquoise-500 hover:text-turquoise-700">
                  How We Use Your Information
                </a>
              </li>
              <li>
                <a href="#how-we-disclose" className="text-turquoise-500 hover:text-turquoise-700">
                  How We Disclose Your Personal Information
                </a>
              </li>
              <li>
                <a href="#privacy-choices" className="text-turquoise-500 hover:text-turquoise-700">
                  Your Privacy Choices
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-turquoise-500 hover:text-turquoise-700">
                  Use of Cookies and Tracking Technologies
                </a>
              </li>
              <li>
                <a href="#mobile-privacy" className="text-turquoise-500 hover:text-turquoise-700">
                  Mobile Privacy
                </a>
              </li>
              <li>
                <a href="#health-information" className="text-turquoise-500 hover:text-turquoise-700">
                  Health Information
                </a>
              </li>
              <li>
                <a href="#security" className="text-turquoise-500 hover:text-turquoise-700">
                  Security
                </a>
              </li>
              <li>
                <a href="#retention" className="text-turquoise-500 hover:text-turquoise-700">
                  Retention
                </a>
              </li>
              <li>
                <a href="#state-specific" className="text-turquoise-500 hover:text-turquoise-700">
                  U.S. State-Specific Disclosures
                </a>
              </li>
              <li>
                <a href="#childrens-privacy" className="text-turquoise-500 hover:text-turquoise-700">
                  Children's Privacy
                </a>
              </li>
              <li>
                <a href="#third-party-links" className="text-turquoise-500 hover:text-turquoise-700">
                  Third-Party Links
                </a>
              </li>
              <li>
                <a href="#changes" className="text-turquoise-500 hover:text-turquoise-700">
                  Changes to This Privacy Policy
                </a>
              </li>
              <li>
                <a href="#contact-us" className="text-turquoise-500 hover:text-turquoise-700">
                  Contact Us
                </a>
              </li>
            </ol>

            <h2 id="when-we-collect" className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              1. When We Collect Information
            </h2>
            <p>We collect personal information when you:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Register or sign up for an account.</li>
              <li>Use or interact with our Services.</li>
              <li>Participate in surveys or share preferences.</li>
              <li>Contact our support or engage with community features.</li>
            </ul>

            <h2 id="types-of-information" className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              2. Types of Personal Information We Collect
            </h2>
            <p>You may provide:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Basic Info:</strong> Name, email, phone number, profile photo.
              </li>
              <li>
                <strong>Sensitive Data (optional):</strong> Health, political views, interests, financial info.
              </li>
              <li>
                <strong>Device & Usage Info:</strong> IP address, device ID, browser data.
              </li>
              <li>
                <strong>Transactional Info:</strong> Payment or payout details such as PayPal or crypto wallet info.
              </li>
            </ul>

            <h2 id="how-we-use" className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p>We use your data to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Facilitate secure and transparent data transactions.</li>
              <li>Enable you to earn rewards from approved data usage.</li>
              <li>Improve, personalize, and secure our Platform.</li>
              <li>Communicate with you and provide support.</li>
            </ul>

            <h2 id="how-we-disclose" className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              4. How We Disclose Your Personal Information
            </h2>
            <p>We may disclose your data to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Verified third-party Data Buyers, based on your preferences.</li>
              <li>Service providers supporting operations (e.g., analytics, communications).</li>
              <li>Authorities when required to comply with legal obligations.</li>
            </ul>

            <h2 id="privacy-choices" className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              5. Your Privacy Choices
            </h2>
            <p>You may:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access, correct, or delete your data.</li>
              <li>Opt out of marketing communications.</li>
              <li>Limit or revoke consent via in-app settings.</li>
            </ul>

            <h2 id="cookies" className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              6. Use of Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies and similar tools to personalize your experience and analyze usage. You can manage
              preferences through browser settings or our cookie banner.
            </p>

            <h2 id="mobile-privacy" className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              7. Mobile Privacy
            </h2>
            <p>
              Our mobile apps may collect device-specific data. You can control tracking permissions through your mobile
              device settings.
            </p>

            <h2 id="health-information" className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              8. Health Information
            </h2>
            <p>
              Any health-related information provided is optional, user-submitted, and not governed by HIPAA. We treat
              this information with confidentiality and respect.
            </p>

            <h2 id="security" className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              9. Security
            </h2>
            <p>
              We implement physical, electronic, and administrative safeguards to protect your data. While no system is
              foolproof, we continuously work to enhance security.
            </p>

            <h2 id="retention" className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              10. Retention
            </h2>
            <p>
              We retain personal data as long as needed to provide our services or as required by law. Inactive accounts
              may be deleted after a set period.
            </p>

            <h2 id="state-specific" className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              11. U.S. State-Specific Disclosures
            </h2>
            <p>Residents of California, Virginia, Colorado, and other states with specific privacy rights may:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Request access to, deletion of, or correction of personal data.</li>
              <li>Opt out of data sales or sharing.</li>
              <li>Exercise additional rights as outlined in our state-specific addendum.</li>
            </ul>

            <h2 id="childrens-privacy" className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              12. Children's Privacy
            </h2>
            <p>
              Consentd is not intended for children under 18. If we learn we've collected such information, we will
              delete it immediately.
            </p>

            <h2 id="third-party-links" className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              13. Third-Party Links
            </h2>
            <p>
              Our Services may link to third-party sites. We are not responsible for the privacy practices of other
              sites.
            </p>

            <h2 id="changes" className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              14. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy. Updates will be posted on this page with a new "Last Updated" date. We
              encourage regular review.
            </p>

            <h2 id="contact-us" className="text-2xl font-bold text-navy-900 mt-8 mb-4">
              15. Contact Us
            </h2>
            <p>If you have questions or wish to exercise your privacy rights, please contact us at:</p>
            <div className="pl-6 mt-4">
              <p>Consentd, Inc.</p>
              <p>Attn: Privacy Officer</p>
              <p>Email: Contact@consentd.com</p>
              <p>Address: 3000 Pegasus Park Dr, Dallas, TX 75247</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

