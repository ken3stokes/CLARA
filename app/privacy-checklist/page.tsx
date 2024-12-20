"use client"

import { useState } from 'react'
import { privacyChecklist, categories, ChecklistItem } from '@/data/privacy-checklist'
import { usePrivacyChecklist } from '@/hooks/use-privacy-checklist'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2, Circle, Search, ShieldCheck } from 'lucide-react'
import Link from "next/link"

export default function PrivacyChecklist() {
  const { completedItems, toggleItem, resetProgress, getProgress } = usePrivacyChecklist()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredChecklist = privacyChecklist.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="mb-8 text-center">
        <ShieldCheck className="mx-auto mb-4 h-12 w-12" />
        <h1 className="mb-2 text-3xl font-bold">Privacy Checklist</h1>
        <p className="text-muted-foreground">
          Track and improve your digital privacy practices
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Your Privacy Progress</CardTitle>
          <CardDescription>Complete all items to maximize your privacy protection</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center justify-between">
            <Progress value={getProgress()} className="w-full" />
            <span className="ml-4 font-semibold">{Math.round(getProgress())}%</span>
          </div>
          <Button onClick={resetProgress} variant="outline">Reset Progress</Button>
        </CardContent>
      </Card>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search checklist..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {filteredChecklist.map((item: ChecklistItem) => (
          <AccordionItem key={item.id} value={item.id} className="border-b">
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                className="mr-2 h-6 w-6 rounded-full p-0"
                onClick={() => toggleItem(item.id)}
              >
                {completedItems.includes(item.id) ? (
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                ) : (
                  <Circle className="h-4 w-4" />
                )}
              </Button>
              <AccordionTrigger className="flex-1 hover:no-underline">
                <div className="flex flex-col items-start">
                  <span className="font-medium">{item.title}</span>
                  <span className="text-xs text-muted-foreground">{item.category}</span>
                </div>
              </AccordionTrigger>
            </div>
            <AccordionContent>
              <p className="mb-4">{item.description}</p>
              {item.resources && (
                <div>
                  <Label className="mb-2 block">Resources:</Label>
                  <ul className="list-inside list-disc space-y-1">
                    {item.resources.map((resource, index) => (
                      <li key={index}>
                        <Link href={resource.url} className="text-primary hover:underline">
                          {resource.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

