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
        <div className="loading">Loading plans...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="plans-grid">
          {sortedPlans.map((plan, idx) => (
            <div
              key={plan._id}
              className={`plan-card${plan.highlight ? ' best-value' : ''}`}
            >
              {plan.highlight && (
                <div className="best-value-badge">🏆 Best Value</div>
              )}
              <h2 className="plan-name">{plan.name}</h2>
              <div className="plan-price">
                ₹{plan.price}
              </div>
              <div className="plan-old-price">{plan.oldPrice ? `₹${plan.oldPrice}` : ''}</div>
              
              {plan.oldPrice && parseFloat(plan.oldPrice) > parseFloat(plan.price) ? (
                <div className="plan-save">
                  Save ~{Math.round(((parseFloat(plan.oldPrice) - parseFloat(plan.price)) / parseFloat(plan.oldPrice)) * 100)}%
                </div>
              ) : plan.save ? (
                <div className="plan-save">₹{plan.save}</div>
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
      )}
      <style>{`
        .plans-container {
          background-color: #181a20;
          color: #e5e7eb;
          padding: 50px 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .plans-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          max-width: 1100px;
          width: 100%;
        }
        .plan-card {
          background-color: #23272f;
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          border: 2px solid transparent;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .plan-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .plan-card.best-value {
          border-color: #2ecc71;
          box-shadow: 0 0 15px rgba(46, 204, 113, 0.5);
        }
        .best-value-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(to right, #2ecc71, #3498db);
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: bold;
        }
        .plan-name {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .plan-price {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 5px;
          color: #ffffff;
        }
        .plan-old-price {
          text-decoration: line-through;
          color: #a0aec0;
          margin-bottom: 5px;
        }
        .plan-save {
          color: #e53e3e;
          font-weight: bold;
          margin-bottom: 15px;
        }
        .plan-duration {
          color: #a0aec0;
          margin-bottom: 25px;
        }
        .plan-features {
          margin-bottom: 30px;
          text-align: left;
        }
        .plan-features h3 {
          font-weight: bold;
          margin-bottom: 15px;
          font-size: 1.1rem;
        }
        .plan-features ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .plan-features li {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        .feature-icon {
          color: #2ecc71;
          margin-right: 10px;
          font-weight: bold;
        }
        .plan-button {
          border: none;
          border-radius: 50px;
          padding: 15px 30px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          width: 100%;
          transition: background-color 0.3s ease;
          background: linear-gradient(to right, #2ecc71, #3498db);
          color: white;
        }
        .plan-button.button-best {
          background: #e5e7eb;
          color: #181a20;
        }
        .plan-button:hover {
          opacity: 0.9;
        }
        .loading, .error {
            color: #e5e7eb;
            font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
}

export default Plans; 