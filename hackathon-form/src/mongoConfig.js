// src/mongoConfig.js
// API configuration
const apiConfig = {
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  appId: import.meta.env.VITE_APP_ID || 'bit-hackathon'
};

// Add document via API
const addDocument = async (data) => {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        appId: apiConfig.appId
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Failed to add document:', error);
    throw error;
  }
};

// Generate mock user ID for development
const generateMockUserId = () => {
  return 'user_' + Date.now() + '_' + Math.random().toString(36).substring(2, 11);
};

// Health check
const checkApiHealth = async () => {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/health`);
    return response.ok;
  } catch (error) {
    console.error('API health check failed:', error);
    return false;
  }
};

export { apiConfig, addDocument, generateMockUserId, checkApiHealth };
export default apiConfig;