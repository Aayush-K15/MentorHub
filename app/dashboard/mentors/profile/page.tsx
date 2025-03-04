import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Globe, Mail, MapPin, MessageSquare, Star, Users, Video } from "lucide-react"
import Link from "next/link"

export default function MentorProfilePage() {
  return (
    <DashboardSidebar>
      <div className="space-y-6">
        <Button variant="outline" asChild className="mb-6">
          <Link href="/dashboard/mentors">← Back to Mentors</Link>
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Sarah Johnson" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <h2 className="text-xl font-bold">Sarah Johnson</h2>
                  <p className="text-sm text-muted-foreground">Senior Software Engineer at TechCorp</p>
                  <div className="flex items-center mt-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="font-medium">4.9</span>
                    <span className="text-xs text-muted-foreground ml-1">(124 reviews)</span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1 mt-4">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">Career Growth</Badge>
                    <Badge variant="secondary">Frontend</Badge>
                    <Badge variant="secondary">System Design</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact & Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">Contact via platform messaging</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">San Francisco, CA (GMT-8)</span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">English, Spanish</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span className="text-sm">Typically responds within 24 hours</span>
                </div>
                <div className="pt-2">
                  <Button className="w-full" asChild>
                    <Link href="/dashboard/mentors/request?name=Sarah%20Johnson">Request Mentorship</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About Sarah</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  I'm a Senior Software Engineer with over 8 years of experience in frontend development, specializing
                  in React and JavaScript. I've led teams at TechCorp, building scalable web applications used by
                  millions of users worldwide.
                </p>
                <p className="text-sm mt-4">
                  My mentorship approach focuses on practical skill development, career navigation, and helping mentees
                  build confidence in their technical abilities. I believe in learning by doing, and I'll work with you
                  on real-world projects to accelerate your growth.
                </p>
                <p className="text-sm mt-4">
                  I'm particularly passionate about helping underrepresented groups succeed in tech and supporting
                  career changers as they navigate their transition into the industry.
                </p>
              </CardContent>
            </Card>

            <Tabs defaultValue="experience">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="mentorship">Mentorship Style</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="experience" className="space-y-4 mt-6">
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4 pb-4">
                    <h3 className="font-medium">Senior Software Engineer</h3>
                    <p className="text-sm text-muted-foreground">TechCorp • 2019 - Present</p>
                    <p className="text-sm mt-2">
                      Leading frontend development for TechCorp's flagship product. Mentoring junior developers and
                      implementing best practices for the engineering team.
                    </p>
                  </div>
                  <div className="border-l-2 border-muted pl-4 pb-4">
                    <h3 className="font-medium">Frontend Developer</h3>
                    <p className="text-sm text-muted-foreground">WebSolutions • 2016 - 2019</p>
                    <p className="text-sm mt-2">
                      Developed responsive web applications using React and Redux. Collaborated with designers and
                      backend engineers to deliver high-quality products.
                    </p>
                  </div>
                  <div className="border-l-2 border-muted pl-4">
                    <h3 className="font-medium">Junior Developer</h3>
                    <p className="text-sm text-muted-foreground">StartupX • 2014 - 2016</p>
                    <p className="text-sm mt-2">
                      Built and maintained web applications using JavaScript and jQuery. Participated in code reviews
                      and agile development processes.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="mentorship" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>My Mentorship Approach</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="mt-1 rounded-full bg-primary/10 p-1">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Personalized Learning Path</h4>
                        <p className="text-sm text-muted-foreground">
                          I create customized learning plans based on your goals, current skills, and learning style.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="mt-1 rounded-full bg-primary/10 p-1">
                        <Video className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Regular Check-ins</h4>
                        <p className="text-sm text-muted-foreground">
                          Weekly or bi-weekly video sessions to review progress, answer questions, and provide guidance.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="mt-1 rounded-full bg-primary/10 p-1">
                        <MessageSquare className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Continuous Support</h4>
                        <p className="text-sm text-muted-foreground">
                          Ongoing messaging support between sessions for quick questions and feedback.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="mt-1 rounded-full bg-primary/10 p-1">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium">Project-Based Learning</h4>
                        <p className="text-sm text-muted-foreground">
                          Hands-on projects tailored to your interests and career goals to build your portfolio.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Mentorship Programs</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Career Accelerator</h4>
                        <p className="text-sm text-muted-foreground">3-month intensive program</p>
                      </div>
                      <Button asChild>
                        <Link href="/dashboard/mentors/request?name=Sarah%20Johnson&program=Career%20Accelerator">
                          Select
                        </Link>
                      </Button>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Technical Skills Boost</h4>
                        <p className="text-sm text-muted-foreground">6-week focused learning</p>
                      </div>
                      <Button asChild>
                        <Link href="/dashboard/mentors/request?name=Sarah%20Johnson&program=Technical%20Skills%20Boost">
                          Select
                        </Link>
                      </Button>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Job Interview Prep</h4>
                        <p className="text-sm text-muted-foreground">4-week intensive preparation</p>
                      </div>
                      <Button asChild>
                        <Link href="/dashboard/mentors/request?name=Sarah%20Johnson&program=Job%20Interview%20Prep">
                          Select
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reviews" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Mentee Reviews</CardTitle>
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="font-medium text-lg">4.9</span>
                        <span className="text-sm text-muted-foreground ml-1">(124)</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-2">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Alex M." />
                              <AvatarFallback>AM</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">Alex M.</p>
                              <p className="text-xs text-muted-foreground">Frontend Developer</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm">
                          "Sarah is an exceptional mentor who helped me land my dream job. Her technical expertise and
                          career advice were invaluable. She provided detailed feedback on my projects and prepared me
                          thoroughly for interviews."
                        </p>
                        <p className="text-xs text-muted-foreground">3 weeks ago</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-2">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Jamie L." />
                              <AvatarFallback>JL</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">Jamie L.</p>
                              <p className="text-xs text-muted-foreground">Career Changer</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm">
                          "Working with Sarah was transformative. As someone transitioning into tech, I needed guidance
                          on both technical skills and navigating the industry. Sarah created a personalized learning
                          path that helped me build confidence and practical skills."
                        </p>
                        <p className="text-xs text-muted-foreground">1 month ago</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Avatar className="h-8 w-8 mr-2">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Taylor R." />
                              <AvatarFallback>TR</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">Taylor R.</p>
                              <p className="text-xs text-muted-foreground">Junior Developer</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star, i) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${i < 4 ? "text-yellow-500 fill-yellow-500" : "text-muted"}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm">
                          "Sarah's mentorship helped me level up my React skills significantly. She provided excellent
                          code reviews and taught me best practices that I now use daily. The only reason for 4 stars
                          instead of 5 is that sometimes our sessions had to be rescheduled."
                        </p>
                        <p className="text-xs text-muted-foreground">2 months ago</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      View All 124 Reviews
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </DashboardSidebar>
  )
}

