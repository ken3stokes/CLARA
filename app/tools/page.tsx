import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Key, FileText, Lock, User, CheckSquare } from 'lucide-react'
import Link from "next/link"

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-3xl font-bold text-center">CLARA Tools</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
    </div>
  )
}

