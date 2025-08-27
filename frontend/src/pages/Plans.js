import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../axios';
import './Plans.css';

const planBenefits = [
  {
    title: 'Premium Quality',
    description: 'High-quality websites built with modern technologies and best practices',
    icon: '⭐'
  },
  {
    title: 'Fast Delivery',
    description: 'Quick turnaround times without compromising on quality',
    icon: '🚀'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock support to help you with any questions',
    icon: '💬'
  },
  {
    title: 'Free Updates',
    description: 'Regular updates and maintenance to keep your site running smoothly',
    icon: '🔄'
  }
];

function Plans() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await axios.get('/api/auth/plans');
      // Ensure plans is always an array
      const plansData = Array.isArray(response.data) ? response.data : 
                       Array.isArray(response.data.plans) ? response.data.plans : [];
      setPlans(plansData);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching plans:', err);
      setError('Failed to load plans. Please try again.');
      setPlans([]); // Ensure plans is an empty array on error
      setLoading(false);
    }
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  // Ensure sortedPlans is always an array and handle sorting safely
  const sortedPlans = Array.isArray(plans) ? plans.sort((a, b) => a.price - b.price) : [];

  return (
    <div className="plans-page">
      {/* Benefits Section */}
      <section className="benefits-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Our Plans?</h2>
            <p className="section-subtitle">
              Every plan comes with premium features and exceptional value
            </p>
          </div>
          <div className="benefits-grid">
            {planBenefits.map((benefit, index) => (
              <div key={benefit.title} className={`benefit-card ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="plans-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Pricing Plans</h2>
            <p className="section-subtitle">
              Choose the plan that best fits your business needs
            </p>
          </div>
          
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Loading plans...</p>
        </div>
      ) : error ? (
            <div className="error-container">
              <div className="error-icon">⚠️</div>
              <h3>Oops! Something went wrong</h3>
              <p>{error}</p>
              <button onClick={() => window.location.reload()} className="btn btn-primary">
                Try Again
              </button>
            </div>
          ) : sortedPlans.length === 0 ? (
            <div className="error-container">
              <div className="error-icon">📋</div>
              <h3>No Plans Available</h3>
              <p>Currently no pricing plans are available. Please check back later or contact us for custom pricing.</p>
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
        </div>
      ) : (
          <div className="plans-grid">
              {sortedPlans.map((plan, index) => (
                <div
                  key={plan._id || index}
                  className={`plan-card ${plan.highlight ? 'best-value' : ''} ${isVisible ? 'animate-in' : ''} ${selectedPlan?._id === plan._id ? 'selected' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handlePlanSelect(plan)}
              >
                {plan.highlight && (
                    <div className="best-value-badge">
                      <span className="badge-icon">🏆</span>
                      <span>Best Value</span>
                  </div>
                  )}
                  
                  <div className="plan-header">
                    <h3 className="plan-name">{plan.name}</h3>
                    <div className="plan-price-container">
                      <span className="plan-price">₹{plan.price}</span>
                      {plan.oldPrice && (
                        <>
                          <span className="plan-old-price">₹{plan.oldPrice}</span>
                          <span className="plan-save">Save ₹{plan.oldPrice - plan.price}</span>
                        </>
                      )}
                    </div>
                    <div className="plan-duration">
                      <span className="duration-icon">⏰</span>
                      <span>{plan.duration}</span>
                </div>
                  </div>

                <div className="plan-features">
                    <h4 className="features-title">
                      <span className="features-icon">✨</span>
                      What's Included
                    </h4>
                    <ul className="features-list">
                      {Array.isArray(plan.features) && plan.features.map((feature, idx) => (
                        <li key={idx} className="feature-item">
                          <span className="feature-check">✓</span>
                          <span className="feature-text">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                  
                  <Link 
                    to={`/payment/${plan.name.toLowerCase().replace(/\s+/g, '')}`}
                    className={`plan-button ${plan.highlight ? 'button-best' : ''}`}
                  >
                    <span>Get Started</span>
                    <span className="button-icon">→</span>
                  </Link>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Get answers to common questions about our plans and services
            </p>
          </div>
          <div className="faq-grid">
            <div className={`faq-item ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.1s' }}>
              <div className="faq-icon">❓</div>
              <div className="faq-content">
                <h4 className="faq-question">What's included in each plan?</h4>
                <p className="faq-answer">Each plan includes responsive design, SEO optimization, content management system, contact forms, and 24/7 support. Higher-tier plans include additional features like e-commerce functionality and advanced analytics.</p>
              </div>
            </div>
            <div className={`faq-item ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
              <div className="faq-icon">⏰</div>
              <div className="faq-content">
                <h4 className="faq-question">How long does it take to complete a project?</h4>
                <p className="faq-answer">Project timelines vary based on complexity. Basic websites typically take 1-2 weeks, while more complex projects may take 3-4 weeks. We'll provide a detailed timeline during the planning phase.</p>
              </div>
            </div>
            <div className={`faq-item ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.3s' }}>
              <div className="faq-icon">💬</div>
              <div className="faq-content">
                <h4 className="faq-question">Do you provide ongoing support?</h4>
                <p className="faq-answer">Yes! All plans include 24/7 support and regular updates. We also offer maintenance packages to keep your website secure and up-to-date with the latest features.</p>
              </div>
            </div>
            <div className={`faq-item ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.4s' }}>
              <div className="faq-icon">🔄</div>
              <div className="faq-content">
                <h4 className="faq-question">Can I upgrade my plan later?</h4>
                <p className="faq-answer">Absolutely! You can upgrade your plan at any time. We'll work with you to add new features and functionality to your existing website without any downtime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="plans-cta section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
              Choose your plan and let's create something amazing together.
            </p>
            <div className="cta-actions">
              <Link to="#plans" className="btn btn-primary">
                <span>View All Plans</span>
                <span className="btn-icon">→</span>
              </Link>
              <Link to="/contact" className="btn btn-outline">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Plans;