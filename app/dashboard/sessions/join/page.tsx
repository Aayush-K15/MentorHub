"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Mic, MicOff, Video, VideoOff } from "lucide-react"
import Link from "next/link"

export default function JoinSessionPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("id") || "Weekly Check-in"

  const [micEnabled, setMicEnabled] = useState(true)
  const [videoEnabled, setVideoEnabled] = useState(true)
  const [inSession, setInSession] = useState(false)
  const [notes, setNotes] = useState("")
  const [actionItems, setActionItems] = useState([
    { id: 1, text: "Review React hooks documentation", completed: false },
    { id: 2, text: "Complete weather app API integration", completed: false },
    { id: 3, text: "Schedule next session", completed: false },
  ])

  const toggleMic = () => setMicEnabled(!micEnabled)
  const toggleVideo = () => setVideoEnabled(!videoEnabled)
  const startSession = () => setInSession(true)
  const endSession = () => setInSession(false)

  const toggleActionItem = (id: number) => {
    setActionItems(actionItems.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)))
  }

  const addActionItem = (text: string) => {
    if (text.trim()) {
      setActionItems([...actionItems, { id: Date.now(), text, completed: false }])
    }
  }

  return (
    <DashboardSidebar>
      <div className="space-y-6">
        {!inSession ? (
          <Card className="max-w-md mx-auto mt-20">
            <CardHeader>
              <CardTitle>Join Session: {sessionId}</CardTitle>
              <CardDescription>You're about to join a mentorship session with Sarah Johnson</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                    {videoEnabled ? (
                      <img
                        src="/placeholder.svg?height=160&width=160"
                        alt="Video preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Avatar className="h-20 w-20">
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 -mb-4">
                    <Button
                      variant={micEnabled ? "default" : "destructive"}
                      size="icon"
                      className="rounded-full h-8 w-8"
                      onClick={toggleMic}
                    >
                      {micEnabled ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                    </Button>
                    <Button
                      variant={videoEnabled ? "default" : "destructive"}
                      size="icon"
                      className="rounded-full h-8 w-8"
                      onClick={toggleVideo}
                    >
                      {videoEnabled ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">Today</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">10:00 AM - 11:00 AM</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/dashboard/sessions">Cancel</Link>
              </Button>
              <Button onClick={startSession}>Join Session</Button>
            </CardFooter>
          </Card>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">{sessionId}</h1>
                <div className="flex items-center">
                  <Badge className="mr-2">Live</Badge>
                  <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">00:23:45</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant={micEnabled ? "outline" : "destructive"} size="icon" onClick={toggleMic}>
                  {micEnabled ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
                </Button>
                <Button variant={videoEnabled ? "outline" : "destructive"} size="icon" onClick={toggleVideo}>
                  {videoEnabled ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
                </Button>
                <Button variant="destructive" onClick={endSession}>
                  End Session
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card className="overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 w-full h-full p-4">
                      <div className="relative rounded-lg overflow-hidden bg-black flex items-center justify-center">
                        <img
                          src="/placeholder.svg?height=300&width=400"
                          alt="Sarah Johnson"
                          className="w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-white text-xs">
                          Sarah Johnson
                        </div>
                      </div>
                      <div className="relative rounded-lg overflow-hidden bg-black flex items-center justify-center">
                        {videoEnabled ? (
                          <img
                            src="/placeholder.svg?height=300&width=400"
                            alt="You"
                            className="w-full h-full object-cover opacity-90"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center h-full">
                            <Avatar className="h-20 w-20 mb-2">
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <span className="text-white text-sm">Camera Off</span>
                          </div>
                        )}
                        <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-white text-xs">
                          You
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Session Notes</CardTitle>
                    <CardDescription>
                      Take notes during your session. These will be saved automatically.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      placeholder="Type your notes here..."
                      className="min-h-[200px]"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Session Summary</CardTitle>
                    <CardDescription>AI-powered real-time summary of your session</CardDescription>
                  </CardHeader>
                  <CardContent className="max-h-[300px] overflow-y-auto">
                    <div className="space-y-4 text-sm">
                      <p>
                        <strong>10:00 AM:</strong> Session started. Sarah and John discussed progress on React
                        fundamentals.
                      </p>
                      <p>
                        <strong>10:05 AM:</strong> Reviewed components and props concepts. Sarah explained the
                        difference between functional and class components.
                      </p>
                      <p>
                        <strong>10:12 AM:</strong> Discussed state management in React. John shared challenges with the
                        weather app project.
                      </p>
                      <p>
                        <strong>10:18 AM:</strong> Sarah suggested using the useEffect hook to fetch weather data and
                        demonstrated a code example.
                      </p>
                      <p>
                        <strong>10:23 AM:</strong> Currently discussing API integration best practices and error
                        handling approaches.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Action Items</CardTitle>
                    <CardDescription>Track tasks and follow-ups from your session</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        {actionItems.map((item) => (
                          <div key={item.id} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`item-${item.id}`}
                              checked={item.completed}
                              onChange={() => toggleActionItem(item.id)}
                              className="mr-2 h-4 w-4"
                            />
                            <label
                              htmlFor={`item-${item.id}`}
                              className={`text-sm ${item.completed ? "line-through text-muted-foreground" : ""}`}
                            >
                              {item.text}
                            </label>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Input
                          placeholder="Add new action item..."
                          id="new-action-item"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              addActionItem(e.currentTarget.value)
                              e.currentTarget.value = ""
                            }
                          }}
                        />
                        <Button
                          variant="outline"
                          onClick={() => {
                            const input = document.getElementById("new-action-item") as HTMLInputElement
                            addActionItem(input.value)
                            input.value = ""
                          }}
                        >
                          Add
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardSidebar>
  )
}

