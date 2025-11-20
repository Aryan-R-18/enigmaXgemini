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
    echo ""
    echo "📝 IMPORTANT: Copy your backend URL from above and update frontend environment"
    echo "Either:"
    echo "1. Update .env.production file with: VITE_API_URL=https://your-backend-url.vercel.app/api"
    echo "2. Or set environment variables in Vercel dashboard"
    echo ""
    read -p "Press Enter after updating the environment configuration..."
else
    echo "❌ Backend deployment failed!"
    exit 1
fi

echo "📦 Step 2: Building Frontend..."
cd ..
echo "Current directory: $(pwd)"
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Frontend build successful!"
else
    echo "❌ Frontend build failed!"
    exit 1
fi

echo "📦 Step 3: Deploying Frontend..."
vercel --prod

if [ $? -eq 0 ]; then
    echo "✅ Frontend deployed successfully!"
    echo "🎉 Deployment complete!"
    echo ""
    echo "🧪 Testing checklist:"
    echo "1. Open your frontend URL"
    echo "2. Test registration form"
    echo "3. Check MongoDB Atlas for data"
    echo "4. Verify WhatsApp group link works"
    echo "5. Check browser console for errors"
else
    echo "❌ Frontend deployment failed!"
    exit 1
fi