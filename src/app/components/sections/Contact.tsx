import React from 'react';
import { SectionHeading } from '../SectionHeading';
import { Mail, Phone, Globe, Linkedin, Github, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../../i18n';

export function Contact() {
  const { language } = useLanguage();
  const contactTitle = language === 'pt' ? 'Contacto' : language === 'en' ? 'Contact' : 'Contact';
  const contactSubtitle = language === 'pt' ? 'Tem alguma oportunidade ou projeto em mente? Vamos conversar.' : language === 'en' ? 'Have an opportunity or project in mind? Let’s talk.' : 'Vous avez une opportunité ou un projet en tête ? Parlons-en.';

  const contactInfo = [
    {
      icon: <Mail size={28} />,
      title: language === 'pt' ? 'Email' : language === 'en' ? 'Email' : 'E-mail',
      content: "l.filipecontact@gmail.com",
      link: "mailto:l.filipecontact@gmail.com"
    },
    {
      icon: <Phone size={28} />,
      title: language === 'pt' ? 'Telefone' : language === 'en' ? 'Phone' : 'Téléphone',
      content: "+351 913 914 925",
      link: "tel:+351913914925"
    }
  ];

  return (
    <section id="contact" className="py-20 px-8 lg:px-16 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title={contactTitle} subtitle={contactSubtitle} />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {contactInfo.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                {method.icon}
              </div>
              <div className="w-full flex flex-col items-center">
                <h4 className="text-lg font-bold text-gray-800 mb-1">{method.title}</h4>
                {method.link ? (
                  <a href={method.link} className="text-gray-600 hover:text-indigo-600 transition-colors inline-block break-all text-center">
                    {method.content}
                  </a>
                ) : (
                  <p className="text-gray-600 text-center">{method.content}</p>
                )}
              </div>
            </motion.div>
          ))}

          {/* Redes Sociais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow group"
          >
            <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <Globe size={28} />
            </div>
            <div className="w-full flex flex-col items-center">
              <h4 className="text-lg font-bold text-gray-800 mb-4">{language === 'pt' ? 'Redes Sociais' : language === 'en' ? 'Socials' : 'Réseaux sociaux'}</h4>
              <div className="flex flex-wrap justify-center gap-3">
                <a 
                  href="https://wa.me/33749648011" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-green-600 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 border border-gray-100"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
                <a 
                  href="https://www.linkedin.com/in/leofilipee/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-[#0A66C2] hover:text-white transition-colors text-sm font-medium flex items-center gap-2 border border-gray-100"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/leofilipee" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-900 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 border border-gray-100"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
