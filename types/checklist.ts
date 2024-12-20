export interface ChecklistItem {
  id: string
  title: string
  description: string
  category: string
  details: string
  resources?: {
    title: string
    url: string
  }[]
}

export interface ChecklistProgress {
  [key: string]: boolean
}

