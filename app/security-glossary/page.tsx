"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { glossaryItems } from "@/data/security-glossary"
import { Book, Search } from 'lucide-react'

export default function SecurityGlossary() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredItems = glossaryItems.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="mb-8 text-center">
        <Book className="mx-auto mb-4 h-12 w-12" />
        <h1 className="mb-2 text-3xl font-bold">Security Glossary</h1>
        <p className="text-muted-foreground">
          Understand key terms and concepts in digital security and privacy
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Search Glossary</CardTitle>
          <CardDescription>
            Enter a term or keyword to filter the glossary
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
        </CardContent>
      </Card>

      <ScrollArea className="h-[60vh] rounded-md border p-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div
              key={index}
              className="mb-6 border-b border-border/40 pb-4 last:mb-0 last:border-b-0 last:pb-0"
            >
              <h2 className="mb-2 text-xl font-semibold">{item.term}</h2>
              <p className="text-muted-foreground">{item.definition}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-muted-foreground">
            No matching terms found.
          </p>
        )}
      </ScrollArea>
    </div>
  )
}

