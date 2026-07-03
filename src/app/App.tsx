import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Certifications as Achievements } from './components/sections/Certifications';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { LanguageProvider, useLanguage } from './i18n';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="font-sans bg-white text-gray-900 scroll-smooth">
        <Sidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        
        <main className="lg:ml-72 transition-all duration-300">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Achievements />
          <Projects />
          <Contact />
          
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  );
}

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-50 py-8 text-center border-t border-gray-200">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Leo Filipe. {t.footer.credit}
      </p>
    </footer>
  );
}
