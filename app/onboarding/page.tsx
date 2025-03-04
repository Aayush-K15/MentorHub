"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ArrowRight, Check, Users } from "lucide-react"

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const totalSteps = 4
  const progress = (step / totalSteps) * 100

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      router.push("/dashboard")
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
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
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Step {step} of {totalSteps}
            </span>
            <div className="w-40 h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full progress-gradient rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>
              {step === 1 && "Select your mentorship domain"}
              {step === 2 && "Tell us about your interests"}
              {step === 3 && "Your experience level"}
              {step === 4 && "Your learning style"}
            </CardTitle>
            <CardDescription>
              {step === 1 && "Choose the primary area where you're seeking mentorship."}
              {step === 2 && "This helps us match you with the right mentors."}
              {step === 3 && "Let us know your current level in your chosen domain."}
              {step === 4 && "Understanding how you learn best helps us tailor your experience."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <RadioGroup defaultValue="startup">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 rounded-md border p-4">
                    <RadioGroupItem value="startup" id="startup" />
                    <Label htmlFor="startup" className="flex flex-col cursor-pointer">
                      <span className="font-medium">Startup & Entrepreneurship</span>
                      <span className="text-sm text-muted-foreground">Business planning, funding, growth</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-4">
                    <RadioGroupItem value="career" id="career" />
                    <Label htmlFor="career" className="flex flex-col cursor-pointer">
                      <span className="font-medium">Career Development</span>
                      <span className="text-sm text-muted-foreground">Job advancement, transitions, leadership</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-4">
                    <RadioGroupItem value="skills" id="skills" />
                    <Label htmlFor="skills" className="flex flex-col cursor-pointer">
                      <span className="font-medium">Skills & Expertise</span>
                      <span className="text-sm text-muted-foreground">Technical skills, domain knowledge</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-md border p-4">
                    <RadioGroupItem value="life" id="life" />
                    <Label htmlFor="life" className="flex flex-col cursor-pointer">
                      <span className="font-medium">Life Coaching</span>
                      <span className="text-sm text-muted-foreground">Personal growth, balance, well-being</span>
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="interests">Specific interests within your domain</Label>
                  <Textarea
                    id="interests"
                    placeholder="E.g., Product management, SaaS business models, fundraising strategies..."
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Top skills you want to develop</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <Input placeholder="Skill 1" />
                    <Input placeholder="Skill 2" />
                    <Input placeholder="Skill 3" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goals">Your primary goals for mentorship</Label>
                  <Textarea
                    id="goals"
                    placeholder="What do you hope to achieve through mentorship?"
                    className="min-h-[100px]"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label>Your experience level in your chosen domain</Label>
                  <RadioGroup defaultValue="intermediate">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 rounded-md border p-4">
                        <RadioGroupItem value="beginner" id="beginner" />
                        <Label htmlFor="beginner" className="flex flex-col cursor-pointer">
                          <span className="font-medium">Beginner</span>
                          <span className="text-sm text-muted-foreground">Just starting out, limited experience</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 rounded-md border p-4">
                        <RadioGroupItem value="intermediate" id="intermediate" />
                        <Label htmlFor="intermediate" className="flex flex-col cursor-pointer">
                          <span className="font-medium">Intermediate</span>
                          <span className="text-sm text-muted-foreground">Some experience, seeking to advance</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 rounded-md border p-4">
                        <RadioGroupItem value="advanced" id="advanced" />
                        <Label htmlFor="advanced" className="flex flex-col cursor-pointer">
                          <span className="font-medium">Advanced</span>
                          <span className="text-sm text-muted-foreground">
                            Significant experience, looking to master
                          </span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 rounded-md border p-4">
                        <RadioGroupItem value="expert" id="expert" />
                        <Label htmlFor="expert" className="flex flex-col cursor-pointer">
                          <span className="font-medium">Expert</span>
                          <span className="text-sm text-muted-foreground">
                            Highly skilled, seeking specialized guidance
                          </span>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="years">Years of experience</Label>
                  <Select defaultValue="2-5">
                    <SelectTrigger id="years">
                      <SelectValue placeholder="Select years of experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">Less than 1 year</SelectItem>
                      <SelectItem value="1-2">1-2 years</SelectItem>
                      <SelectItem value="2-5">2-5 years</SelectItem>
                      <SelectItem value="5-10">5-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label>How do you prefer to learn?</Label>
                  <RadioGroup defaultValue="visual">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2 rounded-md border p-4">
                        <RadioGroupItem value="visual" id="visual" />
                        <Label htmlFor="visual" className="flex flex-col cursor-pointer">
                          <span className="font-medium">Visual Learner</span>
                          <span className="text-sm text-muted-foreground">
                            Learn best through images, diagrams, videos
                          </span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 rounded-md border p-4">
                        <RadioGroupItem value="auditory" id="auditory" />
                        <Label htmlFor="auditory" className="flex flex-col cursor-pointer">
                          <span className="font-medium">Auditory Learner</span>
                          <span className="text-sm text-muted-foreground">
                            Learn best through listening and discussion
                          </span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 rounded-md border p-4">
                        <RadioGroupItem value="reading" id="reading" />
                        <Label htmlFor="reading" className="flex flex-col cursor-pointer">
                          <span className="font-medium">Reading/Writing Learner</span>
                          <span className="text-sm text-muted-foreground">Learn best through text and writing</span>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 rounded-md border p-4">
                        <RadioGroupItem value="kinesthetic" id="kinesthetic" />
                        <Label htmlFor="kinesthetic" className="flex flex-col cursor-pointer">
                          <span className="font-medium">Kinesthetic Learner</span>
                          <span className="text-sm text-muted-foreground">Learn best through practice and doing</span>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label>Preferred session frequency</Label>
                  <Select defaultValue="weekly">
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred frequency" />
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
                  <Label>Preferred session format</Label>
                  <Select defaultValue="video">
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="video">Video calls</SelectItem>
                      <SelectItem value="audio">Audio calls</SelectItem>
                      <SelectItem value="chat">Text chat</SelectItem>
                      <SelectItem value="mixed">Mixed formats</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleBack} disabled={step === 1}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button onClick={handleNext}>
              {step < totalSteps ? (
                <>
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Complete Setup
                  <Check className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

