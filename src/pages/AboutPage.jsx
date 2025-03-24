import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../assets/placeholder';

// Dados do membro da equipe
const teamMember = {
  name: "João Batista",
  role: "Desenvolvedor Backend",
  bio: "Desenvolvedor Backend na IBM, trabalho atualmente com Python e tenho interesse em jogos desde a infância. Decidi criar Lendas de Arcadia como um projeto pessoal para explorar desenvolvimento de jogos.",
  avatar: IMAGES.teamMember,
  github: "https://github.com/onezer00"
};

const AboutPage = () => {
  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-medieval text-amber-400 mb-4 text-center">
            Sobre Lendas de Arcadia
          </h1>
          <div className="max-w-4xl mx-auto bg-slate-800/50 border border-amber-700/30 rounded-lg p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-amber-300 mb-4">Nossa Missão</h2>
                <p className="text-slate-300 mb-4">
                  Lendas de Arcadia nasceu da minha paixão por jogos de RPG clássicos e da vontade de 
                  criar uma experiência que combine elementos nostálgicos com abordagens modernas de game design.
                </p>
                <p className="text-slate-300 mb-4">
                  O objetivo é desenvolver um jogo 2D com mecânicas de combate envolventes e uma narrativa
                  que dê ao jogador escolhas significativas que afetem o desenvolvimento da história.
                </p>
                <p className="text-slate-300">
                  Este projeto é desenvolvido em tempo livre como uma expressão criativa e uma oportunidade
                  de aprendizado, combinando minhas habilidades de programação com meu amor por games.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <motion.img 
                  src={IMAGES.logo} 
                  alt="Lendas de Arcadia Logo" 
                  className="max-w-full h-auto rounded-lg shadow-lg"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-medieval text-amber-400 mb-8 text-center">Equipe</h2>
          
          <div className="max-w-sm mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-800/50 border border-amber-700/30 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={teamMember.avatar} 
                  alt={teamMember.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-1">{teamMember.name}</h3>
                <p className="text-amber-400 text-sm mb-3">{teamMember.role}</p>
                <p className="text-slate-300 text-sm mb-4">{teamMember.bio}</p>
                <a 
                  href={teamMember.github}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-medieval text-amber-400 mb-8 text-center">Jornada do Projeto</h2>
          
          <div className="max-w-4xl mx-auto bg-slate-800/50 border border-amber-700/30 rounded-lg p-8 shadow-xl">
            <div className="relative border-l-2 border-amber-700/50 pl-12 space-y-12">
              {/* Item linha do tempo */}
              <div className="relative">
                <div className="absolute w-4 h-4 rounded-full -left-[10px] top-2.5 bg-amber-500"></div>
                <div className="pt-1 ml-5">
                  <span className="text-sm text-amber-300 font-bold">Janeiro 2025</span>
                  <h3 className="text-xl font-bold text-white mb-2">Concepção</h3>
                  <p className="text-slate-300">
                    Início do planejamento e concepção do projeto após anos cultivando a ideia 
                    de criar um jogo medieval com elementos da cultura brasileira.
                  </p>
                </div>
              </div>
              
              {/* Item linha do tempo */}
              <div className="relative">
                <div className="absolute w-4 h-4 rounded-full -left-[10px] top-2.5 bg-amber-500"></div>
                <div className="pt-1 ml-5">
                  <span className="text-sm text-amber-300 font-bold">Fevereiro 2025</span>
                  <h3 className="text-xl font-bold text-white mb-2">Pesquisa e Planejamento</h3>
                  <p className="text-slate-300">
                    Pesquisa de tecnologias e frameworks para desenvolvimento, explorando opções
                    para backend e frontend, além de estudos sobre padrões de arquitetura para jogos.
                  </p>
                </div>
              </div>
              
              {/* Item linha do tempo */}
              <div className="relative">
                <div className="absolute w-4 h-4 rounded-full -left-[10px] top-2.5 bg-amber-500"></div>
                <div className="pt-1 ml-5">
                  <span className="text-sm text-amber-300 font-bold">Março 2025</span>
                  <h3 className="text-xl font-bold text-white mb-2">Primeiros Passos</h3>
                  <p className="text-slate-300">
                    Criação da estrutura inicial do projeto, com configuração dos repositórios,
                    definição da arquitetura básica e início da implementação de componentes-chave.
                  </p>
                </div>
              </div>
              
              {/* Item linha do tempo */}
              <div className="relative">
                <div className="absolute w-4 h-4 rounded-full -left-[10px] top-2.5 bg-amber-500"></div>
                <div className="pt-1 ml-5">
                  <span className="text-sm text-amber-300 font-bold">Hoje</span>
                  <h3 className="text-xl font-bold text-white mb-2">Desenvolvimento Inicial</h3>
                  <p className="text-slate-300">
                    Atualmente estamos trabalhando na implementação das mecânicas básicas
                    do jogo e na estrutura de dados para personagens e interações.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-medieval text-amber-400 mb-8 text-center">Visão do Projeto</h2>
          
          <div className="max-w-4xl mx-auto bg-slate-800/50 border border-amber-700/30 rounded-lg p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Experiência de Jogo</h3>
                <p className="text-slate-300 mb-4">
                  Meu objetivo é criar um jogo 2D com mecânicas simples mas profundas, 
                  onde o combate seja satisfatório e a progressão do personagem ofereça
                  escolhas interessantes ao jogador.
                </p>
                <p className="text-slate-300">
                  Quero que cada sessão de jogo ofereça desafios adequados e recompensas
                  que façam o jogador sentir uma clara progressão em suas habilidades.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Narrativa Brasileira</h3>
                <p className="text-slate-300 mb-4">
                  Busco incorporar elementos do folclore e cultura brasileira de forma
                  sutil e orgânica, criando um mundo fantástico medieval com toques 
                  familiares para jogadores brasileiros.
                </p>
                <p className="text-slate-300">
                  A longo prazo, espero que o jogo possa contribuir para mostrar que 
                  é possível criar games brasileiros de qualidade mesmo com recursos limitados.
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-slate-900/50 rounded-lg">
              <blockquote className="text-center">
                <p className="text-lg text-amber-300 italic">
                  "Mais do que criar um jogo perfeito, Lendas de Arcadia é uma jornada de aprendizado
                  e experimentação, onde cada linha de código representa um passo em direção à 
                  realização de um sonho cultivado há anos."
                </p>
                <footer className="mt-4 text-slate-400">
                  — João Batista, Criador
                </footer>
              </blockquote>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage; 