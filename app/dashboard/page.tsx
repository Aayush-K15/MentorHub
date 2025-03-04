import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Clock, MessageSquare, Target, Users, Video, Flame, Bot } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <DashboardSidebar>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John! Here's your mentorship overview.</p>
        </div>

        {/* AI Chat Button */}
        <Button className="w-full shadow-lg" asChild>
          <Link href="/dashboard/ai-chat" className="flex items-center justify-center gap-2">
            <Bot className="h-5 w-5" />
            <span>Chat with Shadow AI</span>
          </Link>
        </Button>

        {/* Streak Counter Card */}
        <Card className="bg-primary/5">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Flame className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">7 Day Streak!</h2>
                  <p className="text-muted-foreground">Keep up the great work!</p>
                </div>
              </div>
              <div className="hidden sm:block">
                <Button variant="outline" size="sm">View Details</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mentorship Journey */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Your Mentorship Journey</CardTitle>
              <Button variant="outline" size="sm">
                View Details
              </Button>
            </div>
            <CardDescription>Current progress in your mentorship program</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Overall Progress</span>
                  <span>45%</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Goal 1: Learn React</span>
                    <span>70%</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Goal 2: Build Portfolio</span>
                    <span>30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Goal 3: Interview Prep</span>
                    <span>20%</span>
                  </div>
                  <Progress value={20} className="h-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats and Upcoming Sessions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>Your scheduled mentorship sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <UpcomingSession
                  title="Weekly Check-in"
                  mentor="Sarah Johnson"
                  date="Tomorrow"
                  time="10:00 AM - 11:00 AM"
                  avatarSrc="/placeholder.svg?height=40&width=40"
                />
                <UpcomingSession
                  title="Code Review Session"
                  mentor="Michael Chen"
                  date="Friday, Mar 8"
                  time="2:00 PM - 3:00 PM"
                  avatarSrc="/placeholder.svg?height=40&width=40"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Stats</CardTitle>
              <CardDescription>Your mentorship activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-4 rounded-full bg-primary/10 p-2">
                      <Flame className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Streak</div>
                      <div className="text-xs text-muted-foreground">Days active</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold">7</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-4 rounded-full bg-primary/10 p-2">
                      <Video className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Sessions</div>
                      <div className="text-xs text-muted-foreground">Completed</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold">12</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-4 rounded-full bg-primary/10 p-2">
                      <Target className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Goals</div>
                      <div className="text-xs text-muted-foreground">In progress</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold">3</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="mr-4 rounded-full bg-primary/10 p-2">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Hours</div>
                      <div className="text-xs text-muted-foreground">Total mentorship</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold">24</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Your Mentor and Community */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Mentor</CardTitle>
              <CardDescription>Your primary mentor</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-start space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Sarah Johnson" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <div>
                    <h3 className="font-medium">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">Senior Software Engineer at TechCorp</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">Career Growth</Badge>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="/dashboard/mentors/profile">
                      View Profile
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Activity</CardTitle>
              <CardDescription>Recent discussions in your communities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <MessageSquare className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Frontend Developers Circle</h4>
                    <p className="text-xs text-muted-foreground">New discussion: "Best practices for React hooks"</p>
                    <p className="text-xs text-muted-foreground mt-1">2 hours ago • 12 replies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Career Changers Group</h4>
                    <p className="text-xs text-muted-foreground">New event: "Networking for career transitions"</p>
                    <p className="text-xs text-muted-foreground mt-1">Yesterday • 8 going</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="w-full" asChild>
                  <Link href="/dashboard/community">
                    View All Communities
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardSidebar>
  )
}

function UpcomingSession({
  title,
  mentor,
  date,
  time,
  avatarSrc,
}: {
  title: string
  mentor: string
  date: string
  time: string
  avatarSrc: string
}) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex-shrink-0">
        <Avatar>
          <AvatarImage src={avatarSrc} alt={mentor} />
          <AvatarFallback>
            {mentor
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">{title}</p>
          <Badge variant="outline" className="text-xs">
            {date}
          </Badge>
        </div>
        <p className="text-xs text-muted-foreground">With {mentor}</p>
        <div className="flex items-center text-xs text-muted-foreground">
          <Clock className="mr-1 h-3 w-3" />
          <span>{time}</span>
        </div>
      </div>
      <Button size="sm" variant="outline" asChild>
        <Link href="/dashboard/sessions">Join</Link>
      </Button>
    </div>
  )
}

