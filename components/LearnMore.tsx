"use client";

import { Briefcase, Code2, Users, Award } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    title: "Industry Opportunities",
    body:
      "Meet the industry leaders and get a chance to earn an internship and make connections within the industry.",
  },
  {
    icon: Code2,
    title: "Workshops/Lectures",
    body:
      "Informative and hands on sessions in data analysis, ML, AI and many more to build practical and theoretical skills and confidence in a collaborative environment.",
  },
  {
    icon: Users,
    title: "Student Networking",
    body:
      "Connect with peers and professions, via the events, industry nights and compititions. Therefore ending up improving you social network. ",
  },
  {
    icon: Award,
    title: "Hackathon",
    body:
      "Friendly competitions throughout the year, where you can use your fast thinking skills and slove problems as a group.",
  },
];

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center md:text-5xl font-bold mb-12 bg-gradient-to-r from-[#62CFF4] to-[#2C67F2] bg-clip-text text-transparent text-center">
          What We Do
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-slate-900/80 rounded-xl p-6 border border-slate-700 hover:border-purple-400 
                         transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-2xl 
                         hover:shadow-purple-500/20 group overflow-hidden relative"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 
                              group-hover:from-blue-600/5 group-hover:via-purple-600/5 group-hover:to-pink-600/5 
                              transition-all duration-500 rounded-xl" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 
                                flex items-center justify-center mb-5 group-hover:scale-110 
                                transition-transform duration-500">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
