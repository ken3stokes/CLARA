import { useState, useEffect } from 'react';
import { privacyChecklist, ChecklistItem } from '@/data/privacy-checklist';

export function usePrivacyChecklist() {
  const [completedItems, setCompletedItems] = useState<string[]>([]);

  useEffect(() => {
    const savedProgress = localStorage.getItem('privacyChecklistProgress');
    if (savedProgress) {
      setCompletedItems(JSON.parse(savedProgress));
    }
  }, []);

  const toggleItem = (id: string) => {
    setCompletedItems(prev => {
      const newCompletedItems = prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id];
      localStorage.setItem('privacyChecklistProgress', JSON.stringify(newCompletedItems));
      return newCompletedItems;
    });
  };

  const resetProgress = () => {
    setCompletedItems([]);
    localStorage.removeItem('privacyChecklistProgress');
  };

  const getProgress = () => {
    return (completedItems.length / privacyChecklist.length) * 100;
  };

  return {
    completedItems,
    toggleItem,
    resetProgress,
    getProgress,
  };
}

