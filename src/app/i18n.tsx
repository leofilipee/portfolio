import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Language = 'pt' | 'en' | 'fr';

const monthNames: Record<Language, string[]> = {
  pt: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  fr: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
};

const monthLookup: Record<string, number> = {
  Jan: 0,
  Fev: 1,
  Feb: 1,
  Mar: 2,
  Abr: 3,
  Apr: 3,
  Mai: 4,
  May: 4,
  Jun: 5,
  Jul: 6,
  Ago: 7,
  Aug: 7,
  Set: 8,
  Sep: 8,
  Out: 9,
  Oct: 9,
  Nov: 10,
  Dez: 11,
  Dec: 11,
};

type Translations = {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    education: string;
    achievements: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    projects: string;
    contact: string;
  };
  about: {
    title: string;
    subtitle: string;
    heading: string;
  };
  skills: {
    title: string;
    subtitle: string;
    hard: string;
    soft: string;
    languages: string;
    sector: string;
    showMore: string;
    showLess: string;
    dialogDescription: string;
  };
  experience: {
    title: string;
    subtitle: string;
    techTab: string;
    generalTab: string;
  };
  education: {
    title: string;
    subtitle: string;
    academicTab: string;
    extracurricularTab: string;
  };
  languageSwitcher: {
    title: string;
  };
  footer: {
    credit: string;
  };
};

const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      skills: 'Skills',
      experience: 'Experiências',
      education: 'Formações',
      achievements: 'Conquistas',
      projects: 'Projetos',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Olá, eu sou o',
      projects: 'Ver Projetos',
      contact: 'Contactar',
    },
    about: {
      title: 'Sobre Mim',
      subtitle: 'Software Engineer focado em criar soluções digitais sólidas, intuitivas e escaláveis para diferentes contextos.',
      heading: 'Software Engineer',
    },
    skills: {
      title: 'Skills',
      subtitle: 'Um retrato mais completo das competências que uso para construir software, colaborar com equipas e comunicar com clareza.',
      hard: 'Hard',
      soft: 'Soft',
      languages: 'Idiomas',
      sector: 'Conhecimento do setor',
      showMore: 'Mostrar mais...',
      showLess: 'Mostrar menos...',
      dialogDescription: 'Lista completa de competências desta categoria.',
    },
    experience: {
      title: 'Experiências',
      subtitle: 'Um resumo do meu percurso profissional, dividido entre a área tecnológica e outras experiências de mercado de trabalho.',
      techTab: 'Área da Informática',
      generalTab: 'Áreas Gerais',
    },
    education: {
      title: 'Formações',
      subtitle: 'O meu percurso académico e as formações extracurriculares que complementam os meus conhecimentos.',
      academicTab: 'Académicas',
      extracurricularTab: 'Extra-Curriculares',
    },
    languageSwitcher: {
      title: 'Idioma',
    },
    footer: {
      credit: 'Desenvolvido com React, Tailwind CSS e AI Code Assist.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      achievements: 'Achievements',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hi, I am',
      projects: 'View Projects',
      contact: 'Contact Me',
    },
    about: {
      title: 'About Me',
      subtitle: 'Software Engineer focused on building solid, intuitive and scalable digital solutions for different contexts.',
      heading: 'Software Engineer',
    },
    skills: {
      title: 'Skills',
      subtitle: 'A more complete overview of the skills I use to build software, collaborate with teams and communicate clearly.',
      hard: 'Hard',
      soft: 'Soft',
      languages: 'Languages',
      sector: 'Industry Knowledge',
      showMore: 'Show more...',
      showLess: 'Show less...',
      dialogDescription: 'Full list of skills in this category.',
    },
    experience: {
      title: 'Experience',
      subtitle: 'A summary of my professional path, split between technology and other work experiences.',
      techTab: 'IT Area',
      generalTab: 'General Areas',
    },
    education: {
      title: 'Education',
      subtitle: 'My academic background and extra-curricular training that complements my knowledge.',
      academicTab: 'Academic',
      extracurricularTab: 'Extra-Curricular',
    },
    languageSwitcher: {
      title: 'Language',
    },
    footer: {
      credit: 'Built with React, Tailwind CSS and AI Code Assist.',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      experience: 'Expériences',
      education: 'Formations',
      achievements: 'Réalisations',
      projects: 'Projets',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Bonjour, je suis',
      projects: 'Voir les projets',
      contact: 'Me contacter',
    },
    about: {
      title: 'À propos de moi',
      subtitle: 'Software Engineer concentré sur la création de solutions numériques solides, intuitives et évolutives pour différents contextes.',
      heading: 'Software Engineer',
    },
    skills: {
      title: 'Compétences',
      subtitle: 'Un aperçu plus complet des compétences que j’utilise pour construire des logiciels, collaborer avec les équipes et communiquer clairement.',
      hard: 'Techniques',
      soft: 'Humaines',
      languages: 'Langues',
      sector: 'Connaissance du secteur',
      showMore: 'Voir plus...',
      showLess: 'Voir moins...',
      dialogDescription: 'Liste complète des compétences de cette catégorie.',
    },
    experience: {
      title: 'Expériences',
      subtitle: 'Un résumé de mon parcours professionnel, entre le domaine technologique et d’autres expériences de travail.',
      techTab: 'Informatique',
      generalTab: 'Autres domaines',
    },
    education: {
      title: 'Formations',
      subtitle: 'Mon parcours académique et les formations complémentaires qui enrichissent mes connaissances.',
      academicTab: 'Académiques',
      extracurricularTab: 'Extra-scolaires',
    },
    languageSwitcher: {
      title: 'Langue',
    },
    footer: {
      credit: 'Développé avec React, Tailwind CSS et AI Code Assist.',
    },
  },
};

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = 'site-language';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt');

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY) as Language | null;
    if (storedLanguage === 'pt' || storedLanguage === 'en' || storedLanguage === 'fr') {
      setLanguageState(storedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo<I18nContextValue>(() => ({
    language,
    setLanguage: setLanguageState,
    t: translations[language],
  }), [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useLanguage() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function formatMonthYear(period: string, language: Language) {
  const normalized = period.trim();

  if (normalized.toLowerCase() === 'presente' || normalized.toLowerCase() === 'present' || normalized.toLowerCase() === 'présent') {
    return language === 'pt' ? 'Presente' : language === 'en' ? 'Present' : 'Présent';
  }

  const [start, end] = normalized.split(' - ');
  const formatSegment = (segment: string) => {
    const [monthToken, year] = segment.split(' ');
    const monthIndex = monthLookup[monthToken];
    if (monthIndex === undefined || !year) {
      return segment;
    }

    return `${monthNames[language][monthIndex]} ${year}`;
  };

  if (!end) {
    return formatSegment(start);
  }

  const translatedEnd = end === 'Presente' ? (language === 'pt' ? 'Presente' : language === 'en' ? 'Present' : 'Présent') : formatSegment(end);
  return `${formatSegment(start)} - ${translatedEnd}`;
}
