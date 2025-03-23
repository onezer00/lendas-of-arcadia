import React, { useEffect, useRef } from 'react';

const EmberEffect = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Número de partículas
    const particleCount = 20;
    const container = containerRef.current;
    
    // Limpar partículas existentes
    container.innerHTML = '';
    
    // Criar partículas
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('ember-particle');
      
      // Posicionar aleatoriamente
      const left = Math.random() * 100; // posição horizontal em %
      
      // Definir direção aleatória
      const direction = Math.random() > 0.5 ? 1 : -1;
      
      // Definir tamanho aleatório
      const size = 2 + Math.random() * 4;
      
      // Definir delay de animação
      const delay = Math.random() * 10;
      
      // Aplicar estilos
      particle.style.left = `${left}%`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.setProperty('--direction', direction);
      particle.style.animationDelay = `${delay}s`;
      
      // Adicionar ao container
      container.appendChild(particle);
    }
    
    // Limpar ao desmontar
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default EmberEffect; 