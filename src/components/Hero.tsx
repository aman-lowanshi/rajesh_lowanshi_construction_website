import React from 'react';
import { ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = "919876543210"; // Placeholder number
  const whatsappMsg = encodeURIComponent("Hello Rajesh Lowanshi Construction, I would like to get a free estimate.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-32 md:pb-32 flex items-center min-h-[90vh] md:min-h-screen overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-brand-dark">
        <img 
          src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern residential construction site" 
          className="w-full h-full object-cover object-center opacity-60 md:opacity-100"
        />
        {/* Solid dark gradient on the left, fading to transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#172133] via-[#172133]/95 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Residential<br />
            Construction Services<br />
            in <span className="text-brand-accent">Indore</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 font-normal leading-relaxed max-w-2xl">
            End-to-end construction with clear pricing and reliable timelines.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-brand-accent hover:bg-orange-600 text-white px-8 py-3.5 rounded-md font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-brand-accent/25 active:scale-95"
            >
              Get Free Quote
              <ArrowRight size={18} />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3.5 rounded-md font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-[#25D366]/25 active:scale-95"
            >
              <MessageCircle size={18} />
              WhatsApp Now
            </a>
          </div>

          {/* Trust Line */}
          <div className="mt-8 flex items-center gap-2 text-gray-300 text-sm font-medium">
            <CheckCircle2 size={16} className="text-brand-accent flex-shrink-0" />
            <span>Free consultation &bull; No hidden charges</span>
          </div>
        </div>
      </div>
    </section>
  );
}
