import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Brain, Star } from "lucide-react"

export default function TestimonialsPage() {
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
            <Link href="/how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="/testimonials" className="text-sm font-medium text-primary underline underline-offset-4">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Discover how MemoryMaster has transformed the learning experience for thousands of users worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center">
                <TabsList className="mb-8">
                  <TabsTrigger value="all">All Testimonials</TabsTrigger>
                  <TabsTrigger value="languages">Language Learning</TabsTrigger>
                  <TabsTrigger value="academics">Academic Success</TabsTrigger>
                  <TabsTrigger value="professional">Professional Development</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {/* Featured Testimonial */}
                  <Card className="md:col-span-2 lg:col-span-3 overflow-hidden">
                    <div className="grid md:grid-cols-2">
                      <div className="relative h-60 md:h-auto">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Dr. Sarah Johnson"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 flex flex-col justify-center">
                        <div className="mb-4 flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                        <blockquote className="mb-4 border-l-4 border-primary pl-4 italic">
                          "MemoryMaster completely transformed how I prepared for my medical board exams. The spaced
                          repetition algorithm helped me retain complex terminology and concepts that would have
                          otherwise been overwhelming. I credit a significant portion of my exam success to this
                          platform."
                        </blockquote>
                        <div className="mt-auto">
                          <p className="font-semibold">Dr. Sarah Johnson</p>
                          <p className="text-sm text-muted-foreground">Medical Resident, Johns Hopkins Hospital</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Regular Testimonials */}
                  <Card>
                    <CardHeader className="pb-0">
                      <div className="mb-4 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="mb-4 italic">
                        "As a language enthusiast learning my fourth language, I've tried many apps. MemoryMaster stands
                        out because it adapts to my learning pace and focuses on words I struggle with. My vocabulary
                        retention has improved dramatically."
                      </blockquote>
                      <div>
                        <p className="font-semibold">Miguel Rodriguez</p>
                        <p className="text-sm text-muted-foreground">Polyglot & Language Teacher</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-0">
                      <div className="mb-4 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="mb-4 italic">
                        "The gamification elements keep me motivated! I love competing with friends on the leaderboard
                        and earning achievements. It turns what could be boring memorization into something fun and
                        engaging."
                      </blockquote>
                      <div>
                        <p className="font-semibold">Emily Chen</p>
                        <p className="text-sm text-muted-foreground">Computer Science Student</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-0">
                      <div className="mb-4 flex">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                        ))}
                        <Star className="h-5 w-5 text-yellow-500" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="mb-4 italic">
                        "I used MemoryMaster to study for the bar exam. Being able to create custom flashcards with
                        complex legal concepts and have them scheduled for review at optimal times was a game-changer
                        for my preparation."
                      </blockquote>
                      <div>
                        <p className="font-semibold">James Wilson</p>
                        <p className="text-sm text-muted-foreground">Attorney</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-0">
                      <div className="mb-4 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="mb-4 italic">
                        "As a teacher, I recommend MemoryMaster to all my students. The analytics help me see who's
                        studying consistently and where they're struggling. It's transformed how I support their
                        learning outside the classroom."
                      </blockquote>
                      <div>
                        <p className="font-semibold">Professor Robert Chang</p>
                        <p className="text-sm text-muted-foreground">High School Chemistry Teacher</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-0">
                      <div className="mb-4 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="mb-4 italic">
                        "I've been using MemoryMaster to learn piano music theory. The ability to include audio clips in
                        flashcards has been invaluable for training my ear to recognize different chords and
                        progressions."
                      </blockquote>
                      <div>
                        <p className="font-semibold">Sophia Martinez</p>
                        <p className="text-sm text-muted-foreground">Music Student</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-center">
                  <Button variant="outline">Load More Testimonials</Button>
                </div>
              </TabsContent>

              <TabsContent value="languages" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-0">
                      <div className="mb-4 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="mb-4 italic">
                        "As a language enthusiast learning my fourth language, I've tried many apps. MemoryMaster stands
                        out because it adapts to my learning pace and focuses on words I struggle with. My vocabulary
                        retention has improved dramatically."
                      </blockquote>
                      <div>
                        <p className="font-semibold">Miguel Rodriguez</p>
                        <p className="text-sm text-muted-foreground">Polyglot & Language Teacher</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-0">
                      <div className="mb-4 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="mb-4 italic">
                        "I've been studying Japanese for years, but always struggled with kanji. MemoryMaster's image
                        association features and spaced repetition have finally helped me make real progress. I can now
                        read simple manga without constant dictionary lookups!"
                      </blockquote>
                      <div>
                        <p className="font-semibold">Thomas Wright</p>
                        <p className="text-sm text-muted-foreground">Japanese Language Learner</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-0">
                      <div className="mb-4 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="mb-4 italic">
                        "As someone preparing for the IELTS exam, MemoryMaster has been invaluable for building my
                        English vocabulary. The ability to include example sentences and pronunciation audio has
                        significantly improved my speaking confidence."
                      </blockquote>
                      <div>
                        <p className="font-semibold">Aisha Patel</p>
                        <p className="text-sm text-muted-foreground">International Student</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="academics" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-0">
                      <div className="mb-4 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="mb-4 italic">
                        "MemoryMaster completely transformed how I prepared for my medical board exams. The spaced
                        repetition algorithm helped me retain complex terminology and concepts that would have otherwise
                        been overwhelming. I credit a significant portion of my exam success to this platform."
                      </blockquote>
                      <div>
                        <p className="font-semibold">Dr. Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">Medical Resident</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-0">
                      <div className="mb-4 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="mb-4 italic">
                        "As a history major, I need to remember countless dates, events, and their connections.
                        MemoryMaster has been essential for organizing this information and ensuring I retain it for
                        exams and beyond."
                      </blockquote>
                      <div>
                        <p className="font-semibold">Marcus Johnson</p>
                        <p className="text-sm text-muted-foreground">History Student</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-0">
                      <div className="mb-4 flex">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                        ))}
                        <Star className="h-5 w-5 text-yellow-500" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="mb-4 italic">
                        "I used MemoryMaster to study for the bar exam. Being able to create custom flashcards with
                        complex legal concepts and have them scheduled for review at optimal times was a game-changer
                        for my preparation."
                      </blockquote>
                      <div>
                        <p className="font-semibold">James Wilson</p>
                        <p className="text-sm text-muted-foreground">Attorney</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="professional" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-0">
                      <div className="mb-4 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="mb-4 italic">
                        "In sales, remembering details about products and clients is crucial. MemoryMaster has helped me
                        master our product catalog and remember key information about clients, which has directly
                        improved my sales performance."
                      </blockquote>
                      <div>
                        <p className="font-semibold">David Thompson</p>
                        <p className="text-sm text-muted-foreground">Sales Executive</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-0">
                      <div className="mb-4 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="mb-4 italic">
                        "As a software developer, I need to keep up with constantly evolving technologies. MemoryMaster
                        helps me retain programming syntax, design patterns, and best practices across multiple
                        languages and frameworks."
                      </blockquote>
                      <div>
                        <p className="font-semibold">Alex Rivera</p>
                        <p className="text-sm text-muted-foreground">Senior Software Engineer</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-0">
                      <div className="mb-4 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <blockquote className="mb-4 italic">
                        "I used MemoryMaster to prepare for my project management certification. The ability to organize
                        flashcards by knowledge area and process group made studying much more efficient and effective."
                      </blockquote>
                      <div>
                        <p className="font-semibold">Lisa Chen</p>
                        <p className="text-sm text-muted-foreground">Project Manager</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Video Testimonials</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Hear directly from our users about their experience with MemoryMaster.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
              <div className="overflow-hidden rounded-xl border bg-background shadow-sm">
                <div className="relative aspect-video">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                    <div className="rounded-full bg-white/90 p-4 shadow-sm">
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
                        className="h-8 w-8 text-primary"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Medical Student Testimonial"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">Medical Student Success Story</h3>
                  <p className="text-sm text-muted-foreground">
                    How Sarah used MemoryMaster to ace her medical board exams.
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-xl border bg-background shadow-sm">
                <div className="relative aspect-video">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                    <div className="rounded-full bg-white/90 p-4 shadow-sm">
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
                        className="h-8 w-8 text-primary"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Language Learning Testimonial"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">Polyglot's Language Learning Journey</h3>
                  <p className="text-sm text-muted-foreground">
                    Miguel shares how he mastered four languages with MemoryMaster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Share Your Story</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  We'd love to hear about your experience with MemoryMaster. Submit your testimonial below.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-2xl py-12">
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="category" className="text-sm font-medium">
                        Category
                      </label>
                      <select
                        id="category"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a category</option>
                        <option value="language">Language Learning</option>
                        <option value="academic">Academic Success</option>
                        <option value="professional">Professional Development</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="testimonial" className="text-sm font-medium">
                        Your Testimonial
                      </label>
                      <textarea
                        id="testimonial"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Share your experience with MemoryMaster..."
                      ></textarea>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="rating" className="text-sm font-medium">
                        Rating
                      </label>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 cursor-pointer text-muted hover:text-yellow-500" />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="consent"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="consent" className="text-sm text-muted-foreground">
                        I consent to having my testimonial and name displayed on the MemoryMaster website.
                      </label>
                    </div>
                    <Button className="w-full">Submit Testimonial</Button>
                  </form>
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
                  Join Thousands of Satisfied Learners
                </h2>
                <p className="max-w-[900px] md:text-xl">
                  Experience the power of spaced repetition and transform your learning today.
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

