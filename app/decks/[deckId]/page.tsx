"use client"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, ChevronLeft, Download, Edit, Layers, Plus, Share2, Trash2, Upload } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

// Mock data for the flashcards
const mockDecks = {
  spanish: {
    title: "Spanish Vocabulary",
    description: "Basic Spanish vocabulary for beginners",
    totalCards: 500,
    masteredCards: 250,
    dueCards: 24,
    lastStudied: "2 hours ago",
    cards: [
      { id: 1, front: "Hola", back: "Hello", difficulty: 3, nextReview: new Date(), tags: ["greeting"] },
      { id: 2, front: "Adiós", back: "Goodbye", difficulty: 2, nextReview: new Date(), tags: ["greeting"] },
      { id: 3, front: "Por favor", back: "Please", difficulty: 1, nextReview: new Date(), tags: ["common phrase"] },
      { id: 4, front: "Gracias", back: "Thank you", difficulty: 2, nextReview: new Date(), tags: ["common phrase"] },
      { id: 5, front: "Buenos días", back: "Good morning", difficulty: 3, nextReview: new Date(), tags: ["greeting"] },
    ],
  },
  medical: {
    title: "Medical Terminology",
    description: "Essential medical terms for healthcare students",
    totalCards: 300,
    masteredCards: 120,
    dueCards: 12,
    lastStudied: "1 day ago",
    cards: [
      {
        id: 1,
        front: "Cardiology",
        back: "Study of the heart",
        difficulty: 3,
        nextReview: new Date(),
        tags: ["specialty"],
      },
      {
        id: 2,
        front: "Neurology",
        back: "Study of the nervous system",
        difficulty: 4,
        nextReview: new Date(),
        tags: ["specialty"],
      },
      { id: 3, front: "Oncology", back: "Study of cancer", difficulty: 2, nextReview: new Date(), tags: ["specialty"] },
      {
        id: 4,
        front: "Pediatrics",
        back: "Medical care of infants, children, and adolescents",
        difficulty: 1,
        nextReview: new Date(),
        tags: ["specialty"],
      },
      {
        id: 5,
        front: "Dermatology",
        back: "Study of skin",
        difficulty: 2,
        nextReview: new Date(),
        tags: ["specialty"],
      },
    ],
  },
  programming: {
    title: "Programming Concepts",
    description: "Fundamental programming concepts and terminology",
    totalCards: 100,
    masteredCards: 75,
    dueCards: 8,
    lastStudied: "3 days ago",
    cards: [
      {
        id: 1,
        front: "Algorithm",
        back: "A step-by-step procedure for solving a problem",
        difficulty: 2,
        nextReview: new Date(),
        tags: ["basics"],
      },
      {
        id: 2,
        front: "Variable",
        back: "A storage location paired with an associated symbolic name",
        difficulty: 1,
        nextReview: new Date(),
        tags: ["basics"],
      },
      {
        id: 3,
        front: "Function",
        back: "A block of code designed to perform a particular task",
        difficulty: 2,
        nextReview: new Date(),
        tags: ["basics"],
      },
      {
        id: 4,
        front: "Object",
        back: "An instance of a class that may contain data and methods",
        difficulty: 3,
        nextReview: new Date(),
        tags: ["OOP"],
      },
      {
        id: 5,
        front: "API",
        back: "Application Programming Interface - a set of functions that allows applications to access data and interact with external systems",
        difficulty: 4,
        nextReview: new Date(),
        tags: ["advanced"],
      },
    ],
  },
}

export default function DeckPage() {
  const params = useParams()
  const router = useRouter()
  const deckId = params.deckId as string

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const deck = mockDecks[deckId as keyof typeof mockDecks]

  if (!deck) {
    return <div>Deck not found</div>
  }

  const filteredCards = deck.cards.filter(
    (card) =>
      card.front.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.back.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const progress = (deck.masteredCards / deck.totalCards) * 100

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1">
        <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <main className="flex-1 p-4 md:p-6">
          <div className="mb-6 flex items-center">
            <Button variant="outline" size="sm" onClick={() => router.back()}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Decks
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">{deck.title}</h1>
                <p className="text-muted-foreground">{deck.description}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Cards</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{deck.totalCards}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Mastered</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{deck.masteredCards}</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Due Today</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{deck.dueCards}</div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Progress</CardTitle>
                  <CardDescription>Your mastery progress for this deck</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Mastery</span>
                      <span className="text-sm text-muted-foreground">
                        {deck.masteredCards}/{deck.totalCards} cards
                      </span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Cards</h2>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    Import
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Card
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <Input
                  placeholder="Search cards..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="max-w-md"
                />

                <Tabs defaultValue="all">
                  <TabsList>
                    <TabsTrigger value="all">All Cards</TabsTrigger>
                    <TabsTrigger value="due">Due Today</TabsTrigger>
                    <TabsTrigger value="mastered">Mastered</TabsTrigger>
                    <TabsTrigger value="difficult">Difficult</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="space-y-4 mt-4">
                    {filteredCards.map((card) => (
                      <Card key={card.id}>
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg font-medium">{card.front}</CardTitle>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="icon">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p>{card.back}</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {card.tags.map((tag) => (
                              <span key={tag} className="rounded-full bg-muted px-2 py-1 text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="due" className="space-y-4 mt-4">
                    <p className="text-muted-foreground">Cards due for review today</p>
                  </TabsContent>

                  <TabsContent value="mastered" className="space-y-4 mt-4">
                    <p className="text-muted-foreground">Cards you've mastered</p>
                  </TabsContent>

                  <TabsContent value="difficult" className="space-y-4 mt-4">
                    <p className="text-muted-foreground">Cards you find difficult</p>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Study Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href={`/study/${deckId}`} className="w-full">
                    <Button className="w-full">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Start Study Session
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full">
                    <Layers className="mr-2 h-4 w-4" />
                    Review Due Cards
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Deck Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Created</div>
                    <div>March 15, 2023</div>
                    <div className="text-muted-foreground">Last Modified</div>
                    <div>2 days ago</div>
                    <div className="text-muted-foreground">Last Studied</div>
                    <div>{deck.lastStudied}</div>
                    <div className="text-muted-foreground">Tags</div>
                    <div className="flex flex-wrap gap-1">
                      <span className="rounded-full bg-muted px-2 py-1 text-xs">language</span>
                      <span className="rounded-full bg-muted px-2 py-1 text-xs">vocabulary</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Deck
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Study Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Study Sessions</div>
                    <div>42</div>
                    <div className="text-muted-foreground">Total Study Time</div>
                    <div>12.5 hours</div>
                    <div className="text-muted-foreground">Average Accuracy</div>
                    <div>85%</div>
                    <div className="text-muted-foreground">Cards Per Session</div>
                    <div>25</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

