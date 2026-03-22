import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-light">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
