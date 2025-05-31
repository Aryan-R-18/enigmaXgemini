import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: "Sundar Pichai",
    role: "CEO of Google",
    photo: "https://media.fortuneindia.com/fortune-india/import/2022-12/0599e252-e61e-4aa3-be86-54e4761e48f2/Sundar_Pichai_02064_copy.jpg?w=640&auto=format,compress&fit=max&q=70",
    quote: "A person who is happy is not because everything is right in his life, He is happy because his attitude towards everything in his life is right.",
  },
  {
    name: "Elon Musk",
    role: "CEO of Tesla",
    photo: "https://hips.hearstapps.com/hmg-prod/images/elon-musk-gettyimages-2147789844-web-675b2c17301ea.jpg",
    quote: "When something is important enough, you do it even if the odds are not in your favor.",
  },
  {
    name: "Satya Nadella",
    role: "CEO of Microsoft",
    photo: "https://imageio.forbes.com/specials-images/imageserve/5d6ae14f673aa300083caf99/0x0.jpg?format=jpg&crop=2923,2926,x3051,y26,safe&height=416&width=416&fit=bounds",
    quote: "A person who is happy is not because everything is right in his life, He is happy because his attitude towards everything in his life is right.",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  // Auto advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  function prev() {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }

  function next() {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }

  const { name, role, photo, quote } = testimonials[index];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Testimonials
        </h1>
      </div>
      <div className="max-w-xl w-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-10 shadow-2xl text-center relative min-h-[480px] border border-gray-700 hover:border-purple-500 transition-all duration-300">
        <Link to="/">
          <button className="absolute top-4 left-4 text-gray-400 hover:text-purple-400 transition-colors">
            &larr; Back
          </button>
        </Link>
        <div>
          <div className="relative mb-8">
            <img
              src={photo}
              alt={name}
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-purple-500 shadow-lg"
            />
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>
          <p className="text-gray-300 italic mb-6 text-xl leading-relaxed">"{quote}"</p>
          <p className="font-bold text-xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">{name}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
        <div className="flex justify-between w-full px-8 mt-8">
          <button
            onClick={prev}
            className="px-8 py-3 border border-gray-600 text-gray-300 hover:bg-gray-800 rounded-md transition duration-300 transform hover:-translate-x-2 shadow-md text-lg font-semibold"
            aria-label="Previous Testimonial"
          >
            Previous
          </button>
          <button
            onClick={next}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-md transition duration-300 transform hover:translate-x-2 shadow-lg text-lg font-semibold"
            aria-label="Next Testimonial"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
