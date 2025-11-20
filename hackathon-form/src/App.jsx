// App.jsx
import { useState, useEffect } from 'react';
import { Check, AlertCircle, Ghost, Gamepad2 } from 'lucide-react';

// IMPORT MONGODB CONFIG
import { addDocument, generateMockUserId } from "./mongoConfig";

const appId = import.meta.env.VITE_APP_ID || "bit-hackathon";

// --- THEME ---
const THEME = {
  primary: '#3b82f6',
  secondary: '#ef4444',
  accent: '#f59e0b',
  bg: '#f0f0f0',
  text: '#111827',
  border: '#000000',
};

// --- FONT STYLES ---
const FontStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');

    body {
      background-color: ${THEME.bg};
      background-image: 
        linear-gradient(45deg, #e5e5e5 25%, transparent 25%), 
        linear-gradient(-45deg, #e5e5e5 25%, transparent 25%), 
        linear-gradient(45deg, transparent 75%, #e5e5e5 75%), 
        linear-gradient(-45deg, transparent 75%, #e5e5e5 75%);
      background-size: 20px 20px;
      background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
    }

    .font-8bit-headers {
      font-family: 'Press Start 2P', cursive;
    }
    
    .font-8bit-text {
      font-family: 'VT323', monospace;
    }

    .nes-container {
      background: white;
      border: 4px solid black;
      box-shadow: -4px 0 0 black, 4px 0 0 black, 0 -4px 0 black, 0 4px 0 black;
    }

    .pixel-shadow {
      box-shadow: 6px 6px 0px #000;
      transition: 0.1s;
    }
    .pixel-shadow:active {
      transform: translate(4px,4px);
      box-shadow: 2px 2px 0px #000;
    }

    .pixel-input {
      border: 3px solid black;
      font-family: 'VT323', monospace;
      font-size: 1.5rem;
      outline: none;
      box-shadow: 4px 4px 0px #ccc;
    }
    .pixel-input:focus {
      background-color: #e0f2fe;
      box-shadow: 4px 4px 0px ${THEME.primary};
    }

    .scanlines {
      background: linear-gradient(
        to bottom,
        transparent,
        transparent 50%,
        rgba(0,0,0,0.05) 50%,
        rgba(0,0,0,0.05)
      );
      background-size: 100% 4px;
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 9999;
    }
  `}</style>
);

// Button Component
const PixelButton = ({ children, type, disabled }) => (
  <button
    type={type}
    disabled={disabled}
    className={`
      bg-blue-500 text-white font-8bit-headers text-xs md:text-sm py-4 px-6 
      border-4 border-black pixel-shadow w-full uppercase tracking-widest
      disabled:opacity-50 disabled:cursor-not-allowed
    `}
  >
    {children}
  </button>
);

// Modal Component
const PixelModal = ({ isOpen, type, message, onClose }) => {
  if (!isOpen) return null;

  const isSuccess = type === 'success';
  const whatsappLink = "https://chat.whatsapp.com/EgAwzW2EAEM1z69AQosXXq";

  const handleWhatsAppClick = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="nes-container p-8 max-w-md w-full text-center relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          {isSuccess ? (
            <div className="bg-green-500 p-3 border-4 border-black text-white">
              <Check size={32} />
            </div>
          ) : (
            <div className="bg-red-500 p-3 border-4 border-black text-white">
              <AlertCircle size={32} />
            </div>
          )}
        </div>

        <h2 className="font-8bit-headers text-lg mt-6 mb-4">
          {isSuccess ? "LEVEL COMPLETE!" : "GAME OVER"}
        </h2>

        <p className="font-8bit-text text-2xl mb-6">{message}</p>

        {isSuccess && (
          <div className="mb-6">
            <p className="font-8bit-text text-lg mb-4 text-blue-600">
              For further updates, join our WhatsApp group!
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 text-white font-8bit-headers text-xs py-3 px-4 border-4 border-black pixel-shadow mb-4 uppercase tracking-widest hover:bg-green-600 transition-colors"
            >
              JOIN WHATSAPP GROUP
            </button>
          </div>
        )}

        <PixelButton onClick={onClose}>
          {isSuccess ? "CONTINUE" : "TRY AGAIN"}
        </PixelButton>
      </div>
    </div>
  );
};

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ isOpen: false, type: 'success', message: '' });

  const [formData, setFormData] = useState({
    leaderName: '',
    leaderEmail: '',
    leaderMobile: '',
    leaderGender: 'Select',
    leaderRegNo: '',
    leaderBranch: '',
    member2Name: '',
    member2Gender: 'Select'
  });

  // Initialize Mock User (replacing Firebase Auth)
  useEffect(() => {
    // Generate a mock user ID for this session
    const mockUser = { uid: generateMockUserId() };
    setUser(mockUser);
    console.log('Mock user initialized:', mockUser.uid);
  }, []);

  // Form Handlers
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      setModal({ isOpen: true, type: "error", message: "User session not ready." });
      return;
    }

    setLoading(true);
    
    try {
      // Prepare data for MongoDB
      const registrationData = {
        ...formData,
        userId: user.uid,
        appId: appId
      };

      // Save to MongoDB Atlas
      await addDocument(registrationData);

      setModal({
        isOpen: true,
        type: 'success',
        message: "TEAM REGISTERED SUCCESSFULLY!"
      });

      // Reset form
      setFormData({
        leaderName: '',
        leaderEmail: '',
        leaderMobile: '',
        leaderGender: 'Select',
        leaderRegNo: '',
        leaderBranch: '',
        member2Name: '',
        member2Gender: 'Select'
      });

    } catch (error) {
      console.error("Submission error:", error);
      setModal({ 
        isOpen: true, 
        type: 'error', 
        message: `Registration failed: ${error.message}` 
      });
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center">
      <FontStyles />
      <div className="scanlines" />

      <div className="absolute top-10 left-10 text-blue-400 opacity-50 hidden lg:block animate-bounce">
        <Ghost size={48} />
      </div>

      <div className="absolute bottom-10 right-10 text-red-400 opacity-50 hidden lg:block animate-bounce">
        <Gamepad2 size={48} />
      </div>

      <div className="nes-container max-w-2xl w-full p-6 md:p-10 bg-white mt-8 relative">
        <form onSubmit={handleSubmit} className="space-y-8">

          <h3 className="font-8bit-headers text-sm text-blue-600">
            PLAYER 1 (TEAM LEADER)
          </h3>

          <input name="leaderName" value={formData.leaderName} onChange={handleChange} className="pixel-input p-3 w-full" placeholder="Leader Name" />

          <input name="leaderRegNo" value={formData.leaderRegNo} onChange={handleChange} className="pixel-input p-3 w-full" placeholder="Registration No" />

          <input name="leaderBranch" value={formData.leaderBranch} onChange={handleChange} className="pixel-input p-3 w-full" placeholder="Branch" />

          <input name="leaderEmail" value={formData.leaderEmail} onChange={handleChange} className="pixel-input p-3 w-full" placeholder="Email" />

          <input name="leaderMobile" value={formData.leaderMobile} onChange={handleChange} className="pixel-input p-3 w-full" placeholder="Mobile No" />

          <select name="leaderGender" value={formData.leaderGender} onChange={handleChange} className="pixel-input p-3 w-full">
            <option disabled>Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <h3 className="font-8bit-headers text-sm text-red-500">
            PLAYER 2 (MEMBER)
          </h3>

          <input name="member2Name" value={formData.member2Name} onChange={handleChange} className="pixel-input p-3 w-full" placeholder="Member 2 Name" />

          <select name="member2Gender" value={formData.member2Gender} onChange={handleChange} className="pixel-input p-3 w-full">
            <option disabled>Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <PixelButton type="submit" disabled={loading}>
            {loading ? "Saving..." : "START GAME (REGISTER)"}
          </PixelButton>

        </form>
      </div>

      <PixelModal 
        isOpen={modal.isOpen}
        type={modal.type}
        message={modal.message}
        onClose={() => setModal({ ...modal, isOpen: false })}
      />
    </div>
  );
}
