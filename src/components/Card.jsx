import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  title,
  variant = 'default',
  image,
  ...props 
}) => {
  const variantClasses = {
    default: 'bg-slate-800 border-slate-700',
    parchment: 'bg-amber-50 border-amber-200 text-slate-800',
    dark: 'bg-slate-900 border-slate-800'
  };

  return (
    <motion.div
      className={`
        ${variantClasses[variant]}
        border-2 rounded-md overflow-hidden shadow-lg
        backdrop-blur-sm bg-opacity-75
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      {...props}
    >
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title || 'Card image'} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}
      
      {title && (
        <div className="px-4 py-3 border-b border-slate-700">
          <h3 className="text-xl font-medieval font-bold">{title}</h3>
        </div>
      )}
      
      <div className="p-4">
        {children}
      </div>
    </motion.div>
  );
};

export default Card; 