import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Key, FileText, Lock, User, CheckSquare } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <div className="mx-auto mb-8 max-w-md">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clara-4G8uk7LylKhccV5q9b6KQy7W0K3rFK.webp"
            alt="CLARA - Your Privacy Expert"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
            priority
          />
          <h2 className="mt-4 text-2xl font-semibold">Meet CLARA</h2>
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">
          Your trusted companion for digital security and privacy
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Your go-to platform for privacy-focused tools and resources
        </p>
        <Button
          size="lg"
          onClick={() => {
            document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Explore Tools
        </Button>
      </div>

      {/* Tools Grid */}
      <div id="tools" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="flex flex-col items-center p-6">
            <Key className="mb-4 h-12 w-12" />
            <h2 className="mb-2 text-xl font-semibold">Password Generator</h2>
            <p className="mb-4 text-center text-sm text-muted-foreground">
              Create strong, secure passwords with our advanced generator
            </p>
            <Button variant="outline" asChild>
              <Link href="/tools/password-generator">Try Now</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center p-6">
            <Lock className="mb-4 h-12 w-12" />
            <h2 className="mb-2 text-xl font-semibold">Password Analyzer</h2>
            <p className="mb-4 text-center text-sm text-muted-foreground">
              Check the strength of your passwords
            </p>
            <Button variant="outline" asChild>
              <Link href="/tools/password-analyzer">Try Now</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center p-6">
            <User className="mb-4 h-12 w-12" />
            <h2 className="mb-2 text-xl font-semibold">Username Generator</h2>
            <p className="mb-4 text-center text-sm text-muted-foreground">
              Create unique and memorable usernames
            </p>
            <Button variant="outline" asChild>
              <Link href="/tools/username-generator">Try Now</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center p-6">
            <CheckSquare className="mb-4 h-12 w-12" />
            <h2 className="mb-2 text-xl font-semibold">Privacy Checklist</h2>
            <p className="mb-4 text-center text-sm text-muted-foreground">
              Assess and improve your digital privacy practices
            </p>
            <Button variant="outline" asChild>
              <Link href="/privacy-checklist">Start Checklist</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center p-6">
            <Shield className="mb-4 h-12 w-12" />
            <h2 className="mb-2 text-xl font-semibold">Encryption Tools</h2>
            <p className="mb-4 text-center text-sm text-muted-foreground">
              Encrypt and decrypt your sensitive data with ease
            </p>
            <Button variant="outline" asChild>
              <Link href="/tools/encryption">Try Now</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-center p-6">
            <FileText className="mb-4 h-12 w-12" />
            <h2 className="mb-2 text-xl font-semibold">Privacy Resources</h2>
            <p className="mb-4 text-center text-sm text-muted-foreground">
              Learn about privacy best practices and tools
            </p>
            <Button variant="outline" asChild>
              <Link href="/resources">Learn More</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Privacy Banner */}
      <div className="mt-16 rounded-lg border border-border/40 bg-muted p-4 text-center">
        <p className="text-sm text-muted-foreground">
          🔒 Your privacy matters: No tracking, no data collection, offline-first operation
        </p>
      </div>
    </div>
  )
}

