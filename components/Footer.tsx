"use client";

import { Instagram, Linkedin, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              
              <span className="text-xl font-bold text-white">UWA Data Science Club</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering students to explore, learn, and innovate in the world of data science, 
              machine learning, and artificial intelligence at the University of Western Australia.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/dscuwa?igsh=MW02bjk4ZnA0dnV1Zg=="
                className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/dscuwa/"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>

              <a href="https://discord.gg/ZBY8jC4cnn" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">

              <Image src ="/discord.png" alt="Discord" width={20} height={20} className="rounded-full" />
              
            </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('events')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('committee')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Committee
                </button>
              </li>
              <li>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScyIPRlmyEr4HCRSgauJ3U5WQiRQqyC6UvJwYJN8zLs055j1A/viewform"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a
                    href="mailto:dsc.uwa@gmail.com"
                    className="text-white hover:text-blue-400 transition-colors duration-200"
                  >
                    dsc.uwa@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Location</p>
                  <p className="text-white">
                    University of Western Australia<br />
                    Crawley, WA 6009
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 UWA Data Science Club. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://www.linkedin.com/in/prem-patel-694078272/" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Created by Prem Patel
              
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}