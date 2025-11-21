// App.jsx
import { useState, useEffect } from 'react';
import { Check, AlertCircle } from 'lucide-react';

// IMPORT MONGODB CONFIG
import { addDocument, generateMockUserId } from "./mongoConfig";

// IMPORT PDF
import instructionsPDF from './assets/The 8-Bit Prompt.pdf';

const appId = import.meta.env.VITE_APP_ID || "bit-hackathon";

// --- THEME ---
const THEME = {
  primary: '#3b82f6',
  secondary: '#ef4444',
  accent: '#f59e0b',
  bg: '#f0f0f0',
  text: '#111827',
  border: '#000000',
  // Google Colors
  googleBlue: '#4285F4',
  googleRed: '#EA4335',
  googleYellow: '#FBBC04',
  googleGreen: '#34A853',
};

// --- FONT STYLES ---
const FontStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');

    body {
      background: linear-gradient(135deg, #e3f2fd 0%, #fff9c4 25%, #ffebee 50%, #e8f5e9 75%, #e3f2fd 100%);
      background-size: 400% 400%;
      animation: gradientShift 15s ease infinite;
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
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
        rgba(0,0,0,0.02) 50%,
        rgba(0,0,0,0.02)
      );
      background-size: 100% 4px;
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 1;
    }

    /* Pixelated animations */
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(5deg); }
    }

    @keyframes slideRight {
      0% { transform: translateX(-100px); }
      100% { transform: translateX(calc(100vw + 100px)); }
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes wiggle {
      0%, 100% { transform: rotate(-3deg); }
      50% { transform: rotate(3deg); }
    }

    .pixel-float {
      animation: float 3s ease-in-out infinite;
    }

    .pixel-spin {
      animation: spin 4s linear infinite;
    }

    .pixel-wiggle {
      animation: wiggle 1s ease-in-out infinite;
    }

    /* Google color dots */
    .google-dot {
      width: 8px;
      height: 8px;
      border: 2px solid black;
      position: absolute;
    }

    /* Confetti effect */
    @keyframes confetti-fall {
      0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
      100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
    }

    .confetti {
      animation: confetti-fall 3s linear infinite;
    }
  `}</style>
);

// Button Component
const PixelButton = ({ children, type, disabled, onClick }) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
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
    <div className="fixed inset-0 flex justify-center items-center p-4" style={{ zIndex: 9998, background: 'linear-gradient(135deg, #e3f2fd 0%, #fff9c4 25%, #ffebee 50%, #e8f5e9 75%, #e3f2fd 100%)', backgroundSize: '400% 400%', animation: 'gradientShift 15s ease infinite' }}>
      {/* Floating pixelated elements in modal background */}
      <div className="absolute top-10 left-10 w-8 h-8 border-4 border-black rounded-full animate-bounce" style={{ backgroundColor: '#4285F4' }}></div>
      <div className="absolute top-20 right-20 w-8 h-8 border-4 border-black rounded-full animate-pulse" style={{ backgroundColor: '#EA4335' }}></div>
      <div className="absolute bottom-20 left-20 w-8 h-8 border-4 border-black rounded-full animate-bounce" style={{ backgroundColor: '#34A853', animationDelay: '0.3s' }}></div>
      <div className="absolute bottom-10 right-10 w-8 h-8 border-4 border-black rounded-full animate-pulse" style={{ backgroundColor: '#FBBC04', animationDelay: '0.5s' }}></div>
      
      {/* Pixelated stars */}
      <div className="absolute top-1/4 left-1/4 w-6 h-6 border-2 border-black pixel-float" style={{ backgroundColor: '#FBBC04' }}>
        <div className="absolute inset-0 flex items-center justify-center text-xs">⭐</div>
      </div>
      <div className="absolute top-1/3 right-1/3 w-6 h-6 border-2 border-black pixel-float" style={{ backgroundColor: '#4285F4', animationDelay: '0.4s' }}>
        <div className="absolute inset-0 flex items-center justify-center text-xs">⭐</div>
      </div>
      <div className="absolute bottom-1/4 right-1/4 w-6 h-6 border-2 border-black pixel-float" style={{ backgroundColor: '#EA4335', animationDelay: '0.7s' }}>
        <div className="absolute inset-0 flex items-center justify-center text-xs">⭐</div>
      </div>

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
  const [showThankYou, setShowThankYou] = useState(false);

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

  // Initialize Meplacing Firebase Auth)
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
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center relative overflow-hidden">
      <FontStyles />
      <div className="scanlines" />

      {/* Pixelated Pac-Man Style Decorations */}
      {/* Pac-Man */}
      <div className="absolute top-10 left-10 w-12 h-12 bg-yellow-400 border-4 border-black hidden lg:block animate-bounce" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
      
      {/* Google Colored Dots */}
      <div className="absolute top-20 right-20 w-10 h-10 border-4 border-black rounded-full hidden lg:block animate-pulse" style={{ backgroundColor: '#4285F4' }}></div>
      
      <div className="absolute bottom-32 left-20 w-10 h-10 border-4 border-black rounded-full hidden lg:block animate-pulse" style={{ backgroundColor: '#EA4335' }}></div>
      
      <div className="absolute top-1/3 right-10 w-10 h-10 border-4 border-black rounded-full hidden lg:block animate-pulse" style={{ backgroundColor: '#34A853' }}></div>

      <div className="absolute bottom-1/3 left-1/4 w-8 h-8 border-4 border-black rounded-full hidden lg:block animate-pulse" style={{ backgroundColor: '#FBBC04', animationDelay: '0.5s' }}></div>

      {/* Small pixelated squares */}
      <div className="absolute top-1/4 left-1/3 w-6 h-6 border-2 border-black hidden lg:block pixel-float" style={{ backgroundColor: '#4285F4' }}></div>
      <div className="absolute top-2/3 right-1/4 w-6 h-6 border-2 border-black hidden lg:block pixel-float" style={{ backgroundColor: '#EA4335', animationDelay: '0.3s' }}></div>
      <div className="absolute bottom-1/4 left-1/2 w-6 h-6 border-2 border-black hidden lg:block pixel-float" style={{ backgroundColor: '#34A853', animationDelay: '0.6s' }}></div>

      {/* Pixelated Ghosts */}
      <div className="absolute top-10 right-10 hidden lg:block animate-bounce" style={{ animationDelay: '0.2s' }}>
        <div className="relative">
          <div className="w-12 h-12 bg-blue-400 border-4 border-black rounded-t-full"></div>
          <div className="w-12 h-4 bg-blue-400 border-l-4 border-r-4 border-black flex">
            <div className="w-3 h-4 bg-blue-400 border-r-4 border-black"></div>
            <div className="w-3 h-4 bg-blue-400 border-r-4 border-black"></div>
            <div className="w-3 h-4 bg-blue-400 border-r-4 border-black"></div>
            <div className="w-3 h-4 bg-blue-400"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-10 hidden lg:block animate-bounce" style={{ animationDelay: '0.4s' }}>
        <div className="relative">
          <div className="w-12 h-12 bg-red-400 border-4 border-black rounded-t-full"></div>
          <div className="w-12 h-4 bg-red-400 border-l-4 border-r-4 border-black flex">
            <div className="w-3 h-4 bg-red-400 border-r-4 border-black"></div>
            <div className="w-3 h-4 bg-red-400 border-r-4 border-black"></div>
            <div className="w-3 h-4 bg-red-400 border-r-4 border-black"></div>
            <div className="w-3 h-4 bg-red-400"></div>
          </div>
        </div>
      </div>

      {/* Pixelated Dots Trail */}
      <div className="absolute top-1/2 left-0 w-full hidden lg:flex justify-around opacity-30">
        <div className="w-3 h-3 bg-yellow-400 border-2 border-black"></div>
        <div className="w-3 h-3 bg-yellow-400 border-2 border-black"></div>
        <div className="w-3 h-3 bg-yellow-400 border-2 border-black"></div>
        <div className="w-3 h-3 bg-yellow-400 border-2 border-black"></div>
        <div className="w-3 h-3 bg-yellow-400 border-2 border-black"></div>
      </div>

      <div className="nes-container max-w-2xl w-full p-6 md:p-10 bg-white mt-8 relative z-10">
        {/* Form Title */}
        <div className="text-center mb-8">
          <h1 className="font-8bit-headers text-xl md:text-2xl mb-2">
            <span style={{ color: '#4285F4' }}>V</span>
            <span style={{ color: '#EA4335' }}>I</span>
            <span style={{ color: '#FBBC04' }}>B</span>
            <span style={{ color: '#34A853' }}>E</span>
            <span style={{ color: '#4285F4' }}>A</span>
            <span style={{ color: '#EA4335' }}>T</span>
            <span style={{ color: '#FBBC04' }}>H</span>
            <span style={{ color: '#34A853' }}>O</span>
            <span style={{ color: '#4285F4' }}>N</span>
          </h1>
          <p className="font-8bit-text text-lg text-gray-600">Team Registration</p>
        </div>

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
        onClose={() => {
          setModal({ ...modal, isOpen: false });
          if (modal.type === 'success') {
            setShowThankYou(true);
          }
        }}
      />

      {/* Thank You Screen */}
      {showThankYou && (
        <div className="fixed inset-0 flex justify-center items-center p-4 overflow-hidden" style={{ zIndex: 9999, background: 'linear-gradient(135deg, #e3f2fd 0%, #fff9c4 25%, #ffebee 50%, #e8f5e9 75%, #e3f2fd 100%)', backgroundSize: '400% 400%', animation: 'gradientShift 15s ease infinite' }}>
          {/* Animated pixelated elements */}
          <div className="absolute top-10 left-10 w-10 h-10 bg-yellow-400 border-4 border-black animate-bounce" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
          
          {/* Floating Google colored dots */}
          <div className="absolute top-20 right-20 w-12 h-12 border-4 border-black rounded-full animate-pulse" style={{ backgroundColor: '#4285F4' }}></div>
          <div className="absolute bottom-32 left-20 w-12 h-12 border-4 border-black rounded-full animate-pulse" style={{ backgroundColor: '#EA4335', animationDelay: '0.3s' }}></div>
          <div className="absolute top-1/3 right-10 w-12 h-12 border-4 border-black rounded-full animate-pulse" style={{ backgroundColor: '#34A853', animationDelay: '0.6s' }}></div>
          <div className="absolute bottom-1/3 left-1/4 w-10 h-10 border-4 border-black rounded-full animate-pulse" style={{ backgroundColor: '#FBBC04', animationDelay: '0.9s' }}></div>

          {/* Pixelated confetti */}
          <div className="absolute top-1/4 left-1/3 w-6 h-6 border-2 border-black pixel-float" style={{ backgroundColor: '#4285F4' }}></div>
          <div className="absolute top-2/3 right-1/4 w-6 h-6 border-2 border-black pixel-float" style={{ backgroundColor: '#EA4335', animationDelay: '0.3s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-6 h-6 border-2 border-black pixel-float" style={{ backgroundColor: '#34A853', animationDelay: '0.6s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-6 h-6 border-2 border-black pixel-float" style={{ backgroundColor: '#FBBC04', animationDelay: '0.9s' }}></div>

          {/* Pixelated stars */}
          <div className="absolute top-16 left-1/2 text-2xl animate-bounce">⭐</div>
          <div className="absolute bottom-16 right-1/2 text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>⭐</div>
          <div className="absolute top-1/2 left-16 text-xl animate-pulse">✨</div>
          <div className="absolute top-1/2 right-16 text-xl animate-pulse" style={{ animationDelay: '0.3s' }}>✨</div>

          {/* Trophy/Medal elements */}
          <div className="absolute top-24 right-1/4 text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>🏆</div>
          <div className="absolute bottom-24 left-1/4 text-3xl animate-bounce" style={{ animationDelay: '0.7s' }}>🎮</div>

          {/* Additional confetti squares */}
          <div className="absolute top-0 left-1/4 w-4 h-4 border-2 border-black confetti" style={{ backgroundColor: '#4285F4', animationDelay: '0s' }}></div>
          <div className="absolute top-0 left-1/2 w-4 h-4 border-2 border-black confetti" style={{ backgroundColor: '#EA4335', animationDelay: '0.5s' }}></div>
          <div className="absolute top-0 left-3/4 w-4 h-4 border-2 border-black confetti" style={{ backgroundColor: '#FBBC04', animationDelay: '1s' }}></div>
          <div className="absolute top-0 right-1/4 w-4 h-4 border-2 border-black confetti" style={{ backgroundColor: '#34A853', animationDelay: '1.5s' }}></div>
          <div className="absolute top-0 right-1/3 w-4 h-4 border-2 border-black confetti" style={{ backgroundColor: '#4285F4', animationDelay: '2s' }}></div>
          <div className="absolute top-0 left-1/3 w-4 h-4 border-2 border-black confetti" style={{ backgroundColor: '#EA4335', animationDelay: '2.5s' }}></div>

          <div className="nes-container p-8 max-w-lg w-full text-center relative z-10">
            <div className="mb-6">
              <div className="inline-block bg-yellow-400 p-4 border-4 border-black mb-4 animate-bounce">
                <Check size={48} className="text-green-600" />
              </div>
            </div>
            
            <h1 className="font-8bit-headers text-2xl md:text-3xl mb-6 text-green-600">
              THANK YOU!
            </h1>
            
            <p className="font-8bit-text text-xl md:text-2xl mb-4">
              Registration Successful!
            </p>
            
            <p className="font-8bit-text text-lg mb-6 text-gray-700">
              Your team has been registered for the hackathon. Check Whatsapp group for further details!
            </p>

            {/* PDF Download Link */}
            <div className="mb-6">
              <a
                href={instructionsPDF}
                download="The-8-Bit-Prompt.pdf"
                className="inline-block bg-yellow-400 text-black font-8bit-headers text-xs py-3 px-6 border-4 border-black pixel-shadow uppercase tracking-widest hover:bg-yellow-500 transition-colors"
              >
                📄 VIEW ALL INSTRUCTIONS
              </a>
            </div>

            <button
              onClick={() => setShowThankYou(false)}
              className="bg-blue-500 text-white font-8bit-headers text-sm py-4 px-8 border-4 border-black pixel-shadow uppercase tracking-widest hover:bg-blue-600 transition-colors"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-8 mb-4 text-center z-10">
        <div className="inline-block bg-white border-4 border-black px-6 py-3 pixel-shadow">
          <p className="font-8bit-text text-sm md:text-base">
            <span className="text-red-500"></span> Enigma{' '}
            <span className="text-blue-600">VSSUT</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
