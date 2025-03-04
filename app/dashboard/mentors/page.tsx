import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Star } from "lucide-react"
import Link from "next/link"

export default function MentorsPage() {
  return (
    <DashboardSidebar>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Find Mentors</h1>
          <p className="text-muted-foreground">
            Discover and connect with mentors who can help you achieve your goals.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search mentors by name, skills, or industry..." className="pl-8" />
          </div>
          <Button asChild>
            <Link href="/dashboard/mentors/filters">Advanced Filters</Link>
          </Button>
        </div>

        <Tabs defaultValue="recommended">
          <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex">
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="new">New Mentors</TabsTrigger>
          </TabsList>
          <TabsContent value="recommended" className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MentorCard
                name="Sarah Johnson"
                title="Senior Software Engineer"
                company="TechCorp"
                rating={4.9}
                reviews={124}
                skills={["React", "JavaScript", "Career Growth"]}
                image="/placeholder.svg?height=100&width=100"
              />
              <MentorCard
                name="Michael Chen"
                title="Product Manager"
                company="InnovateCo"
                rating={4.8}
                reviews={98}
                skills={["Product Strategy", "UX Design", "Leadership"]}
                image="/placeholder.svg?height=100&width=100"
              />
              <MentorCard
                name="Priya Patel"
                title="Startup Founder"
                company="GrowthLabs"
                rating={4.7}
                reviews={76}
                skills={["Entrepreneurship", "Fundraising", "Marketing"]}
                image="/placeholder.svg?height=100&width=100"
              />
              <MentorCard
                name="David Wilson"
                title="Engineering Director"
                company="CloudScale"
                rating={4.9}
                reviews={152}
                skills={["System Design", "Team Management", "Career Advice"]}
                image="/placeholder.svg?height=100&width=100"
              />
              <MentorCard
                name="Lisa Rodriguez"
                title="UX Research Lead"
                company="DesignFirst"
                rating={4.8}
                reviews={87}
                skills={["User Research", "Design Thinking", "Prototyping"]}
                image="/placeholder.svg?height=100&width=100"
              />
              <MentorCard
                name="James Kim"
                title="Data Science Manager"
                company="DataDriven"
                rating={4.7}
                reviews={64}
                skills={["Machine Learning", "Python", "Data Visualization"]}
                image="/placeholder.svg?height=100&width=100"
              />
            </div>
          </TabsContent>
          <TabsContent value="popular" className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MentorCard
                name="David Wilson"
                title="Engineering Director"
                company="CloudScale"
                rating={4.9}
                reviews={152}
                skills={["System Design", "Team Management", "Career Advice"]}
                image="/placeholder.svg?height=100&width=100"
              />
              <MentorCard
                name="Sarah Johnson"
                title="Senior Software Engineer"
                company="TechCorp"
                rating={4.9}
                reviews={124}
                skills={["React", "JavaScript", "Career Growth"]}
                image="/placeholder.svg?height=100&width=100"
              />
              <MentorCard
                name="Michael Chen"
                title="Product Manager"
                company="InnovateCo"
                rating={4.8}
                reviews={98}
                skills={["Product Strategy", "UX Design", "Leadership"]}
                image="/placeholder.svg?height=100&width=100"
              />
              <MentorCard
                name="Lisa Rodriguez"
                title="UX Research Lead"
                company="DesignFirst"
                rating={4.8}
                reviews={87}
                skills={["User Research", "Design Thinking", "Prototyping"]}
                image="/placeholder.svg?height=100&width=100"
              />
              <MentorCard
                name="Priya Patel"
                title="Startup Founder"
                company="GrowthLabs"
                rating={4.7}
                reviews={76}
                skills={["Entrepreneurship", "Fundraising", "Marketing"]}
                image="/placeholder.svg?height=100&width=100"
              />
              <MentorCard
                name="James Kim"
                title="Data Science Manager"
                company="DataDriven"
                rating={4.7}
                reviews={64}
                skills={["Machine Learning", "Python", "Data Visualization"]}
                image="/placeholder.svg?height=100&width=100"
              />
            </div>
          </TabsContent>
          <TabsContent value="new" className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MentorCard
                name="Emma Thompson"
                title="Frontend Developer"
                company="WebWorks"
                rating={4.6}
                reviews={12}
                skills={["React", "CSS", "Accessibility"]}
                image="/placeholder.svg?height=100&width=100"
                isNew={true}
              />
              <MentorCard
                name="Alex Rivera"
                title="Marketing Strategist"
                company="GrowthHackers"
                rating={4.7}
                reviews={8}
                skills={["Digital Marketing", "SEO", "Content Strategy"]}
                image="/placeholder.svg?height=100&width=100"
                isNew={true}
              />
              <MentorCard
                name="Raj Mehta"
                title="Blockchain Developer"
                company="ChainTech"
                rating={4.8}
                reviews={15}
                skills={["Blockchain", "Smart Contracts", "Web3"]}
                image="/placeholder.svg?height=100&width=100"
                isNew={true}
              />
              <MentorCard
                name="Sophia Lee"
                title="UI/UX Designer"
                company="DesignHub"
                rating={4.9}
                reviews={7}
                skills={["UI Design", "User Experience", "Figma"]}
                image="/placeholder.svg?height=100&width=100"
                isNew={true}
              />
              <MentorCard
                name="Marcus Johnson"
                title="DevOps Engineer"
                company="CloudOps"
                rating={4.7}
                reviews={11}
                skills={["Docker", "Kubernetes", "CI/CD"]}
                image="/placeholder.svg?height=100&width=100"
                isNew={true}
              />
              <MentorCard
                name="Olivia Chen"
                title="Product Designer"
                company="InnovateUX"
                rating={4.8}
                reviews={9}
                skills={["Product Design", "Prototyping", "User Testing"]}
                image="/placeholder.svg?height=100&width=100"
                isNew={true}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardSidebar>
  )
}

function MentorCard({
  name,
  title,
  company,
  rating,
  reviews,
  skills,
  image,
  isNew = false,
}: {
  name: string
  title: string
  company: string
  rating: number
  reviews: number
  skills: string[]
  image: string
  isNew?: boolean
}) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={image} alt={name} />
              <AvatarFallback>
                {name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
              <span className="font-medium">{rating}</span>
              <span className="text-xs text-muted-foreground ml-1">({reviews})</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{name}</h3>
              {isNew && <Badge className="bg-green-500">New</Badge>}
            </div>
            <p className="text-sm text-muted-foreground">
              {title} at {company}
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="flex border-t">
          <Button asChild className="flex-1 rounded-none rounded-bl-lg" variant="ghost">
            <Link href={`/dashboard/mentors/profile?name=${encodeURIComponent(name)}`}>View Profile</Link>
          </Button>
          <Button asChild className="flex-1 rounded-none rounded-br-lg" variant="default">
            <Link href={`/dashboard/mentors/request?name=${encodeURIComponent(name)}`}>Request</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

