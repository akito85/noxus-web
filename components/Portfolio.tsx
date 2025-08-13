'use client'

import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "BRISMA - Bank BRI Management Audit System",
      description: "Management Audit",
      tag: "finance",
      type: "highlight",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=500&fit=crop"
    },
    {
      id: 2,
      title: "Government Portal System",
      description: "Public Service Platform",
      tag: "government",
      type: "highlight",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=500&fit=crop"
    },
    {
      id: 3,
      title: "FinTech Mobile App",
      description: "Digital Banking Solution",
      tag: "finance",
      type: "",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "Online Shopping Experience",
      tag: "e-commerce",
      type: "",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Smart City Dashboard",
      description: "Urban Management System",
      tag: "government",
      type: "",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=400&h=400&fit=crop"
    },
    {
      id: 6,
      title: "AI Analytics Platform",
      description: "Machine Learning Dashboard",
      tag: "tech",
      type: "",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop"
    },
    {
      id: 7,
      title: "Payment Gateway",
      description: "Secure Transaction System",
      tag: "finance",
      type: "",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&h=400&fit=crop"
    },
    {
      id: 8,
      title: "Blockchain Voting System",
      description: "Electoral Management Platform",
      tag: "government",
      type: "",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop"
    },
    {
      id: 9,
      title: "Cloud Infrastructure",
      description: "Enterprise Solutions",
      tag: "tech",
      type: "",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop"
    }
  ];

  const filterCategories = [
    { key: 'all', label: 'All Projects' },
    { key: 'finance', label: 'Finance' },
    { key: 'e-commerce', label: 'E-Commerce' },
    { key: 'government', label: 'Government' },
    { key: 'tech', label: 'Tech' }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tag === activeFilter);

  const highlightProjects = filteredProjects.filter(project => project.type === 'highlight');
  const regularProjects = filteredProjects.filter(project => project.type === '');

  const ProjectCard = ({ project, isHighlight = false }) => (
    <div
      className={`${
        isHighlight 
          ? 'w-[1200px] h-[500px]' 
          : 'flex-1 h-96 max-w-96 min-w-96'
      } rounded-[30px] outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start overflow-hidden relative group cursor-pointer transition-all duration-300 hover:outline-white/20 hover:scale-[1.02] hover:shadow-2xl`}
    >
      <img
        className="absolute inset-0 w-full h-full object-cover rounded-[20px] transition-transform duration-500 group-hover:scale-110"
        src={project.image}
        alt={project.title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 w-full h-28 px-4 py-3 bg-stone-900/40 backdrop-blur-xl flex flex-col justify-center items-start gap-2 z-10 transition-all duration-300 group-hover:bg-stone-900/60">
        <div className="w-full text-white text-xl font-bold font-['Satoshi_Variable'] leading-7 transition-transform duration-300 group-hover:translate-y-[-2px]">
          {project.title}
        </div>
        <div className="w-full text-white text-sm font-normal font-['Satoshi_Variable'] leading-tight opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {project.description}
        </div>
      </div>
    </div>
  );

  return (
    <div className="self-stretch min-h-screen px-8 md:px-28 py-20 bg-neutral-950 flex flex-col justify-start items-center gap-10">
      {/* Filter Navigation */}
      <div className="flex justify-start items-start gap-5 flex-wrap">
        {filterCategories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveFilter(category.key)}
            className={`h-9 flex flex-col justify-center items-center transition-all duration-300 group ${
              activeFilter === category.key ? 'text-red-800' : 'text-white/70 hover:text-white'
            }`}
          >
            <div className="flex-1 py-4 flex flex-col justify-center items-center gap-2.5">
              <div className="justify-center text-sm font-normal font-['Satoshi_Variable'] leading-tight transition-colors duration-300">
                {category.label}
              </div>
            </div>
            <div 
              className={`self-stretch h-0 border-2 border-red-800 transition-all duration-300 ${
                activeFilter === category.key ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Project Highlights */}
      <div className="w-full max-w-[1200px] flex flex-col gap-10">
        {highlightProjects.map((project, index) => (
          <div
            key={project.id}
            className="opacity-0 animate-fadeInUp"
            style={{ 
              animation: `fadeInUp 0.6s ease-out ${index * 0.2}s forwards` 
            }}
          >
            <ProjectCard project={project} isHighlight={true} />
          </div>
        ))}
      </div>

      {/* Regular Projects Grid */}
      {regularProjects.length > 0 && (
        <div className="self-stretch flex justify-center items-start gap-10 flex-wrap">
          {regularProjects.map((project, index) => (
            <div
              key={project.id}
              className="opacity-0 animate-fadeInUp"
              style={{ 
                animation: `fadeInUp 0.6s ease-out ${(highlightProjects.length + index) * 0.1}s forwards` 
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}

      {/* Load More Button */}
      {filteredProjects.length > 0 && (
        <button className="h-11 min-w-28 p-2 rounded-sm outline outline-1 outline-offset-[-1px] outline-white flex flex-col justify-center items-center transition-all duration-300 hover:bg-white hover:text-neutral-950 hover:scale-105 hover:shadow-lg group">
          <div className="text-center justify-start text-white text-base font-normal font-['Satoshi_Variable'] leading-normal group-hover:text-neutral-950 transition-colors duration-300">
            Load More
          </div>
        </button>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 opacity-0 animate-fadeInUp" style={{ animation: 'fadeInUp 0.6s ease-out forwards' }}>
          <div className="text-white/50 text-lg font-['Satoshi_Variable'] mb-2">
            No projects found
          </div>
          <div className="text-white/30 text-sm font-['Satoshi_Variable']">
            Try selecting a different category
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
