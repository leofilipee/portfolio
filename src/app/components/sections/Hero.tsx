import React from 'react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="text-indigo-600 font-semibold tracking-wider uppercase mb-4">Olá, eu sou o</p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Leo Filipe
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 font-light mb-8">
            Estudante de Informática de Gestão & <br className="hidden md:block"/>
            <span className="font-semibold text-indigo-600">Frontend Developer</span>
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#projects" className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/30">
              Ver Projetos
            </a>
            <a href="#contact" className="px-8 py-3 bg-white text-gray-800 font-medium rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors">
              Contactar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
