import React, { useState } from 'react';
import { SectionHeading } from '../SectionHeading';
import { motion, AnimatePresence } from 'motion/react';
import { formatMonthYear, useLanguage } from '../../i18n';

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
};

const experiencesByLanguage: Record<'pt' | 'en' | 'fr', { tech: ExperienceItem[]; general: ExperienceItem[] }> = {
  pt: {
    tech: [
      { title: 'Embaixador', company: 'Timestamp', location: 'Portugal', period: 'Out 2025 - Presente', description: 'Atuo como ponte entre a universidade e a empresa, aprofundando os meus conhecimentos sobre o funcionamento de uma consultora tecnológica. Esta experiência tem-me permitido expandir a visão de mercado, estabelecer networking com excelentes profissionais e participar em mentorias especializadas com a equipa.' },
      { title: 'Desenvolvedor Web • Estágio', company: 'Hashtag Informatique', location: 'França', period: 'Jun 2024 - Jul 2024', description: 'Desenvolvi de forma autónoma o website da empresa, desde a conceção até à implementação. O projeto foi tão bem-sucedido que a plataforma criada permanece até hoje como a página oficial da instituição.' },
      { title: 'Suporte Técnico • Estágio', company: 'T-Mice', location: 'França', period: 'Jan 2023 - Mar 2023', description: 'Imersão na rotina de uma empresa de assistência técnica. Aprendi com a equipa de gestão e acompanhei diversas intervenções no terreno, prestando suporte tecnológico a pequenas e grandes empresas.' },
      { title: 'Suporte Técnico • Estágio', company: 'Hashtag Informatique', location: 'França', period: 'Set 2022 - Out 2022', description: 'Acompanhei a rotina de um técnico de informática independente. Esta experiência proporcionou-me uma valiosa aprendizagem sobre empreendedorismo e a responsabilidade necessária para gerir um negócio, a par do aprofundamento das minhas competências técnicas.' },
      { title: 'Técnico de Materiais • Estágio', company: 'IRTO', location: 'França', period: 'Dez 2021 - Jan 2022', description: 'Fui responsável pela montagem de equipamentos de fibra ótica. Operei máquinas de fusão de fibra e acompanhei ativamente a equipa técnica durante as instalações e intervenções no local.' },
      { title: 'Gestor de Dados • Estágio', company: 'EDF', location: 'França', period: 'Jul 2020 - Ago 2020', description: 'Responsável pela atualização e digitalização de documentos da empresa, integrando novas informações em ficheiros antigos e reorganizando o arquivo em novas estruturas. Tive também a oportunidade de realizar visitas a diversas centrais hidroelétricas.' },
    ],
    general: [
      { title: 'Funcionário Polivalente • Trabalho', company: "McDonald's", location: 'Portugal', period: 'Abr 2026 - Jun 2026', description: 'Desempenhei funções polivalentes num ambiente de ritmo acelerado, incluindo a preparação alimentar, serviço à mesa e manutenção do espaço, garantindo sempre a melhor experiência e atendimento ao cliente.' },
      { title: 'Auxiliar de Supermercado • Trabalho', company: 'Groupe Casino', location: 'França', period: 'Mar 2024 - Mai 2024', description: 'Desempenhei funções versáteis que envolveram a reposição de produtos, gestão de armazém e logística de bastidores, além de prestar auxílio direto às necessidades dos clientes da loja.' },
      { title: 'Dishwasher • Trabalho', company: 'VTF Vacances', location: 'França', period: 'Jul 2023 - Ago 2023', description: 'Integrei a equipa de uma estação de férias, onde trabalhei principalmente como dishwasher, prestando também apoio pontual no serviço e atendimento de mesas.' },
      { title: 'Auxiliar de Supermercado • Estágio', company: 'Carrefour Market', location: 'França', period: 'Jul 2020 - Ago 2020', description: 'Primeiro contacto com o mercado de trabalho profissional. Adquiri conhecimentos práticos sobre a operação diária e as várias funções necessárias para o bom funcionamento de uma grande superfície comercial.' },
    ],
  },
  en: {
    tech: [
      { title: 'Ambassador', company: 'Timestamp', location: 'Portugal', period: 'Oct 2025 - Present', description: 'I act as a bridge between the university and the company, deepening my understanding of how a technology consultancy operates. This experience has allowed me to broaden my market perspective, build a network with excellent professionals and take part in specialized mentoring sessions with the team.' },
      { title: 'Web Developer • Internship', company: 'Hashtag Informatique', location: 'France', period: 'Jun 2024 - Jul 2024', description: 'I independently developed the company website from concept to implementation. The project was so successful that the platform remains the institution’s official website to this day.' },
      { title: 'Technical Support • Internship', company: 'T-Mice', location: 'France', period: 'Jan 2023 - Mar 2023', description: 'An immersion in the routine of a technical support company. I learned with the management team and followed several field interventions, providing technological support to small and large companies.' },
      { title: 'Technical Support • Internship', company: 'Hashtag Informatique', location: 'France', period: 'Sep 2022 - Oct 2022', description: 'I followed the routine of an independent IT technician. This experience provided valuable insight into entrepreneurship and the responsibility required to manage a business, alongside a deeper understanding of technical skills.' },
      { title: 'Materials Technician • Internship', company: 'IRTO', location: 'France', period: 'Dec 2021 - Jan 2022', description: 'I was responsible for assembling fiber optic equipment. I operated fiber fusion machines and actively supported the technical team during installations and on-site interventions.' },
      { title: 'Data Manager • Internship', company: 'EDF', location: 'France', period: 'Jul 2020 - Aug 2020', description: 'Responsible for updating and digitizing company documents, integrating new information into older files and reorganizing the archive into new structures. I also had the opportunity to visit several hydroelectric plants.' },
    ],
    general: [
      { title: 'Multiskilled Team Member • Job', company: "McDonald's", location: 'Portugal', period: 'Apr 2026 - Jun 2026', description: 'I performed multiskilled duties in a fast-paced environment, including food preparation, table service and maintaining the space, always ensuring the best customer experience and service.' },
      { title: 'Supermarket Assistant • Job', company: 'Groupe Casino', location: 'France', period: 'Mar 2024 - May 2024', description: 'I carried out versatile duties involving product replenishment, warehouse management and back-office logistics, while also providing direct assistance to store customers.' },
      { title: 'Dishwasher • Job', company: 'VTF Vacances', location: 'France', period: 'Jul 2023 - Aug 2023', description: 'I joined a holiday resort team where I mainly worked as a dishwasher, also providing occasional support in table service and customer care.' },
      { title: 'Supermarket Assistant • Internship', company: 'Carrefour Market', location: 'France', period: 'Jul 2020 - Aug 2020', description: 'My first contact with the professional job market. I gained practical knowledge about daily operations and the various tasks needed for a large retail store to run smoothly.' },
    ],
  },
  fr: {
    tech: [
      { title: 'Ambassadeur', company: 'Timestamp', location: 'Portugal', period: 'Oct 2025 - Présent', description: 'Je fais le lien entre l’université et l’entreprise, approfondissant ma compréhension du fonctionnement d’un cabinet de conseil technologique. Cette expérience m’a permis d’élargir ma vision du marché, de construire un réseau avec d’excellents professionnels et de participer à des séances de mentorat spécialisées avec l’équipe.' },
      { title: 'Développeur Web • Stage', company: 'Hashtag Informatique', location: 'France', period: 'Jun 2024 - Juil 2024', description: 'J’ai développé de manière autonome le site web de l’entreprise, de la conception à l’implémentation. Le projet a été si réussi que la plateforme créée reste encore aujourd’hui la page officielle de l’institution.' },
      { title: 'Support Technique • Stage', company: 'T-Mice', location: 'France', period: 'Jan 2023 - Mar 2023', description: 'Immersion dans le quotidien d’une entreprise d’assistance technique. J’ai appris avec l’équipe de gestion et accompagné diverses interventions sur le terrain, en apportant un support technologique aux petites et grandes entreprises.' },
      { title: 'Support Technique • Stage', company: 'Hashtag Informatique', location: 'France', period: 'Sep 2022 - Oct 2022', description: 'J’ai suivi le quotidien d’un technicien informatique indépendant. Cette expérience m’a apporté un enseignement précieux sur l’entrepreneuriat et la responsabilité nécessaire à la gestion d’une entreprise, ainsi qu’un approfondissement de mes compétences techniques.' },
      { title: 'Technicien Matériaux • Stage', company: 'IRTO', location: 'France', period: 'Déc 2021 - Jan 2022', description: 'J’étais responsable de l’assemblage d’équipements de fibre optique. J’ai utilisé des machines de fusion de fibre et accompagné activement l’équipe technique lors des installations et interventions sur site.' },
      { title: 'Gestionnaire de Données • Stage', company: 'EDF', location: 'France', period: 'Juil 2020 - Aoû 2020', description: 'Responsable de la mise à jour et de la numérisation des documents de l’entreprise, en intégrant de nouvelles informations dans d’anciens fichiers et en réorganisant l’archive dans de nouvelles structures. J’ai également eu l’occasion de visiter plusieurs centrales hydroélectriques.' },
    ],
    general: [
      { title: 'Employé Polyvalent • Travail', company: "McDonald's", location: 'Portugal', period: 'Avr 2026 - Jun 2026', description: 'J’ai effectué des tâches polyvalentes dans un environnement au rythme soutenu, incluant la préparation alimentaire, le service en salle et l’entretien de l’espace, tout en garantissant la meilleure expérience et le meilleur service client.' },
      { title: 'Assistant de Supermarché • Travail', company: 'Groupe Casino', location: 'France', period: 'Mar 2024 - Mai 2024', description: 'J’ai exercé des fonctions variées impliquant le réassort des produits, la gestion de l’entrepôt et la logistique de l’arrière-boutique, tout en apportant une aide directe aux clients du magasin.' },
      { title: 'Plongeur • Travail', company: 'VTF Vacances', location: 'France', period: 'Juil 2023 - Aoû 2023', description: 'J’ai intégré l’équipe d’une station de vacances où j’ai principalement travaillé comme plongeur, en apportant aussi un soutien ponctuel au service et à l’accueil en salle.' },
      { title: 'Assistant de Supermarché • Stage', company: 'Carrefour Market', location: 'France', period: 'Juil 2020 - Aoû 2020', description: 'Premier contact avec le monde professionnel. J’ai acquis des connaissances pratiques sur le fonctionnement quotidien et les différentes tâches nécessaires au bon déroulement d’une grande surface.' },
    ],
  },
};

export function Experience() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'tech' | 'general'>('tech');

  const experiences = activeTab === 'tech'
    ? experiencesByLanguage[language].tech
    : experiencesByLanguage[language].general;

  return (
    <section id="experience" className="py-20 px-8 lg:px-16 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <SectionHeading title={t.experience.title} subtitle={t.experience.subtitle} />

        <div className="flex justify-center mb-10 mt-12">
          <div className="bg-white p-1 rounded-lg inline-flex shadow-sm border border-gray-200">
            <button
              onClick={() => setActiveTab('tech')}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${activeTab === 'tech' ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
            >
              {t.experience.techTab}
            </button>
            <button
              onClick={() => setActiveTab('general')}
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-colors ${activeTab === 'general' ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
            >
              {t.experience.generalTab}
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
                      {formatMonthYear(exp.period, language)}
                    </span>
                    <p className="text-gray-600 leading-relaxed text-justify">{exp.description}</p>
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