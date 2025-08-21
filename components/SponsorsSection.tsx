"use client";

import Image from "next/image";

const sponsors = [
  { name: "Sponsor 1", logo: "/sponsar1.webp", url: "https://wadsih.org.au/" },
  { name: "Sponsor 2", logo: "/sponsar21.png", url: "https://uwadatainstitute.org.au/" },
  
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-[#62CFF4] to-[#2C67F2] bg-clip-text text-transparent">
          Our Sponsors
        </h2>

        <div className="flex flex-wrap justify-center gap-12">
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={300}
                height={100}
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
