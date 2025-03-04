import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Download, MessageSquare, Play, Plus, Video } from "lucide-react"
import Link from "next/link"

export default function SessionsPage() {
  return (
    <DashboardSidebar>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Sessions</h1>
            <p className="text-muted-foreground">Manage your mentorship sessions and recordings</p>
          </div>
          <Button asChild>
            <Link href="/dashboard/sessions/schedule">
              <Plus className="mr-2 h-4 w-4" /> Schedule Session
            </Link>
          </Button>
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-2">
                <Badge className="bg-white text-primary">Upcoming</Badge>
                <h2 className="text-xl font-bold">Weekly Check-in with Sarah Johnson</h2>
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>Tomorrow, 10:00 AM - 11:00 AM</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="secondary" asChild>
                  <Link href="/dashboard/sessions/prepare?id=123">Prepare</Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href="/dashboard/sessions/join?id=123">Join Session</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="upcoming">
          <TabsList>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past Sessions</TabsTrigger>
            <TabsTrigger value="recordings">Recordings</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6 mt-6">
            <SessionCard
              title="Weekly Check-in"
              mentor="Sarah Johnson"
              mentorImage="/placeholder.svg?height=40&width=40"
              date="Tomorrow"
              time="10:00 AM - 11:00 AM"
              status="upcoming"
              agenda={[
                "Review progress on React fundamentals",
                "Discuss challenges with the weather app project",
                "Plan next steps for learning React Router",
              ]}
            />

            <SessionCard
              title="Code Review Session"
              mentor="Michael Chen"
              mentorImage="/placeholder.svg?height=40&width=40"
              date="Friday, Mar 8, 2025"
              time="2:00 PM - 3:00 PM"
              status="upcoming"
              agenda={[
                "Review portfolio website code",
                "Discuss responsive design implementation",
                "Plan improvements for mobile experience",
              ]}
            />

            <SessionCard
              title="Interview Preparation"
              mentor="David Wilson"
              mentorImage="/placeholder.svg?height=40&width=40"
              date="Monday, Mar 11, 2025"
              time="11:00 AM - 12:00 PM"
              status="upcoming"
              agenda={[
                "Mock technical interview",
                "Review data structure problems",
                "Feedback on problem-solving approach",
              ]}
            />
          </TabsContent>

          <TabsContent value="past" className="space-y-6 mt-6">
            <SessionCard
              title="Introduction & Goal Setting"
              mentor="Sarah Johnson"
              mentorImage="/placeholder.svg?height=40&width=40"
              date="February 25, 2025"
              time="10:00 AM - 11:00 AM"
              status="completed"
              agenda={[
                "Introduction and getting to know each other",
                "Discuss mentorship goals and expectations",
                "Create initial learning plan",
              ]}
              hasRecording={true}
              hasSummary={true}
            />

            <SessionCard
              title="React Basics Review"
              mentor="Sarah Johnson"
              mentorImage="/placeholder.svg?height=40&width=40"
              date="February 18, 2025"
              time="10:00 AM - 11:00 AM"
              status="completed"
              agenda={["Review React component basics", "Discuss state management approaches", "Q&A on React hooks"]}
              hasRecording={true}
              hasSummary={true}
            />

            <SessionCard
              title="Portfolio Planning"
              mentor="Michael Chen"
              mentorImage="/placeholder.svg?height=40&width=40"
              date="February 15, 2025"
              time="2:00 PM - 3:00 PM"
              status="completed"
              agenda={[
                "Discuss portfolio structure and content",
                "Review design mockups",
                "Plan implementation approach",
              ]}
              hasRecording={true}
              hasSummary={true}
            />
          </TabsContent>

          <TabsContent value="recordings" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Session Recordings</CardTitle>
                <CardDescription>Access recordings of your past mentorship sessions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <RecordingItem
                  title="Introduction & Goal Setting"
                  mentor="Sarah Johnson"
                  date="February 25, 2025"
                  duration="58 minutes"
                />

                <RecordingItem
                  title="React Basics Review"
                  mentor="Sarah Johnson"
                  date="February 18, 2025"
                  duration="62 minutes"
                />

                <RecordingItem
                  title="Portfolio Planning"
                  mentor="Michael Chen"
                  date="February 15, 2025"
                  duration="55 minutes"
                />

                <RecordingItem
                  title="Git Workflow Session"
                  mentor="Sarah Johnson"
                  date="January 28, 2025"
                  duration="45 minutes"
                />

                <RecordingItem
                  title="CSS Layout Techniques"
                  mentor="Lisa Rodriguez"
                  date="January 20, 2025"
                  duration="50 minutes"
                />
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Recordings
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardSidebar>
  )
}

