import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from '../axios';
import { UserContext } from '../UserContext';

const UPI_ID = 'customweb@upi';

const Payment = () => {
  const { plan } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle');
  const [subscription, setSubscription] = useState(null);
  const [error, setError] = useState('');
  const [plans, setPlans] = useState([]);
  const [transactionId, setTransactionId] = useState('');
  const [amount, setAmount] = useState('');
  const [planObj, setPlanObj] = useState(null);
  const [coupon, setCoupon] = useState('');
  const [couponMsg, setCouponMsg] = useState('');
  const [discount, setDiscount] = useState(0);
  const [applyingCoupon, setApplyingCoupon] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await axios.get('/api/auth/plans');
        setPlans(res.data.plans);
        const found = res.data.plans.find(p => p.name.toLowerCase() === plan.toLowerCase());
        if (found) {
          setAmount(found.price);
          setPlanObj(found);
        }
      } catch {}
    };
    fetchPlans();
  }, [plan]);

  if (!planObj) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="text-center text-red-500 text-xl font-medium">
          Invalid plan selected.
        </div>
      </div>
    );
  }

  const handleApplyCoupon = async () => {
    setCouponMsg('');
    setApplyingCoupon(true);
    try {
      const res = await axios.post('/api/auth/coupons/apply', { code: coupon });
      setDiscount(res.data.amount);
      setCouponMsg(`Coupon applied! ₹${res.data.amount} off.`);
    } catch (err) {
      setDiscount(0);
      setCouponMsg(err.response?.data?.message || 'Invalid coupon.');
    }
    setApplyingCoupon(false);
  };

  const handlePayment = async () => {
    if (!transactionId) {
      setError('Please enter your transaction ID.');
      return;
    }
    setStatus('processing');
    setError('');
    try {
      if (coupon && discount > 0) {
        await axios.post('/api/auth/coupons/apply', { code: coupon, use: true });
      }
      const token = localStorage.getItem('token');
      const res = await axios.post(
        '/api/auth/subscribe', 
        { 
          plan: planObj.name.toLowerCase(), 
          transactionId, 
          method: 'upi' 
        }, 
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      setSubscription(res.data.subscription);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(err.response?.data?.message || 'Payment or subscription failed.');
    }
  };

  const totalAmount = Math.max(0, amount - discount);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-xl shadow-2xl p-8 w-full max-w-md">
        {/* Back Button */}
        <button
          onClick={() => navigate('/plans')}
          className="mb-4 text-sm text-blue-400 hover:underline"
        >
          ← Back to Plans
        </button>
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-emerald-400 mb-2">
            Complete Your Payment
          </h2>
          <p className="text-gray-400">For {planObj.name} Plan</p>
        </div>

        {status === 'idle' && (
          <>
            {/* Plan Details */}
            <div className="bg-gray-700 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Plan:</span>
                <span className="font-medium">{planObj.name}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Amount:</span>
                <span>₹{amount}</span>
              </div>
              {discount > 0 && (
                <>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Discount:</span>
                    <span className="text-emerald-400 font-medium">-₹{discount}</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-600">
                    <span className="text-gray-300 font-medium">Total:</span>
                    <span className="text-white font-bold">₹{totalAmount}</span>
                  </div>
                </>
              )}
            </div>

            {/* Coupon Section */}
            <div className="mb-6">
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Coupon code"
                  value={coupon}
                  onChange={e => {
                    setCoupon(e.target.value);
                    setCouponMsg('');
                    setDiscount(0);
                  }}
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  disabled={applyingCoupon || discount > 0}
                />
                {discount > 0 ? (
                  <button
                    onClick={() => {
                      setCoupon('');
                      setDiscount(0);
                      setCouponMsg('');
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    onClick={handleApplyCoupon}
                    disabled={applyingCoupon || !coupon}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:opacity-50 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    {applyingCoupon ? '...' : 'Apply'}
                  </button>
                )}
              </div>
              {couponMsg && (
                <div className={`text-sm flex items-center gap-2 ${couponMsg.includes('off') ? 'text-emerald-400' : 'text-red-400'}`}>
                  {couponMsg.includes('off') ? (
                    <span>✔️</span>
                  ) : (
                    <span>❌</span>
                  )}
                  {couponMsg}
                </div>
              )}
            </div>

            {/* Payment Instructions */}
            <div className="bg-gray-700 rounded-lg p-4 mb-6">
              <h3 className="text-gray-300 text-sm font-medium mb-2">PAYMENT INSTRUCTIONS</h3>
              <div className="mb-3">
                <p className="text-gray-400 text-sm mb-1">Send payment to this UPI ID:</p>
                <div className="bg-gray-800 p-3 rounded-lg flex items-center justify-between">
                  <span className="font-mono text-emerald-400">{UPI_ID}</span>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(UPI_ID);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 1500);
                    }}
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="transactionId" className="block text-gray-400 text-sm mb-1">
                  Transaction/Reference ID
                </label>
                <input
                  id="transactionId"
                  type="text"
                  placeholder="Enter ID from payment confirmation"
                  value={transactionId}
                  onChange={e => setTransactionId(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <p className="text-gray-500 text-xs mt-1">
                  After successful payment, enter the transaction ID from your confirmation.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handlePayment}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-gray-900 font-bold py-3 px-4 rounded-lg transition-colors shadow-lg"
              disabled={!transactionId || status === 'processing'}
            >
              {status === 'processing' ? 'Processing...' : 'Confirm Payment'}
            </button>

            {error && (
              <div className="mt-4 text-red-400 text-center text-sm">
                {error}
              </div>
            )}
          </>
        )}

        {status === 'processing' && (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500 mb-4"></div>
            <p className="text-gray-300">Processing your payment...</p>
          </div>
        )}

        {status === 'success' && subscription && (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-emerald-400 mb-2">Payment Successful!</h3>
            <div className="bg-gray-700 rounded-lg p-4 mb-6 text-left space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Plan:</span>
                <span>{subscription.plan}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Subscription ID:</span>
                <span className="font-mono">{subscription.uniqueId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className="capitalize">{subscription.status}</span>
              </div>
            </div>
            <button
              onClick={() => navigate('/dashboard/purchases')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              View My Purchases
            </button>
          </div>
        )}

        {status === 'error' && (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-red-400 mb-2">Payment Failed</h3>
            <p className="text-gray-300 mb-6">{error}</p>
            <button
              onClick={() => setStatus('idle')}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Payment;