import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, Brain, Check, HelpCircle, ThumbsUp } from "lucide-react"

export default function HowItWorksPage() {
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
            <Link href="/features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium text-primary underline underline-offset-4">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Science of Spaced Repetition</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Discover how MemoryMaster uses scientifically-proven techniques to help you learn faster and remember
                  longer.
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
                <h2 className="text-3xl font-bold">Understanding Spaced Repetition</h2>
                <p className="text-muted-foreground md:text-lg">
                  Spaced repetition is a learning technique that incorporates increasing intervals of time between
                  subsequent review of previously learned material. This method leverages the psychological spacing
                  effect to enhance long-term retention.
                </p>
                <div className="relative h-[300px] w-full overflow-hidden rounded-xl border bg-background shadow-md">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <h3 className="mb-4 text-xl font-bold">The Forgetting Curve</h3>
                    <div className="relative h-[200px] w-full">
                      <div className="absolute bottom-0 left-0 h-full w-full">
                        {/* Forgetting curve visualization */}
                        <div className="absolute bottom-0 h-[180px] w-full border-b border-l border-muted-foreground/30">
                          {/* Curve */}
                          <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
                            <path
                              d="M0,0 Q30,80 100,90"
                              fill="none"
                              stroke="hsl(var(--primary))"
                              strokeWidth="2"
                              className="transform translate-y-[180px] scale-y-[-1]"
                            />
                            {/* Review points */}
                            <circle
                              cx="20"
                              cy="70"
                              r="3"
                              fill="hsl(var(--primary))"
                              className="transform translate-y-[180px] scale-y-[-1]"
                            />
                            <circle
                              cx="40"
                              cy="40"
                              r="3"
                              fill="hsl(var(--primary))"
                              className="transform translate-y-[180px] scale-y-[-1]"
                            />
                            <circle
                              cx="70"
                              cy="20"
                              r="3"
                              fill="hsl(var(--primary))"
                              className="transform translate-y-[180px] scale-y-[-1]"
                            />
                          </svg>

                          {/* Axis labels */}
                          <div className="absolute -bottom-6 left-0 w-full flex justify-between text-xs text-muted-foreground">
                            <span>Day 1</span>
                            <span>Time</span>
                          </div>
                          <div className="absolute -left-6 top-0 h-full flex flex-col justify-between items-center text-xs text-muted-foreground">
                            <span>100%</span>
                            <span>Memory</span>
                            <span>0%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Without review, we forget approximately 80% of what we learn within a month.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">How Spaced Repetition Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-medium">Initial Learning</h4>
                      <p className="text-muted-foreground">
                        When you first encounter information, your brain creates a memory trace. Without reinforcement,
                        this trace weakens over time.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-medium">Strategic Review</h4>
                      <p className="text-muted-foreground">
                        MemoryMaster schedules reviews at optimal intervals—just before you're about to
                        forget—strengthening the memory each time.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-medium">Adaptive Intervals</h4>
                      <p className="text-muted-foreground">
                        Based on your performance, intervals between reviews increase. Easy cards are shown less
                        frequently, while difficult ones appear more often.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      4
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-medium">Long-term Retention</h4>
                      <p className="text-muted-foreground">
                        Through repeated, spaced exposure, information moves from short-term to long-term memory, where
                        it can be retained for months or years.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-muted/50 p-4">
                  <div className="flex items-start space-x-4">
                    <div className="mt-0.5">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Scientifically Proven</h4>
                      <p className="text-sm text-muted-foreground">
                        Research shows spaced repetition can increase retention by 200-400% compared to traditional
                        study methods.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="flashcards" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Getting Started with MemoryMaster
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Follow these simple steps to begin your efficient learning journey.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                    1
                  </div>
                  <CardTitle className="mt-4">Create or Choose Flashcards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Build your own custom flashcards with text, images, and audio, or choose from thousands of pre-made
                    decks across various subjects.
                  </p>
                </CardContent>
                <div className="px-6 pb-6">
                  <div className="rounded-lg border bg-card p-3">
                    <div className="space-y-3">
                      <div className="rounded-md border bg-background p-4 text-center">
                        <p className="font-medium">What is the capital of France?</p>
                        <p className="mt-2 text-xs text-muted-foreground">Front of card</p>
                      </div>
                      <div className="rounded-md border bg-background p-4 text-center">
                        <p className="font-medium">Paris</p>
                        <p className="mt-2 text-xs text-muted-foreground">Back of card</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                    2
                  </div>
                  <CardTitle className="mt-4">Study & Rate Your Recall</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Review flashcards and rate how well you remembered each one. This helps our algorithm optimize your
                    learning schedule.
                  </p>
                </CardContent>
                <div className="px-6 pb-6">
                  <div className="rounded-lg border bg-card p-3">
                    <div className="space-y-3">
                      <div className="rounded-md border bg-background p-4 text-center">
                        <p className="font-medium">How did you recall this card?</p>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="rounded-md border border-red-500/30 bg-red-500/10 p-2 text-center text-sm">
                          <p>Difficult</p>
                        </div>
                        <div className="rounded-md border border-yellow-500/30 bg-yellow-500/10 p-2 text-center text-sm">
                          <p>Medium</p>
                        </div>
                        <div className="rounded-md border border-green-500/30 bg-green-500/10 p-2 text-center text-sm">
                          <p>Easy</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                    3
                  </div>
                  <CardTitle className="mt-4">Track Progress & Master Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our algorithm schedules reviews at optimal intervals, helping you retain information long-term while
                    tracking your progress.
                  </p>
                </CardContent>
                <div className="px-6 pb-6">
                  <div className="rounded-lg border bg-card p-3">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Spanish Vocabulary</span>
                        <span className="text-sm text-muted-foreground">50%</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted">
                        <div className="h-full w-1/2 rounded-full bg-primary"></div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>250/500 cards mastered</span>
                        <span>Next review: Today</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  The MemoryMaster Algorithm
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our advanced spaced repetition system is based on the proven SM-2 algorithm, with enhancements for
                  optimal learning.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold">How Our Algorithm Works</h3>
                <div className="space-y-6">
                  <div className="flex flex-col gap-4 md:flex-row">
                    <div className="flex-1 rounded-lg border bg-background p-4">
                      <h4 className="mb-2 font-medium">Initial Learning</h4>
                      <p className="text-sm text-muted-foreground">
                        When you first learn a card, it's scheduled for review the next day. This establishes the
                        initial memory trace.
                      </p>
                    </div>
                    <div className="flex items-center justify-center text-muted-foreground">
                      <ArrowRight className="h-6 w-6 rotate-90 md:rotate-0" />
                    </div>
                    <div className="flex-1 rounded-lg border bg-background p-4">
                      <h4 className="mb-2 font-medium">Performance Rating</h4>
                      <p className="text-sm text-muted-foreground">
                        After each review, you rate your recall from 1-3 (difficult to easy). This rating determines the
                        next interval.
                      </p>
                    </div>
                    <div className="flex items-center justify-center text-muted-foreground">
                      <ArrowRight className="h-6 w-6 rotate-90 md:rotate-0" />
                    </div>
                    <div className="flex-1 rounded-lg border bg-background p-4">
                      <h4 className="mb-2 font-medium">Interval Calculation</h4>
                      <p className="text-sm text-muted-foreground">
                        The algorithm calculates the optimal time for the next review based on your performance history
                        with the card.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-muted p-4">
                    <h4 className="mb-2 font-medium">Interval Examples:</h4>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="rounded-lg border bg-background p-3">
                        <div className="mb-2 flex items-center gap-2">
                          <div className="rounded-full bg-red-500/20 p-1">
                            <ThumbsUp className="h-4 w-4 text-red-500" />
                          </div>
                          <span className="font-medium">Difficult (1)</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Card is reset to learning phase and shown again within the same day.
                        </p>
                      </div>
                      <div className="rounded-lg border bg-background p-3">
                        <div className="mb-2 flex items-center gap-2">
                          <div className="rounded-full bg-yellow-500/20 p-1">
                            <ThumbsUp className="h-4 w-4 text-yellow-500" />
                          </div>
                          <span className="font-medium">Medium (2)</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Next interval = current interval × 1.5 (e.g., 2 days → 3 days)
                        </p>
                      </div>
                      <div className="rounded-lg border bg-background p-3">
                        <div className="mb-2 flex items-center gap-2">
                          <div className="rounded-full bg-green-500/20 p-1">
                            <ThumbsUp className="h-4 w-4 text-green-500" />
                          </div>
                          <span className="font-medium">Easy (3)</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Next interval = current interval × 2.5 (e.g., 2 days → 5 days)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border bg-background p-4">
                    <h4 className="mb-2 font-medium">Long-term Scheduling</h4>
                    <p className="text-muted-foreground">
                      As you consistently recall cards correctly, intervals grow exponentially—from days to weeks to
                      months—until the information is firmly embedded in long-term memory.
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-medium">
                        1d
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-xs font-medium">
                        3d
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/30 text-xs font-medium">
                        7d
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/40 text-xs font-medium">
                        14d
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/50 text-xs font-medium">
                        30d
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/60 text-xs font-medium">
                        90d
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Find answers to common questions about MemoryMaster and spaced repetition learning.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How much time should I spend studying each day?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      The beauty of spaced repetition is its efficiency. We recommend 15-30 minutes daily for optimal
                      results. Consistency is more important than duration—studying a little each day is more effective
                      than cramming once a week.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Can I customize the spaced repetition algorithm?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Yes! In your settings, you can adjust parameters like the default difficulty factor, maximum
                      interval length, and how aggressively intervals increase. This allows you to tailor the system to
                      your learning style and subject matter.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What types of content can I learn with MemoryMaster?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      MemoryMaster works well for any information that can be broken down into question-answer pairs or
                      concepts to remember. This includes languages, medical terminology, historical dates, scientific
                      concepts, programming syntax, and much more.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How does MemoryMaster compare to traditional studying?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Research shows that spaced repetition is 2-3 times more effective than traditional studying
                      methods like re-reading or highlighting. By focusing on difficult material and spacing reviews
                      optimally, you can learn more in less time with better long-term retention.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I import existing flashcards from other apps?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Yes, MemoryMaster supports importing flashcards from popular formats like CSV, Anki packages
                      (.apkg), and Quizlet exports. You can also export your MemoryMaster decks to use elsewhere or
                      share with others.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>How do achievements and gamification work?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      MemoryMaster includes various achievements and gamification elements to keep you motivated. You'll
                      earn badges for milestones like study streaks, cards mastered, and time studied. Leaderboards let
                      you compare progress with friends, and daily streaks encourage consistent study habits.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>Is there a mobile app available?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      MemoryMaster is currently available as a responsive web application that works well on mobile
                      browsers. Dedicated iOS and Android apps are in development and scheduled for release in Q4 2023.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>How can I get the most out of MemoryMaster?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      For best results: 1) Study consistently every day, even if just for a few minutes; 2) Be honest
                      when rating your recall—this helps the algorithm work effectively; 3) Create clear, concise
                      flashcards with one concept per card; 4) Use images and mnemonics for complex information; and 5)
                      Review the analytics to identify and focus on challenging areas.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-8 flex items-center justify-center">
                <div className="rounded-lg border bg-card p-4 text-center">
                  <div className="mb-2 flex items-center justify-center">
                    <HelpCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium">Still have questions?</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Our support team is here to help you get the most out of MemoryMaster.
                  </p>
                  <Link href="/contact">
                    <Button variant="outline">Contact Support</Button>
                  </Link>
                </div>
              </div>
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
            <p className="text-sm text-muted-foreground">© 2023 MemoryMaster. All rights reserved.</p>
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

