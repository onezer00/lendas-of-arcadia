import React from 'react';
import { motion } from 'framer-motion';
import ProgressDot from '../components/ProgressDot';

const RoadmapPage = () => {
  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-medieval text-amber-400 mb-8 text-center"
        >
          Roadmap do Projeto
        </motion.h1>
        
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-800/50 border border-amber-700/30 rounded-lg p-8 shadow-xl"
          >
            <p className="text-slate-300 mb-6">
              Este roadmap representa o planejamento atual para o desenvolvimento de Lendas de Arcadia. 
              Como projeto independente desenvolvido em tempo livre, as datas são estimativas e podem 
              ser ajustadas conforme o progresso do desenvolvimento.
            </p>
            <div className="bg-amber-900/20 border border-amber-700/30 rounded-lg p-4">
              <p className="text-amber-200 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Última atualização: Março 2025
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Linha do tempo do roadmap */}
        <div className="max-w-5xl mx-auto">
          {roadmapItems.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              className="mb-12"
            >
              <div className="flex items-center mb-4">
                <ProgressDot 
                  status={phase.status} 
                  pulseEffect={phase.status === "Em Progresso"} 
                  size="md"
                />
                <h2 className="text-2xl font-medieval text-amber-400 ml-4">{phase.title}</h2>
                <div className={`ml-4 px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(phase.status).badgeColor}`}>
                  {phase.status}
                </div>
              </div>
              
              <div className="pl-16">
                <div className="bg-slate-800/50 border border-amber-700/30 rounded-lg p-6 shadow-xl">
                  <div className="flex justify-between mb-6">
                    <span className="text-amber-300 font-medium">{phase.period}</span>
                    {phase.progress !== null && (
                      <span className="text-slate-300">{phase.progress}% concluído</span>
                    )}
                  </div>
                  
                  {phase.progress !== null && (
                    <div className="w-full bg-slate-700 rounded-full h-2.5 mb-6">
                      <div 
                        className="bg-amber-600 h-2.5 rounded-full" 
                        style={{ width: `${phase.progress}%` }}
                      ></div>
                    </div>
                  )}
                  
                  <p className="text-slate-300 mb-6">{phase.description}</p>
                  
                  <h3 className="text-lg font-bold text-white mb-4">Objetivos:</h3>
                  <ul className="space-y-3 mb-4">
                    {phase.goals.map((goal, goalIndex) => (
                      <li 
                        key={goalIndex} 
                        className="flex items-start text-slate-300"
                      >
                        <div className="flex-shrink-0 w-5 h-5 mt-1">
                          {goal.completed ? (
                            <svg className="text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          )}
                        </div>
                        <span className={`ml-2 ${goal.completed ? 'text-slate-200' : ''}`}>
                          {goal.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {phase.highlights && (
                    <>
                      <h3 className="text-lg font-bold text-white mb-4">Destaques:</h3>
                      <ul className="list-disc list-inside space-y-1 text-slate-300 mb-4">
                        {phase.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Nota sobre o futuro */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="max-w-4xl mx-auto mt-8 bg-slate-800/50 border border-amber-700/30 rounded-lg p-6 shadow-xl text-center"
        >
          <h2 className="text-xl font-medieval text-amber-400 mb-4">Olhando para o Futuro</h2>
          <p className="text-slate-300">
            Este roadmap será atualizado regularmente para refletir o progresso do desenvolvimento 
            e incluir novas funcionalidades planejadas. Suas sugestões e feedback são bem-vindos
            e podem influenciar na definição de prioridades futuras.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

// Função para obter as cores com base no status
const getStatusColor = (status) => {
  switch(status) {
    case 'Concluído':
      return {
        bgColor: 'bg-green-900/50',
        badgeColor: 'bg-green-900 text-green-300'
      };
    case 'Em Progresso':
      return {
        bgColor: 'bg-blue-900/50',
        badgeColor: 'bg-blue-900 text-blue-300'
      };
    case 'Planejado':
      return {
        bgColor: 'bg-amber-900/50',
        badgeColor: 'bg-amber-900 text-amber-300'
      };
    default:
      return {
        bgColor: 'bg-slate-700/50',
        badgeColor: 'bg-slate-700 text-slate-300'
      };
  }
};

// Dados do roadmap
const roadmapItems = [
  {
    id: 1,
    title: "Fase 1: Fundação",
    period: "Janeiro 2025 - Março 2025",
    status: "Em Progresso",
    progress: 40,
    description: "Desenvolvimento da estrutura básica do jogo e definição dos componentes centrais.",
    goals: [
      { text: "Criação da estrutura do projeto e repositórios", completed: true },
      { text: "Definição da arquitetura e tecnologias", completed: true },
      { text: "Sistema básico de personagens e atributos", completed: false },
      { text: "Mecânicas fundamentais de movimento e interação", completed: false },
      { text: "Interface de usuário responsiva", completed: false }
    ],
    highlights: [
      "Estrutura modular para facilitar expansões futuras",
      "Documentação abrangente do código e APIs"
    ]
  },
  {
    id: 2,
    title: "Fase 2: Sistema de Combate",
    period: "Abril 2025 - Julho 2025",
    status: "Planejado",
    progress: null,
    description: "Desenvolvimento do sistema de combate e mecânicas de RPG fundamentais.",
    goals: [
      { text: "Implementação do sistema de combate em tempo real com elementos táticos", completed: false },
      { text: "Sistema de habilidades e atributos", completed: false },
      { text: "Efeitos de status e condições", completed: false },
      { text: "Balanceamento inicial de combate", completed: false },
      { text: "Sistema de progressão de personagem", completed: false }
    ],
    highlights: [
      "Combate dinâmico com mecânicas de posicionamento",
      "Diferentes estilos de jogo baseados em equipamentos e habilidades"
    ]
  },
  {
    id: 3,
    title: "Fase 3: Conteúdo Inicial",
    period: "Agosto 2025 - Outubro 2025",
    status: "Planejado",
    progress: null,
    description: "Criação do conteúdo inicial do jogo, incluindo níveis, personagens e narrativa.",
    goals: [
      { text: "Área inicial do jogo completa", completed: false },
      { text: "Implementação de NPCs e diálogos", completed: false },
      { text: "Sistema de quests e missões", completed: false },
      { text: "Sistema de inventário e equipamentos", completed: false },
      { text: "Primeiros inimigos e combates", completed: false }
    ],
    highlights: [
      "História inicial com elementos do folclore brasileiro",
      "Sistema de diálogos com ramificações baseadas em escolhas"
    ]
  },
  {
    id: 4,
    title: "Fase 4: Polimento e Alpha",
    period: "Novembro 2025 - Dezembro 2025",
    status: "Planejado",
    progress: null,
    description: "Refinamento das mecânicas existentes e preparação para o lançamento da versão alpha.",
    goals: [
      { text: "Otimização de performance", completed: false },
      { text: "Efeitos visuais e sonoros", completed: false },
      { text: "Sistema de feedback e analytics", completed: false },
      { text: "Testes de usuário e balanceamento", completed: false },
      { text: "Lançamento da versão alpha para testadores", completed: false }
    ],
    highlights: [
      "Feedback em tempo real durante o desenvolvimento",
      "Comunidade de testadores envolvida no processo"
    ]
  },
  {
    id: 5,
    title: "Fase 5: Expansão e Beta",
    period: "2026",
    status: "Planejado",
    progress: null,
    description: "Expansão do conteúdo do jogo e desenvolvimento contínuo com base no feedback da comunidade.",
    goals: [
      { text: "Novas áreas e conteúdo narrativo", completed: false },
      { text: "Mais inimigos e chefes", completed: false },
      { text: "Sistemas adicionais de progressão", completed: false },
      { text: "Versão beta pública", completed: false },
      { text: "Preparação para o lançamento", completed: false }
    ],
    highlights: [
      "Planejamento flexível com base no feedback dos jogadores",
      "Foco em qualidade e experiência do usuário"
    ]
  }
];

export default RoadmapPage; 