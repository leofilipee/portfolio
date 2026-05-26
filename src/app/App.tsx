import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Certifications as Achievements } from './components/sections/Certifications';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="font-sans bg-white text-gray-900 scroll-smooth">
      <Sidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main className="lg:ml-72 transition-all duration-300">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Achievements />
        <Projects />
        <Contact />
        
        {/* Simple Footer */}
        <footer className="bg-gray-50 py-8 text-center border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Leo Filipe. Desenvolvido com React, Tailwind CSS e AI Code Assist.
          </p>
        </footer>
      </main>
    </div>
  );
}
