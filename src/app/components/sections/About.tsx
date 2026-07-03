import React from 'react';
import { SectionHeading } from '../SectionHeading';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../../i18n';

const aboutContent = {
  pt: {
    intro: 'Sempre tive fascínio por como os sistemas funcionam. O que começou como curiosidade evoluiu para uma paixão pelo desenvolvimento de software. Gosto de transformar problemas complexos em soluções claras, funcionais e com boa experiência para quem as utiliza.',
    body: 'Ao longo do meu percurso, fui construindo uma base sólida em tecnologia e raciocínio de produto. O meu objetivo é contribuir em equipas que valorizem qualidade, colaboração e evolução contínua.',
    age: 'Idade',
    phone: 'Telefone',
    city: 'Cidade',
    email: 'Email',
  },
  en: {
    intro: 'I have always been fascinated by how systems work. What started as curiosity evolved into a passion for software development. I enjoy turning complex problems into clear, functional solutions with a good experience for the people who use them.',
    body: 'Over time, I have built a solid foundation in technology and product thinking. My goal is to contribute to teams that value quality, collaboration and continuous improvement.',
    age: 'Age',
    phone: 'Phone',
    city: 'City',
    email: 'Email',
  },
  fr: {
    intro: 'J’ai toujours été fasciné par le fonctionnement des systèmes. Ce qui a commencé comme une curiosité s’est transformé en passion pour le développement logiciel. J’aime transformer des problèmes complexes en solutions claires, fonctionnelles et agréables à utiliser.',
    body: 'Au fil de mon parcours, j’ai construit une base solide en technologie et en réflexion produit. Mon objectif est de contribuer à des équipes qui valorisent la qualité, la collaboration et l’amélioration continue.',
    age: 'Âge',
    phone: 'Téléphone',
    city: 'Ville',
    email: 'E-mail',
  },
} as const;

export function About() {
  const { language, t } = useLanguage();
  const birthDate = new Date('2004-07-09');
  const age = Math.floor((new Date().getTime() - birthDate.getTime()) / 3.15576e+10);
  const copy = aboutContent[language];

  return (
    <section id="about" className="py-20 px-8 lg:px-16 bg-white min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading 
          title={t.about.title} 
          subtitle={t.about.subtitle}
        />

        <div className="mt-12">
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-none lg:max-w-[72rem]">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{t.about.heading}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
              {copy.intro}
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-justify">
              {copy.body}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <ul className="space-y-3">
                  <li className="flex flex-wrap items-start text-gray-700">
                    <ChevronRight size={18} className="text-indigo-600 mr-2 mt-1 shrink-0" />
                    <div className="w-[calc(100%-26px)] break-words lg:break-normal"><strong>{copy.age}:</strong> <span className="ml-1">{age}</span></div>
                  </li>
                  <li className="flex flex-wrap items-start text-gray-700">
                    <ChevronRight size={18} className="text-indigo-600 mr-2 mt-1 shrink-0" />
                    <div className="w-[calc(100%-26px)] break-words lg:break-normal"><strong>{copy.phone}:</strong> <span className="ml-1">+351 913 914 925</span></div>
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex flex-wrap items-start text-gray-700">
                    <ChevronRight size={18} className="text-indigo-600 mr-2 mt-1 shrink-0" />
                    <div className="w-[calc(100%-26px)] break-words lg:break-normal"><strong>{copy.city}:</strong> <span className="ml-1">Lisboa, Portugal</span></div>
                  </li>
                  <li className="flex flex-wrap items-start text-gray-700">
                    <ChevronRight size={18} className="text-indigo-600 mr-2 mt-1 shrink-0" />
                    <div className="w-[calc(100%-26px)] break-words lg:break-normal"><strong>{copy.email}:</strong> <span className="ml-1">l.filipecontact@gmail.com</span></div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
