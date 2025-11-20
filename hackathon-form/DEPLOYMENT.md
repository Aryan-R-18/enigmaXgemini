# Deployment Guide

This guide covers deploying both the frontend and backend to Vercel.

## Prerequisites

1. [Vercel CLI](https://vercel.com/cli) installed: `npm i -g vercel`
2. Vercel account
3. MongoDB Atlas cluster set up (see MONGODB_SETUP.md)

## Backend Deployment

### 1. Deploy Backend First

```bash
cd server
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Choose your account
- Link to existing project? **N** (first time)
- What's your project's name? `hackathon-form-backend`
- In which directory is your code located? `./`

### 2. Configure Environment Variables

After deployment, add environment variables in Vercel dashboard:

1. Go to your project dashboard on Vercel
2. Navigate to Settings → Environment Variables
3. Add these variables:

```
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/bit-hackathon?retryWrites=true&w=majority
DATABASE_NAME=bit-hackathon
COLLECTION_NAME=registrations
NODE_ENV=production
```

### 3. Redeploy Backend

```bash
vercel --prod
```

Note your backend URL (e.g., `https://hackathon-form-backend.vercel.app`)

## Frontend Deployment

### 1. Update Frontend Environment

Update your frontend `.env` file with the deployed backend URL:

```
VITE_API_URL=https://your-backend-url.vercel.app/api
VITE_APP_ID=bit-hackathon
```

### 2. Deploy Frontend

```bash
# From project root
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Choose your account
- Link to existing project? **N** (first time)
- What's your project's name? `hackathon-form-frontend`
- In which directory is your code located? `./`

### 3. Configure Frontend Environment Variables

In Vercel dashboard for frontend project:

```
VITE_API_URL=https://your-backend-url.vercel.app/api
VITE_APP_ID=bit-hackathon
```

### 4. Final Deployment

```bash
vercel --prod
```

## Testing Deployment

1. Visit your frontend URL
2. Fill out the registration form
3. Check MongoDB Atlas to verify data is being saved
4. Test the WhatsApp group link

## Troubleshooting

### Backend Issues
- Check Vercel function logs in dashboard
- Verify MongoDB connection string
- Ensure all environment variables are set

### Frontend Issues
- Check browser console for API errors
- Verify VITE_API_URL points to correct backend
- Ensure CORS is properly configured

### CORS Issues
If you encounter CORS errors, the backend already includes:
```javascript
app.use(cors());
```

For production, you might want to restrict origins:
```javascript
app.use(cors({
  origin: ['https://your-frontend-domain.vercel.app']
}));
```

## Custom Domains (Optional)

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update environment variables with new URLs

## Environment Variables Summary

### Backend (.env)
```
MONGODB_URI=mongodb+srv://...
DATABASE_NAME=bit-hackathon
COLLECTION_NAME=registrations
NODE_ENV=production
```

### Frontend (.env)
```
VITE_API_URL=https://your-backend-url.vercel.app/api
VITE_APP_ID=bit-hackathon
```