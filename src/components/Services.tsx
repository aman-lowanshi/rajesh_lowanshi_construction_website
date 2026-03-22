import React from 'react';
import { Home, Calculator, Key, PenTool } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Architectural & 3D Design',
      description: 'Custom home maps, floor plans, and realistic 3D elevation designs to visualize your dream home before building.',
      icon: <PenTool size={36} className="text-brand-accent" />
    },
    {
      title: 'Detailed Estimation',
      description: 'Accurate, transparent, and comprehensive cost estimation for your entire home construction project with zero hidden fees.',
      icon: <Calculator size={36} className="text-brand-accent" />
    },
    {
      title: 'Full Home Construction',
      description: 'End-to-end residential construction services, from foundation to finishing, built with premium quality materials.',
      icon: <Home size={36} className="text-brand-accent" />
    },
    {
      title: 'Complete Turnkey Solutions',
      description: 'We handle absolutely everything related to your home construction. You just turn the key and move into your new home.',
      icon: <Key size={36} className="text-brand-accent" />
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-2">
            From initial 3D designs to handing over the keys, we provide comprehensive solutions for your dream home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-brand-accent group">
              <div className="mb-6 bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
