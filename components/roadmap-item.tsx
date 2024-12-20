import { RoadmapItem } from "@/data/roadmap"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface RoadmapItemProps {
  item: RoadmapItem
}

export function RoadmapItemCard({ item }: RoadmapItemProps) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
          <Badge variant={item.status === 'In Progress' ? 'default' : 'secondary'}>
            {item.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-muted-foreground">{item.description}</p>
        <ul className="list-inside list-disc space-y-1">
          {item.features.map((feature, index) => (
            <li key={index} className="text-sm">{feature}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

