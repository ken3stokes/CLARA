"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Lock, Unlock, Copy, RefreshCw } from 'lucide-react'
import { caesarCipher } from "@/utils/caesar-cipher"
import { useToast } from "@/components/ui/use-toast"

export default function EncryptionTools() {
  const { toast } = useToast()
  const [text, setText] = useState("")
  const [shift, setShift] = useState(3)
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt")
  const [result, setResult] = useState("")

  const handleProcess = () => {
    const processed = caesarCipher(text, shift, mode === "decrypt")
    setResult(processed)
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(result)
    toast({
      title: "Copied!",
      description: "Text copied to clipboard",
    })
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-16">
      <div className="mb-8 text-center">
        {mode === "encrypt" ? (
          <Lock className="mx-auto mb-4 h-12 w-12" />
        ) : (
          <Unlock className="mx-auto mb-4 h-12 w-12" />
        )}
        <h1 className="mb-2 text-3xl font-bold">Encryption Tools</h1>
        <p className="text-muted-foreground">
          Encrypt and decrypt your messages using a simple Caesar cipher
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Caesar Cipher</CardTitle>
          <CardDescription>Enter your text and choose encryption settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="text">Text to process</Label>
            <Textarea
              id="text"
              placeholder="Enter text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="shift">Shift amount</Label>
              <Input
                id="shift"
                type="number"
                min={1}
                max={25}
                value={shift}
                onChange={(e) => setShift(parseInt(e.target.value))}
              />
            </div>
            <div className="flex-1 space-y-2">
              <Label htmlFor="mode">Mode</Label>
              <Select value={mode} onValueChange={(value: "encrypt" | "decrypt") => setMode(value)}>
                <SelectTrigger id="mode">
                  <SelectValue placeholder="Select mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="encrypt">Encrypt</SelectItem>
                  <SelectItem value="decrypt">Decrypt</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button onClick={handleProcess} className="w-full">
            {mode === "encrypt" ? "Encrypt" : "Decrypt"}
          </Button>

          {result && (
            <div className="space-y-2">
              <Label htmlFor="result">Result</Label>
              <div className="relative">
                <Textarea
                  id="result"
                  value={result}
                  readOnly
                  className="pr-20"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-8 top-1"
                  onClick={copyToClipboard}
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-1 top-1"
                  onClick={handleProcess}
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

