import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Por padrão, iniciamos em modo escuro
  
  // Toggle para o menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Toggle para o tema claro/escuro
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('light-theme');
  };
  
  // Verificar se o link está ativo
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="bg-slate-900/90 backdrop-blur-sm border-b border-amber-800/30 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-2xl font-medieval text-amber-400">Lendas de Arcadia</span>
            </motion.div>
          </Link>
          
          {/* Menu para desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" isActive={isActive('/')}>
              Início
            </NavLink>
            <NavLink to="/sobre" isActive={isActive('/sobre')}>
              Sobre
            </NavLink>
            <NavLink to="/roadmap" isActive={isActive('/roadmap')}>
              Roadmap
            </NavLink>
            <NavLink to="/suporte" isActive={isActive('/suporte')}>
              Suporte
            </NavLink>
            
            {/* Botão de tema */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors text-amber-400"
              aria-label={isDarkMode ? "Alternar para tema claro" : "Alternar para tema escuro"}
            >
              {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </motion.button>
          </div>
          
          {/* Botão de menu mobile */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="mr-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors text-amber-400"
              aria-label={isDarkMode ? "Alternar para tema claro" : "Alternar para tema escuro"}
            >
              {isDarkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </motion.button>
            
            <button
              onClick={toggleMenu}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Menu mobile */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 border-t border-slate-700/50">
              <MobileNavLink to="/" isActive={isActive('/')} onClick={() => setIsMenuOpen(false)}>
                Início
              </MobileNavLink>
              <MobileNavLink to="/sobre" isActive={isActive('/sobre')} onClick={() => setIsMenuOpen(false)}>
                Sobre
              </MobileNavLink>
              <MobileNavLink to="/roadmap" isActive={isActive('/roadmap')} onClick={() => setIsMenuOpen(false)}>
                Roadmap
              </MobileNavLink>
              <MobileNavLink to="/suporte" isActive={isActive('/suporte')} onClick={() => setIsMenuOpen(false)}>
                Suporte
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

// Componente de link para o menu desktop
const NavLink = ({ to, isActive, children }) => {
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
        isActive
          ? 'text-amber-400'
          : 'text-slate-300 hover:text-amber-300'
      }`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-500"
          initial={false}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        />
      )}
    </Link>
  );
};

// Componente de link para o menu mobile
const MobileNavLink = ({ to, isActive, onClick, children }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
        isActive
          ? 'bg-slate-800 text-amber-400'
          : 'text-slate-300 hover:bg-slate-800 hover:text-amber-300'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar; 