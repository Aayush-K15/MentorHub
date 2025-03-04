"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Check, Users } from "lucide-react"
import { MentorMatchingResults } from "@/components/mentor-matching-results"

export default function SignupPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  
  // State for personal information
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  
  // State for account credentials
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  
  // State for mentorship details
  const [mentorshipDomain, setMentorshipDomain] = useState("")
  const [interests, setInterests] = useState("")

  // Mentorship domains
  const mentorshipDomains = [
    "Technology", 
    "Business", 
    "Design", 
    "Marketing", 
    "Data Science", 
    "Entrepreneurship", 
    "Finance", 
    "Healthcare", 
    "Education", 
    "Creative Arts"
  ]

  // Load saved data on component mount
  useEffect(() => {
    const savedFirstName = localStorage.getItem('firstName')
    const savedLastName = localStorage.getItem('lastName')
    const savedEmail = localStorage.getItem('email')
    const savedPhone = localStorage.getItem('phone')
    const savedUsername = localStorage.getItem('username')

    if (savedFirstName) setFirstName(savedFirstName)
    if (savedLastName) setLastName(savedLastName)
    if (savedEmail) setEmail(savedEmail)
    if (savedPhone) setPhone(savedPhone)
    if (savedUsername) setUsername(savedUsername)
  }, [])

  const handleNext = () => {
    // Validation for each step
    if (step === 1 && (!firstName || !lastName || !email)) {
      alert("Please fill in all required fields")
      return
    }

    if (step === 2 && (!username || !password || password !== confirmPassword)) {
      alert("Please ensure username is filled and passwords match")
      return
    }

    if (step === 3 && !mentorshipDomain) {
      alert("Please select a mentorship domain")
      return
    }

    if (step === 4 && !interests) {
      alert("Please tell us about your interests and goals")
      return
    }

    // Save data to localStorage for each step
    if (step === 1) {
      localStorage.setItem('firstName', firstName)
      localStorage.setItem('lastName', lastName)
      localStorage.setItem('email', email)
      localStorage.setItem('phone', phone || '')
    }

    if (step === 2) {
      localStorage.setItem('username', username)
      // Note: In a real app, never store passwords in localStorage
      // This is just for demonstration
    }

    if (step === 3) {
      localStorage.setItem('mentorshipDomain', mentorshipDomain)
    }

    if (step === 4) {
      localStorage.setItem('interests', interests)
    }

    // Move to next step or complete signup
    if (step < 5) {
      setStep(step + 1)
    } else {
      // Final step: complete signup
      // In a real app, you'd send data to backend for registration
      router.push("/dashboard")
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
            <CardTitle>Join MentorHub</CardTitle>
            <CardDescription>
              {step === 1 && "Personal Information"}
              {step === 2 && "Account Credentials"}
              {step === 3 && "Select Mentorship Domain"}
              {step === 4 && "Your Goals and Interests"}
              {step === 5 && "Mentor Matching"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input 
                      id="first-name" 
                      placeholder="John" 
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input 
                      id="last-name" 
                      placeholder="Doe" 
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number (optional)</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input 
                    id="username" 
                    placeholder="johndoe" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm password</Label>
                  <Input 
                    id="confirm-password" 
                    type="password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="mentorship-domain">Select Mentorship Domain</Label>
                  <Select 
                    value={mentorshipDomain}
                    onValueChange={setMentorshipDomain}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your primary area of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      {mentorshipDomains.map((domain) => (
                        <SelectItem key={domain} value={domain}>
                          {domain}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="interests">Your Goals and Detailed Interests</Label>
                  <Textarea 
                    id="interests" 
                    placeholder="Provide more context about your professional goals, specific areas you want to develop, challenges you're facing, and what you hope to achieve through mentorship. The more detailed you are, the better we can match you with the right mentor." 
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                    rows={6}
                  />
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-4">
                <MentorMatchingResults />
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {step === 1 ? "Back to Home" : "Back"}
            </Button>
            <Button onClick={handleNext}>
              {step < 5 ? "Continue" : "Continue"}
              {step < 5 ? null : <Check className="ml-2 h-4 w-4" />}
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