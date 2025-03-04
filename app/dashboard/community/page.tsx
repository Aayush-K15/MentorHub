import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search } from "lucide-react"
import Link from "next/link"

export default function CommunityPage() {
  return (
    <DashboardSidebar>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Community</h1>
            <p className="text-muted-foreground">Connect with peers and join mentorship circles</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link href="/dashboard/community/explore">
                <Search className="mr-2 h-4 w-4" /> Explore
              </Link>
            </Button>
            <Button asChild>
              <Link href="/dashboard/community/create">
                <Plus className="mr-2 h-4 w-4" /> Create Circle
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative flex overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
            <div className="flex gap-4">
              <CommunityCircleCard
                name="Frontend Developers"
                members={128}
                image="/placeholder.svg?height=80&width=80"
                active={true}
              />
              <CommunityCircleCard
                name="Career Changers"
                members={95}
                image="/placeholder.svg?height=80&width=80"
              />
              <CommunityCircleCard
                name="React Enthusiasts"
                members={210}
                image="/placeholder.svg?height=80&width=80"
              />
              <CommunityCircleCard
                name="Job Seekers"
                members={156}
                image="/placeholder.svg?height=80&width=80"
              />
              <CommunityCircleCard
                name="Women in Tech"
                members={183}
                image="/placeholder.svg?height=80&width=80"
              />
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent" />
        </div>

        <Tabs defaultValue="discussions">
          <TabsList>
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="peers">Peer Mentors</TabsTrigger>
          </TabsList>
          
          <TabsContent value="discussions" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Recent Discussions</CardTitle>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/dashboard/community/discussions/new">
                      New Discussion
                    </Link>
                  </Button>
                </div>
                <CardDescription>Conversations from your communities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <DiscussionCard
                  title="Best practices for React hooks"
                  author="Alex Rivera"
                  authorImage="/placeholder.svg?height=40&width=40"
                  community="Frontend Developers"
                  time="2 hours ago"
                  replies={12}
                  excerpt="I've been working with React hooks for a while now and wanted to share some best practices I've learned. What are your thoughts on..."
                />
                
                <DiscussionCard
                  title="How to prepare for technical interviews?"
                  author="Jamie Lee"
                  authorImage="/placeholder.svg?height=40&width=40"
                  community="Job Seekers"
                  time="Yesterday"
                  replies={24}
                  excerpt="I have a technical interview coming up next week for a frontend developer position. Any advice on how to prepare? I'm particularly nervous about..."
                />
                
                <DiscussionCard
                  title="Transitioning from design to development"
                  author="Taylor Morgan"
                  \

