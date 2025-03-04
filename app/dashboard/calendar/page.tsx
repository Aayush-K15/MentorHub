"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import Link from "next/link"

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState("March")
  const [currentYear, setCurrentYear] = useState("2025")
  const [view, setView] = useState("month")

  // Sample calendar data
  const calendarEvents = [
    {
      id: 1,
      title: "Weekly Check-in",
      mentor: "Sarah Johnson",
      mentorImage: "/placeholder.svg?height=40&width=40",
      date: "2025-03-05",
      time: "10:00 AM - 11:00 AM",
      type: "session",
    },
    {
      id: 2,
      title: "Code Review Session",
      mentor: "Michael Chen",
      mentorImage: "/placeholder.svg?height=40&width=40",
      date: "2025-03-08",
      time: "2:00 PM - 3:00 PM",
      type: "session",
    },
    {
      id: 3,
      title: "Interview Preparation",
      mentor: "David Wilson",
      mentorImage: "/placeholder.svg?height=40&width=40",
      date: "2025-03-11",
      time: "11:00 AM - 12:00 PM",
      type: "session",
    },
    {
      id: 4,
      title: "Complete Weather App",
      date: "2025-03-10",
      type: "milestone",
    },
    {
      id: 5,
      title: "Frontend Developers Meetup",
      date: "2025-03-15",
      time: "6:00 PM - 8:00 PM",
      type: "community",
    },
    {
      id: 6,
      title: "Portfolio Review",
      mentor: "Michael Chen",
      mentorImage: "/placeholder.svg?height=40&width=40",
      date: "2025-03-22",
      time: "2:00 PM - 3:00 PM",
      type: "session",
    },
    {
      id: 7,
      title: "React Router Implementation",
      date: "2025-03-20",
      type: "milestone",
    },
  ]

  // Generate calendar days
  const generateCalendarDays = () => {
    // This is a simplified version - in a real app, you'd calculate actual days
    const days = []
    const daysInMonth = 31
    const firstDayOfMonth = 6 // Saturday (0-indexed, 0 = Sunday)

    // Add empty cells for days before the 1st of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: "", events: [] })
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `2025-03-${day.toString().padStart(2, "0")}`
      const dayEvents = calendarEvents.filter((event) => event.date === dateString)
      days.push({ day, events: dayEvents })
    }

    return days
  }

  const calendarDays = generateCalendarDays()

  // Navigation functions
  const previousMonth = () => {
    // In a real app, this would update the month and year correctly
    setCurrentMonth("February")
  }

  const nextMonth = () => {
    // In a real app, this would update the month and year correctly
    setCurrentMonth("April")
  }

  return (
    <DashboardSidebar>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
            <p className="text-muted-foreground">Manage your mentorship schedule and milestones</p>
          </div>
          <Button asChild>
            <Link href="/dashboard/sessions/schedule">
              <Plus className="mr-2 h-4 w-4" /> Schedule Session
            </Link>
          </Button>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Button variant="outline" size="icon" onClick={previousMonth}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="mx-4 text-xl font-bold">
                  {currentMonth} {currentYear}
                </div>
                <Button variant="outline" size="icon" onClick={nextMonth}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <Select value={view} onValueChange={setView}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="View" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="month">Month</SelectItem>
                    <SelectItem value="week">Week</SelectItem>
                    <SelectItem value="day">Day</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">Today</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-1">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center font-medium py-2">
                  {day}
                </div>
              ))}

              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`min-h-[120px] border rounded-md p-1 ${
                    day.day ? "hover:bg-muted/50 cursor-pointer" : "bg-muted/20"
                  }`}
                >
                  {day.day && (
                    <>
                      <div className="text-sm font-medium p-1">{day.day}</div>
                      <div className="space-y-1">
                        {day.events.map((event) => (
                          <Link
                            key={event.id}
                            href={
                              event.type === "session"
                                ? `/dashboard/sessions/details?id=${event.id}`
                                : event.type === "milestone"
                                  ? `/dashboard/goals/milestones?id=${event.id}`
                                  : `/dashboard/community/events?id=${event.id}`
                            }
                            className="block"
                          >
                            <div
                              className={`text-xs p-1 rounded truncate ${
                                event.type === "session"
                                  ? "bg-primary/10 text-primary"
                                  : event.type === "milestone"
                                    ? "bg-orange-500/10 text-orange-700"
                                    : "bg-green-500/10 text-green-700"
                              }`}
                            >
                              {event.title}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>Your scheduled mentorship sessions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {calendarEvents
                .filter((event) => event.type === "session")
                .slice(0, 3)
                .map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-3">
                        <AvatarImage src={event.mentorImage} alt={event.mentor} />
                        <AvatarFallback>
                          {event.mentor
                            ?.split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium text-sm">{event.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          {new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })} •{" "}
                          {event.time}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/dashboard/sessions/details?id=${event.id}`}>Details</Link>
                    </Button>
                  </div>
                ))}
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/sessions">View All Sessions</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Milestones</CardTitle>
              <CardDescription>Goals and deadlines to keep track of</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {calendarEvents
                .filter((event) => event.type === "milestone")
                .map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center">
                      <Badge className="mr-3 bg-orange-500">Milestone</Badge>
                      <div>
                        <h4 className="font-medium text-sm">{event.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          Due: {new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/dashboard/goals/milestones?id=${event.id}`}>Details</Link>
                    </Button>
                  </div>
                ))}
              <Button variant="outline" className="w-full" asChild>
                <Link href="/dashboard/goals">View All Goals</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardSidebar>
  )
}

