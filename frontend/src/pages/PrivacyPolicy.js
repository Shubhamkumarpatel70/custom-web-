import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/" className="text-blue-400 hover:underline">
            ← Back to Home
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
        
        <div className="bg-gray-800 rounded-lg p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">1. Information We Collect</h2>
            <p className="text-gray-300 mb-3">
              We collect information you provide directly to us, such as when you create an account, 
              subscribe to our services, or contact us for support.
            </p>
            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
              <li>Name and email address</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Account preferences and settings</li>
              <li>Communication history with our support team</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">2. How We Use Your Information</h2>
            <p className="text-gray-300 mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Process payments and manage subscriptions</li>
              <li>Send important updates and notifications</li>
              <li>Respond to your questions and support requests</li>
              <li>Improve our services and user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">3. Information Sharing</h2>
            <p className="text-gray-300 mb-3">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              except in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With trusted service providers who assist in operating our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">4. Data Security</h2>
            <p className="text-gray-300 mb-3">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
              <li>Encryption of sensitive data</li>
              <li>Secure payment processing</li>
              <li>Regular security audits</li>
              <li>Access controls and authentication</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">5. Your Rights</h2>
            <p className="text-gray-300 mb-3">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
              <li>Access your personal information</li>
              <li>Update or correct your information</li>
              <li>Request deletion of your account</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">6. Contact Us</h2>
            <p className="text-gray-300 mb-3">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-300">Email: privacy@customweb.com</p>
              <p className="text-gray-300">Address: [Your Business Address]</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">7. Updates to This Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <div className="border-t border-gray-600 pt-6 mt-8">
            <p className="text-gray-400 text-sm">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
