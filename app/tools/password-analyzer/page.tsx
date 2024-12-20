"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react'
import { analyzePassword } from "@/utils/password-analyzer"

export default function PasswordAnalyzer() {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const analysis = analyzePassword(password)
  const strengthText = [
    "Very Weak",
    "Weak",
    "Moderate",
    "Strong",
    "Very Strong",
  ][Math.min(4, analysis.score)]

  return (
    <div className="container mx-auto max-w-2xl px-4 py-16">
      <div className="mb-8 text-center">
        <Shield className="mx-auto mb-4 h-12 w-12" />
        <h1 className="mb-2 text-3xl font-bold">Password Analyzer</h1>
        <p className="text-muted-foreground">
          Check the strength of your password and get detailed feedback
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Enter Password</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password to analyze"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </Button>
            </div>
          </div>

          {password && (
            <>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label>Password Strength</Label>
                  <span className="text-sm font-medium">{strengthText}</span>
                </div>
                <div className="flex h-2 gap-1 rounded-full bg-muted">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-full w-full rounded-full transition-all ${
                        i < analysis.score ? analysis.color : ""
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Analysis</Label>
                <div className="space-y-2">
                  {analysis.feedback.map((feedback, index) => (
                    <Alert key={index} variant={feedback.startsWith("Add") || feedback.startsWith("Avoid") ? "destructive" : "default"}>
                      <div className="flex items-center gap-2">
                        {feedback.startsWith("Add") || feedback.startsWith("Avoid") ? (
                          <XCircle className="h-4 w-4" />
                        ) : (
                          <CheckCircle2 className="h-4 w-4" />
                        )}
                        <AlertDescription>{feedback}</AlertDescription>
                      </div>
                    </Alert>
                  ))}
                </div>
              </div>

              {analysis.score <= 2 && (
                <Alert variant="destructive">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    This password is not secure enough for sensitive accounts.
                    Consider using our password generator to create a stronger password.
                  </AlertDescription>
                </Alert>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

