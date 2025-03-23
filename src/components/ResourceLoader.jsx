import { useEffect } from 'react';
import backgroundPattern from '../assets/bg-pattern';

/**
 * Componente para carregar recursos (fontes e padrão de fundo)
 * Resolve os problemas de recursos ausentes
 */
const ResourceLoader = () => {
  useEffect(() => {
    // Aplicar o padrão de fundo usando o padrão base64
    document.body.style.backgroundImage = `url('${backgroundPattern}')`;
    
    return () => {
      // Limpar ao desmontar
      document.body.style.backgroundImage = 'none';
    };
  }, []);

  // Este componente não renderiza nada visual
  return null;
};

export default ResourceLoader; 