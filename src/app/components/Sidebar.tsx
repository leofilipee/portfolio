import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Sparkles, GraduationCap, Award, FolderGit2, Mail, Github, Linkedin, MessageCircle, ArrowUp } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { useLanguage, type Language } from '../i18n';

import profilePhoto from '../../imports/photo.jpeg';

const navItems = [
  { key: 'home', href: '#hero', icon: Home },
  { key: 'about', href: '#about', icon: User },
  { key: 'skills', href: '#skills', icon: Sparkles },
  { key: 'experience', href: '#experience', icon: Briefcase },
  { key: 'education', href: '#education', icon: GraduationCap },
  { key: 'achievements', href: '#achievements', icon: Award },
  { key: 'projects', href: '#projects', icon: FolderGit2 },
  { key: 'contact', href: '#contact', icon: Mail },
];

function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage, t } = useLanguage();

  const options: Array<{ value: Language; label: string }> = [
    { value: 'en', label: 'EN' },
    { value: 'pt', label: 'PT' },
    { value: 'fr', label: 'FR' },
  ];

  return (
    <div className={compact ? 'inline-flex rounded-full bg-white/90 p-1 shadow-lg border border-gray-200 backdrop-blur' : 'w-full rounded-2xl bg-gray-900 p-2 border border-gray-800'}>
      <div className={compact ? 'flex items-center gap-1' : 'flex items-center justify-between gap-3 px-2 py-1'}>
        {!compact && <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">{t.languageSwitcher.title}</span>}
        <div className="flex gap-1">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setLanguage(option.value)}
              className={`min-w-10 rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                language === option.value
                  ? compact
                    ? 'bg-indigo-600 text-white shadow'
                    : 'bg-indigo-600 text-white shadow'
                  : compact
                    ? 'text-gray-600 hover:text-gray-900'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              aria-pressed={language === option.value}
              aria-label={option.value === 'en' ? 'English' : option.value === 'pt' ? 'Português' : 'Français'}
              title={option.value === 'en' ? 'English' : option.value === 'pt' ? 'Português' : 'Français'}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Sidebar({ mobileMenuOpen, setMobileMenuOpen }: { mobileMenuOpen: boolean, setMobileMenuOpen: (open: boolean) => void }) {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }

      const firstSection = document.getElementById('hero');
      if (firstSection) {
        const rect = firstSection.getBoundingClientRect();
        setShowBackToTop(rect.bottom <= 0);
      } else {
        setShowBackToTop(window.scrollY > 300);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <LanguageSwitcher compact />
      </div>

      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-indigo-600 text-white rounded-full shadow-lg"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`
          lg:hidden fixed bottom-4 right-4 z-50 p-2 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-700
          transition-all duration-300 ease-out
          ${showBackToTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}
        `}
        aria-label="Voltar ao topo"
        title="Voltar ao topo"
      >
        <ArrowUp size={24} />
      </button>

      {/* Sidebar Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-72 bg-[#040b14] text-white z-40 flex flex-col
        transition-transform duration-300 ease-in-out
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col items-center pt-10 pb-6 px-6 border-b border-gray-800">
          <div className="w-32 h-32 rounded-full border-8 border-gray-800 overflow-hidden mb-4 bg-gray-900">
            <ImageWithFallback 
              src={profilePhoto} 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Leo Filipe</h1>
          <div className="flex gap-4 mt-2">
            <a href="https://wa.me/33749648011" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-colors" title="WhatsApp">
              <MessageCircle size={18} />
            </a>
            <a href="https://github.com/leofilipee" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-600 transition-colors" title="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/leofilipee/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#0A66C2] transition-colors" title="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-6">
          <ul className="flex flex-col gap-2 px-4">
            {navItems.map((item) => (
              <li key={item.key}>
                <a 
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group
                    ${activeSection === item.href.substring(1) 
                      ? 'bg-indigo-600/10 text-indigo-400 font-medium' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'}
                  `}
                >
                  <item.icon size={20} className={activeSection === item.href.substring(1) ? 'text-indigo-400' : 'text-gray-400 group-hover:text-indigo-400'} />
                  {t.nav[item.key as keyof typeof t.nav]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-4 pb-4 pt-2 border-t border-gray-800">
          <LanguageSwitcher />
        </div>
      </aside>
    </>
  );
}
