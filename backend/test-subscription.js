const axios = require('axios');

// Test the subscription endpoint
async function testSubscription() {
  try {
    console.log('Testing subscription endpoint...');
    
    // First, let's test the plans endpoint to see what plans are available
    const plansResponse = await axios.get('https://custom-web-backend.onrender.com/api/auth/plans');
    console.log('Available plans:', plansResponse.data.plans);
    
    // Test the health endpoint
    const healthResponse = await axios.get('https://custom-web-backend.onrender.com/api/health');
    console.log('Health check:', healthResponse.data);
    
  } catch (error) {
    console.error('Test failed:', error.response?.data || error.message);
  }
}

testSubscription();
