"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Clock,
  Download,
  Filter,
  Heart,
  Layers,
  Plus,
  Search,
  Share2,
  Tags,
  Trash2,
  Upload,
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

// Mock data for decks
const mockDecks = [
  {
    id: "spanish",
    title: "Spanish Vocabulary",
    description: "Basic Spanish vocabulary for beginners",
    totalCards: 500,
    masteredCards: 250,
    dueCards: 24,
    lastStudied: "2 hours ago",
    tags: ["language", "spanish", "vocabulary"],
    favorite: true,
    category: "Languages",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    id: "medical",
    title: "Medical Terminology",
    description: "Essential medical terms for healthcare students",
    totalCards: 300,
    masteredCards: 120,
    dueCards: 12,
    lastStudied: "1 day ago",
    tags: ["medical", "science", "terminology"],
    favorite: true,
    category: "Science",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    id: "programming",
    title: "Programming Concepts",
    description: "Fundamental programming concepts and terminology",
    totalCards: 100,
    masteredCards: 75,
    dueCards: 8,
    lastStudied: "3 days ago",
    tags: ["programming", "computer science", "coding"],
    favorite: false,
    category: "Technology",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    id: "history",
    title: "World History",
    description: "Key events and figures in world history",
    totalCards: 200,
    masteredCards: 50,
    dueCards: 15,
    lastStudied: "5 days ago",
    tags: ["history", "dates", "events"],
    favorite: false,
    category: "Humanities",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    id: "math",
    title: "Calculus Formulas",
    description: "Essential formulas for calculus",
    totalCards: 150,
    masteredCards: 60,
    dueCards: 10,
    lastStudied: "2 days ago",
    tags: ["math", "calculus", "formulas"],
    favorite: false,
    category: "Mathematics",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    id: "biology",
    title: "Human Anatomy",
    description: "Study of human body structures",
    totalCards: 250,
    masteredCards: 100,
    dueCards: 20,
    lastStudied: "1 week ago",
    tags: ["biology", "anatomy", "science"],
    favorite: false,
    category: "Science",
    icon: <Layers className="h-5 w-5" />,
  },
]

// Categories for filtering
const categories = [
  "All Categories",
  "Languages",
  "Science",
  "Technology",
  "Mathematics",
  "Humanities",
  "Business",
  "Arts",
]

