import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  BookOpen,
  Brain,
  Calendar,
  Clock,
  Flame,
  Layers,
  LineChart,
  Settings,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">MemoryMaster</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/features" className="text-sm font-medium text-primary underline underline-offset-4">
              Features
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="/testimonials" className="text-sm font-medium hover:underline underline-offset-4">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful Features for Effective Learning
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  MemoryMaster combines scientifically-proven learning techniques with engaging features to help you
                  learn faster and remember longer.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 p-3">
                  <Brain className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Spaced Repetition Algorithm</h2>
                <p className="text-muted-foreground md:text-lg">
                  Our advanced spaced repetition algorithm, based on the proven SM-2 method, optimizes your review
                  schedule to ensure you study each flashcard at the perfect moment—right before you're about to forget
                  it.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <span>Adaptive scheduling based on your performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <span>Personalized intervals for each flashcard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <span>Optimized for long-term retention</span>
                  </li>
                </ul>
                <div>
                  <Link href="/how-it-works">
                    <Button variant="outline" className="gap-1">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] overflow-hidden rounded-xl border bg-background shadow-xl sm:h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20" />
                <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Memory Retention Curve</h3>
                    <p className="text-muted-foreground">
                      Without spaced repetition, we forget approximately 80% of what we learn within a month. With
                      MemoryMaster, retain up to 90% of what you study.
                    </p>
                  </div>
                  <div className="mt-6 h-[200px] w-full">
                    <div className="relative h-full w-full">
                      {/* Forgetting curve visualization */}
                      <div className="absolute bottom-0 left-0 h-[20%] w-[10%] bg-red-500/20"></div>
                      <div className="absolute bottom-0 left-[10%] h-[30%] w-[10%] bg-red-500/30"></div>
                      <div className="absolute bottom-0 left-[20%] h-[50%] w-[10%] bg-red-500/40"></div>
                      <div className="absolute bottom-0 left-[30%] h-[65%] w-[10%] bg-red-500/50"></div>
                      <div className="absolute bottom-0 left-[40%] h-[75%] w-[10%] bg-red-500/60"></div>
                      <div className="absolute bottom-0 left-[50%] h-[80%] w-[10%] bg-red-500/70"></div>

                      {/* Spaced repetition curve */}
                      <div className="absolute bottom-0 left-0 h-[80%] w-[10%] bg-green-500/20"></div>
                      <div className="absolute bottom-0 left-[10%] h-[75%] w-[10%] bg-green-500/30"></div>
                      <div className="absolute bottom-0 left-[20%] h-[85%] w-[10%] bg-green-500/40"></div>
                      <div className="absolute bottom-0 left-[30%] h-[80%] w-[10%] bg-green-500/50"></div>
                      <div className="absolute bottom-0 left-[40%] h-[90%] w-[10%] bg-green-500/60"></div>
                      <div className="absolute bottom-0 left-[50%] h-[85%] w-[10%] bg-green-500/70"></div>

                      {/* Legend */}
                      <div className="absolute bottom-4 right-4 flex flex-col gap-2 rounded-lg bg-background/80 p-2 text-xs backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 bg-red-500/50"></div>
                          <span>Without Spaced Repetition</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 bg-green-500/50"></div>
                          <span>With MemoryMaster</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Core Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Everything you need to master any subject and track your progress.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Smart Flashcards</CardTitle>
                  <CardDescription>
                    Create custom flashcards with text, images, and audio to enhance your learning experience.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-primary" />
                      </div>
                      <span>Rich media support (text, images, audio)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-primary" />
                      </div>
                      <span>Organize cards with tags and categories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-primary" />
                      </div>
                      <span>Import/export functionality</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/how-it-works#flashcards" className="w-full">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Learning Materials</CardTitle>
                  <CardDescription>
                    Access a rich library of articles and learning resources to supplement your flashcard study.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-primary" />
                      </div>
                      <span>Curated articles on various subjects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-primary" />
                      </div>
                      <span>Text-to-speech for auditory learning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-primary" />
                      </div>
                      <span>Comprehension quizzes to test understanding</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/articles" className="w-full">
                    <Button variant="outline" className="w-full">
                      Browse Articles
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Achievements & Gamification</CardTitle>
                  <CardDescription>
                    Stay motivated with badges, streaks, and rewards as you reach learning milestones.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-primary" />
                      </div>
                      <span>Unlock badges for learning milestones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-primary" />
                      </div>
                      <span>Maintain daily streaks for consistency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-primary" />
                      </div>
                      <span>Level up as you master more content</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/achievements" className="w-full">
                    <Button variant="outline" className="w-full">
                      View Achievements
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Community & Social Learning</CardTitle>
                  <CardDescription>
                    Connect with other learners, share decks, and participate in challenges.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-primary" />
                      </div>
                      <span>Share and discover flashcard decks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-primary" />
                      </div>
                      <span>Compete on leaderboards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-primary" />
                      </div>
                      <span>Join study groups and challenges</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/community" className="w-full">
                    <Button variant="outline" className="w-full">
                      Join Community
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <LineChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Analytics & Progress Tracking</CardTitle>
                  <CardDescription>
                    Monitor your learning journey with detailed statistics and insights.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-primary" />
                      </div>
                      <span>Visualize learning progress over time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-primary" />
                      </div>
                      <span>Identify strengths and weaknesses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-primary" />
                      </div>
                      <span>Get personalized study recommendations</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/analytics" className="w-full">
                    <Button variant="outline" className="w-full">
                      View Analytics
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Personalized Learning</CardTitle>
                  <CardDescription>
                    Customize your learning experience to match your goals and preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-primary" />
                      </div>
                      <span>Set custom learning goals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-primary" />
                      </div>
                      <span>Adjust spaced repetition settings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Sparkles className="h-3 w-3 text-primary" />
                      </div>
                      <span>Create custom study schedules</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/settings" className="w-full">
                    <Button variant="outline" className="w-full">
                      Customize Settings
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Coming Soon</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We're constantly improving MemoryMaster with new features to enhance your learning experience.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <Card className="border-dashed">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Advanced Study Scheduler</CardTitle>
                  <CardDescription>
                    AI-powered study schedule that adapts to your learning patterns and availability.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    <p>Coming in Q2 2023</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-dashed">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Flame className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Multiplayer Challenges</CardTitle>
                  <CardDescription>
                    Real-time competitions and collaborative learning experiences with friends.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    <p>Coming in Q3 2023</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-dashed">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Mobile App</CardTitle>
                  <CardDescription>
                    Native mobile applications for iOS and Android with offline study capabilities.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    <p>Coming in Q4 2023</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Learning?
                </h2>
                <p className="max-w-[900px] md:text-xl">
                  Join thousands of learners who have already discovered the power of spaced repetition.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" variant="secondary" className="gap-1">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    Try Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            <p className="text-sm text-muted-foreground">© 2025 MemoryMaster. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

