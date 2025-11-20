#!/bin/bash

echo "🚀 Deploying Hackathon Form Application"
echo "======================================"

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Please install it first:"
    echo "npm i -g vercel"
    exit 1
fi

echo "📦 Step 1: Deploying Backend..."
cd server
echo "Current directory: $(pwd)"
vercel --prod

if [ $? -eq 0 ]; then
    echo "✅ Backend deployed successfully!"
    echo "📝 Please note your backend URL and update the frontend .env file"
    echo ""
    echo "Update your .env file with:"
    echo "VITE_API_URL=https://your-backend-url.vercel.app/api"
    echo ""
    read -p "Press Enter after updating the .env file..."
else
    echo "❌ Backend deployment failed!"
    exit 1
fi

echo "📦 Step 2: Deploying Frontend..."
cd ..
echo "Current directory: $(pwd)"
vercel --prod

if [ $? -eq 0 ]; then
    echo "✅ Frontend deployed successfully!"
    echo "🎉 Deployment complete!"
    echo ""
    echo "Next steps:"
    echo "1. Test your application"
    echo "2. Check MongoDB Atlas for data"
    echo "3. Verify WhatsApp group link works"
else
    echo "❌ Frontend deployment failed!"
    exit 1
fi