"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Brain, Calendar, Clock, Flame, Plus, ThumbsDown, Timer } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { StudySessionCard } from "@/components/study-session-card"

// Mock data for study sessions
const mockStudySessions = [
  {
    id: "spanish",
    title: "Spanish Vocabulary",
    description: "24 cards due",
    progress: 65,
    icon: <BookOpen className="h-5 w-5" />,
    href: "/study/spanish",
    dueDate: "Today",
    estimatedTime: "15 min",
    lastStudied: "2 hours ago",
    tags: ["language", "spanish", "vocabulary"],
    difficulty: "Medium",
  },
  {
    id: "medical",
    title: "Medical Terminology",
    description: "12 cards due",
    progress: 40,
    icon: <BookOpen className="h-5 w-5" />,
    href: "/study/medical",
    dueDate: "Today",
    estimatedTime: "10 min",
    lastStudied: "1 day ago",
    tags: ["medical", "science", "terminology"],
    difficulty: "Hard",
  },
  {
    id: "programming",
    title: "Programming Concepts",
    description: "8 cards due",
    progress: 25,
    icon: <BookOpen className="h-5 w-5" />,
    href: "/study/programming",
    dueDate: "Tomorrow",
    estimatedTime: "8 min",
    lastStudied: "3 days ago",
    tags: ["programming", "computer science", "coding"],
    difficulty: "Medium",
  },
  {
    id: "history",
    title: "World History",
    description: "15 cards due",
    progress: 30,
    icon: <BookOpen className="h-5 w-5" />,
    href: "/study/history",
    dueDate: "Today",
    estimatedTime: "12 min",
    lastStudied: "5 days ago",
    tags: ["history", "dates", "events"],
    difficulty: "Medium",
  },
  {
    id: "math",
    title: "Calculus Formulas",
    description: "10 cards due",
    progress: 50,
    icon: <BookOpen className="h-5 w-5" />,
    href: "/study/math",
    dueDate: "Tomorrow",
    estimatedTime: "10 min",
    lastStudied: "2 days ago",
    tags: ["math", "calculus", "formulas"],
    difficulty: "Easy",
  },
  {
    id: "biology",
    title: "Human Anatomy",
    description: "20 cards due",
    progress: 15,
    icon: <BookOpen className="h-5 w-5" />,
    href: "/study/biology",
    dueDate: "Today",
    estimatedTime: "15 min",
    lastStudied: "1 week ago",
    tags: ["biology", "anatomy", "science"],
    difficulty: "Hard",
  },
]

// Mock data for difficult cards
const mockDifficultCards = [
  {
    id: 1,
    front: "Hepatic Portal System",
    back: "A system of veins that directs blood from the capillaries of the stomach, intestines, spleen, and pancreas to capillaries of the liver",
    deck: "Medical Terminology",
    lastReviewed: "2 days ago",
    difficulty: "Hard",
  },
  {
    id: 2,
    front: "Subjunctive Mood in Spanish",
    back: "A grammatical mood used to express wishes, possibilities, or situations contrary to fact",
    deck: "Spanish Vocabulary",
    lastReviewed: "1 day ago",
    difficulty: "Hard",
  },
  {
    id: 3,
    front: "Polymorphism in Object-Oriented Programming",
    back: "The ability of different objects to respond in a unique way to the same message or method call",
    deck: "Programming Concepts",
    lastReviewed: "3 days ago",
    difficulty: "Hard",
  },
  {
    id: 4,
    front: "Treaty of Westphalia",
    back: "A series of peace treaties signed in 1648 that ended the Thirty Years' War and the Eighty Years' War",
    deck: "World History",
    lastReviewed: "4 days ago",
    difficulty: "Hard",
  },
]

