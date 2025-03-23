import React from 'react';
import { motion } from 'framer-motion';

const ButtonVariants = {
  primary: 'bg-amber-700 hover:bg-amber-600 text-white border-amber-900',
  secondary: 'bg-slate-700 hover:bg-slate-600 text-white border-slate-900',
  success: 'bg-emerald-700 hover:bg-emerald-600 text-white border-emerald-900',
  danger: 'bg-red-700 hover:bg-red-600 text-white border-red-900',
};

const ButtonSizes = {
  sm: 'py-1 px-3 text-sm',
  md: 'py-2 px-4 text-base',
  lg: 'py-3 px-6 text-lg',
};

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  icon = null,
  onClick,
  type = 'button',
  ...props 
}) => {
  return (
    <motion.button
      type={type}
      className={`
        ${ButtonVariants[variant]}
        ${ButtonSizes[size]}
        rounded border-2 font-medieval font-bold
        transition-all duration-300 relative
        flex items-center justify-center gap-2
        shadow-md hover:shadow-lg
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      whileHover={{ y: disabled ? 0 : -3 }}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      {...props}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {children}
      <div className="absolute inset-0 rounded border-2 border-amber-500/20 pointer-events-none"></div>
    </motion.button>
  );
};

export default Button; 