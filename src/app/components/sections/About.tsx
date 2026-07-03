import React from 'react';
import { SectionHeading } from '../SectionHeading';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const birthDate = new Date('2004-07-09');
  const age = Math.floor((new Date().getTime() - birthDate.getTime()) / 3.15576e+10);

  return (
    <section id="about" className="py-20 px-8 lg:px-16 bg-white min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading 
          title="Sobre Mim" 
          subtitle="Software Engineer focado em criar soluções digitais sólidas, intuitivas e escaláveis para diferentes contextos."
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
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Software Engineer</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-justify">
              Sempre tive fascínio por como os sistemas funcionam. O que começou como curiosidade evoluiu para uma paixão pelo desenvolvimento de software. Gosto de transformar problemas complexos em soluções claras, funcionais e com boa experiência para quem as utiliza.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-justify">
              Ao longo do meu percurso, fui construindo uma base sólida em tecnologia e raciocínio de produto. O meu objetivo é contribuir em equipas que valorizem qualidade, colaboração e evolução contínua.
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
