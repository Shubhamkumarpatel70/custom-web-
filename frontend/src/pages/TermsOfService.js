import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/" className="text-blue-400 hover:underline">
            ← Back to Home
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-8 text-center">Terms of Service</h1>
        
        <div className="bg-gray-800 rounded-lg p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing and using Custom Web services, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not 
              use this service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">2. Description of Service</h2>
            <p className="text-gray-300 mb-3">
              Custom Web provides web development and design services including:
            </p>
            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
              <li>Website design and development</li>
              <li>E-commerce solutions</li>
              <li>Web application development</li>
              <li>Website maintenance and support</li>
              <li>Digital marketing services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">3. User Accounts</h2>
            <p className="text-gray-300 mb-3">
              When you create an account with us, you must provide accurate and complete information. 
              You are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
              <li>Maintaining the security of your account</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
              <li>Ensuring your account information is up to date</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">4. Payment Terms</h2>
            <p className="text-gray-300 mb-3">
              Payment terms for our services:
            </p>
            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
              <li>All prices are in Indian Rupees (₹)</li>
              <li>Payment is due upon service completion or as per agreed terms</li>
              <li>We accept UPI payments and other digital payment methods</li>
              <li>Refunds are processed according to our refund policy</li>
              <li>Late payments may result in service suspension</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">5. Intellectual Property</h2>
            <p className="text-gray-300 mb-3">
              Intellectual property rights:
            </p>
            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
              <li>We retain rights to our proprietary tools and frameworks</li>
              <li>Client content and materials remain their property</li>
              <li>Final deliverables are transferred to client upon full payment</li>
              <li>We may showcase completed work in our portfolio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">6. Prohibited Uses</h2>
            <p className="text-gray-300 mb-3">
              You may not use our services to:
            </p>
            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful or malicious content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with service availability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">7. Limitation of Liability</h2>
            <p className="text-gray-300">
              Custom Web shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
              or other intangible losses, resulting from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">8. Termination</h2>
            <p className="text-gray-300">
              We may terminate or suspend your account and access to our services immediately, without 
              prior notice, for any reason, including breach of these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">9. Changes to Terms</h2>
            <p className="text-gray-300">
              We reserve the right to modify these terms at any time. We will notify users of any 
              material changes via email or through our website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">10. Contact Information</h2>
            <p className="text-gray-300 mb-3">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-300">Email: legal@customweb.com</p>
              <p className="text-gray-300">Address: [Your Business Address]</p>
            </div>
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

export default TermsOfService;
