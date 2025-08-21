"use client";

import { useState } from 'react';
import { Calendar, Clock, MapPin, DollarSign, Filter, ArrowRight, Star, Zap } from 'lucide-react';
import Link from "next/link";

 
const events = [
  {
    id: 1,
    title: "Computer Vision and Machine Learning Workshop",
    date: "2025/08/28",
    time: "5:00 PM",
    location: "EZONE Central",
    description: "Join us for an exclusive workshop in collaboration with OncoRes Medical, exploring how cutting-edge CV and ML techniques are transforming breast cancer surgery. Learn how OncoRes applies these methods in real-world clinical settings to enhance surgical precision and patient outcomes.",
    image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "$0",
    category: "Workshop",
    level: "Beginner",
    featured: true,
    registrationUrl: "https://campus.hellorubric.com/?eid=38971"
  },
  {
    id: 2,
    title: "Databricks in Action",
    date: "2025/09/18",
    time: "5:00 PM",
    location: "EZONE UWA Student Hub",
    description: "Curious about Databricks and how it’s shaping the future of data? This hands-on workshop is your gateway to exploring one of the most powerful platforms in the industry. Whether you’re a beginner wanting to understand the basics or an experienced user keen to sharpen your skills, you’ll walk away with practical insights and a solid grasp of how Databricks can transform data workflows from raw ingestion to meaningful insights!",
    image: "https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "$0",
    category: "Workshop",
    level: "Beginner",
    featured: false,
    registrationUrl: "https://campus.hellorubric.com/?eid=39022"
  },
  

  
];

const categoryColors = {
  Workshop: "bg-blue-500/20 text-blue-400 border-blue-500/50",
  Competition: "bg-orange-500/20 text-orange-400 border-orange-500/50",
  Panel: "bg-purple-500/20 text-purple-400 border-purple-500/50",
  Social: "bg-green-500/20 text-green-400 border-green-500/50"
};

const levelColors = {
  Beginner: "bg-green-500/20 text-green-300",
  Intermediate: "bg-yellow-500/20 text-yellow-300",
  Advanced: "bg-red-500/20 text-red-300",
  "All Levels": "bg-blue-500/20 text-blue-300"
};

export default function EventsSection() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const categories = ['All', 'Workshop', 'Competition', 'Panel', 'Social'];
  
  const filteredEvents = selectedCategory === 'All' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getAttendancePercentage = (attendees: number, maxAttendees: number) => {
    return (attendees / maxAttendees) * 100;
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#62CFF4] to-[#2C67F2] bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join us for workshops, competitions, and networking events designed to enhance your data science journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Filter className="w-5 h-5 text-gray-400 mt-2 mr-2" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#62CFF4] to-[#2C67F2] text-white shadow-lg'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700 border border-slate-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.slice(0, visibleCount).map((event) => (
            <div
              key={event.id}
              className={`bg-slate-900/90 rounded-2xl overflow-hidden border transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-2xl group relative ${
                hoveredCard === event.id ? 'border-blue-500 shadow-blue-500/25' : 'border-slate-700'
              } ${event.featured ? 'ring-2 ring-yellow-500/50' : ''}`}
              onMouseEnter={() => setHoveredCard(event.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Featured Badge */}
              {event.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Featured
                </div>
              )}

              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category and Level Badges */}
                <div className="absolute top-4 right-4 space-y-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm ${categoryColors[event.category as keyof typeof categoryColors]}`}>
                    {event.category}
                  </span>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${levelColors[event.level as keyof typeof levelColors]}`}>
                    {event.level}
                  </div>
                </div>

                
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                  {event.title}
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-4 h-4 mr-3 text-blue-400" />
                    <span className="text-sm font-medium">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 mr-3 text-purple-400" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-3 text-pink-400" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <DollarSign className="w-4 h-4 mr-3 text-green-400" />
                    <span className="text-sm">{event.price} </span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {event.description}
                </p>
                
                <div className="flex gap-3">
                  <Link 
                    href={event.registrationUrl}
                    className = "flex-1 bg-gradient-to-r from-[#62CFF4] to-[#2C67F2] hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                    <span>Register Now</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button 
                    type = "button"
                    onClick={() => alert(`Quick action triggered for: ${event.title}`)}
                    className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white rounded-lg transition-all duration-300 border border-slate-600 hover:border-slate-500">
                    <Zap className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        
        <div className="text-center mt-12">
          {visibleCount < filteredEvents.length && (
            <button
              type = "button"
              onClick={() => setVisibleCount(visibleCount + 3)}
              className="bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border border-slate-600 hover:border-slate-500">
            Load More Events
          </button>
          )}
        </div>
      </div>
    </section>
  );
}