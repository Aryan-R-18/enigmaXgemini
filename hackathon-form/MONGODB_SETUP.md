# MongoDB Atlas Setup Guide

This project uses a **client-server architecture** where the frontend communicates with a backend API that connects to MongoDB Atlas.

## Architecture
- **Frontend**: React app (runs on port 3000)
- **Backend**: Express.js API server (runs on port 3001)
- **Database**: MongoDB Atlas

## 1. Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Sign up for a free account
3. Create a new project called "bit-hackathon"

## 2. Create a Cluster
1. Click "Build a Database"
2. Choose "M0 Sandbox" (Free tier)
3. Select your preferred cloud provider and region
4. Name your cluster (e.g., "Cluster0")
5. Click "Create Cluster"

## 3. Configure Database Access
1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Create a username and strong password
5. Set privileges to "Read and write to any database"
6. Click "Add User"

## 4. Configure Network Access
1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Choose "Allow Access from Anywhere" (0.0.0.0/0) for development
4. Click "Confirm"

## 5. Get Connection String
1. Go to "Database" in the left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Select "Node.js" and version "4.1 or later"
5. Copy the connection string

## 6. Configure Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:3001/api
VITE_APP_ID=bit-hackathon
```

### Backend (server/.env)
```
MONGODB_URI=mongodb+srv://myuser:mypassword@cluster0.abc123.mongodb.net/bit-hackathon?retryWrites=true&w=majority
DATABASE_NAME=bit-hackathon
COLLECTION_NAME=registrations
PORT=3001
NODE_ENV=development
```

## 7. Install Dependencies

### Frontend
```bash
npm install
```

### Backend
```bash
cd server
npm install
```

## 8. Run the Application

### Start Backend (Terminal 1)
```bash
cd server
npm run dev
```

### Start Frontend (Terminal 2)
```bash
npm run dev
```

## 9. Test the Application
1. Backend should be running on http://localhost:3001
2. Frontend should be running on http://localhost:3000
3. Fill out the registration form
4. Check your MongoDB Atlas dashboard under "Browse Collections" to see the data

## API Endpoints
- `GET /api/health` - Health check
- `POST /api/register` - Submit registration
- `GET /api/registrations` - Get all registrations

## Database Structure
```json
{
  "_id": "ObjectId",
  "leaderName": "string",
  "leaderEmail": "string", 
  "leaderMobile": "string",
  "leaderGender": "string",
  "leaderRegNo": "string",
  "leaderBranch": "string",
  "member2Name": "string",
  "member2Gender": "string",
  "userId": "string",
  "appId": "string",
  "submittedAt": "Date"
}
```