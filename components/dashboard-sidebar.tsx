"use client"

import type React from "react"
import { useState, useEffect } from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Calendar, Home, LogOut, MessageSquare, Settings, Target, Users, Video, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner" // Assuming you have a Spinner component

export function DashboardSidebar({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />; // Show spinner while loading
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <DashboardSidebarContent />
        <div className="flex-1">
          <div className="flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger />
            <div className="flex-1" />
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <div className="p-6">{children}</div>
        </div>
      </div>
    </SidebarProvider>
  )
}

function DashboardSidebarContent() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2">
          <Link href="/">
            <Users className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">MentorHub</span>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/dashboard"}>
                  <Link href="/dashboard">
                    <Home className="h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/dashboard/mentors"}>
                  <Link href="/dashboard/mentors">
                    <Users className="h-4 w-4" />
                    <span>Find Mentors</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/dashboard/goals"}>
                  <Link href="/dashboard/goals">
                    <Target className="h-4 w-4" />
                    <span>Goals & Progress</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/dashboard/sessions"}>
                  <Link href="/dashboard/sessions">
                    <Video className="h-4 w-4" />
                    <span>Sessions</span>
                    <Badge className="bg-primary text-primary-foreground ml-2">2</Badge>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/dashboard/calendar"}>
                  <Link href="/dashboard/calendar">
                    <Calendar className="h-4 w-4" />
                    <span>Calendar</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* New Shadow AI Chat Button */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/dashboard/shadow-ai"}>
                  <Link href="/dashboard/shadow-ai">
                    <Bot className="h-4 w-4" />
                    <span>Shadow AI Mentor</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={pathname === "/dashboard/settings"}>
              <Link href="#settings">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/">
                <LogOut className="h-4 w-4" />
                <span>Log Out</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}