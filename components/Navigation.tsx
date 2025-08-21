"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Linkedin, MessageCircle} from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface NavigationProps {
  scrollY: number;
}

export default function Navigation({ scrollY }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-slate-900/50 backdrop-blur-sm"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.webp"
              alt="UWA Data Science Logo"
              width={150}
              height={90}
              className="rounded-lg"
            />
          
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Home
            </button>

            <button onClick={() => scrollToSection('what-we-do')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200">
                About
              </button>

            <button
              onClick={() => scrollToSection('events')}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection('committee')}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              Committee
            </button>
            <button onClick={() => scrollToSection('sponsors')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200">
                Sponsors
              </button>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://www.instagram.com/dscuwa?igsh=MW02bjk4ZnA0dnV1Zg==" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/dscuwa/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
              <Linkedin size={20} />
            </a>

            <a href="https://discord.gg/ZBY8jC4cnn" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">
              <Image src ="/discord.png" alt="Discord" width={20} height={20} className="rounded-full" />
            </a>
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('events')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection('committee')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200"
              >
                Committee
              </button>
              <div className="flex items-center space-x-4 px-3 py-2">
                <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  <Linkedin size={20} />
                </a>
                <a href="https://discord.gg/ZBY8jC4cnn" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">
                  <Image src ="/discord.png" alt="Discord" width={20} height={20} className="rounded-full" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}