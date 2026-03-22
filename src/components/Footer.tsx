import React from 'react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const whatsappNumber = "919876543210"; // Placeholder number
  const whatsappMsg = encodeURIComponent("Hello, I'm interested in your construction services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  return (
    <footer className="bg-brand-dark text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Rajesh <span className="text-brand-accent">Lowanshi</span>
            </h3>
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">Construction</p>
            <p className="text-gray-400 max-w-xs">
              Building trust through quality craftsmanship and transparent processes. Your dream home is our mission.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-brand-accent transition-colors">
                <Phone size={20} className="text-brand-accent" />
                <span>+91 98765 43210</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-accent flex-shrink-0 mt-1" />
                <span>
                  123 Construction Avenue,<br />
                  Indore, Madhya Pradesh<br />
                  India 452001
                </span>
              </div>
            </div>
          </div>

          {/* Quick Action */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Connect Instantly</h4>
            <p className="text-gray-400 mb-4">Have a quick question? Message us directly on WhatsApp.</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Rajesh Lowanshi Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
