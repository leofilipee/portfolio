import React, { useState } from 'react';
import { SectionHeading } from '../SectionHeading';
import { motion, AnimatePresence } from 'motion/react';

const academicEducation = [
  {
    title: "Informática de Gestão • Licenciatura",
    institution: "IADE - Creative University",
    location: "Portugal",
    period: "Set 2024 - Jun 2027",
    description: "",
  },
  {
    title: "Services Informatiques aux Organisations (SIO) • BTS",
    institution: "Lycée Gabriel Fauré",
    location: "França",
    period: "Set 2023 - Jul 2024",
    description: "",
  },
  {
    title: "Système Numérique • Bac Pro",
    institution: "Lycée Paul Héroult",
    location: "França",
    period: "Set 2020 - Jul 2023",
    description: "",
  }
];

const extracurricularEducation = [
  {
    title: "Programming with JavaScript",
    institution: "Meta",
    period: "Abr 2026",
    credential: "Código da credencial: U6ZPF9MX8810",
  },
  {
    title: "Introduction to Front-End Development",
    institution: "Meta",
    period: "Mar 2026",
    credential: "Código da credencial: 9W14H9MGNRU2",
  }
];

export function Education() {
  const [activeTab, setActiveTab] = useState<'academic' | 'extracurricular'>('academic');

  const educations = activeTab === 'academic' ? academicEducation : extracurricularEducation;

  return (
    <section id="education" className="py-20 px-8 lg:px-16 bg-white">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading 
          title="Formações" 
          subtitle="O meu percurso académico e as formações extracurriculares que complementam os meus conhecimentos."
        />

        <div className="flex justify-center mb-10 mt-12">
          <div className="bg-gray-50 p-1 rounded-lg inline-flex shadow-sm border border-gray-200">
            <button
              onClick={() => setActiveTab('academic')}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'academic' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white'
              }`}
            >
              Académicas
            </button>
            <button
              onClick={() => setActiveTab('extracurricular')}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'extracurricular' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white'
              }`}
            >
              Extra-Curriculares
            </button>
          </div>
        </div>

        <div className="mt-12 relative border-l-2 border-indigo-200 ml-3 md:ml-0 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {educations.map((edu, index) => (
                <div key={index} className="mb-10 ml-8 relative">
                  <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-white border-4 border-indigo-600 rounded-full"></div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-800">{edu.title}</h3>
                    <h4 className="text-lg font-medium text-indigo-600 mt-1 mb-2 flex items-center gap-2">
                      {edu.institution}
                      {/* @ts-ignore */}
                      {edu.location && <span className="text-sm font-normal text-gray-400 border-l border-gray-300 pl-2">{edu.location}</span>}
                    </h4>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full mb-4">
                      {edu.period}
                    </span>
                    {/* @ts-ignore */}
                    {edu.description && (
                      <p className="text-gray-600 leading-relaxed text-justify">
                        {/* @ts-ignore */}
                        {edu.description}
                      </p>
                    )}
                    {/* @ts-ignore */}
                    {edu.credential && (
                      <p className="text-gray-500 text-sm mt-1 font-medium">
                        {/* @ts-ignore */}
                        {edu.credential}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
