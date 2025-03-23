import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IMAGES } from '../assets/placeholder';

const HomePage = () => {
  return (
    <div className="py-6">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="relative rounded-xl overflow-hidden mb-16 bg-gradient-to-b from-slate-800 to-slate-900"
      >
        <div className="absolute inset-0 bg-cover bg-center opacity-40" 
             style={{ backgroundImage: `url('${IMAGES.hero}')` }} />
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold font-medieval text-amber-400 mb-6"
          >
            Lendas de Arcadia
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto"
          >
            Um RPG medieval de fantasia onde suas escolhas definem seu destino. 
            Embarque em aventuras épicas, conheça aliados leais e enfrente criaturas lendárias.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link 
              to="https://github.com/onezer00/lendas-of-arcadia-frontend" 
              target="_blank"
              className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-bold transition-colors text-lg"
            >
              Jogar Agora
            </Link>
            <Link 
              to="/support" 
              className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-bold transition-colors text-lg"
            >
              Apoiar o Projeto
            </Link>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Features Section */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-medieval text-amber-400 mb-8 text-center">Principais Características</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Gameplay Dinâmico"
              description="Sistema de jogo em 2D com combate ágil e mecânicas de ação responsivas."
              icon="⚔️"
              delay={0.1}
            />
            <FeatureCard 
              title="Combate Tático"
              description="Sistema de combate que mistura ação em tempo real com elementos estratégicos de posicionamento e habilidades."
              icon="🎯"
              delay={0.2}
            />
            <FeatureCard 
              title="História Imersiva"
              description="Narrativa rica com personagens memoráveis e decisões que impactam o mundo do jogo."
              icon="📜"
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      {/* Development Status */}
      <section className="mb-16">
        <div className="container mx-auto px-4">
          <div className="bg-slate-800/50 border border-amber-800/30 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-medieval text-amber-400 mb-4">Status de Desenvolvimento</h2>
            
            <div className="bg-slate-900/50 p-4 rounded mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-slate-200">Progresso Atual</span>
                <span className="text-amber-400">Versão 0.1.0</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2.5">
                <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: '15%' }}></div>
              </div>
              <p className="text-amber-300 mt-2 text-sm text-right">15% Completo</p>
            </div>
            
            <p className="text-slate-300 mb-6">
              O jogo está atualmente nas fases iniciais de desenvolvimento. Estamos trabalhando na implementação 
              das mecânicas básicas de movimento e combate, além da estrutura de dados para personagens.
            </p>
            
            <div className="flex justify-end">
              <Link 
                to="/roadmap"
                className="text-amber-400 hover:text-amber-300 font-medium flex items-center"
              >
                Ver Roadmap Completo
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Updates */}
      <section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-medieval text-amber-400 mb-8 text-center">Atualizações Recentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <UpdateCard 
              date="15 Março 2025"
              title="Início do Desenvolvimento"
              content="Lançamento da estrutura inicial do projeto, incluindo documentação e planejamento da arquitetura do jogo."
              link="#"
            />
            <UpdateCard 
              date="05 Março 2025"
              title="Definição de Arte Conceitual"
              content="Decisão pelo estilo visual medieval com elementos de pixel art e definição da paleta de cores do projeto."
              link="#"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// Componente de Card de Feature
const FeatureCard = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-amber-700/50 transition-colors"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-amber-300 mb-2">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </motion.div>
  );
};

// Componente de Card de Atualização
const UpdateCard = ({ date, title, content, link }) => {
  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-6 hover:border-amber-700/30 transition-colors"
    >
      <div className="text-sm text-amber-400 mb-2">{date}</div>
      <h3 className="text-xl font-bold text-slate-100 mb-3">{title}</h3>
      <p className="text-slate-300 mb-4">{content}</p>
      <a 
        href={link} 
        className="text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium flex items-center"
      >
        Ler mais
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </motion.article>
  );
};

export default HomePage; 