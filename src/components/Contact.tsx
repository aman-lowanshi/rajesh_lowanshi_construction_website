import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'Full Home Construction',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', phone: '', projectType: 'Full Home Construction', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-brand-gray">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Form Section */}
          <div className="p-6 sm:p-8 md:p-12 md:w-3/5 order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-2">Get a Free Quote</h2>
            <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">Fill out the form below and our team will get back to you within 24 hours.</p>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md border border-green-200 text-sm md:text-base">
                Thank you! Your request has been received. We'll contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all text-base"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all text-base"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all bg-white text-base"
                >
                  <option value="Full Home Construction">Full Home Construction</option>
                  <option value="3D Design & Mapping">3D Design & Mapping</option>
                  <option value="Home Estimation">Home Estimation</option>
                  <option value="Turnkey Project">Turnkey Project</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message / Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all resize-none text-base"
                  placeholder="Tell us about your plot size, location, or specific needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-dark hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-md transition-colors duration-200 text-lg active:scale-[0.98]"
              >
                Get Free Consultation
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="bg-brand-accent p-8 md:p-12 md:w-2/5 text-white flex flex-col justify-center order-1 md:order-2">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Let's Build Together</h3>
            <p className="mb-6 md:mb-8 text-orange-100 text-sm md:text-base leading-relaxed">
              Ready to start your construction journey? Our experts are here to guide you through every step, from blueprints to the final coat of paint.
            </p>
            <ul className="space-y-4 font-medium text-sm md:text-base">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">✓</div>
                Free Site Visit
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">✓</div>
                Detailed Estimation
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">✓</div>
                Expert Consultation
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
