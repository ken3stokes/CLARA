"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Copy } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"

export default function PasswordGenerator() {
  const { toast } = useToast()
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(16)
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    special: true,
  })

  const generatePassword = () => {
    const charset = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      special: "!@#$%^&*()_+-=[]{}|;:,.<>?",
    }

    let chars = ""
    if (options.uppercase) chars += charset.uppercase
    if (options.lowercase) chars += charset.lowercase
    if (options.numbers) chars += charset.numbers
    if (options.special) chars += charset.special

    let result = ""
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    setPassword(result)
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(password)
    toast({
      title: "Copied!",
      description: "Password copied to clipboard",
    })
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-16">
      <Card>
        <CardHeader>
          <CardTitle>Password Generator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>Password Length: {length}</Label>
            <Slider
              value={[length]}
              onValueChange={([value]) => setLength(value)}
              max={32}
              min={8}
              step={1}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="uppercase"
                checked={options.uppercase}
                onCheckedChange={(checked) =>
                  setOptions({ ...options, uppercase: checked as boolean })
                }
              />
              <Label htmlFor="uppercase">Uppercase Letters</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="lowercase"
                checked={options.lowercase}
                onCheckedChange={(checked) =>
                  setOptions({ ...options, lowercase: checked as boolean })
                }
              />
              <Label htmlFor="lowercase">Lowercase Letters</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="numbers"
                checked={options.numbers}
                onCheckedChange={(checked) =>
                  setOptions({ ...options, numbers: checked as boolean })
                }
              />
              <Label htmlFor="numbers">Numbers</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="special"
                checked={options.special}
                onCheckedChange={(checked) =>
                  setOptions({ ...options, special: checked as boolean })
                }
              />
              <Label htmlFor="special">Special Characters</Label>
            </div>
          </div>

          <Button onClick={generatePassword} className="w-full">
            Generate Password
          </Button>

          {password && (
            <div className="relative">
              <Input value={password} readOnly />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={copyToClipboard}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