function SessionCard({
  title,
  mentor,
  mentorImage,
  date,
  time,
  status,
  agenda,
  hasRecording = false,
  hasSummary = false,
}: {
  title: string
  mentor: string
  mentorImage: string
  date: string
  time: string
  status: "upcoming" | "completed" | "cancelled"
  agenda: string[]
  hasRecording?: boolean
  hasSummary?: boolean
}) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <CardTitle>{title}</CardTitle>
            <Badge
              className={`ml-2 ${
                status === "upcoming" ? "bg-blue-500" : status === "completed" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {status === "upcoming" ? "Upcoming" : status === "completed" ? "Completed" : "Cancelled"}
            </Badge>
          </div>
          {status === "upcoming" && (
            <Button variant="outline" size="sm" asChild>
              <Link href={`/dashboard/sessions/reschedule?id=${encodeURIComponent(title)}`}>Reschedule</Link>
            </Button>
          )}
        </div>
        <CardDescription>Session with {mentor}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src={mentorImage} alt={mentor} />
              <AvatarFallback>
                {mentor
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-medium">{mentor}</h4>
              <p className="text-sm text-muted-foreground">Your Mentor</p>
            </div>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="text-sm mr-4">{date}</span>
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="text-sm">{time}</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Session Agenda</h4>
          <ul className="space-y-1">
            {agenda.map((item, index) => (
              <li key={index} className="text-sm flex items-start">
                <span className="mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-6">
        <div className="flex gap-2">
          {status === "completed" && hasRecording && (
            <Button variant="outline" size="sm" asChild>
              <Link href={`/dashboard/sessions/recording?id=${encodeURIComponent(title)}`}>
                <Play className="mr-1 h-4 w-4" /> Watch Recording
              </Link>
            </Button>
          )}
          {status === "completed" && hasSummary && (
            <Button variant="outline" size="sm" asChild>
              <Link href={`/dashboard/sessions/summary?id=${encodeURIComponent(title)}`}>
                <MessageSquare className="mr-1 h-4 w-4" /> View Summary
              </Link>
            </Button>
          )}
        </div>
        {status === "upcoming" && (
          <Button asChild>
            <Link href={`/dashboard/sessions/join?id=${encodeURIComponent(title)}`}>
              <Video className="mr-2 h-4 w-4" /> Join Session
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

function RecordingItem({
  title,
  mentor,
  date,
  duration,
}: {
  title: string
  mentor: string
  date: string
  duration: string
}) {
  return (
    <div className="flex items-center justify-between p-3 border rounded-lg">
      <div className="flex items-center">
        <div className="rounded-full bg-primary/10 p-2 mr-3">
          <Video className="h-4 w-4 text-primary" />
        </div>
        <div>
          <h4 className="font-medium text-sm">{title}</h4>
          <p className="text-xs text-muted-foreground">
            with {mentor} • {date}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs text-muted-foreground">{duration}</span>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" asChild>
            <Link href={`/dashboard/sessions/recording?id=${encodeURIComponent(title)}`}>
              <Play className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={`/dashboard/sessions/download?id=${encodeURIComponent(title)}`}>
              <Download className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

