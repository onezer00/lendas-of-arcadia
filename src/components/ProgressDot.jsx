import React from 'react';
import { motion } from 'framer-motion';

// Componente decorativo para indicar etapas do progresso
const ProgressDot = ({ status, pulseEffect = false, size = 'md' }) => {
  // Definir tamanhos com base nos parâmetros
  const sizes = {
    sm: {
      outer: 'w-8 h-8',
      inner: 'w-6 h-6',
      innerPulse: 'w-3 h-3'
    },
    md: {
      outer: 'w-12 h-12',
      inner: 'w-8 h-8',
      innerPulse: 'w-4 h-4'
    },
    lg: {
      outer: 'w-16 h-16',
      inner: 'w-10 h-10',
      innerPulse: 'w-5 h-5'
    }
  };

  // Cores baseadas no status
  const getColor = () => {
    switch (status) {
      case 'Concluído':
        return {
          bg: 'bg-green-900/20',
          border: 'border-green-500/70',
          inner: 'bg-green-500',
          pulse: 'bg-green-400'
        };
      case 'Em Progresso':
        return {
          bg: 'bg-blue-900/20',
          border: 'border-blue-500/70',
          inner: 'bg-blue-500',
          pulse: 'bg-blue-400'
        };
      case 'Planejado':
        return {
          bg: 'bg-amber-900/20',
          border: 'border-amber-500/70',
          inner: 'bg-amber-500',
          pulse: 'bg-amber-400'
        };
      default:
        return {
          bg: 'bg-slate-800/20',
          border: 'border-slate-600/70',
          inner: 'bg-slate-600',
          pulse: 'bg-slate-500'
        };
    }
  };

  const colors = getColor();
  const sizeClasses = sizes[size] || sizes.md;

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative flex items-center justify-center rounded-full ${colors.bg} ${colors.border} border-2 ${sizeClasses.outer}`}
    >
      <motion.div 
        className={`rounded-full ${colors.inner} ${sizeClasses.inner} shadow-lg flex items-center justify-center`}
        animate={pulseEffect ? { scale: [1, 1.1, 1] } : {}}
        transition={pulseEffect ? { 
          repeat: Infinity, 
          duration: 2,
          repeatType: "reverse"
        } : {}}
      >
        {status === 'Concluído' && (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )}
        
        {status === 'Em Progresso' && pulseEffect && (
          <motion.div 
            className={`rounded-full ${colors.pulse} ${sizeClasses.innerPulse}`}
            animate={{ 
              boxShadow: [
                '0 0 0 0 rgba(96, 165, 250, 0)',
                '0 0 0 10px rgba(96, 165, 250, 0.3)',
                '0 0 0 15px rgba(96, 165, 250, 0)'
              ]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut"
            }}
          />
        )}
        
        {status === 'Planejado' && (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProgressDot; 