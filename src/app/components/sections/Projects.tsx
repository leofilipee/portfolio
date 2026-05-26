import React from 'react';
import { SectionHeading } from '../SectionHeading';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../ImageWithFallback';

import ecoHomeImg from '../../../imports/1.png';
import tech4GoodImg from '../../../imports/2.png';
import hashtagImg from '../../../imports/image-10.png';
import culturallImg from '../../../imports/image-11.png';

const projects = [
  {
    title: "PSP Lisbon Direct",
    description: "Plataforma desenvolvida no âmbito do Hackathon Tech4Good, focada em aproximar o cidadão das forças de segurança.",
    image: tech4GoodImg,
    tags: ["Frontend: React", "Hackathon: Tech4Good", "Inovação Social / Segurança Cidadã"],
    repoUrl: "https://github.com/leofilipee/Tech4Good",
    liveUrl: "https://leofilipee.github.io/Tech4Good/"
  },
  {
    title: "EcoHome",
    description: "EcoHome é um sistema digital voltado para a monitorização do consumo de energia em habitações.",
    image: ecoHomeImg,
    tags: ["Frontend: React", "Energy Monitoring", "Data Visualization"],
    repoUrl: "https://github.com/leofilipee/ecohome",
    liveUrl: "https://leofilipee.github.io/ecohome/"
  },
  {
    title: "Hashtag Informatique Oficial Website",
    description: "Desenvolvimento autónomo do website institucional da empresa, desde a conceção até à implementação. A plataforma permanece até hoje como a presença oficial da instituição na web.",
    image: hashtagImg,
    tags: ["Website Institucional", "HTML/CSS/JS", "Design Responsivo"],
    repoUrl: null,
    liveUrl: "https://www.hashtaginformatique.fr/"
  },
  {
    title: "Cultur'All",
    description: "Uma agenda cultural centralizada para Portugal, desenvolvida com o objetivo de democratizar o acesso à cultura. Diferencia-se por uma cobertura nacional e ampla variedade de categorias, oferecendo perfis dedicados para utilizadores explorarem eventos e para organizadores promoverem as suas iniciativas de forma autónoma.",
    image: culturallImg,
    tags: ["UX/UI Design", "Plataforma Web", "Gestão de Eventos"],
    repoUrl: null,
    liveUrl: "https://leofilipee.github.io/CulturAll/"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-8 lg:px-16 bg-white">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading title="Projetos" subtitle="Uma seleção dos meus trabalhos mais recentes e projetos académicos." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden relative group">
                <ImageWithFallback 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors" title="Ver Código">
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors" title="Visitar Site">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow text-justify">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
