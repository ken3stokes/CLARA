"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Copy, RefreshCw } from 'lucide-react'
import { generateUsername } from "@/utils/username-generator"
import { useToast } from "@/components/ui/use-toast"

export default function UsernameGenerator() {
  const { toast } = useToast()
  const [username, setUsername] = useState("")
  const [options, setOptions] = useState({
    useAdjective: true,
    useNoun: true,
    useNumber: false,
  })

  const generateNewUsername = () => {
    const newUsername = generateUsername(options)
    setUsername(newUsername)
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(username)
    toast({
      title: "Copied!",
      description: "Username copied to clipboard",
    })
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-16">
      <div className="mb-8 text-center">
        <User className="mx-auto mb-4 h-12 w-12" />
        <h1 className="mb-2 text-3xl font-bold">Username Generator</h1>
        <p className="text-muted-foreground">
          Create unique and memorable usernames for your online accounts
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Generate Username</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="useAdjective"
                checked={options.useAdjective}
                onCheckedChange={(checked) =>
                  setOptions({ ...options, useAdjective: checked as boolean })
                }
              />
              <Label htmlFor="useAdjective">Include Adjective</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="useNoun"
                checked={options.useNoun}
                onCheckedChange={(checked) =>
                  setOptions({ ...options, useNoun: checked as boolean })
                }
              />
              <Label htmlFor="useNoun">Include Noun</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="useNumber"
                checked={options.useNumber}
                onCheckedChange={(checked) =>
                  setOptions({ ...options, useNumber: checked as boolean })
                }
              />
              <Label htmlFor="useNumber">Include Number</Label>
            </div>
          </div>

          <Button onClick={generateNewUsername} className="w-full">
            Generate Username
          </Button>

          {username && (
            <div className="space-y-2">
              <Label htmlFor="generatedUsername">Generated Username</Label>
              <div className="relative">
                <Input
                  id="generatedUsername"
                  value={username}
                  readOnly
                  className="pr-20"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-8 top-0"
                  onClick={copyToClipboard}
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-0 top-0"
                  onClick={generateNewUsername}
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

