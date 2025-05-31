import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      {/* Header */}
      <header className="relative z-10 px-6 py-4 w-full">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-5">
          <div className="w-40 h-20 bg-gradient-to-r from-black-500 to-grey-500 rounded-lg flex items-center justify-center">
  <img
    src="https://ecellnew-website-one.vercel.app/static/media/Ecelllogo.833d6f2a2f0fcd5a305c.png"
    alt="Ecell Logo"
    className="w-5 h-5"
  />
</div>

            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              E-Cell VSSUT
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="https://eastvssut.vercel.app/#about-section" className="hover:text-purple-400 transition-colors">About</a>
            <a href="https://esummitvssut.in/events" className="hover:text-purple-400 transition-colors">Events</a>
            <a href="https://esummitvssut.in/contact" className="hover:text-purple-400 transition-colors">Team</a>
            <Link to="/testimonials">
              <button className="px-4 py-2 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-md transition-colors">
                View Testimonials
              </button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center flex flex-col items-center justify-center flex-grow">
        {/* Removed gradient background div as it's now on the body */}
        <div className="relative max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Entrepreneurship
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Redefined
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          with the aim of building nation wide network of entrepreneurship cells.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-md shadow-lg transition duration-300">
              Join E-Cell
              {/* ArrowRight Icon placeholder */}
               <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-5 h-5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <Link to="/testimonials">
              <button className="px-8 py-3 text-lg border border-gray-600 text-gray-300 hover:bg-gray-800 rounded-md transition duration-300">
                View Testimonials
                {/* Star Icon placeholder */}
                 <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-5 h-5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </button>
            </Link>
          </div>
        </div>
      </section>




      {/* Features Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-black to-gray-900 w-full">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Why Choose E-Cell?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
              
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                {/* Lightbulb Icon placeholder */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v8z"/><path d="M9 18h6"/><path d="M12 22v-4"/></svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">Innovation Hub</h3>
              
              <p className="text-gray-300 leading-relaxed">
                Transform your innovative ideas into successful startups with our comprehensive support system and mentorship programs.
              </p>
            
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
              
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                {/* Users Icon placeholder */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">Community</h3>
              
              <p className="text-gray-300 leading-relaxed">
                Connect with like-minded entrepreneurs, industry experts, and successful alumni in our thriving ecosystem.
              </p>
            
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
              
              
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                {/* TrendingUp Icon placeholder */}
                 <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">Growth</h3>
              
              <p className="text-gray-300 leading-relaxed">
                Scale your startup with our resources, funding opportunities, and strategic partnerships with industry leaders.
              </p>
            
            </div>
          
          </div>
        
        </div>
      
      </section>

      <section className="px-6 py-20 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of successful entrepreneurs who started their journey with E-Cell
          </p>
          <Link to="/testimonials">
            <button className="px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-md shadow-lg transition duration-300">
              View Success Stories
              {/* ArrowRight Icon placeholder */}
               <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-5 h-5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8 w-full">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
             <div className="w-16 h-16 bg-gradient-to-r from-grey-500 to-grey-100 rounded-lg flex items-center justify-center shadow-lg">
                <img
                  src="https://ecellnew-website-one.vercel.app/static/media/Ecelllogo.833d6f2a2f0fcd5a305c.png"
                  alt="Ecell Logo"
                  className="w-20 h-12 filter brightness-75 bg-black"
                />
              </div>
          </div>
          <p className="text-gray-400">
          © Copyright E-Cell VSSUT | All rights reserved. Designed by E-CELL VSSUT, Burla.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;