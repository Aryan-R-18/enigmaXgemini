# PDF Download Feature

## Overview
Added a PDF download feature to the Thank You screen that allows users to download hackathon instructions.

## Implementation

### File Location
- PDF File: `src/assets/The 8-Bit Prompt.pdf`

### Features
1. **Download Button**: Yellow pixelated button with document emoji
2. **Button Text**: "📄 VIEW ALL INSTRUCTIONS"
3. **Functionality**: Downloads the PDF file to user's system
4. **Styling**: Matches the retro gaming theme with pixel borders and shadow

### Technical Details
- Uses HTML5 `download` attribute for direct download
- PDF is imported as a module in React
- Vite configuration updated to handle PDF assets
- Button positioned between success message and close button

### User Flow
1. User completes registration
2. Success modal appears
3. User clicks "CONTINUE"
4. Thank You screen appears
5. User sees "VIEW ALL INSTRUCTIONS" button
6. Clicking downloads "The-8-Bit-Prompt.pdf" to their system
7. User can then click "CLOSE" to return

### Styling
- Background: Yellow (#FBBC04 - Google Yellow)
- Border: 4px solid black
- Font: Press Start 2P (8-bit style)
- Effect: Pixel shadow with hover transition
- Icon: 📄 Document emoji

## Testing
1. Complete the registration form
2. Click through to Thank You screen
3. Click "VIEW ALL INSTRUCTIONS"
4. Verify PDF downloads with filename "The-8-Bit-Prompt.pdf"