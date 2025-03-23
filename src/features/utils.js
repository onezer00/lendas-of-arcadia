/**
 * Utilitários para o projeto Lendas de Arcadia
 */

/**
 * Formata uma data no formato brasileiro
 * @param {Date|string} date - Data a ser formatada
 * @returns {string} Data formatada
 */
export const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
};

/**
 * Trunca um texto adicionando reticências se ele exceder um determinado tamanho
 * @param {string} text - Texto a ser truncado
 * @param {number} maxLength - Tamanho máximo
 * @returns {string} Texto truncado
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

/**
 * Gera um ID único
 * @returns {string} ID único
 */
export const generateId = () => {
  return Math.random().toString(36).substring(2, 9);
};

/**
 * Mistura um array (algoritmo Fisher-Yates)
 * @param {Array} array - Array a ser embaralhado
 * @returns {Array} Array embaralhado
 */
export const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

/**
 * Retorna uma cor aleatória em formato hexadecimal
 * @returns {string} Cor hexadecimal
 */
export const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
};

/**
 * Limpa strings HTML de tags
 * @param {string} html - String HTML
 * @returns {string} Texto limpo
 */
export const stripHtml = (html) => {
  if (!html) return '';
  return html.replace(/<[^>]*>?/gm, '');
};

export default {
  formatDate,
  truncateText,
  generateId,
  shuffleArray,
  getRandomColor,
  stripHtml
}; 