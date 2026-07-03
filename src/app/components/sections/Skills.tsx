import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionHeading } from '../SectionHeading';

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

const softSkills = [
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
];

const languages = [
  'Português - nativo',
  'Francês - fluente',
  'Inglês - básico/intermédio',
];

const sectorKnowledge = [
  'Requirements Elicitation',
  'Business Analysis',
  'Business Requirements',
  'Functional Requirements',
  'Non-Functional Requirements',
  'Requirements Analysis',
  'Market Research',
  'Market Analysis',
  'Agile Methodologies',
  'Cybersecurity',
  'Product Strategy',
  'GovTech Solutions',
  'UX (User Experience)',
  'Project Management',
];

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

function SkillsPanel({ items }: { items: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);
  const [contentHeight, setContentHeight] = useState(COLLAPSED_HEIGHT);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setExpanded(false);
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
          opacity: expanded ? 1 : 0.98,
          y: expanded ? 0 : 0,
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
            onClick={() => setExpanded((value) => !value)}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            {expanded ? 'Mostrar menos...' : 'Mostrar mais...'}
          </button>
        </div>
      )}
    </div>
  );
}

export function Skills() {
  const [activeTab, setActiveTab] = useState<'hard' | 'soft' | 'idiomas' | 'sector'>('hard');

  const content =
    activeTab === 'hard'
      ? hardSkills
      : activeTab === 'soft'
        ? softSkills
        : activeTab === 'idiomas'
          ? languages
          : sectorKnowledge;

  return (
    <section id="skills" className="py-20 px-8 lg:px-16 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading
          title="Skills"
          subtitle="Um retrato mais completo das competências que uso para construir software, colaborar com equipas e comunicar com clareza."
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
                Hard
              </button>
              <button
                onClick={() => setActiveTab('soft')}
                className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'soft'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                }`}
              >
                Soft
              </button>
              <button
                onClick={() => setActiveTab('idiomas')}
                className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'idiomas'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                }`}
              >
                Idiomas
              </button>
              <button
                onClick={() => setActiveTab('sector')}
                className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'sector'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                }`}
              >
                Conhecimento do setor
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
                <SkillsPanel items={content} />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}