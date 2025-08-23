import React from 'react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/" className="text-blue-400 hover:underline">
            ← Back to Home
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-8 text-center">Cookie Policy</h1>
        
        <div className="bg-gray-800 rounded-lg p-8 space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">1. What Are Cookies</h2>
            <p className="text-gray-300">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              analyzing how you use our site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">2. How We Use Cookies</h2>
            <p className="text-gray-300 mb-3">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Authentication Cookies:</strong> To keep you logged in</li>
              <li><strong>Preference Cookies:</strong> To remember your settings and preferences</li>
              <li><strong>Analytics Cookies:</strong> To understand how visitors use our website</li>
              <li><strong>Security Cookies:</strong> To protect against fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">3. Types of Cookies We Use</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-emerald-300 mb-2">Session Cookies</h3>
                <p className="text-gray-300 text-sm">
                  These cookies are temporary and are deleted when you close your browser. They help 
                  maintain your session and provide essential functionality.
                </p>
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-emerald-300 mb-2">Persistent Cookies</h3>
                <p className="text-gray-300 text-sm">
                  These cookies remain on your device for a set period or until you delete them. 
                  They remember your preferences and settings.
                </p>
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg">
                <h3 className="font-semibold text-emerald-300 mb-2">Third-Party Cookies</h3>
                <p className="text-gray-300 text-sm">
                  These cookies are set by third-party services we use, such as analytics providers 
                  and payment processors.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">4. Specific Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-2 text-emerald-300">Cookie Name</th>
                    <th className="text-left py-2 text-emerald-300">Purpose</th>
                    <th className="text-left py-2 text-emerald-300">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-700">
                    <td className="py-2">auth_token</td>
                    <td className="py-2">Authentication and session management</td>
                    <td className="py-2">7 days</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-2">user_preferences</td>
                    <td className="py-2">Store user preferences and settings</td>
                    <td className="py-2">1 year</td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-2">analytics_id</td>
                    <td className="py-2">Website analytics and performance tracking</td>
                    <td className="py-2">2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">5. Managing Cookies</h2>
            <p className="text-gray-300 mb-3">
              You can control and manage cookies in several ways:
            </p>
            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
              <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies</li>
              <li><strong>Cookie Consent:</strong> We provide options to accept or decline non-essential cookies</li>
              <li><strong>Third-Party Opt-outs:</strong> You can opt out of third-party analytics cookies</li>
              <li><strong>Device Settings:</strong> Some devices have built-in cookie management</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">6. Impact of Disabling Cookies</h2>
            <p className="text-gray-300 mb-3">
              If you disable cookies, some features of our website may not work properly:
            </p>
            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
              <li>You may need to log in repeatedly</li>
              <li>Some preferences may not be saved</li>
              <li>Certain features may be limited</li>
              <li>Website performance may be affected</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">7. Updates to This Policy</h2>
            <p className="text-gray-300">
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. We will notify you of any 
              material changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-emerald-400">8. Contact Us</h2>
            <p className="text-gray-300 mb-3">
              If you have any questions about our use of cookies, please contact us:
            </p>
            <div className="bg-gray-700 p-4 rounded-lg">
              <p className="text-gray-300">Email: privacy@customweb.com</p>
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

export default CookiePolicy;
