import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext';
import axios from '../axios';

function Plans() {
  const navigate = useNavigate();
  const { user } = React.useContext(UserContext);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlans = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await axios.get('/api/auth/plans');
        setPlans(res.data.plans);
      } catch (err) {
        setError('Could not fetch plans.');
      }
      setLoading(false);
    };
    fetchPlans();
  }, []);

  const handleBuy = (planName) => {
    if (!user) {
      navigate('/login');
    } else {
      navigate(`/payment/${planName.toLowerCase()}`);
    }
  };

  // Show last plan first
  const sortedPlans = [...plans].reverse();

  return (
    <div className="plans-container">
      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          Loading plans...
        </div>
      ) : error ? (
        <div className="error">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
          {error}
        </div>
      ) : (
        <>
          <h1 className="plans-title">Choose Your Plan</h1>
          <p className="plans-subtitle">Select the plan that fits your needs</p>
          <div className="plans-grid">
            {sortedPlans.map((plan) => (
              <div
                key={plan._id}
                className={`plan-card${plan.highlight ? ' best-value' : ''}`}
              >
                {plan.highlight && (
                  <div className="best-value-badge">🏆 Best Value</div>
                )}
                <h2 className="plan-name">{plan.name}</h2>
                <div className="plan-price-container">
                  <div className="plan-price">
                    ₹{plan.price}
                  </div>
                  {plan.oldPrice && (
                    <div className="plan-old-price">₹{plan.oldPrice}</div>
                  )}
                </div>
                
                {plan.oldPrice && parseFloat(plan.oldPrice) > parseFloat(plan.price) ? (
                  <div className="plan-save">
                    Save ~{Math.round(((parseFloat(plan.oldPrice) - parseFloat(plan.price)) / parseFloat(plan.oldPrice)) * 100)}%
                  </div>
                ) : plan.save ? (
                  <div className="plan-save">Save ₹{plan.save}</div>
                ) : null}

                <div className="plan-duration">Duration: {plan.duration} days</div>
                <div className="plan-features">
                  <h3>What's Included:</h3>
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}>
                        <span className="feature-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleBuy(plan.name)}
                  className={`plan-button${plan.highlight ? ' button-best' : ''}`}
                >
                  Get Started →
                </button>
              </div>
            ))}
          </div>
        </>
      )}
      <style>{`
        .plans-container {
          background-color: #181a20;
          color: #e5e7eb;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .plans-title {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          text-align: center;
          background: linear-gradient(to right, #2ecc71, #3498db);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .plans-subtitle {
          font-size: 1.1rem;
          color: #a0aec0;
          margin-bottom: 2rem;
          text-align: center;
          max-width: 600px;
        }
        
        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          width: 100%;
          max-width: 1200px;
          padding: 0 1rem;
        }
        
        .plan-card {
          background-color: #23272f;
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          border: 2px solid transparent;
          position: relative;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        
        .plan-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
        }
        
        .plan-card.best-value {
          border-color: #2ecc71;
          box-shadow: 0 0 20px rgba(46, 204, 113, 0.3);
        }
        
        .best-value-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(to right, #2ecc71, #3498db);
          color: white;
          padding: 0.3rem 1.2rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: bold;
          white-space: nowrap;
        }
        
        .plan-name {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          color: #ffffff;
        }
        
        .plan-price-container {
          margin-bottom: 0.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.8rem;
        }
        
        .plan-price {
          font-size: 2.5rem;
          font-weight: bold;
          color: #ffffff;
        }
        
        .plan-old-price {
          text-decoration: line-through;
          color: #a0aec0;
          font-size: 1.2rem;
        }
        
        .plan-save {
          color: #2ecc71;
          font-weight: bold;
          margin-bottom: 1.2rem;
          font-size: 0.95rem;
        }
        
        .plan-duration {
          color: #a0aec0;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }
        
        .plan-features {
          margin-bottom: 2rem;
          text-align: left;
          flex-grow: 1;
        }
        
        .plan-features h3 {
          font-weight: bold;
          margin-bottom: 1rem;
          font-size: 1.1rem;
          color: #ffffff;
        }
        
        .plan-features ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .plan-features li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 0.8rem;
          font-size: 0.95rem;
          line-height: 1.4;
        }
        
        .feature-icon {
          color: #2ecc71;
          margin-right: 0.7rem;
          font-weight: bold;
          flex-shrink: 0;
          margin-top: 0.15rem;
        }
        
        .plan-button {
          border: none;
          border-radius: 50px;
          padding: 0.8rem 1.5rem;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          width: 100%;
          transition: all 0.3s ease;
          background: linear-gradient(to right, #2ecc71, #3498db);
          color: white;
          margin-top: auto;
        }
        
        .plan-button.button-best {
          background: #ffffff;
          color: #181a20;
        }
        
        .plan-button:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }
        
        .loading, .error {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #e5e7eb;
          font-size: 1.2rem;
          gap: 1rem;
          height: 50vh;
        }
        
        .loading svg, .error svg {
          width: 3rem;
          height: 3rem;
        }
        
        .spinner {
          width: 3rem;
          height: 3rem;
          border: 4px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          border-top-color: #2ecc71;
          animation: spin 1s ease-in-out infinite;
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        @media (max-width: 768px) {
          .plans-title {
            font-size: 2rem;
          }
          
          .plans-subtitle {
            font-size: 1rem;
          }
          
          .plans-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
          }
          
          .plan-card {
            padding: 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .plans-title {
            font-size: 1.8rem;
          }
          
          .plan-name {
            font-size: 1.6rem;
          }
          
          .plan-price {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Plans;