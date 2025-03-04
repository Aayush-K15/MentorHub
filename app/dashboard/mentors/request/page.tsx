"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check } from "lucide-react"
import Link from "next/link"

export default function MentorRequestPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const mentorName = searchParams.get("name") || "Sarah Johnson"
  const program = searchParams.get("program") || ""

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
    // In a real app, you would submit the form data to your backend here
    setTimeout(() => {
      router.push("/dashboard")
    }, 3000)
  }

  if (submitted) {
    return (
      <DashboardSidebar>
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
          <div className="rounded-full bg-green-100 p-3 mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Request Sent Successfully!</h1>
          <p className="text-muted-foreground mb-6 max-w-md">
            Your mentorship request has been sent to {mentorName}. You'll receive a notification once they respond.
          </p>
          <Button asChild>
            <Link href="/dashboard">Return to Dashboard</Link>
          </Button>
        </div>
      </DashboardSidebar>
    )
  }

  return (
    <DashboardSidebar>
      <div className="space-y-6">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/dashboard/mentors">← Back to Mentors</Link>
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Request Mentorship</CardTitle>
                <CardDescription>Send a request to {mentorName} to start your mentorship journey</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" alt={mentorName} />
                    <AvatarFallback>
                      {mentorName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{mentorName}</h3>
                    <p className="text-sm text-muted-foreground">Senior Software Engineer at TechCorp</p>
                  </div>
                </div>

                {program && (
                  <div className="p-3 bg-muted rounded-lg">
                    <h4 className="font-medium text-sm">Selected Program:</h4>
                    <p className="text-sm">{program}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Mentorship Details</CardTitle>
                <CardDescription>
                  Tell {mentorName.split(" ")[0]} about your goals and what you're looking for in a mentor
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="goals">What are your primary goals for this mentorship?</Label>
                  <Textarea
                    id="goals"
                    placeholder="E.g., I want to improve my React skills, prepare for technical interviews, etc."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label>How long are you looking to be mentored?</Label>
                  <RadioGroup defaultValue="3-months">
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="1-month" id="1-month" />
                        <Label htmlFor="1-month">1 month</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3-months" id="3-months" />
                        <Label htmlFor="3-months">3 months</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="6-months" id="6-months" />
                        <Label htmlFor="6-months">6 months</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="ongoing" id="ongoing" />
                        <Label htmlFor="ongoing">Ongoing (no specific timeframe)</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Preferred session frequency</Label>
                  <Select defaultValue="weekly">
                    <SelectTrigger>
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="biweekly">Bi-weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="asneeded">As needed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Preferred communication method</Label>
                  <Select defaultValue="video">
                    <SelectTrigger>
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="video">Video calls</SelectItem>
                      <SelectItem value="audio">Audio calls</SelectItem>
                      <SelectItem value="chat">Text chat</SelectItem>
                      <SelectItem value="mixed">Mixed formats</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Personal message to {mentorName.split(" ")[0]}</Label>
                  <Textarea
                    id="message"
                    placeholder="Introduce yourself and explain why you'd like to work with this mentor specifically."
                    className="min-h-[100px]"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href={`/dashboard/mentors/profile?name=${encodeURIComponent(mentorName)}`}>Cancel</Link>
                </Button>
                <Button onClick={handleSubmit}>Send Request</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </DashboardSidebar>
  )
}

