"use client"

import { useState, useEffect } from "react"
import { ChecklistProgress } from "@/types/checklist"

export function useChecklistProgress() {
  const [progress, setProgress] = useState<ChecklistProgress>({})

  useEffect(() => {
    // Load progress from localStorage on mount
    const savedProgress = localStorage.getItem("privacyChecklistProgress")
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress))
    }
  }, [])

  const toggleItem = (id: string) => {
    const newProgress = { ...progress, [id]: !progress[id] }
    setProgress(newProgress)
    localStorage.setItem("privacyChecklistProgress", JSON.stringify(newProgress))
  }

  const resetProgress = () => {
    setProgress({})
    localStorage.removeItem("privacyChecklistProgress")
  }

  const calculateProgress = () => {
    const completed = Object.values(progress).filter(Boolean).length
    const total = Object.keys(privacyChecklist).length
    return total > 0 ? (completed / total) * 100 : 0
  }

  return {
    progress,
    toggleItem,
    resetProgress,
    calculateProgress,
  }
}

