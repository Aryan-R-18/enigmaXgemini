# Registration Control Guide

## How to Open/Close Registration

### Current Status: CLOSED ❌

To control registration, edit the `REGISTRATION_OPEN` constant in `src/App.jsx`:

```javascript
// Line ~13 in src/App.jsx
const REGISTRATION_OPEN = false;  // Currently CLOSED
```

### To Open Registration:
```javascript
const REGISTRATION_OPEN = true;
```
This will show the full registration form with all features.

### To Close Registration:
```javascript
const REGISTRATION_OPEN = false;
```
This will show the "Registration Closed" screen.

## Registration Closed Screen Features

When registration is closed, users see:

### 🎨 Visual Elements:
- **Animated gradient background** (same as main app)
- **Sad Pac-Man** emoji at the top
- **"REGISTRATION CLOSED"** in Google colors
- **"Game Over!"** message
- **"See You Next Time!"** farewell message
- **Animated hearts** (💙💚💛❤️)
- **Pixelated decorations** (dots, squares, Pac-Man)
- **Footer** with Hearts Enigma VSSUT branding

### 🚫 Hidden Elements:
- Registration form
- WhatsApp group link
- PDF download
- Submit button
- All form fields

### 🎯 User Experience:
- Clean, stylish closure message
- Maintains retro gaming theme
- Professional and friendly
- No confusion about registration status
- Encourages return for future events

## Quick Toggle

1. Open `src/App.jsx`
2. Find line ~13: `const REGISTRATION_OPEN = false;`
3. Change to `true` to open, `false` to close
4. Save the file
5. Changes apply immediately (hot reload)

## Deployment

When deploying, make sure to:
1. Set `REGISTRATION_OPEN` to desired state
2. Build the project: `npm run build`
3. Deploy to Vercel: `vercel --prod`

The registration status is hardcoded, so you'll need to redeploy to change it in production.