import React from 'react';
import { motion } from 'framer-motion';

const SupportPage = () => {
  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-medieval text-amber-400 mb-8 text-center">
            Apoie Lendas de Arcadia
          </h1>
          
          <div className="bg-slate-800/50 border border-amber-700/30 rounded-lg p-8 shadow-xl mb-12">
            <p className="text-slate-300 mb-6 text-lg">
              Lendas de Arcadia é um projeto independente desenvolvido por apenas uma pessoa em 
              tempo livre. Seu apoio é fundamental para permitir que o projeto cresça e se torne a 
              experiência rica e envolvente que imaginamos.
            </p>
            <p className="text-slate-300 mb-8">
              Há várias maneiras de contribuir com o desenvolvimento do jogo, desde apoio financeiro 
              até contribuições técnicas e feedback.
            </p>
            
            <h2 className="text-2xl font-medieval text-amber-400 mb-4">
              Por que apoiar?
            </h2>
            <ul className="list-disc pl-6 text-slate-300 mb-8 space-y-2">
              <li>Ajude a criar um RPG com elementos da cultura brasileira</li>
              <li>Contribua para o desenvolvimento de jogos independentes no Brasil</li>
              <li>Receba acesso antecipado a atualizações e conteúdo exclusivo</li>
              <li>Faça parte de uma comunidade que valoriza jogos autorais</li>
            </ul>
          </div>
          
          {/* Seção de Formas de Apoio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-800/50 border border-amber-700/30 rounded-lg p-6 shadow-xl"
            >
              <h2 className="text-2xl font-medieval text-amber-400 mb-4">
                Apoio Financeiro
              </h2>
              <p className="text-slate-300 mb-4">
                Sua contribuição financeira ajuda a cobrir custos de desenvolvimento, 
                compra de assets, hospedagem e permite dedicar mais tempo ao projeto.
              </p>
              <div className="flex flex-col space-y-4">
                <a 
                  href="https://github.com/sponsors/onezer00" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white py-3 px-6 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub Sponsors
                </a>
                <a 
                  href="https://apoia.se/lendas-of-arcadia" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-amber-600 hover:bg-amber-500 text-white py-3 px-6 rounded-lg transition-colors"
                >
                  <svg 
                    className="w-5 h-5 mr-2" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v12" />
                    <path d="M15 9h-6l6 6h-6" />
                  </svg>
                  Apoia.se
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-slate-800/50 border border-amber-700/30 rounded-lg p-6 shadow-xl"
            >
              <h2 className="text-2xl font-medieval text-amber-400 mb-4">
                Contribuições Técnicas
              </h2>
              <p className="text-slate-300 mb-4">
                Você pode contribuir diretamente com o desenvolvimento através do GitHub:
              </p>
              <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
                <li>Reporte bugs e problemas encontrados</li>
                <li>Sugira melhorias e novas funcionalidades</li>
                <li>Participe das discussões sobre design e implementação</li>
                <li>Envie pull requests para correções e melhorias</li>
              </ul>
              <a 
                href="https://github.com/onezer00/lendas-of-arcadia-frontend" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-slate-700 hover:bg-slate-600 text-white py-3 px-6 rounded-lg transition-colors"
              >
                Repositório no GitHub
              </a>
            </motion.div>
          </div>
          
          {/* FAQs sobre apoio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-slate-800/50 border border-amber-700/30 rounded-lg p-8 shadow-xl"
          >
            <h2 className="text-2xl font-medieval text-amber-400 mb-6">
              Perguntas Frequentes
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Como o dinheiro será utilizado?</h3>
                <p className="text-slate-300">
                  Todo apoio financeiro será direcionado para o desenvolvimento do jogo, incluindo
                  aquisição de assets, hospedagem dos servidores, ferramentas de desenvolvimento
                  e eventualmente permitir dedicação de mais tempo ao projeto.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Existe alguma recompensa para apoiadores?</h3>
                <p className="text-slate-300">
                  Sim! Apoiadores terão acesso antecipado a novas funcionalidades, menção nos 
                  créditos do jogo e poderão participar mais ativamente nas decisões sobre o desenvolvimento.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Posso contribuir de outras formas?</h3>
                <p className="text-slate-300">
                  Absolutamente! Divulgar o projeto, fornecer feedback, testar versões iniciais
                  e participar da comunidade são contribuições extremamente valiosas.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <h2 className="text-2xl font-medieval text-amber-400 mb-4">
              Junte-se a esta jornada
            </h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Seu apoio, independente da forma, é essencial para tornar Lendas de Arcadia
              uma realidade. Juntos podemos criar uma experiência única que celebre 
              nossa criatividade e paixão por jogos.
            </p>
            <a 
              href="mailto:contato@lendasdearcadia.com" 
              className="inline-block bg-amber-600 hover:bg-amber-500 text-white py-3 px-8 rounded-lg font-bold transition-colors text-lg"
            >
              Entre em Contato
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SupportPage; 