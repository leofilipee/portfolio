import React, { useState } from 'react';
import { SectionHeading } from '../SectionHeading';
import { motion, AnimatePresence } from 'motion/react';

const techExperiences = [
  {
    title: "Embaixador",
    company: "Timestamp",
    location: "Portugal",
    period: "Out 2025 - Presente",
    description: "Atuo como ponte entre a universidade e a empresa, aprofundando os meus conhecimentos sobre o funcionamento de uma consultora tecnológica. Esta experiência tem-me permitido expandir a visão de mercado, estabelecer networking com excelentes profissionais e participar em mentorias especializadas com a equipa." 
  },
  {
    title: "Desenvolvedor Web • Estágio",
    company: "Hashtag Informatique",
    location: "França",
    period: "Jun 2024 - Jul 2024",
    description: "Desenvolvi de forma autónoma o website da empresa, desde a conceção até à implementação. O projeto foi tão bem-sucedido que a plataforma criada permanece até hoje como a página oficial da instituição."
  },
  {
    title: "Suporte Técnico • Estágio",
    company: "T-Mice",
    location: "França",
    period: "Jan 2023 - Mar 2023",
    description: "Imersão na rotina de uma empresa de assistência técnica. Aprendi com a equipa de gestão e acompanhei diversas intervenções no terreno, prestando suporte tecnológico a pequenas e grandes empresas."
  },
  {
    title: "Suporte Técnico • Estágio",
    company: "Hashtag Informatique",
    location: "França",
    period: "Set 2022 - Out 2022",
    description: "Acompanhei a rotina de um técnico de informática independente. Esta experiência proporcionou-me uma valiosa aprendizagem sobre empreendedorismo e a responsabilidade necessária para gerir um negócio, a par do aprofundamento das minhas competências técnicas."
  },
  {
    title: "Técnico de Materiais • Estágio",
    company: "IRTO",
    location: "França",
    period: "Dez 2021 - Jan 2022",
    description: "Fui responsável pela montagem de equipamentos de fibra ótica. Operei máquinas de fusão de fibra e acompanhei ativamente a equipa técnica durante as instalações e intervenções no local."
  },
  {
    title: "Gestor de Dados • Estágio",
    company: "EDF",
    location: "França",
    period: "Jul 2020 - Ago 2020",
    description: "Responsável pela atualização e digitalização de documentos da empresa, integrando novas informações em ficheiros antigos e reorganizando o arquivo em novas estruturas. Tive também a oportunidade de realizar visitas a diversas centrais hidroelétricas."
  }
];

const generalExperiences = [
  {
    title: "Funcionário Polivalente • Trabalho",
    company: "McDonald's",
    location: "Portugal",
    period: "Abr 2026 - Jun 2026",
    description: "Desempenhei de funções polivalentes num ambiente de ritmo acelerado, incluindo a preparação alimentar, serviço à mesa e manutenção do espaço, garantindo sempre a melhor experiência e atendimento ao cliente."
  },
  {
    title: "Auxiliar de Supermercado • Trabalho",
    company: "Groupe Casino",
    location: "França",
    period: "Mar 2024 - Mai 2024",
    description: "Desempenhei funções versáteis que envolveram a reposição de produtos, gestão de armazém e logística de bastidores, além de prestar auxílio direto às necessidades dos clientes da loja."
  },
  {
    title: "Dishwasher • Trabalho",
    company: "VTF Vacances",
    location: "França",
    period: "Jul 2023 - Ago 2023",
    description: "Integrei a equipa de uma estação de férias, onde trabalhei principalmente como dishwasher, prestando também apoio pontual no serviço e atendimento de mesas."
  },
  {
    title: "Auxiliar de Supermercado • Estágio",
    company: "Carrefour Market",
    location: "França",
    period: "Jul 2020 - Ago 2020",
    description: "Primeiro contacto com o mercado de trabalho profissional. Adquiri conhecimentos práticos sobre a operação diária e as várias funções necessárias para o bom funcionamento de uma grande superfície comercial."
  }
];

export function Experience() {
  const [activeTab, setActiveTab] = useState<'tech' | 'general'>('tech');

  const experiences = activeTab === 'tech' ? techExperiences : generalExperiences;

  return (
    <section id="experience" className="py-20 px-8 lg:px-16 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading 
          title="Experiências" 
          subtitle="Um resumo do meu percurso profissional, dividido entre a área tecnológica e outras experiências de mercado de trabalho."
        />

        <div className="flex justify-center mb-10 mt-12">
          <div className="bg-white p-1 rounded-lg inline-flex shadow-sm border border-gray-200">
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'tech' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Área da Informática
            </button>
            <button
              onClick={() => setActiveTab('general')}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'general' 
                  ? 'bg-indigo-600 text-white shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Áreas Gerais
            </button>
          </div>
        </div>

        <div className="mt-12 relative border-l-2 border-indigo-200 ml-3 md:ml-0 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {experiences.map((exp, index) => (
                <div key={index} className="mb-10 ml-8 relative">
                  <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-white border-4 border-indigo-600 rounded-full"></div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                    <h4 className="text-lg font-medium text-indigo-600 mt-1 mb-2 flex items-center gap-2">
                      {exp.company}
                      <span className="text-sm font-normal text-gray-400 border-l border-gray-300 pl-2">{exp.location}</span>
                    </h4>
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full mb-4">
                      {exp.period}
                    </span>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      {exp.description}
                    </p>
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
