@echo off
echo 🚀 Deploying Hackathon Form Application
echo ======================================

REM Check if vercel CLI is installed
vercel --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Vercel CLI not found. Please install it first:
    echo npm i -g vercel
    pause
    exit /b 1
)

echo 📦 Step 1: Deploying Backend...
cd server
echo Current directory: %cd%
vercel --prod

if %errorlevel% equ 0 (
    echo ✅ Backend deployed successfully!
    echo 📝 Please note your backend URL and update the frontend .env file
    echo.
    echo Update your .env file with:
    echo VITE_API_URL=https://your-backend-url.vercel.app/api
    echo.
    pause
) else (
    echo ❌ Backend deployment failed!
    pause
    exit /b 1
)

echo 📦 Step 2: Deploying Frontend...
cd ..
echo Current directory: %cd%
vercel --prod

if %errorlevel% equ 0 (
    echo ✅ Frontend deployed successfully!
    echo 🎉 Deployment complete!
    echo.
    echo Next steps:
    echo 1. Test your application
    echo 2. Check MongoDB Atlas for data
    echo 3. Verify WhatsApp group link works
) else (
    echo ❌ Frontend deployment failed!
)

pause