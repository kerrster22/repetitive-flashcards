"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BookOpen,
  Download,
  Filter,
  Heart,
  Layers,
  MessageCircle,
  MessageSquare,
  Plus,
  Search,
  Share2,
  ThumbsUp,
  Trophy,
  Users,
  Flame,
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

// Mock data for community decks
const mockCommunityDecks = [
  {
    id: "spanish-advanced",
    title: "Advanced Spanish Vocabulary",
    description: "Expand your Spanish vocabulary with advanced terms and phrases",
    author: "Miguel Rodriguez",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    downloads: 1245,
    likes: 328,
    totalCards: 500,
    tags: ["language", "spanish", "advanced"],
    category: "Languages",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    id: "medical-anatomy",
    title: "Human Anatomy for Medical Students",
    description: "Comprehensive flashcards covering all major body systems",
    author: "Dr. Sarah Johnson",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    downloads: 2189,
    likes: 456,
    totalCards: 750,
    tags: ["medical", "anatomy", "science"],
    category: "Science",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    id: "javascript-fundamentals",
    title: "JavaScript Fundamentals",
    description: "Master the core concepts of JavaScript programming",
    author: "Alex Chen",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    downloads: 3567,
    likes: 892,
    totalCards: 300,
    tags: ["programming", "javascript", "web development"],
    category: "Technology",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    id: "world-capitals",
    title: "World Capitals and Geography",
    description: "Learn the capitals and key geographic features of countries worldwide",
    author: "Emma Wilson",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    downloads: 1876,
    likes: 423,
    totalCards: 195,
    tags: ["geography", "capitals", "countries"],
    category: "Geography",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    id: "gre-vocabulary",
    title: "GRE Vocabulary Prep",
    description: "Essential vocabulary words for GRE test preparation",
    author: "James Thompson",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    downloads: 4532,
    likes: 1245,
    totalCards: 500,
    tags: ["test prep", "vocabulary", "GRE"],
    category: "Test Preparation",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    id: "art-history",
    title: "Art History: Renaissance to Modern",
    description: "Key artists, movements, and works from Renaissance to Modern art",
    author: "Sophia Martinez",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    downloads: 987,
    likes: 302,
    totalCards: 250,
    tags: ["art", "history", "culture"],
    category: "Arts & Humanities",
    icon: <Layers className="h-5 w-5" />,
  },
]

// Mock data for forum discussions
const mockDiscussions = [
  {
    id: 1,
    title: "Tips for learning medical terminology efficiently?",
    author: "MedStudent22",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    category: "Study Strategies",
    replies: 24,
    views: 342,
    lastActivity: "2 hours ago",
    tags: ["medical", "terminology", "memorization"],
  },
  {
    id: 2,
    title: "How to structure language learning flashcards?",
    author: "PolyglotLearner",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    category: "Language Learning",
    replies: 18,
    views: 256,
    lastActivity: "5 hours ago",
    tags: ["languages", "flashcards", "structure"],
  },
  {
    id: 3,
    title: "Spaced repetition for programming concepts - your approach?",
    author: "CodeMaster",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    category: "Programming",
    replies: 32,
    views: 489,
    lastActivity: "1 day ago",
    tags: ["programming", "coding", "concepts"],
  },
  {
    id: 4,
    title: "Struggling with retention - need advice",
    author: "NewLearner",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    category: "Help & Support",
    replies: 45,
    views: 612,
    lastActivity: "3 hours ago",
    tags: ["retention", "memory", "help"],
  },
  {
    id: 5,
    title: "Feature request: Audio pronunciation for language cards",
    author: "LanguageFan",
    authorAvatar: "/placeholder.svg?height=40&width=40",
    category: "Feature Requests",
    replies: 12,
    views: 178,
    lastActivity: "2 days ago",
    tags: ["feature", "audio", "languages"],
  },
]

