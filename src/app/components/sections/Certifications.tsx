import React, { useState } from 'react';
import { SectionHeading } from '../SectionHeading';
import { Award, Trophy, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { formatMonthYear, useLanguage } from '../../i18n';

type Item = {
  title: string;
  issuer: string;
  date: string;
  link: string;
  linkText: string;
  icon: typeof Award;
};

const itemsByLanguage: Record<'pt' | 'en' | 'fr', { certifications: Item[]; awards: Item[] }> = {
  pt: {
    certifications: [
      { title: 'Programming with JavaScript', issuer: 'Meta', date: 'Abr 2026', link: 'https://www.coursera.org/account/accomplishments/verify/U6ZPF9MX8810', linkText: 'Exibir credencial', icon: Award },
      { title: 'Introduction to Front-End Development', issuer: 'Meta', date: 'Mar 2026', link: 'https://www.coursera.org/account/accomplishments/verify/9W14H9MGNRU2', linkText: 'Exibir credencial', icon: Award },
    ],
    awards: [
      { title: '2.º Lugar - Hackathon Tech4Good', issuer: 'IADE + PSP', date: 'Mar 2026', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7442480555792711681/', linkText: 'Link', icon: Trophy },
    ],
  },
  en: {
    certifications: [
      { title: 'Programming with JavaScript', issuer: 'Meta', date: 'Apr 2026', link: 'https://www.coursera.org/account/accomplishments/verify/U6ZPF9MX8810', linkText: 'View credential', icon: Award },
      { title: 'Introduction to Front-End Development', issuer: 'Meta', date: 'Mar 2026', link: 'https://www.coursera.org/account/accomplishments/verify/9W14H9MGNRU2', linkText: 'View credential', icon: Award },
    ],
    awards: [
      { title: '2nd Place - Tech4Good Hackathon', issuer: 'IADE + PSP', date: 'Mar 2026', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7442480555792711681/', linkText: 'Link', icon: Trophy },
    ],
  },
  fr: {
    certifications: [
      { title: 'Programming with JavaScript', issuer: 'Meta', date: 'Avr 2026', link: 'https://www.coursera.org/account/accomplishments/verify/U6ZPF9MX8810', linkText: 'Voir la crédential', icon: Award },
      { title: 'Introduction to Front-End Development', issuer: 'Meta', date: 'Mar 2026', link: 'https://www.coursera.org/account/accomplishments/verify/9W14H9MGNRU2', linkText: 'Voir la crédential', icon: Award },
    ],
    awards: [
      { title: '2e place - Hackathon Tech4Good', issuer: 'IADE + PSP', date: 'Mar 2026', link: 'https://www.linkedin.com/feed/update/urn:li:activity:7442480555792711681/', linkText: 'Lien', icon: Trophy },
    ],
  },
};

export function Certifications() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'certifications' | 'awards'>('certifications');

  const items = activeTab === 'certifications' ? itemsByLanguage[language].certifications : itemsByLanguage[language].awards;

  return (
    <section id="achievements" className="py-20 px-8 lg:px-16 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading 
          title={t.nav.achievements} 
          subtitle={language === 'pt' ? 'Um resumo dos meus certificados, participações em eventos e reconhecimentos de destaque.' : language === 'en' ? 'A summary of my certificates, event participation and notable recognitions.' : 'Un résumé de mes certificats, participations à des événements et distinctions notables.'} 
        />

        <div className="flex justify-center mb-10 mt-12">
          <div className="bg-white p-1 rounded-lg inline-flex shadow-sm border border-gray-200">
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'certifications' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {language === 'pt' ? 'Certificações' : language === 'en' ? 'Certifications' : 'Certifications'}
            </button>
            <button
              onClick={() => setActiveTab('awards')}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'awards' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {language === 'pt' ? 'Premiações' : language === 'en' ? 'Awards' : 'Récompenses'}
            </button>
          </div>
        </div>

        <div className="min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all group"
                  >
                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 leading-snug">{item.title}</h3>
                    <p className="text-gray-500 text-sm mb-4">{item.issuer} • {formatMonthYear(item.date, language)}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
                      {item.linkText} <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
