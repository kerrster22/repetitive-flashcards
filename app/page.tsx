import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Clock, Trophy, Users } from "lucide-react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import CTA from "@/components/cta"
import Testimonial from "@/components/testimonial"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Master Any Subject with Spaced Repetition
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    MemoryMaster uses scientifically-proven spaced repetition to help you learn faster and remember
                    longer.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="gap-1">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button size="lg" variant="outline">
                      Try Demo
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl border bg-background shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20" />
                  <div className="relative p-4 md:p-8 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                      <Brain className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">Boost Your Learning</h3>
                    <p className="text-muted-foreground">
                      Our spaced repetition algorithm adapts to your learning pace, ensuring you review information
                      right before you're about to forget it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Everything you need to master any subject and track your progress.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Smart Flashcards</h3>
                <p className="text-center text-muted-foreground">
                  Create custom flashcards with text, images, and audio to enhance your learning experience.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Spaced Repetition</h3>
                <p className="text-center text-muted-foreground">
                  Our algorithm optimizes your review schedule based on your performance and memory strength.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Achievements</h3>
                <p className="text-center text-muted-foreground">
                  Earn badges and rewards as you reach milestones and maintain your learning streak.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Community</h3>
                <p className="text-center text-muted-foreground">
                  Share decks, compete on leaderboards, and connect with other learners.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M2 12h10" />
                    <path d="M9 4v16" />
                    <path d="M14 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Personalized Learning</h3>
                <p className="text-center text-muted-foreground">
                  Set custom goals and track your progress with detailed analytics and insights.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Study Sessions</h3>
                <p className="text-center text-muted-foreground">
                  Focus on specific topics with customizable study sessions and distraction-free mode.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our scientifically-backed spaced repetition system optimizes your learning.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold">Create Flashcards</h3>
                <p className="text-center text-muted-foreground">
                  Build your own flashcards or choose from thousands of shared decks across various subjects.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold">Study & Rate</h3>
                <p className="text-center text-muted-foreground">
                  Review flashcards and rate how well you remembered each one to optimize your learning schedule.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold">Master & Progress</h3>
                <p className="text-center text-muted-foreground">
                  Our algorithm schedules reviews at optimal intervals, helping you retain information long-term.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Testimonial/>

        <CTA/>

        <Footer/>
      </main>
    </div>
  )
}