// Mock data for leaderboard
const mockLeaderboard = [
  {
    rank: 1,
    username: "MemoryMaster",
    avatar: "/placeholder.svg?height=40&width=40",
    streak: 365,
    cardsStudied: 15782,
    retention: 94,
    points: 45689,
  },
  {
    rank: 2,
    username: "BrainTrainer",
    avatar: "/placeholder.svg?height=40&width=40",
    streak: 287,
    cardsStudied: 12456,
    retention: 92,
    points: 38754,
  },
  {
    rank: 3,
    username: "StudyChampion",
    avatar: "/placeholder.svg?height=40&width=40",
    streak: 215,
    cardsStudied: 10987,
    retention: 91,
    points: 32567,
  },
  {
    rank: 4,
    username: "KnowledgeSeeker",
    avatar: "/placeholder.svg?height=40&width=40",
    streak: 189,
    cardsStudied: 9876,
    retention: 89,
    points: 28943,
  },
  {
    rank: 5,
    username: "FlashcardWizard",
    avatar: "/placeholder.svg?height=40&width=40",
    streak: 156,
    cardsStudied: 8765,
    retention: 88,
    points: 25678,
  },
  {
    rank: 6,
    username: "LearningNinja",
    avatar: "/placeholder.svg?height=40&width=40",
    streak: 132,
    cardsStudied: 7654,
    retention: 87,
    points: 21345,
  },
  {
    rank: 7,
    username: "MemoryHacker",
    avatar: "/placeholder.svg?height=40&width=40",
    streak: 112,
    cardsStudied: 6543,
    retention: 86,
    points: 18976,
  },
  {
    rank: 8,
    username: "StudyMaster",
    avatar: "/placeholder.svg?height=40&width=40",
    streak: 98,
    cardsStudied: 5432,
    retention: 85,
    points: 16789,
  },
  {
    rank: 9,
    username: "BrainBooster",
    avatar: "/placeholder.svg?height=40&width=40",
    streak: 87,
    cardsStudied: 4321,
    retention: 84,
    points: 14567,
  },
  {
    rank: 10,
    username: "LearnDaily",
    avatar: "/placeholder.svg?height=40&width=40",
    streak: 76,
    cardsStudied: 3210,
    retention: 83,
    points: 12345,
  },
  // Current user
  {
    rank: 42,
    username: "You",
    avatar: "/placeholder.svg?height=40&width=40",
    streak: 12,
    cardsStudied: 1245,
    retention: 78,
    points: 4567,
    isCurrentUser: true,
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
  "Test Preparation",
  "Geography",
]

export default function CommunityPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")

  // Filter decks based on search query and selected category
  const filteredDecks = mockCommunityDecks.filter((deck) => {
    const matchesSearch =
      deck.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deck.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deck.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategory === "All Categories" || deck.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1">
        <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Community</h1>
              <p className="text-muted-foreground">
                Connect with other learners, share decks, and participate in discussions
              </p>
            </div>

            <Tabs defaultValue="explore">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="explore">Explore Decks</TabsTrigger>
                <TabsTrigger value="forum">Forum</TabsTrigger>
                <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
              </TabsList>

              <TabsContent value="explore" className="space-y-6 mt-6">
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <div className="relative w-full">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search community decks..."
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
                      <Share2 className="mr-2 h-4 w-4" />
                      Share Your Deck
                    </Button>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredDecks.map((deck) => (
                    <Card key={deck.id} className="overflow-hidden">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="bg-primary/10 p-2 rounded-full">{deck.icon}</div>
                            <CardTitle className="text-lg font-medium">{deck.title}</CardTitle>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                        <CardDescription>{deck.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={deck.authorAvatar} alt={deck.author} />
                            <AvatarFallback>{deck.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-muted-foreground">{deck.author}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {deck.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <BookOpen className="mr-1 h-3 w-3" />
                            <span>{deck.totalCards} cards</span>
                          </div>
                          <div className="flex items-center">
                            <Download className="mr-1 h-3 w-3" />
                            <span>{deck.downloads} downloads</span>
                          </div>
                          <div className="flex items-center">
                            <ThumbsUp className="mr-1 h-3 w-3" />
                            <span>{deck.likes} likes</span>
                          </div>
                          <div className="flex items-center">
                            <Badge variant="outline" className="text-xs">
                              {deck.category}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between gap-2">
                        <Button variant="outline" className="flex-1">
                          Preview
                        </Button>
                        <Button className="flex-1">
                          <Download className="mr-2 h-4 w-4" />
                          Import
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {filteredDecks.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Layers className="h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">No decks found</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Try adjusting your search or filter to find what you're looking for.
                    </p>
                  </div>
                )}

                <div className="flex justify-center">
                  <Button variant="outline">Load More Decks</Button>
                </div>
              </TabsContent>

              <TabsContent value="forum" className="space-y-6 mt-6">
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <div className="relative w-full">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Search discussions..." className="w-full pl-8" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <select className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                      <option value="all">All Categories</option>
                      <option value="study">Study Strategies</option>
                      <option value="language">Language Learning</option>
                      <option value="programming">Programming</option>
                      <option value="help">Help & Support</option>
                      <option value="feature">Feature Requests</option>
                    </select>
                    <Button>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      New Discussion
                    </Button>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Community Discussions</CardTitle>
                    <CardDescription>
                      Join conversations with other learners about study techniques, specific subjects, and more
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockDiscussions.map((discussion) => (
                        <div key={discussion.id} className="flex items-start space-x-4 p-4 rounded-lg border">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={discussion.authorAvatar} alt={discussion.author} />
                            <AvatarFallback>{discussion.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <Link href="#" className="font-medium hover:underline">
                                {discussion.title}
                              </Link>
                              <Badge variant="outline">{discussion.category}</Badge>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {discussion.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                              <span>By {discussion.author}</span>
                              <div className="flex items-center">
                                <MessageCircle className="mr-1 h-3 w-3" />
                                <span>{discussion.replies} replies</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="mr-1 h-3 w-3" />
                                <span>{discussion.views} views</span>
                              </div>
                              <span>Last activity: {discussion.lastActivity}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <Button variant="outline">View More Discussions</Button>
                  </CardFooter>
                </Card>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Popular Categories</CardTitle>
                      <CardDescription>Browse discussions by category</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Link
                          href="#"
                          className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="bg-primary/10 p-2 rounded-full">
                              <BookOpen className="h-4 w-4 text-primary" />
                            </div>
                            <span>Study Strategies</span>
                          </div>
                          <Badge>124 topics</Badge>
                        </Link>
                        <Link
                          href="#"
                          className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="bg-primary/10 p-2 rounded-full">
                              <MessageCircle className="h-4 w-4 text-primary" />
                            </div>
                            <span>Language Learning</span>
                          </div>
                          <Badge>98 topics</Badge>
                        </Link>
                        <Link
                          href="#"
                          className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="bg-primary/10 p-2 rounded-full">
                              <Layers className="h-4 w-4 text-primary" />
                            </div>
                            <span>Programming</span>
                          </div>
                          <Badge>87 topics</Badge>
                        </Link>
                        <Link
                          href="#"
                          className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="bg-primary/10 p-2 rounded-full">
                              <Users className="h-4 w-4 text-primary" />
                            </div>
                            <span>Help & Support</span>
                          </div>
                          <Badge>65 topics</Badge>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Community Guidelines</CardTitle>
                      <CardDescription>
                        Please follow these guidelines when participating in discussions
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h3 className="font-medium">Be Respectful</h3>
                          <p className="text-sm text-muted-foreground">
                            Treat others with respect. No personal attacks, harassment, or hate speech.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium">Stay On Topic</h3>
                          <p className="text-sm text-muted-foreground">
                            Keep discussions relevant to learning, memory techniques, and related topics.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium">No Spam</h3>
                          <p className="text-sm text-muted-foreground">
                            Don't post promotional content, advertisements, or repetitive messages.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-medium">Be Helpful</h3>
                          <p className="text-sm text-muted-foreground">
                            Aim to contribute positively to discussions and help fellow learners.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="leaderboard" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Global Leaderboard</CardTitle>
                    <CardDescription>
                      See how you rank against other learners based on study consistency, retention, and more
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border">
                        <div className="grid grid-cols-7 gap-4 p-4 font-medium border-b">
                          <div className="col-span-1">Rank</div>
                          <div className="col-span-2">User</div>
                          <div className="col-span-1 text-center">Streak</div>
                          <div className="col-span-1 text-center">Cards</div>
                          <div className="col-span-1 text-center">Retention</div>
                          <div className="col-span-1 text-center">Points</div>
                        </div>
                        <div className="divide-y">
                          {mockLeaderboard.map((user) => (
                            <div
                              key={user.rank}
                              className={`grid grid-cols-7 gap-4 p-4 ${user.isCurrentUser ? "bg-primary/5" : ""}`}
                            >
                              <div className="col-span-1 flex items-center">
                                {user.rank <= 3 ? (
                                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-500 text-white text-xs font-bold">
                                    {user.rank}
                                  </div>
                                ) : (
                                  <span>{user.rank}</span>
                                )}
                              </div>
                              <div className="col-span-2 flex items-center space-x-2">
                                <Avatar className="h-6 w-6">
                                  <AvatarImage src={user.avatar} alt={user.username} />
                                  <AvatarFallback>{user.username.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span className={user.isCurrentUser ? "font-bold" : ""}>
                                  {user.username}
                                  {user.isCurrentUser && " (You)"}
                                </span>
                              </div>
                              <div className="col-span-1 flex items-center justify-center">
                                <div className="flex items-center">
                                  <Flame className="mr-1 h-4 w-4 text-orange-500" />
                                  <span>{user.streak}</span>
                                </div>
                              </div>
                              <div className="col-span-1 text-center">{user.cardsStudied.toLocaleString()}</div>
                              <div className="col-span-1 text-center">{user.retention}%</div>
                              <div className="col-span-1 text-center font-medium">{user.points.toLocaleString()}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-6 md:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Trophy className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="mt-2">Your Stats</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Global Rank</span>
                          <span className="font-medium">42 of 12,456</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Current Streak</span>
                          <div className="flex items-center">
                            <Flame className="mr-1 h-4 w-4 text-orange-500" />
                            <span className="font-medium">12 days</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Cards Studied</span>
                          <span className="font-medium">1,245</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Retention Rate</span>
                          <span className="font-medium">78%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Total Points</span>
                          <span className="font-medium">4,567</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="mt-2">Friends</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Friend 1" />
                              <AvatarFallback>F1</AvatarFallback>
                            </Avatar>
                            <span>StudyBuddy123</span>
                          </div>
                          <div className="flex items-center">
                            <Flame className="mr-1 h-4 w-4 text-orange-500" />
                            <span>45 days</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Friend 2" />
                              <AvatarFallback>F2</AvatarFallback>
                            </Avatar>
                            <span>MemoryMaster42</span>
                          </div>
                          <div className="flex items-center">
                            <Flame className="mr-1 h-4 w-4 text-orange-500" />
                            <span>32 days</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Friend 3" />
                              <AvatarFallback>F3</AvatarFallback>
                            </Avatar>
                            <span>FlashcardPro</span>
                          </div>
                          <div className="flex items-center">
                            <Flame className="mr-1 h-4 w-4 text-orange-500" />
                            <span>28 days</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Friend 4" />
                              <AvatarFallback>F4</AvatarFallback>
                            </Avatar>
                            <span>BrainBooster</span>
                          </div>
                          <div className="flex items-center">
                            <Flame className="mr-1 h-4 w-4 text-orange-500" />
                            <span>21 days</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Friends
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Trophy className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="mt-2">Weekly Challenges</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg border p-3">
                          <h3 className="font-medium">7-Day Streak Challenge</h3>
                          <p className="text-sm text-muted-foreground mt-1">Study every day for 7 consecutive days</p>
                          <div className="mt-2 flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">5/7 days completed</span>
                            <Badge>500 points</Badge>
                          </div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <h3 className="font-medium">Master 100 Cards</h3>
                          <p className="text-sm text-muted-foreground mt-1">Master 100 new flashcards this week</p>
                          <div className="mt-2 flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">68/100 cards</span>
                            <Badge>750 points</Badge>
                          </div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <h3 className="font-medium">Perfect Retention</h3>
                          <p className="text-sm text-muted-foreground mt-1">Achieve 90%+ retention on all reviews</p>
                          <div className="mt-2 flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">Currently at 85%</span>
                            <Badge>1000 points</Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

