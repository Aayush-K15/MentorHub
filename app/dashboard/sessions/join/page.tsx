"use client"

import { useState, useRef, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Mic, MicOff, Video, VideoOff, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function JoinSessionPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("id") || "Weekly Check-in"

  const [micEnabled, setMicEnabled] = useState(true)
  const [videoEnabled, setVideoEnabled] = useState(false)
  const [inSession, setInSession] = useState(false)
  const [cameraPermissionState, setCameraPermissionState] = useState<'initial' | 'requesting' | 'granted' | 'denied'>('initial')
  const [notes, setNotes] = useState("")
  const [actionItems, setActionItems] = useState([
    { id: 1, text: "Review React hooks documentation", completed: false },
    { id: 2, text: "Complete weather app API integration", completed: false },
    { id: 3, text: "Schedule next session", completed: false },
  ])
  const [privacyEnabled, setPrivacyEnabled] = useState(false)

  // Refs for video elements
  const localVideoRef = useRef<HTMLVideoElement>(null)

  // Camera access function with improved permission handling
  const requestCameraPermission = async () => {
    // Ensure we're in a browser environment
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("Your browser does not support camera access");
      setCameraPermissionState('denied');
      return;
    }

    try {
      // Set state to show we're requesting
      setCameraPermissionState('requesting');

      // Request camera access
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { 
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });

      // Successfully got stream
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
        
        // Remove any previous transforms
        localVideoRef.current.style.transform = 'none';
        
        localVideoRef.current.onloadedmetadata = () => {
          // Attempt to play and log any errors
          localVideoRef.current?.play().catch(e => {
            console.error('Error playing video:', e);
            alert(`Video play error: ${e.message}`);
          });
        };

        // Add error event listener
        localVideoRef.current.onerror = (e) => {
          console.error('Video error:', e);
          alert('Video error occurred');
        };
      }

      // Update states
      setVideoEnabled(true);
      setCameraPermissionState('granted');
    } catch (err) {
      console.error('Camera access error:', err);
      
      // More detailed error logging
      const errorMessage = err instanceof Error ? err.message : String(err);
      alert(`Camera access failed: ${errorMessage}`);
      
      if (err instanceof DOMException) {
        switch (err.name) {
          case 'NotAllowedError':
            alert('Camera access was denied. Please check your browser permissions.');
            setCameraPermissionState('denied');
            break;
          case 'NotFoundError':
            alert('No camera found on this device.');
            setCameraPermissionState('denied');
            break;
          default:
            setCameraPermissionState('denied');
        }
      }
      
      setVideoEnabled(false);
    }
  };

  // Stop camera stream
  const stopCamera = () => {
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      const stream = localVideoRef.current.srcObject as MediaStream;
      const tracks = stream.getTracks();
      
      tracks.forEach(track => track.stop());
      localVideoRef.current.srcObject = null;
      setVideoEnabled(false);
      setCameraPermissionState('initial');
    }
  };

  const toggleMic = () => setMicEnabled(!micEnabled)
  
  const toggleVideo = () => {
    if (videoEnabled) {
      stopCamera();
    } else {
      requestCameraPermission();
    }
  }

  const startSession = () => {
    requestCameraPermission(); // Automatically start camera when joining session
    setInSession(true);
  }

  const endSession = () => {
    stopCamera(); // Stop camera when ending session
    setInSession(false);
  }

  const toggleActionItem = (id: number) => {
    setActionItems(actionItems.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)))
  }

  const addActionItem = (text: string) => {
    if (text.trim()) {
      setActionItems([...actionItems, { id: Date.now(), text, completed: false }])
    }
  }

  // Clean up camera on component unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  // Render method for camera permission prompt
  const renderCameraPermissionPrompt = () => {
    switch (cameraPermissionState) {
      case 'initial':
        return (
          <div className="flex items-center text-yellow-600 space-x-2">
            <AlertCircle className="h-5 w-5" />
            <span>Camera access not granted. Click to allow camera.</span>
          </div>
        );
      case 'requesting':
        return (
          <div className="flex items-center text-blue-600 space-x-2">
            <AlertCircle className="h-5 w-5" />
            <span>Requesting camera access...</span>
          </div>
        );
      case 'denied':
        return (
          <div className="flex items-center text-red-600 space-x-2">
            <AlertCircle className="h-5 w-5" />
            <span>Camera access was denied. Check browser permissions.</span>
          </div>
        );
      default:
        return null;
    }
  };

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
                      <video 
                        ref={localVideoRef}
                        className="w-full h-full object-cover"
                        autoPlay 
                        playsInline 
                        muted
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center">
                        <Avatar className="h-20 w-20">
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        {renderCameraPermissionPrompt()}
                      </div>
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
                      onClick={requestCameraPermission}
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
                          src="/images/mentor.jpg?height=300&width=400"
                          alt="Sarah Johnson"
                          className="w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 rounded text-white text-xs">
                          Sarah Johnson
                        </div>
                      </div>
                      <div className="relative rounded-lg overflow-hidden bg-black flex items-center justify-center">
                        {videoEnabled ? (
                          <video 
                            ref={localVideoRef}
                            className="w-full h-full object-cover opacity-90"
                            autoPlay 
                            playsInline 
                            muted
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

