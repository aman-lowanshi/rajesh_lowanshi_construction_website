import React from 'react';
import { Users, ShieldCheck, Banknote, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Experienced Team',
      description: 'Decades of combined experience in the construction industry.',
      icon: <Users size={32} className="text-brand-dark" />
    },
    {
      title: 'Quality Materials',
      description: 'We source only the best materials to ensure durability and safety.',
      icon: <ShieldCheck size={32} className="text-brand-dark" />
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden costs. Clear, detailed estimates before we begin.',
      icon: <Banknote size={32} className="text-brand-dark" />
    },
    {
      title: 'On-Time Delivery',
      description: 'Strict adherence to project timelines without compromising quality.',
      icon: <Clock size={32} className="text-brand-dark" />
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Why Choose Us?</h2>
            <div className="w-24 h-1 bg-brand-accent mb-8"></div>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              At Rajesh Lowanshi Construction, we believe in building more than just structures; we build trust. Our commitment to excellence and customer satisfaction sets us apart in the industry.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-dark">{reason.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000" 
              alt="Construction Team" 
              className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
