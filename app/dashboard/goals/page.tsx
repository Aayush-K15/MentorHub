import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ChevronRight, Clock, Edit, Plus, Target, Trophy } from "lucide-react"
import Link from "next/link"

export default function GoalsPage() {
  return (
    <DashboardSidebar>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Goals & Progress</h1>
            <p className="text-muted-foreground">Track your mentorship goals and milestones</p>
          </div>
          <Button asChild>
            <Link href="/dashboard/goals/new">
              <Plus className="mr-2 h-4 w-4" /> Add New Goal
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="active">
          <TabsList>
            <TabsTrigger value="active">Active Goals</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="all">All Goals</TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="space-y-6 mt-6">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Overall Progress</CardTitle>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/dashboard/goals/report">View Report</Link>
                  </Button>
                </div>
                <CardDescription>Your journey across all active goals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Total Progress</span>
                    <span>45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold">3</div>
                    <div className="text-sm text-muted-foreground">Active Goals</div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold">12</div>
                    <div className="text-sm text-muted-foreground">Milestones</div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold">5</div>
                    <div className="text-sm text-muted-foreground">Completed</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <GoalCard
                title="Learn React Fundamentals"
                description="Master the core concepts of React including components, state, and props"
                progress={70}
                dueDate="March 15, 2025"
                mentor="Sarah Johnson"
                mentorImage="/placeholder.svg?height=40&width=40"
                milestones={[
                  { title: "Complete React basics course", completed: true },
                  { title: "Build a simple to-do app", completed: true },
                  { title: "Learn React hooks", completed: true },
                  { title: "Create a weather app with API integration", completed: false },
                  { title: "Implement React Router", completed: false },
                ]}
              />

              <GoalCard
                title="Build Professional Portfolio"
                description="Create a portfolio website showcasing my projects and skills"
                progress={30}
                dueDate="April 20, 2025"
                mentor="Michael Chen"
                mentorImage="/placeholder.svg?height=40&width=40"
                milestones={[
                  { title: "Design portfolio mockup", completed: true },
                  { title: "Set up GitHub repository", completed: true },
                  { title: "Implement responsive design", completed: false },
                  { title: "Add project showcases", completed: false },
                  { title: "Deploy to production", completed: false },
                ]}
              />

              <GoalCard
                title="Prepare for Technical Interviews"
                description="Practice coding challenges and system design questions"
                progress={20}
                dueDate="May 10, 2025"
                mentor="David Wilson"
                mentorImage="/placeholder.svg?height=40&width=40"
                milestones={[
                  { title: "Complete data structures review", completed: true },
                  { title: "Practice 50 LeetCode problems", completed: false },
                  { title: "Mock interview sessions", completed: false },
                  { title: "System design practice", completed: false },
                  { title: "Behavioral interview prep", completed: false },
                ]}
              />
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-6 mt-6">
            <div className="space-y-6">
              <GoalCard
                title="Learn Git Version Control"
                description="Master Git commands and workflows for effective collaboration"
                progress={100}
                dueDate="Completed on January 15, 2025"
                mentor="Sarah Johnson"
                mentorImage="/placeholder.svg?height=40&width=40"
                milestones={[
                  { title: "Learn basic Git commands", completed: true },
                  { title: "Practice branching and merging", completed: true },
                  { title: "Understand Git workflows", completed: true },
                  { title: "Collaborate on a team project", completed: true },
                  { title: "Advanced Git techniques", completed: true },
                ]}
                completed={true}
              />

              <GoalCard
                title="Master CSS Layouts"
                description="Learn flexbox, grid, and responsive design techniques"
                progress={100}
                dueDate="Completed on February 5, 2025"
                mentor="Lisa Rodriguez"
                mentorImage="/placeholder.svg?height=40&width=40"
                milestones={[
                  { title: "CSS fundamentals review", completed: true },
                  { title: "Learn flexbox layouts", completed: true },
                  { title: "Master CSS grid", completed: true },
                  { title: "Responsive design techniques", completed: true },
                  { title: "Build a complex layout project", completed: true },
                ]}
                completed={true}
              />
            </div>
          </TabsContent>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Active Goals (3)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <GoalListItem title="Learn React Fundamentals" progress={70} dueDate="March 15, 2025" />
                  <GoalListItem title="Build Professional Portfolio" progress={30} dueDate="April 20, 2025" />
                  <GoalListItem title="Prepare for Technical Interviews" progress={20} dueDate="May 10, 2025" />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/dashboard/goals?tab=active">View All Active Goals</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Completed Goals (2)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <GoalListItem
                    title="Learn Git Version Control"
                    progress={100}
                    dueDate="Completed on January 15, 2025"
                    completed={true}
                  />
                  <GoalListItem
                    title="Master CSS Layouts"
                    progress={100}
                    dueDate="Completed on February 5, 2025"
                    completed={true}
                  />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/dashboard/goals?tab=completed">View All Completed Goals</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardSidebar>
  )
}

function GoalCard({
  title,
  description,
  progress,
  dueDate,
  mentor,
  mentorImage,
  milestones,
  completed = false,
}: {
  title: string
  description: string
  progress: number
  dueDate: string
  mentor: string
  mentorImage: string
  milestones: { title: string; completed: boolean }[]
  completed?: boolean
}) {
  return (
    <Card className={completed ? "border-green-200" : ""}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <CardTitle>{title}</CardTitle>
            {completed && <Badge className="ml-2 bg-green-500">Completed</Badge>}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link href={`/dashboard/goals/${encodeURIComponent(title)}`}>
                <Edit className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href={`/dashboard/goals/${encodeURIComponent(title)}/details`}>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="text-sm">{dueDate}</span>
          </div>
          <div className="flex items-center">
            <span className="text-sm mr-2">Mentor:</span>
            <Avatar className="h-6 w-6 mr-1">
              <AvatarImage src={mentorImage} alt={mentor} />
              <AvatarFallback>
                {mentor
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm">{mentor}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Milestones</h4>
          <div className="space-y-2">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start">
                <div className={`mt-0.5 mr-2 ${milestone.completed ? "text-green-500" : "text-muted-foreground"}`}>
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span className={`text-sm ${milestone.completed ? "line-through text-muted-foreground" : ""}`}>
                  {milestone.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function GoalListItem({
  title,
  progress,
  dueDate,
  completed = false,
}: {
  title: string
  progress: number
  dueDate: string
  completed?: boolean
}) {
  return (
    <div className="flex items-center justify-between p-3 border rounded-lg">
      <div className="flex items-center">
        {completed ? (
          <Trophy className="h-5 w-5 mr-3 text-green-500" />
        ) : (
          <Target className="h-5 w-5 mr-3 text-primary" />
        )}
        <div>
          <h4 className="font-medium text-sm">{title}</h4>
          <p className="text-xs text-muted-foreground">{dueDate}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {!completed && (
          <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        )}
        <Button variant="ghost" size="icon" asChild>
          <Link href={`/dashboard/goals/${encodeURIComponent(title)}/details`}>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

