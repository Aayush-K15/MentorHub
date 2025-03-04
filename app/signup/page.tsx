"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, Check, Users } from "lucide-react"

export default function SignupPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [userType, setUserType] = useState<"mentor" | "mentee" | null>(null)

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      router.push("/onboarding")
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    } else {
      router.push("/")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">MentorHub</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Create your account</CardTitle>
            <CardDescription>
              {step === 1 && "Join MentorHub to connect with mentors and mentees."}
              {step === 2 && "Tell us about yourself."}
              {step === 3 && "Set up your account credentials."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <RadioGroup value={userType || ""} onValueChange={(value) => setUserType(value as "mentor" | "mentee")}>
                <div className="flex flex-col space-y-4">
                  <Label className="text-base font-medium">I want to join as a:</Label>
                  <div className="flex flex-col space-y-3">
                    <div
                      className={`flex items-center space-x-2 rounded-md border p-4 ${userType === "mentor" ? "border-primary" : ""}`}
                    >
                      <RadioGroupItem value="mentor" id="mentor" />
                      <Label htmlFor="mentor" className="flex flex-col cursor-pointer">
                        <span className="font-medium">Mentor</span>
                        <span className="text-sm text-muted-foreground">
                          I want to guide others and share my expertise
                        </span>
                      </Label>
                    </div>
                    <div
                      className={`flex items-center space-x-2 rounded-md border p-4 ${userType === "mentee" ? "border-primary" : ""}`}
                    >
                      <RadioGroupItem value="mentee" id="mentee" />
                      <Label htmlFor="mentee" className="flex flex-col cursor-pointer">
                        <span className="font-medium">Mentee</span>
                        <span className="text-sm text-muted-foreground">
                          I'm looking for guidance to achieve my goals
                        </span>
                      </Label>
                    </div>
                  </div>
                </div>
              </RadioGroup>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number (optional)</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="johndoe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {step === 1 ? "Back to Home" : "Back"}
            </Button>
            <Button onClick={handleNext} disabled={step === 1 && !userType}>
              {step < 3 ? "Continue" : "Create Account"}
              {step < 3 ? null : <Check className="ml-2 h-4 w-4" />}
            </Button>
          </CardFooter>
        </Card>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MentorHub. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:underline">
              Terms
            </Link>
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
            <Link href="#" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

