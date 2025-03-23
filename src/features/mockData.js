import { IMAGES } from '../assets/placeholder';

/**
 * Dados simulados para o projeto Lendas de Arcadia
 */

export const GAME_FEATURES = [
  {
    id: 1,
    title: 'Mundo Vasto e Imersivo',
    description: 'Explore as terras místicas de Arcadia, com vilas, florestas encantadas, montanhas e cavernas cheias de segredos e perigos.',
    icon: '🗺️',
    image: IMAGES.gameScreenshot
  },
  {
    id: 2,
    title: 'Sistema de Combate Tático',
    description: 'Batalhas em tempo real com elementos táticos. Escolha suas armas, magias e posicionamento para vencer seus inimigos.',
    icon: '⚔️',
    image: IMAGES.gameScreenshot
  },
  {
    id: 3,
    title: 'Narrativa Ramificada',
    description: 'Suas escolhas realmente importam. Cada decisão pode mudar o destino do seu personagem e de todo o reino.',
    icon: '📜',
    image: IMAGES.gameScreenshot
  },
  {
    id: 4,
    title: 'Craftando seu Destino',
    description: 'Sistema completo de crafting e personalização, permitindo criar armas, armaduras e poções únicas.',
    icon: '⚒️',
    image: IMAGES.gameScreenshot
  }
];

export const DEVELOPMENT_STATUS = {
  current: 'alpha',
  version: '0.4.2',
  progress: 42,
  nextMilestone: 'Beta Fechado',
  estimatedRelease: 'Q4 2025'
};

export const RECENT_UPDATES = [
  {
    id: 1,
    date: '2025-03-15',
    title: 'Novo Sistema de Inventário',
    description: 'Implementamos um sistema de inventário totalmente renovado, permitindo melhor organização dos itens e categorias personalizáveis.',
    image: IMAGES.gameScreenshot
  },
  {
    id: 2,
    date: '2025-03-01',
    title: 'Região das Montanhas Nevadas',
    description: 'Nova região adicionada ao mapa: as Montanhas Nevadas, com novas missões, inimigos e tesouros escondidos.',
    image: IMAGES.gameScreenshot
  },
  {
    id: 3,
    date: '2025-02-20',
    title: 'Balanceamento de Classes',
    description: 'Realizamos ajustes nas classes Mago e Guerreiro para melhor equilíbrio de jogo, especialmente nas habilidades de área.',
    image: IMAGES.gameScreenshot
  }
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Henrique Silva',
    role: 'Game Designer & Desenvolvedor Líder',
    description: 'Fundador do projeto com 8 anos de experiência em desenvolvimento de jogos indie.',
    image: IMAGES.teamMember,
    social: {
      twitter: 'https://twitter.com/henriquedev',
      github: 'https://github.com/henriquedev'
    }
  },
  {
    id: 2,
    name: 'Mariana Costa',
    role: 'Artista Conceitual',
    description: 'Artista talentosa especializada em design de personagens e ambientes medievais de fantasia.',
    image: IMAGES.teamMember,
    social: {
      instagram: 'https://instagram.com/marianaarts'
    }
  },
  {
    id: 3,
    name: 'Lucas Mendes',
    role: 'Compositor & Designer de Som',
    description: 'Músico responsável pelas trilhas sonoras épicas e efeitos sonoros imersivos do jogo.',
    image: IMAGES.teamMember,
    social: {
      youtube: 'https://youtube.com/lucascomposer'
    }
  }
];

export const FAQ_ITEMS = [
  {
    id: 1,
    question: 'Quando será lançado o Lendas de Arcadia?',
    answer: 'Estamos trabalhando para um lançamento completo no final de 2025. Atualmente o jogo está em fase Alpha, com testes Beta fechados programados para o terceiro trimestre de 2025.'
  },
  {
    id: 2,
    question: 'Em quais plataformas o jogo estará disponível?',
    answer: 'O lançamento inicial será para PC (Steam) e posteriormente para consoles (PlayStation e Xbox). Estamos também considerando uma versão para Nintendo Switch em 2026.'
  },
  {
    id: 3,
    question: 'O jogo terá modo multiplayer?',
    answer: 'Sim! O jogo terá um modo cooperativo para até 4 jogadores e também modos PvP em arenas específicas. O foco principal, no entanto, é a experiência single-player.'
  },
  {
    id: 4,
    question: 'Como posso participar do Beta fechado?',
    answer: 'Inscreva-se na nossa newsletter através do site e junte-se ao nosso Discord. Os testadores serão selecionados entre os membros mais ativos da comunidade.'
  },
  {
    id: 5,
    question: 'O jogo será free-to-play?',
    answer: 'Não, Lendas de Arcadia será um jogo premium com preço único. Não teremos microtransações ou pay-to-win. Planejamos DLCs de história no futuro.'
  }
];

export const ROADMAP_ITEMS = [
  {
    id: 1,
    title: 'Alpha Inicial',
    description: 'Mecânicas básicas de jogo e primeiro mapa jogável',
    date: '2024-10',
    completed: true,
    milestones: [
      { id: 101, text: 'Sistema de controle de personagem', completed: true },
      { id: 102, text: 'Combate básico melee', completed: true },
      { id: 103, text: 'Primeira vila e arredores', completed: true }
    ]
  },
  {
    id: 2,
    title: 'Alpha Estendido',
    description: 'Sistema de quests e expansão do mundo',
    date: '2025-Q1-Q2',
    completed: false,
    current: true,
    milestones: [
      { id: 201, text: 'Sistema de inventário', completed: true },
      { id: 202, text: 'Sistema de quests', completed: true },
      { id: 203, text: 'Novas regiões: Floresta e Montanhas', completed: true },
      { id: 204, text: 'Magia e efeitos elementais', completed: false }
    ]
  },
  {
    id: 3,
    title: 'Beta Fechado',
    description: 'Teste com jogadores selecionados',
    date: '2025-Q3',
    completed: false,
    milestones: [
      { id: 301, text: 'Sistema completo de progressão', completed: false },
      { id: 302, text: 'Multiplayer cooperativo', completed: false },
      { id: 303, text: 'Balanceamento inicial', completed: false }
    ]
  },
  {
    id: 4,
    title: 'Beta Aberto',
    description: 'Versão jogável para todos os interessados',
    date: '2025-Q4',
    completed: false,
    milestones: [
      { id: 401, text: 'Mundo completo', completed: false },
      { id: 402, text: 'Sistema de conquistas', completed: false },
      { id: 403, text: 'Polimento e correção de bugs', completed: false }
    ]
  },
  {
    id: 5,
    title: 'Lançamento',
    description: 'Versão 1.0 do jogo',
    date: '2026-Q1',
    completed: false,
    milestones: [
      { id: 501, text: 'Lançamento no Steam', completed: false },
      { id: 502, text: 'Conteúdo endgame', completed: false },
      { id: 503, text: 'Suporte pós-lançamento', completed: false }
    ]
  }
];

export default {
  GAME_FEATURES,
  DEVELOPMENT_STATUS,
  RECENT_UPDATES,
  TEAM_MEMBERS,
  FAQ_ITEMS,
  ROADMAP_ITEMS
}; 