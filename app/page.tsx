import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Brain, Calendar, LineChart, MessageSquare, Target, Users, Video, Bot, Zap, ListChecks, MessageCircle } from "lucide-react"
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Users className="h-6 w-6 text-primary" />
            </Link>
            <Link href="/">
              <span className="text-xl font-bold">MentorHub</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-2 hero-gradient">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Your Mentor, <span className="gradient-text">Even When They're Away</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Connect with expert mentors, track your progress, and achieve your goals with our smart mentorship
                  platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="signup">
                    <Button size="lg" className="w-full sm:w-auto">
                      Find Your Mentor Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Learn How It Works
                    </Button>
                  </Link>
                </div>
                </div>
                <div className="relative flex justify-center items-center z-50 w-full h-[500px]">
                <div className="absolute rounded-lg from-blue-600 to-purple-600 opacity-15 w-full h-full"></div>
                <Spline
                  scene="https://prod.spline.design/mux6rgXkC-7N7ecW/scene.splinecode"
                  className="w-full h-full"
                />
                </div>
            </div>
          </div>
        </section>
{/* AI Mentor Companion Section */}
<section className="py-20 bg-muted/10 w-full">
  <div className="container px-4 md:px-6">
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Bot className="h-6 w-6 text-primary" />
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">
          Your <span className="gradient-text">AI Mentor Companion</span>
        </h2>
      </div>
      <p className="max-w-[1100px] text-muted-foreground md:text-xl">
        Experience round-the-clock mentorship that adapts to your unique learning journey. Our AI Mentor Companion bridges the gap between scheduled sessions, providing instant, personalized guidance tailored to your specific goals and learning style.
      </p>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex items-start gap-3">
          <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">Instant Guidance</h3>
            <p className="text-muted-foreground text-sm">
              Get immediate answers and insights, 24/7, without waiting for your mentor's availability.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Brain className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">Adaptive Learning</h3>
            <p className="text-muted-foreground text-sm">
              An AI that learns from your mentor's approach, providing consistent and personalized support.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <MessageCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">Contextual Conversations</h3>
            <p className="text-muted-foreground text-sm">
              Engage in meaningful dialogues that understand your context, goals, and learning progress.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <ListChecks className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg">Progress Tracking</h3>
            <p className="text-muted-foreground text-sm">
              Continuous monitoring and suggestions to keep you aligned with your mentorship objectives.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Link href="/signup">
          <Button size="lg" className="w-full sm:w-auto">
            Experience AI Mentorship
            <Bot className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <Link href="#how-it-works">
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  </div>
</section>
        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Platform Features</h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Everything you need for a successful mentorship journey
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FeatureCard
                icon={<Bot className="h-10 w-10 text-primary" />}
                title="AI Mentor Companion"
                description="Get 24/7 personalized mentorship through our advanced AI chatbot that learns from your mentor's insights and provides instant, tailored guidance."
              />
              <FeatureCard
                icon={<Users className="h-10 w-10 text-primary " />}
                title="Smart Matching"
                description="Find the perfect mentor based on your goals, interests, and learning style."
              />
              <FeatureCard
                icon={<Target className="h-10 w-10 text-primary " />}
                title="Goal Tracking"
                description="Set clear goals and track your progress with visual milestones."
              />
              <FeatureCard
                icon={<Brain className="h-10 w-10 text-primary " />}
                title="Smart Insights"
                description="Get personalized recommendations and insights to enhance your learning."
              />
              <FeatureCard
                icon={<Video className="h-10 w-10 text-primary " />}
                title="Live Sessions"
                description="Connect with your mentor through integrated video calls with session summaries."
              />
              <FeatureCard
                icon={<MessageSquare className="h-10 w-10 text-primary " />}
                title="Community Hub"
                description="Join topic-based discussion groups and connect with peers."
              />
              <FeatureCard
                icon={<Calendar className="h-10 w-10 text-primary " />}
                title="Structured Journey"
                description="Follow a clear roadmap with scheduled check-ins and milestones."
              />
              <FeatureCard
                icon={<LineChart className="h-10 w-10 text-primary " />}
                title="Progress Analytics"
                description="Visualize your growth with detailed progress analytics."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="mt-4 text-xl text-muted-foreground">Your journey to success in four simple steps</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <StepCard
                number="1"
                title="Create Your Profile"
                description="Sign up and tell us about your goals, interests, and learning preferences."
              />
              <StepCard
                number="2"
                title="Find Your Mentor"
                description="Browse mentor profiles or get matched with the perfect mentor for your needs."
              />
              <StepCard
                number="3"
                title="Set Clear Goals"
                description="Work with your mentor to establish clear, achievable goals and milestones."
              />
              <StepCard
                number="4"
                title="Track Your Progress"
                description="Regular sessions, progress tracking, and continuous feedback to ensure success."
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Hear from mentors and mentees who've transformed their journeys
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <TestimonialCard
                quote="The structured approach to mentorship helped me achieve my career goals in half the time I expected."
                name="Sarah Johnson"
                role="Software Engineer"
                image="/images/image.png"
              />
              <TestimonialCard
                quote="As a mentor, I've seen my mentees grow exponentially with the platform's goal tracking and feedback tools."
                name="Michael Chen"
                role="Marketing Director"
                image="/images/chen.jpg"
              />
              <TestimonialCard
                quote="The community aspect connected me with peers facing similar challenges, creating a support network beyond my mentor."
                name="Priya Patel"
                role="Startup Founder"
                image="/images/priya-p.jpg"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Journey?
            </h2>
            <p className="mt-4 text-xl max-w-[700px] mx-auto opacity-90">
              Join thousands of professionals who are accelerating their growth through structured mentorship.
            </p>
            <div className="mt-8">
              <Link href="/signup">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold">MentorHub</span>
              </div>
              <p className="text-sm text-muted-foreground">Connecting mentors and mentees for transformative growth.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Platform</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MentorHub. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="mb-2">{icon}</div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

function TestimonialCard({ quote, name, role, image }: { quote: string; name: string; role: string; image: string }) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex flex-col h-full">
          <div className="mb-4 text-lg italic">"{quote}"</div>
          <div className="mt-auto flex items-center pt-4">
            <img
              src={image || "/placeholder.svg"}
              alt={name}
              className="rounded-full w-10 h-10 object-cover mr-3"
              width={40}
              height={40}
            />
            <div>
              <div className="font-medium">{name}</div>
              <div className="text-sm text-muted-foreground">{role}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}