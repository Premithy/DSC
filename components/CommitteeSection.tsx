"use client";

import {Linkedin} from 'lucide-react';
import Image from 'next/image';

const executiveTeam = [
  {
    name: "Ian",
    role: "President",
    image: "/ian.jpeg",
    bio: "Leading the club with passion.",
    social: {
      linkedin: "https://www.linkedin.com/in/ianoon/",
      github: "#",
      email: "#"
    }
  },
  {
    name: "Atikant",
    role: "Vice President",
    image: "/atikant .jpeg",
    bio: "Supporting club operations and member engagement initiatives.",
    social: {
      linkedin: "https://www.linkedin.com/in/atikantjain/",
      github: "#",
      email: "#"
    }
  },
  {
    name: "Kelly Snow",
    role: "Secretary",
    image: "/kelly.jpeg",
    bio: "Managing communications and maintaining club documentation.",
    social: {
      linkedin: "https://www.linkedin.com/in/kelly-snow-418830244/",
      github: "#",
      email: "#"
    }
  },
  {
    name: "Aswathy",
    role: "Treasurer",
    image: "/ash.jpeg",
    bio: "Overseeing club finances and budget management.",
    social: {
      linkedin: "https://www.linkedin.com/in/aswathy-ms-9777491b3/",
      github: "#",
      email: "#"
    }
  },
  {
    name: "Gargi Garg",
    role: "OCM",
    image: "/garg.png",
    bio: "Supporting executive team with various club activities.",
    social: {
      linkedin: "https://www.linkedin.com/in/gargi-garg-9542b9286/?trk=opento_nprofile_details",
      github: "#",
      email: "#"
    }
  }
];

const ordinaryCommittee = [
  {
    name: "Prem Patel",
    role: "Undergraduate Rep",
    image: "/prem.jpeg",
    bio: "Representing undergraduate student interests and concerns.",
    social: {
      linkedin: "https://www.linkedin.com/in/prem-patel-694078272/",
      github: "#",
      email: "#"
    }
  },
  {
    name: "Arzoo",
    role: "Postgraduate Rep",
    image: "/arzoo.jpeg",
    bio: "Advocating for postgraduate student needs and opportunities.",
    social: {
      linkedin: "https://www.linkedin.com/in/arzoo-a-865669337/",
      github: "#",
      email: "#"
    }
  },
  {
    name: "Prabhjot Kaur",
    role: "Social Media Manager",
    image: "/prabh.jpeg",
    bio: "Managing our digital presence and online engagement.",
    social: {
      linkedin: "https://www.linkedin.com/in/prabhjot-kaur-216030315/",
      github: "#",
      email: "#"
    }
  },
  {
    name: "Abby",
    role: "Sponsorship Manager",
    image: "/profile.webp",
    bio: "Building partnerships with industry and securing sponsorships.",
    social: {
      linkedin: "https://www.linkedin.com/in/abbey-smith-4500532b4/",
      github: "#",
      email: "#"
    }
  },
  {
    name: "Evanna",
    role: "International Rep",
    image: "/evanna.jpeg",
    bio: "Supporting international students and promoting diversity.",
    social: {
      linkedin: "https://www.linkedin.com/in/evanna-susan-8550881a9/",
      github: "#",
      email: "#"
    }
  },
  {
    name: "Ali",
    role: "Logistics Manager",
    image: "/Ali.jpeg",
    bio: "Coordinating event logistics and venue management.",
    social: {
      linkedin: "https://www.linkedin.com/in/ali-fadaee-721249226/",
      github: "#",
      email: "#"
    }
  },
  {
    name: "Tanmayee",
    role: "Marketing Manager",
    image: "/tanmayee.jpeg",
    bio: "Developing marketing strategies and promotional campaigns.",
    social: {
      linkedin: "https://www.linkedin.com/in/tanmayee-angampally-75329a264/",
      github: "#",
      email: "#"
    }
  },
  {
    name: "Celine",
    role: "OCM",
    image: "/celine .jpeg",
    bio: "Supporting committee operations and club initiatives.",
    social: {
      linkedin: "https://www.linkedin.com/in/celineeloise/",
      github: "#",
      email: "#"
    }
  }
];

interface CommitteeMemberProps {
  member: typeof executiveTeam[0];
}

function CommitteeMember({ member }: CommitteeMemberProps) {
  return (
    <div className="bg-slate-900/80 rounded-xl p-6 border border-slate-700 hover:border-purple-400 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 group overflow-hidden relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/5 group-hover:via-purple-600/5 group-hover:to-pink-600/5 transition-all duration-500 rounded-xl" />
      
      <div className="text-center relative z-10">
        <div className="relative mb-4">
          
          <Image 
            src={member.image}
            alt={member.name}
            width={128}
            height={128}
            className ="rounded-full mx-auto object-cover border-4 border-slate-600 group-hover:border-purple-400 transition-all duration-500 group-hover:rotate-3 group-hover:scale-105"
          />
          {/* Glowing ring effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500" />
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">
          {member.name}
        </h3>
        
        <p className="text-blue-400 font-medium mb-3 group-hover:text-purple-400 transition-colors duration-300">
          {member.role}
        </p>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
          {member.bio}
        </p>
        
        <div className="flex justify-center space-x-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={member.social.linkedin}
            className="text-gray-400 hover:text-blue-400 transition-all duration-200 hover:scale-110"
          >
            <Linkedin size={20} />
          </a>

        </div>
      </div>
    </div>
  );
}

export default function CommitteeSection() {
  return (
    <section id="committee" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#62CFF4] to-[#2C67F2] bg-clip-text text-transparent">
            Meet Our Committee
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate students dedicated to fostering a thriving data science community at UWA.
          </p>
        </div>

        {/* Executive Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Executive Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {executiveTeam.map((member, index) => (
              <CommitteeMember key={index} member={member} />
            ))}
          </div>
        </div>

        {/* Ordinary Committee */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Ordinary Committee
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ordinaryCommittee.map((member, index) => (
              <CommitteeMember key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}