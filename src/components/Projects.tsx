import React from 'react';

export default function Projects() {
  const projects = [
    { id: 1, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800', title: 'Modern Villa' },
    { id: 2, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800', title: 'Luxury Duplex' },
    { id: 3, image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800', title: 'Interior Renovation' },
    { id: 4, image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=800', title: 'Turnkey Residence' },
    { id: 5, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800', title: 'Custom Home' },
    { id: 6, image: 'https://images.unsplash.com/photo-1505843513577-22bb7abd211c?auto=format&fit=crop&q=80&w=800', title: 'Apartment Complex' },
  ];

  return (
    <section id="projects" className="py-20 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recent Projects</h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
            Take a look at some of our successfully completed construction and renovation projects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
