"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bot, Send } from "lucide-react"


export default function AIChatPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm Shadow AI, your personal mentorship assistant. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false) // Track loading state

  const handleSend = async () => {
    if (!input.trim()) return

    // Add user message to chat history
    const newMessages = [...messages, { role: "user", content: input }]
    setMessages(newMessages)
    setInput("")
    setLoading(true) // Show loading indicator

    try {
      const response = await fetch("/api/shadow-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      })

      const data = await response.json()
      if (response.ok) {
        setMessages([...newMessages, { role: "assistant", content: data.advice }])
      } else {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error("AI Error:", error)
      setMessages([...newMessages, { role: "assistant", content: "Sorry, I couldn't process your request. Try again later!" }])
    }

    setLoading(false) // Hide loading indicator
  }

  return (
    <DashboardSidebar>
      <div className="flex flex-col h-[calc(100vh-4rem)]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Shadow AI Assistant</h1>
            <p className="text-muted-foreground">Your personal mentorship guide</p>
          </div>
        </div>

        <Card className="flex-1 flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              Chat with Shadow AI
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 ${
                    message.role === "assistant" ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {message.role === "assistant" ? (
                    <Avatar>
                      <AvatarImage src="/ai-avatar.png" alt="AI" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                  ) : (
                    <Avatar>
                      <AvatarFallback>You</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.role === "assistant"
                        ? "bg-muted"
                        : "bg-primary text-primary-foreground ml-auto"
                    }`}
                  >
                    {/* Preserve line breaks for formatted AI responses */}
                    <div className="text-sm whitespace-pre-line">{message.content}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show loading indicator while waiting for AI response */}
            {loading && (
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-primary animate-spin" />
                <p className="text-sm italic text-muted-foreground">Shadow AI is thinking...</p>
              </div>
            )}

            {/* Input field and send button */}
            <div className="flex gap-2">
              <Input
                placeholder="Ask me anything about your mentorship journey..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSend()
                  }
                }}
              />
              <Button onClick={handleSend} disabled={loading}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardSidebar>
  )
}