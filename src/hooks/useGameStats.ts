import { useState, useEffect, useCallback } from 'react';

export interface GameStats {
  gamesPlayed: number;
  gamesWon: number;
  gamesLost: number;
  gamesTied: number;
  currentStreak: number;
  bestStreak: number;
  totalPlayTime: number; // in seconds
  lastPlayed: string | null;
}

interface UseGameStatsOptions {
  gameId: string;
  persistToStorage?: boolean;
}

const DEFAULT_STATS: GameStats = {
  gamesPlayed: 0,
  gamesWon: 0,
  gamesLost: 0,
  gamesTied: 0,
  currentStreak: 0,
  bestStreak: 0,
  totalPlayTime: 0,
  lastPlayed: null,
};

/**
 * Hook for tracking and persisting game statistics
 * @param options - Configuration options including gameId
 */
export function useGameStats({ gameId, persistToStorage = true }: UseGameStatsOptions) {
  const storageKey = `versagames_stats_${gameId}`;
  
  const [stats, setStats] = useState<GameStats>(() => {
    if (typeof window === 'undefined' || !persistToStorage) {
      return DEFAULT_STATS;
    }
    
    try {
      const stored = localStorage.getItem(storageKey);
      return stored ? JSON.parse(stored) : DEFAULT_STATS;
    } catch {
      return DEFAULT_STATS;
    }
  });

  // Persist stats to localStorage
  useEffect(() => {
    if (persistToStorage && typeof window !== 'undefined') {
      try {
        localStorage.setItem(storageKey, JSON.stringify(stats));
      } catch (error) {
        console.warn('Failed to persist game stats:', error);
      }
    }
  }, [stats, storageKey, persistToStorage]);

  const recordWin = useCallback(() => {
    setStats((prev) => ({
      ...prev,
      gamesPlayed: prev.gamesPlayed + 1,
      gamesWon: prev.gamesWon + 1,
      currentStreak: prev.currentStreak + 1,
      bestStreak: Math.max(prev.bestStreak, prev.currentStreak + 1),
      lastPlayed: new Date().toISOString(),
    }));
  }, []);

  const recordLoss = useCallback(() => {
    setStats((prev) => ({
      ...prev,
      gamesPlayed: prev.gamesPlayed + 1,
      gamesLost: prev.gamesLost + 1,
      currentStreak: 0,
      lastPlayed: new Date().toISOString(),
    }));
  }, []);

  const recordTie = useCallback(() => {
    setStats((prev) => ({
      ...prev,
      gamesPlayed: prev.gamesPlayed + 1,
      gamesTied: prev.gamesTied + 1,
      lastPlayed: new Date().toISOString(),
    }));
  }, []);

  const addPlayTime = useCallback((seconds: number) => {
    setStats((prev) => ({
      ...prev,
      totalPlayTime: prev.totalPlayTime + seconds,
    }));
  }, []);

  const resetStats = useCallback(() => {
    setStats(DEFAULT_STATS);
    if (persistToStorage && typeof window !== 'undefined') {
      localStorage.removeItem(storageKey);
    }
  }, [storageKey, persistToStorage]);

  const getWinRate = useCallback(() => {
    if (stats.gamesPlayed === 0) return 0;
    return Math.round((stats.gamesWon / stats.gamesPlayed) * 100);
  }, [stats.gamesPlayed, stats.gamesWon]);

  const formatPlayTime = useCallback(() => {
    const hours = Math.floor(stats.totalPlayTime / 3600);
    const minutes = Math.floor((stats.totalPlayTime % 3600) / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  }, [stats.totalPlayTime]);

  return {
    stats,
    recordWin,
    recordLoss,
    recordTie,
    addPlayTime,
    resetStats,
    getWinRate,
    formatPlayTime,
  };
}

export default useGameStats;
