"use client";

import { useState, useEffect } from 'react';
import { ChevronDown, Users, TrendingUp, Brain } from 'lucide-react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToEvents = () => {
    const element = document.getElementById('events');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Made clearer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg-image.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Reduced overlay opacity for clearer image */}
        <div className="absolute inset-0 bg-slate-900/40"></div>
      </div>

      {/* Animated Background Effects - Reduced opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-slate-800/20 to-slate-900/20">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              width: '800px',
              height: '800px',
              left: '50%',
              top: '50%',
              marginLeft: '-400px',
              marginTop: '-400px',
            }}
          />
        </div>
      </div>

      {/* Floating Elements - Reduced opacity */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-1000" />
      </div>

      {/* Content - Enhanced text shadows for better readability */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#62CFF4] to-[#2C67F2] bg-clip-text text-transparent drop-shadow-lg">
            UWA Data Science Club
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Empowering students to explore, learn, and innovate in the world of data science, 
            machine learning, and artificial intelligence.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScyIPRlmyEr4HCRSgauJ3U5WQiRQqyC6UvJwYJN8zLs055j1A/viewform"
            className="bg-gradient-to-r from-[#62CFF4] to-[#2C67F2] hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Join the Club
          </a>
          <button
            onClick={scrollToEvents}
            className="border-2 border-gray-300 text-gray-100 hover:border-white hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 bg-black/20 backdrop-blur-sm"
          >
            Explore Events
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="text-center p-4 bg-slate-900/60 rounded-lg border border-slate-600 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2 text-white drop-shadow-md">Community</h3>
            <p className="text-sm text-gray-100 drop-shadow-md">Connect with like-minded students passionate about data science</p>
          </div>
          <div className="text-center p-4 bg-slate-900/60 rounded-lg border border-slate-600 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2 text-white drop-shadow-md">Growth</h3>
            <p className="text-sm text-gray-100 drop-shadow-md">Develop your skills through workshops, competitions, and projects</p>
          </div>
          <div className="text-center p-4 bg-slate-900/60 rounded-lg border border-slate-600 hover:border-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Brain className="w-8 h-8 text-pink-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2 text-white drop-shadow-md">Innovation</h3>
            <p className="text-sm text-gray-100 drop-shadow-md">Explore cutting-edge AI and machine learning technologies</p>
          </div>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-300 mx-auto cursor-pointer drop-shadow-md" onClick={scrollToEvents} />
        </div>
      </div>
    </section>
  );
}