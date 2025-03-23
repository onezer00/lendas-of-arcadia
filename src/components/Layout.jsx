import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import EmberEffect from './EmberEffect';

const Layout = ({ children }) => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* Efeito de partículas de cinzas/brasas flutuantes */}
      <EmberEffect />
      
      {/* Header/Navegação */}
      <header className="bg-slate-950 border-b border-amber-700/30 sticky top-0 z-10 shadow-lg shadow-black/50">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
          <Link to="/" className="text-amber-500 font-medieval text-2xl mb-4 sm:mb-0">
            Lendas de Arcadia
          </Link>
          
          <nav className="flex items-center space-x-2 md:space-x-6">
            <NavLink to="/" active={isActive('/')}>
              Início
            </NavLink>
            <NavLink to="/roadmap" active={isActive('/roadmap')}>
              Roadmap
            </NavLink>
            <NavLink to="/about" active={isActive('/about')}>
              Sobre
            </NavLink>
            <NavLink to="/support" active={isActive('/support')}>
              Apoiar
            </NavLink>
          </nav>
        </div>
      </header>
      
      {/* Conteúdo Principal */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-950 border-t border-amber-700/30 py-6 text-slate-400">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">Lendas de Arcadia © {new Date().getFullYear()} - Todos os direitos reservados</p>
          <p className="text-sm">
            Um projeto independente de RPG medieval desenvolvido com paixão
          </p>
          
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://github.com/seu-usuario/lendas-of-arcadia" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors">
              GitHub
            </a>
            <a href="https://twitter.com/seu-twitter" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors">
              Twitter
            </a>
            <a href="mailto:seu-email@exemplo.com" className="text-slate-400 hover:text-amber-500 transition-colors">
              Contato
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Componente auxiliar para links de navegação
const NavLink = ({ to, active, children }) => {
  return (
    <Link
      to={to}
      className={`relative px-4 py-2 transition-colors ${
        active 
          ? 'text-amber-400 font-medium' 
          : 'text-slate-300 hover:text-amber-300'
      }`}
    >
      {children}
      {active && (
        <motion.div 
          layoutId="activeIndicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
          initial={false}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
    </Link>
  );
};

export default Layout; 