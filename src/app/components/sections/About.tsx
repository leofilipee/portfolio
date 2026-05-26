import React from 'react';
import { SectionHeading } from '../SectionHeading';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const skills = [
  "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", 
  "JSON", "Python", "Java", "PWA",
  "Design Responsivo (Desktop e Mobile)", "UI/UX",
  "Git & GitHub", "AI Prompting", "AI Code Assist"
];

export function About() {
  const birthDate = new Date('2004-07-09');
  const age = Math.floor((new Date().getTime() - birthDate.getTime()) / 3.15576e+10);

  return (
    <section id="about" className="py-20 px-8 lg:px-16 bg-white min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading 
          title="Sobre Mim" 
          subtitle="Apaixonado por criar interfaces web intuitivas, rápidas e acessíveis. Atualmente a terminar a licenciatura e pronto para os desafios do mercado."
        />

        <div className="grid lg:grid-cols-12 gap-12 mt-12">
          {/* Bio */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Estudante & Desenvolvedor Web</h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-justify">
              Sempre tive um fascínio por como as coisas funcionam na internet. O que começou como curiosidade rapidamente se transformou numa paixão pelo desenvolvimento Frontend. Adoro transformar designs complexos em código limpo, eficiente e que proporcione uma excelente experiência ao utilizador.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-justify">
              Durante o meu percurso académico, foquei-me em construir uma base sólida em tecnologias web modernas. O meu objetivo é juntar-me a uma equipa inovadora onde possa contribuir, aprender e crescer como profissional.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li className="flex flex-wrap items-start text-gray-700">
                  <ChevronRight size={18} className="text-indigo-600 mr-2 mt-1 shrink-0" />
                  <div className="w-[calc(100%-26px)] break-words lg:break-normal"><strong>Idade:</strong> <span className="ml-1">{age}</span></div>
                </li>
                <li className="flex flex-wrap items-start text-gray-700">
                  <ChevronRight size={18} className="text-indigo-600 mr-2 mt-1 shrink-0" />
                  <div className="w-[calc(100%-26px)] break-words lg:break-normal"><strong>Telefone:</strong> <span className="ml-1">+351 913 914 925</span></div>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex flex-wrap items-start text-gray-700">
                  <ChevronRight size={18} className="text-indigo-600 mr-2 mt-1 shrink-0" />
                  <div className="w-[calc(100%-26px)] break-words lg:break-normal"><strong>Cidade:</strong> <span className="ml-1">Lisboa, Portugal</span></div>
                </li>
                <li className="flex flex-wrap items-start text-gray-700">
                  <ChevronRight size={18} className="text-indigo-600 mr-2 mt-1 shrink-0" />
                  <div className="w-[calc(100%-26px)] break-words lg:break-normal"><strong>Email:</strong> <span className="ml-1">l.filipecontact@gmail.com</span></div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Competências Técnicas</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-md text-sm font-medium border border-indigo-100 hover:bg-indigo-600 hover:text-white transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-100">
              <h4 className="font-semibold text-gray-800 mb-2">Idiomas:</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Português (nativo), Francês (fluente) e Inglês (básico)
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
