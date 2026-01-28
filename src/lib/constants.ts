/**
 * VersaGames Configuration
 * Central configuration file for game settings and constants
 * Last updated: January 2026
 */

export const SITE_CONFIG = {
  name: 'VersaGames',
  description: 'Classic Games Platform',
  version: '2.0.0',
  year: 2026,
  url: 'https://versagames.io',
} as const;

export const GAME_CONFIG = {
  // Tic-Tac-Toe
  ticTacToe: {
    gridSize: 3,
    winLength: 3,
    players: ['X', 'O'] as const,
    defaultDifficulty: 'medium' as const,
  },

  // Chess
  chess: {
    boardSize: 8,
    timeControl: {
      rapid: 10 * 60, // 10 minutes in seconds
      blitz: 5 * 60,  // 5 minutes
      bullet: 1 * 60, // 1 minute
    },
    defaultDifficulty: 'easy' as const,
  },

  // Checkers
  checkers: {
    boardSize: 8,
    piecesPerPlayer: 12,
    defaultDifficulty: 'medium' as const,
  },

  // Memory Game
  memoryGame: {
    difficulties: {
      easy: { pairs: 6, gridCols: 4 },
      medium: { pairs: 10, gridCols: 5 },
      hard: { pairs: 15, gridCols: 6 },
    },
    flipDelay: 1000, // ms
    defaultDifficulty: 'medium' as const,
  },

  // Sliding Puzzle
  slidingPuzzle: {
    gridSizes: [3, 4, 5] as const,
    defaultSize: 3,
  },

  // Scrabble
  scrabble: {
    boardSize: 15,
    rackSize: 7,
    tileBagSize: 100,
  },
} as const;

export const DIFFICULTY_LEVELS = ['easy', 'medium', 'hard'] as const;
export type DifficultyLevel = typeof DIFFICULTY_LEVELS[number];

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  gameStats: (gameId: string) => `versagames_stats_${gameId}`,
  preferences: 'versagames_preferences',
  theme: 'versagames_theme',
} as const;

// Game IDs for consistent identification
export const GAME_IDS = {
  ticTacToe: 'tic-tac-toe',
  chess: 'chess',
  checkers: 'checkers',
  memoryGame: 'memory-game',
  slidingPuzzle: 'sliding-puzzle',
  scrabble: 'scrabble',
} as const;

export type GameId = typeof GAME_IDS[keyof typeof GAME_IDS];
