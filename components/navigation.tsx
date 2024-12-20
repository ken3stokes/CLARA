"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Searching for:", searchQuery)
    // For now, let's just navigate to the resources page with the search query
    router.push(`/resources?search=${encodeURIComponent(searchQuery)}`)
  }

  return (
    <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clara-4G8uk7LylKhccV5q9b6KQy7W0K3rFK.webp"
              alt="CLARA"
              width={32}
              height={32}
              className="rounded-full"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
            <Link href="/tools">
              <Button variant="ghost">Tools</Button>
            </Link>
            <Link href="/resources">
              <Button variant="ghost">Resources</Button>
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="relative hidden md:block">
            <Input
              type="search"
              placeholder="Search..."
              className="w-[200px] sm:w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" size="sm" className="absolute right-0 top-0 h-full">
              <Search className="h-4 w-4" />
            </Button>
          </form>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