export default function MyDecksPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [decks, setDecks] = useState(mockDecks)

  // Filter decks based on search query, selected category, and active tab
  const filterDecks = (decksToFilter: typeof mockDecks, activeTab: string) => {
    return decksToFilter.filter((deck) => {
      const matchesSearch =
        deck.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deck.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        deck.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === "All Categories" || deck.category === selectedCategory

      const matchesTab =
        activeTab === "all" ||
        (activeTab === "favorites" && deck.favorite) ||
        (activeTab === "recent" && new Date(deck.lastStudied).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000) ||
        (activeTab === "due" && deck.dueCards > 0)

      return matchesSearch && matchesCategory && matchesTab
    })
  }

  // Toggle favorite status
  const toggleFavorite = (id: string) => {
    setDecks(decks.map((deck) => (deck.id === id ? { ...deck, favorite: !deck.favorite } : deck)))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1">
        <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">My Decks</h1>
              <p className="text-muted-foreground">Manage your flashcard decks and track your learning progress</p>
            </div>

            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <div className="relative w-full">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search decks..."
                    className="w-full pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <select
                  className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  New Deck
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Your Decks</h2>
                  <p className="text-sm text-muted-foreground">
                    You have {decks.length} decks with {decks.reduce((acc, deck) => acc + deck.dueCards, 0)} cards due
                    for review
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Upload className="mr-2 h-4 w-4" />
                  Import
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>

            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Decks</TabsTrigger>
                <TabsTrigger value="favorites">Favorites</TabsTrigger>
                <TabsTrigger value="recent">Recently Studied</TabsTrigger>
                <TabsTrigger value="due">Due for Review</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filterDecks(decks, "all").map((deck) => (
                    <Card key={deck.id} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="bg-primary/10 p-2 rounded-full">{deck.icon}</div>
                            <CardTitle className="text-lg font-medium">{deck.title}</CardTitle>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => toggleFavorite(deck.id)}
                          >
                            <Heart className={`h-4 w-4 ${deck.favorite ? "fill-red-500 text-red-500" : ""}`} />
                          </Button>
                        </div>
                        <CardDescription>{deck.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-1">
                          {deck.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span>Mastered</span>
                            <span>{Math.round((deck.masteredCards / deck.totalCards) * 100)}%</span>
                          </div>
                          <Progress value={(deck.masteredCards / deck.totalCards) * 100} className="h-2" />
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <BookOpen className="mr-1 h-3 w-3" />
                            <span>{deck.totalCards} cards</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-3 w-3" />
                            <span>{deck.lastStudied}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between gap-2">
                        <Link href={`/decks/${deck.id}`} className="flex-1">
                          <Button variant="outline" className="w-full">
                            View
                          </Button>
                        </Link>
                        <Link href={`/study/${deck.id}`} className="flex-1">
                          <Button className="w-full">Study</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}

                  <Card className="flex flex-col items-center justify-center p-6 border-dashed">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      <Plus className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-medium">Create New Deck</h3>
                    <p className="mb-4 text-center text-sm text-muted-foreground">
                      Add a new flashcard deck to your collection
                    </p>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      New Deck
                    </Button>
                  </Card>
                </div>

                {filterDecks(decks, "all").length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Layers className="h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">No decks found</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Try adjusting your search or filter to find what you're looking for.
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="favorites" className="mt-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filterDecks(decks, "favorites").map((deck) => (
                    <Card key={deck.id} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="bg-primary/10 p-2 rounded-full">{deck.icon}</div>
                            <CardTitle className="text-lg font-medium">{deck.title}</CardTitle>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => toggleFavorite(deck.id)}
                          >
                            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                          </Button>
                        </div>
                        <CardDescription>{deck.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-1">
                          {deck.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span>Mastered</span>
                            <span>{Math.round((deck.masteredCards / deck.totalCards) * 100)}%</span>
                          </div>
                          <Progress value={(deck.masteredCards / deck.totalCards) * 100} className="h-2" />
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <BookOpen className="mr-1 h-3 w-3" />
                            <span>{deck.totalCards} cards</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-3 w-3" />
                            <span>{deck.lastStudied}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between gap-2">
                        <Link href={`/decks/${deck.id}`} className="flex-1">
                          <Button variant="outline" className="w-full">
                            View
                          </Button>
                        </Link>
                        <Link href={`/study/${deck.id}`} className="flex-1">
                          <Button className="w-full">Study</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {filterDecks(decks, "favorites").length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Heart className="h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">No favorite decks</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Mark decks as favorites to access them quickly.
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="recent" className="mt-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filterDecks(decks, "recent").map((deck) => (
                    <Card key={deck.id} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="bg-primary/10 p-2 rounded-full">{deck.icon}</div>
                            <CardTitle className="text-lg font-medium">{deck.title}</CardTitle>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => toggleFavorite(deck.id)}
                          >
                            <Heart className={`h-4 w-4 ${deck.favorite ? "fill-red-500 text-red-500" : ""}`} />
                          </Button>
                        </div>
                        <CardDescription>{deck.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-1">
                          {deck.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span>Mastered</span>
                            <span>{Math.round((deck.masteredCards / deck.totalCards) * 100)}%</span>
                          </div>
                          <Progress value={(deck.masteredCards / deck.totalCards) * 100} className="h-2" />
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <BookOpen className="mr-1 h-3 w-3" />
                            <span>{deck.totalCards} cards</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-3 w-3" />
                            <span>{deck.lastStudied}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between gap-2">
                        <Link href={`/decks/${deck.id}`} className="flex-1">
                          <Button variant="outline" className="w-full">
                            View
                          </Button>
                        </Link>
                        <Link href={`/study/${deck.id}`} className="flex-1">
                          <Button className="w-full">Study</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {filterDecks(decks, "recent").length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Clock className="h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">No recently studied decks</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Start studying to see your recent decks here.</p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="due" className="mt-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filterDecks(decks, "due").map((deck) => (
                    <Card key={deck.id} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="bg-primary/10 p-2 rounded-full">{deck.icon}</div>
                            <CardTitle className="text-lg font-medium">{deck.title}</CardTitle>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => toggleFavorite(deck.id)}
                          >
                            <Heart className={`h-4 w-4 ${deck.favorite ? "fill-red-500 text-red-500" : ""}`} />
                          </Button>
                        </div>
                        <CardDescription>{deck.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-1">
                          {deck.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span>Due Cards</span>
                            <span className="font-medium text-amber-500">{deck.dueCards} cards</span>
                          </div>
                          <Progress value={(deck.dueCards / deck.totalCards) * 100} className="h-2 bg-muted" />
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <BookOpen className="mr-1 h-3 w-3" />
                            <span>{deck.totalCards} cards</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="mr-1 h-3 w-3" />
                            <span>{deck.lastStudied}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between gap-2">
                        <Link href={`/decks/${deck.id}`} className="flex-1">
                          <Button variant="outline" className="w-full">
                            View
                          </Button>
                        </Link>
                        <Link href={`/study/${deck.id}`} className="flex-1">
                          <Button className="w-full">Study</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {filterDecks(decks, "due").length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <BookOpen className="h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">No cards due for review</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      You're all caught up! Check back later for more reviews.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>

            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">Deck Management</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Tags className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="mt-2">Organize Decks</CardTitle>
                    <CardDescription>Manage your decks with tags, categories, and favorites</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Group related decks together, add custom tags, and mark your most important decks as favorites for
                      quick access.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Manage Tags
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Share2 className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="mt-2">Share Decks</CardTitle>
                    <CardDescription>Share your decks with friends or the community</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Generate shareable links, export decks in various formats, or publish to the MemoryMaster
                      community library.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Share Options
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Trash2 className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="mt-2">Archive Decks</CardTitle>
                    <CardDescription>Archive decks you no longer need</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Move completed or unused decks to the archive to keep your active deck list organized and focused.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Archive
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