export default function StudyPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [studyMode, setStudyMode] = useState("standard")
  const [timerDuration, setTimerDuration] = useState(25)
  const [isTimerActive, setIsTimerActive] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(25 * 60) // in seconds

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  // Start/pause timer
  const toggleTimer = () => {
    setIsTimerActive(!isTimerActive)
  }

  // Reset timer
  const resetTimer = () => {
    setIsTimerActive(false)
    setTimeRemaining(timerDuration * 60)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1">
        <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Study</h1>
              <p className="text-muted-foreground">Review your flashcards and strengthen your memory</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Daily Streak</CardTitle>
                  <Flame className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12 days</div>
                  <p className="text-xs text-muted-foreground">Keep your streak going!</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cards Due Today</CardTitle>
                  <BookOpen className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">59</div>
                  <p className="text-xs text-muted-foreground">Across 4 decks</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Study Time Today</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">25 minutes</div>
                  <p className="text-xs text-muted-foreground">Goal: 30 minutes</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Retention Rate</CardTitle>
                  <Brain className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">85%</div>
                  <p className="text-xs text-muted-foreground">Last 7 days</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col space-y-4 md:flex-row md:items-start md:justify-between md:space-y-0">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Study Sessions</h2>
                <p className="text-muted-foreground">Review your due cards with spaced repetition</p>
              </div>
              <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
                <select
                  className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  value={studyMode}
                  onChange={(e) => setStudyMode(e.target.value)}
                >
                  <option value="standard">Standard Mode</option>
                  <option value="cram">Cram Mode</option>
                  <option value="review">Review Mode</option>
                  <option value="learn">Learn New Cards</option>
                </select>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  New Study Session
                </Button>
              </div>
            </div>

            <Tabs defaultValue="due">
              <TabsList>
                <TabsTrigger value="due">Due Today</TabsTrigger>
                <TabsTrigger value="all">All Decks</TabsTrigger>
                <TabsTrigger value="difficult">Difficult Cards</TabsTrigger>
                <TabsTrigger value="custom">Custom Study</TabsTrigger>
              </TabsList>

              <TabsContent value="due" className="space-y-4 mt-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {mockStudySessions
                    .filter((session) => session.dueDate === "Today")
                    .map((session) => (
                      <StudySessionCard
                        key={session.id}
                        title={session.title}
                        description={session.description}
                        progress={session.progress}
                        icon={session.icon}
                        href={session.href}
                      />
                    ))}
                </div>

                {mockStudySessions.filter((session) => session.dueDate === "Today").length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <BookOpen className="h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">No cards due today</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      You're all caught up! Check back later for more reviews.
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="all" className="space-y-4 mt-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {mockStudySessions.map((session) => (
                    <StudySessionCard
                      key={session.id}
                      title={session.title}
                      description={session.description}
                      progress={session.progress}
                      icon={session.icon}
                      href={session.href}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="difficult" className="space-y-4 mt-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Your Most Challenging Cards</h3>
                    <Button variant="outline" size="sm">
                      Study All Difficult Cards
                    </Button>
                  </div>

                  <div className="space-y-2">
                    {mockDifficultCards.map((card) => (
                      <Card key={card.id}>
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <h4 className="font-medium">{card.front}</h4>
                                <Badge variant="destructive" className="text-xs">
                                  Hard
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground line-clamp-2">{card.back}</p>
                              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                                <span>Deck: {card.deck}</span>
                                <span>•</span>
                                <span>Last reviewed: {card.lastReviewed}</span>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              Review
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="custom" className="space-y-4 mt-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Create Custom Study Session</CardTitle>
                      <CardDescription>Customize your study session based on your preferences</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="deck" className="text-sm font-medium">
                          Select Deck
                        </label>
                        <select
                          id="deck"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">All Decks</option>
                          <option value="spanish">Spanish Vocabulary</option>
                          <option value="medical">Medical Terminology</option>
                          <option value="programming">Programming Concepts</option>
                          <option value="history">World History</option>
                          <option value="math">Calculus Formulas</option>
                          <option value="biology">Human Anatomy</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="card-type" className="text-sm font-medium">
                          Card Type
                        </label>
                        <select
                          id="card-type"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="all">All Cards</option>
                          <option value="due">Due Cards</option>
                          <option value="new">New Cards</option>
                          <option value="difficult">Difficult Cards</option>
                          <option value="learned">Learned Cards</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="card-count" className="text-sm font-medium">
                          Number of Cards
                        </label>
                        <input
                          id="card-count"
                          type="number"
                          min="1"
                          max="100"
                          defaultValue="20"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="tags" className="text-sm font-medium">
                          Tags (optional)
                        </label>
                        <input
                          id="tags"
                          type="text"
                          placeholder="e.g., grammar, vocabulary"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Start Custom Session</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Study Timer</CardTitle>
                      <CardDescription>Use the Pomodoro technique to focus on your study sessions</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-5xl font-bold tabular-nums">{formatTime(timeRemaining)}</div>
                          <p className="mt-2 text-sm text-muted-foreground">
                            {isTimerActive ? "Study in progress" : "Timer paused"}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="timer-duration" className="text-sm font-medium">
                          Session Duration (minutes)
                        </label>
                        <div className="flex items-center space-x-2">
                          {[5, 15, 25, 45].map((duration) => (
                            <Button
                              key={duration}
                              variant={timerDuration === duration ? "default" : "outline"}
                              size="sm"
                              onClick={() => {
                                setTimerDuration(duration)
                                setTimeRemaining(duration * 60)
                              }}
                              disabled={isTimerActive}
                            >
                              {duration}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" onClick={resetTimer}>
                        Reset
                      </Button>
                      <Button onClick={toggleTimer}>
                        {isTimerActive ? (
                          <>
                            <Clock className="mr-2 h-4 w-4" />
                            Pause
                          </>
                        ) : (
                          <>
                            <Timer className="mr-2 h-4 w-4" />
                            Start
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Study Tips</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="mt-2">Consistency is Key</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Studying for 15-30 minutes daily is more effective than cramming for hours once a week. Maintain
                      your streak for optimal results.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <ThumbsDown className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="mt-2">Be Honest with Ratings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      When rating your recall, be honest about how well you remembered. This helps the algorithm
                      optimize your learning schedule.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Brain className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="mt-2">Active Recall</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Try to recall the answer before flipping the card. This active process strengthens neural pathways
                      and improves long-term retention.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

