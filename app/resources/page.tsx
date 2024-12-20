"use client"

import { useState } from "react"
import { privacyResources, PrivacyResource } from "@/data/privacy-resources"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import { FileText, Search, ExternalLink } from 'lucide-react'
import Link from "next/link"

export default function PrivacyResources() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredResources = privacyResources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="mb-8 text-center">
        <FileText className="mx-auto mb-4 h-12 w-12" />
        <h1 className="mb-2 text-3xl font-bold">Privacy Resources</h1>
        <p className="text-muted-foreground">
          Comprehensive guides and information to enhance your privacy knowledge
        </p>
      </div>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {filteredResources.map((resource: PrivacyResource) => (
          <AccordionItem key={resource.id} value={resource.id}>
            <Card>
              <CardHeader>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex flex-col items-start text-left">
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </div>
                </AccordionTrigger>
              </CardHeader>
              <AccordionContent>
                <CardContent className="pt-4">
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    {resource.content.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  {resource.links.length > 0 && (
                    <div className="mt-4">
                      <h3 className="mb-2 font-semibold">Additional Resources:</h3>
                      <ul className="list-inside list-disc space-y-1">
                        {resource.links.map((link, index) => (
                          <li key={index}>
                            <Link
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-primary hover:underline"
                            >
                              {link.title}
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </AccordionContent>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

