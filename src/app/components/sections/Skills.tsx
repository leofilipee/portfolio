import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from '../SectionHeading';
import { useIsMobile } from '../ui/use-mobile';
import { useLanguage } from '../../i18n';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';

const hardSkills = [
  'Computer Programming',
  'JavaScript',
  'React',
  'Front-end Development',
  'Web Development',
  'Responsive Web Design',
  'Web Design',
  'UI Design',
  'Software Design',
  'Software Development',
  'Web Applications',
  'Web Development Tools',
  'Bootstrap',
  'Tailwind CSS',
  'HTML5',
  'HTML',
  'CSS',
  'JSON',
  'Python',
  'Java',
  'Node.js',
  'MySQL',
  'PyQt5',
  'Qt Designer',
  'GML',
  'Game Design',
  'Object-Oriented Programming',
  'Data Structures',
  'API Development',
  'Git',
  'GitHub',
  'Version Control',
  'Package Management',
  'Visual Studio Code',
  'Jest',
  'Unit Testing',
  'Software Testing',
  'Debugging',
  'PWA (Progressive Web App)',
  'SEO',
  'Figma',
];

const skillsByLanguage = {
  pt: {
    softSkills: [
      'Comunicação',
      'Pensamento analítico',
      'Resolução de problemas',
      'Adaptabilidade',
      'Trabalho em equipa',
      'Aprendizagem contínua',
      'Organização',
      'Gestão de tempo',
      'Resiliência',
      'Foco em produto',
    ],
    languages: [
      'Português - nativo',
      'Francês - fluente',
      'Inglês - básico/intermédio',
    ],
    sectorKnowledge: [
      'Recolha de requisitos',
      'Análise de negócio',
      'Requisitos de negócio',
      'Requisitos funcionais',
      'Requisitos não funcionais',
      'Análise de requisitos',
      'Pesquisa de mercado',
      'Análise de mercado',
      'Metodologias ágeis',
      'Cibersegurança',
      'Estratégia de produto',
      'Soluções GovTech',
      'UX (Experiência do Utilizador)',
      'Gestão de projetos',
    ],
  },
  en: {
    softSkills: [
      'Communication',
      'Analytical thinking',
      'Problem solving',
      'Adaptability',
      'Teamwork',
      'Continuous learning',
      'Organization',
      'Time management',
      'Resilience',
      'Product focus',
    ],
    languages: [
      'Portuguese - native',
      'French - fluent',
      'English - basic/intermediate',
    ],
    sectorKnowledge: [
      'Requirements elicitation',
      'Business analysis',
      'Business requirements',
      'Functional requirements',
      'Non-functional requirements',
      'Requirements analysis',
      'Market research',
      'Market analysis',
      'Agile methodologies',
      'Cybersecurity',
      'Product strategy',
      'GovTech solutions',
      'UX (User Experience)',
      'Project management',
    ],
  },
  fr: {
    softSkills: [
      'Communication',
      'Esprit analytique',
      'Résolution de problèmes',
      'Adaptabilité',
      'Travail en équipe',
      'Apprentissage continu',
      'Organisation',
      'Gestion du temps',
      'Résilience',
      'Orientation produit',
    ],
    languages: [
      'Portugais - natif',
      'Français - courant',
      'Anglais - notions de base / intermédiaire',
    ],
    sectorKnowledge: [
      'Recueil des besoins',
      'Analyse métier',
      'Besoins métier',
      'Exigences fonctionnelles',
      'Exigences non fonctionnelles',
      'Analyse des besoins',
      'Étude de marché',
      'Analyse de marché',
      'Méthodologies agiles',
      'Cybersécurité',
      'Stratégie produit',
      'Solutions GovTech',
      'UX (expérience utilisateur)',
      'Gestion de projet',
    ],
  },
} as const;

function SkillPills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 text-center">
      {items.map((item) => (
        <span
          key={item}
          className="px-4 py-2 rounded-full border border-indigo-100 bg-indigo-50 text-indigo-700 text-sm font-medium hover:bg-indigo-600 hover:text-white transition-colors cursor-default"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

const COLLAPSED_HEIGHT = 112;

function SkillsPanel({ items, title }: { items: string[]; title: string }) {
  const isMobile = useIsMobile();
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);
  const [contentHeight, setContentHeight] = useState(COLLAPSED_HEIGHT);
  const [mobileDialogOpen, setMobileDialogOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setExpanded(false);
    setMobileDialogOpen(false);
  }, [items]);

  useEffect(() => {
    const element = contentRef.current;

    if (!element) {
      return;
    }

    const updateOverflowState = () => {
      setContentHeight(element.scrollHeight);
      setCanExpand(element.scrollHeight > COLLAPSED_HEIGHT + 8);
    };

    updateOverflowState();

    if (typeof ResizeObserver === 'undefined') {
      return;
    }

    const resizeObserver = new ResizeObserver(updateOverflowState);
    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, [items]);

  return (
    <div className="w-full">
      <motion.div
        ref={contentRef}
        animate={{
          maxHeight: expanded ? contentHeight : COLLAPSED_HEIGHT,
          opacity: 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 220,
          damping: 28,
          mass: 0.8,
        }}
        className="overflow-hidden"
      >
        <SkillPills items={items} />
      </motion.div>

      {canExpand && (
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            onClick={() => {
              if (isMobile) {
                setMobileDialogOpen(true);
                return;
              }

              setExpanded((value) => !value);
            }}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            {isMobile ? t.skills.showMore : expanded ? t.skills.showLess : t.skills.showMore}
          </button>
        </div>
      )}

      <Dialog open={mobileDialogOpen} onOpenChange={setMobileDialogOpen}>
        <DialogContent className="sm:max-w-xl max-h-[85vh] overflow-hidden p-0">
          <div className="p-6 pb-4 border-b border-gray-100">
            <DialogHeader>
              <DialogTitle className="text-xl text-gray-900">{title}</DialogTitle>
              <DialogDescription className="text-gray-500">
                {t.skills.dialogDescription}
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="max-h-[65vh] overflow-y-auto p-6 pt-5">
            <SkillPills items={items} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export function Skills() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'hard' | 'soft' | 'idiomas' | 'sector'>('hard');

  const content =
    activeTab === 'hard'
      ? hardSkills
      : activeTab === 'soft'
        ? skillsByLanguage[language].softSkills
        : activeTab === 'idiomas'
          ? skillsByLanguage[language].languages
          : skillsByLanguage[language].sectorKnowledge;

  const tabTitle =
    activeTab === 'hard'
      ? t.skills.hard
      : activeTab === 'soft'
        ? t.skills.soft
        : activeTab === 'idiomas'
          ? t.skills.languages
          : t.skills.sector;

  return (
    <section id="skills" className="py-20 px-8 lg:px-16 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading
          title={t.skills.title}
          subtitle={t.skills.subtitle}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm"
        >
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex flex-wrap justify-center gap-1 shadow-sm border border-gray-200">
              <button
                onClick={() => setActiveTab('hard')}
                className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'hard'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                }`}
              >
                {t.skills.hard}
              </button>
              <button
                onClick={() => setActiveTab('soft')}
                className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'soft'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                }`}
              >
                {t.skills.soft}
              </button>
              <button
                onClick={() => setActiveTab('idiomas')}
                className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'idiomas'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                }`}
              >
                {t.skills.languages}
              </button>
              <button
                onClick={() => setActiveTab('sector')}
                className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'sector'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                }`}
              >
                {t.skills.sector}
              </button>
            </div>
          </div>

          <div className="min-h-[140px] flex flex-col items-center justify-start">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                  <SkillsPanel items={content} title={tabTitle} />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}