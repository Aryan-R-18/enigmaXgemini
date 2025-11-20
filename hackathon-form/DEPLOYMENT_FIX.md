# Deployment Fix Guide

## Issue: MIME Type Error on Deployed Frontend

The error "Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of 'text/html'" occurs when the frontend deployment configuration is incorrect.

## Solution Steps:

### 1. Fixed Frontend Vercel Configuration

The `vercel.json` has been updated to use the correct configuration for Vite apps:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 2. Environment Variables Setup

#### For Local Development (.env):
```
VITE_API_URL=http://localhost:3002/api
VITE_APP_ID=bit-hackathon
```

#### For Production (.env.production):
```
VITE_API_URL=https://your-backend-url.vercel.app/api
VITE_APP_ID=bit-hackathon
```

### 3. Deployment Steps

#### Step 1: Deploy Backend First
```bash
cd server
vercel --prod
```
**Note your backend URL** (e.g., `https://hackathon-form-backend-xyz.vercel.app`)

#### Step 2: Update Frontend Environment
Either:
- Update `.env.production` with your backend URL, OR
- Set environment variables in Vercel dashboard

#### Step 3: Deploy Frontend
```bash
# From project root
vercel --prod
```

### 4. Vercel Dashboard Configuration

#### Backend Environment Variables:
- `MONGODB_URI`: Your MongoDB Atlas connection string
- `DATABASE_NAME`: bit-hackathon
- `COLLECTION_NAME`: registrations
- `NODE_ENV`: production

#### Frontend Environment Variables:
- `VITE_API_URL`: https://your-backend-url.vercel.app/api
- `VITE_APP_ID`: bit-hackathon

### 5. Testing After Deployment

1. Open your deployed frontend URL
2. Open browser developer tools (F12)
3. Check Console tab for any errors
4. Test the registration form
5. Verify WhatsApp link works

### 6. Common Issues & Solutions

#### Issue: Still getting MIME type error
**Solution**: Clear browser cache and hard refresh (Ctrl+Shift+R)

#### Issue: API calls failing
**Solution**: Check that VITE_API_URL is correctly set and backend is deployed

#### Issue: CORS errors
**Solution**: Backend already includes CORS middleware, but you can restrict origins in production

#### Issue: Environment variables not loading
**Solution**: Make sure variables are prefixed with `VITE_` and set in Vercel dashboard

### 7. Quick Redeploy Commands

```bash
# Redeploy backend
cd server && vercel --prod

# Redeploy frontend
vercel --prod
```

### 8. Verification Checklist

- [ ] Backend deployed and accessible
- [ ] Frontend environment variables updated
- [ ] Frontend deployed without build errors
- [ ] Registration form works
- [ ] Data saves to MongoDB
- [ ] WhatsApp link opens correctly
- [ ] No console errors in browser

## Need Help?

If you're still experiencing issues:
1. Check Vercel function logs in the dashboard
2. Verify all environment variables are set correctly
3. Test the backend API directly (visit /api/health endpoint)
4. Clear browser cache completely