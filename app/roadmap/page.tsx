import { roadmapItems } from "@/data/roadmap"
import { RoadmapItemCard } from "@/components/roadmap-item"
import { MapPin } from 'lucide-react'

export default function Roadmap() {
  const groupedItems = roadmapItems.reduce((acc, item) => {
    const key = `${item.quarter} ${item.year}`
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(item)
    return acc
  }, {} as Record<string, typeof roadmapItems>)

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="mb-8 text-center">
        <MapPin className="mx-auto mb-4 h-12 w-12" />
        <h1 className="mb-2 text-3xl font-bold">CLARA Roadmap</h1>
        <p className="text-muted-foreground">
          Discover what's coming next in our journey to enhance your digital security
        </p>
      </div>

      {Object.entries(groupedItems).map(([timeframe, items]) => (
        <div key={timeframe} className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">{timeframe}</h2>
          {items.map((item, index) => (
            <RoadmapItemCard key={index} item={item} />
          ))}
        </div>
      ))}
    </div>
  )
}

