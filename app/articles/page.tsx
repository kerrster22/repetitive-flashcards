"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Bookmark, BookmarkPlus, Clock, Filter, Search, ThumbsUp } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

// Mock data for articles
const mockArticles = [
  {
    id: 1,
    title: "The Science of Spaced Repetition",
    description: "Learn how spaced repetition can improve your memory retention by up to 50%.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Learning Techniques",
    tags: ["memory", "spaced repetition", "science"],
    readTime: "5 min read",
    date: "Mar 15, 2023",
    bookmarked: true,
    likes: 245,
  },
  {
    id: 2,
    title: "Mastering Medical Terminology",
    description: "A comprehensive guide to understanding and memorizing complex medical terms.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Medicine",
    tags: ["medical", "terminology", "memory"],
    readTime: "8 min read",
    date: "Feb 28, 2023",
    bookmarked: false,
    likes: 189,
  },
  {
    id: 3,
    title: "Language Learning: Beyond Vocabulary",
    description: "Why grammar, culture, and context are just as important as vocabulary when learning a new language.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Languages",
    tags: ["language", "learning", "culture"],
    readTime: "6 min read",
    date: "Apr 2, 2023",
    bookmarked: true,
    likes: 312,
  },
  {
    id: 4,
    title: "Programming Concepts Explained Simply",
    description: "Breaking down complex programming concepts into easy-to-understand explanations.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Programming",
    tags: ["coding", "programming", "beginners"],
    readTime: "10 min read",
    date: "Mar 20, 2023",
    bookmarked: false,
    likes: 178,
  },
  {
    id: 5,
    title: "The History of Ancient Rome: Key Events",
    description: "A timeline of the most important events that shaped the Roman Empire.",
    image: "/placeholder.svg?height=200&width=400",
    category: "History",
    tags: ["rome", "ancient history", "empire"],
    readTime: "12 min read",
    date: "Jan 15, 2023",
    bookmarked: false,
    likes: 203,
  },
  {
    id: 6,
    title: "Mathematics Made Easy: Calculus Fundamentals",
    description: "A beginner-friendly approach to understanding the basics of calculus.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Mathematics",
    tags: ["calculus", "math", "fundamentals"],
    readTime: "9 min read",
    date: "Apr 10, 2023",
    bookmarked: true,
    likes: 156,
  },
]

// Categories for filtering
const categories = [
  "All Categories",
  "Learning Techniques",
  "Medicine",
  "Languages",
  "Programming",
  "History",
  "Mathematics",
  "Science",
]

export default function ArticlesPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [articles, setArticles] = useState(mockArticles)

  // Filter articles based on search query and selected category
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategory === "All Categories" || article.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  // Toggle bookmark status
  const toggleBookmark = (id: number) => {
    setArticles(
      articles.map((article) => (article.id === id ? { ...article, bookmarked: !article.bookmarked } : article)),
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1">
        <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Articles & Learning Materials</h1>
              <p className="text-muted-foreground">
                Explore articles and learning materials to deepen your understanding
              </p>
            </div>

            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <div className="relative w-full">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
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
              </div>
            </div>

            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Articles</TabsTrigger>
                <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredArticles.map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      onBookmarkToggle={() => toggleBookmark(article.id)}
                    />
                  ))}
                </div>

                {filteredArticles.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <BookOpen className="h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">No articles found</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Try adjusting your search or filter to find what you're looking for.
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="bookmarked" className="mt-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredArticles
                    .filter((article) => article.bookmarked)
                    .map((article) => (
                      <ArticleCard
                        key={article.id}
                        article={article}
                        onBookmarkToggle={() => toggleBookmark(article.id)}
                      />
                    ))}
                </div>

                {filteredArticles.filter((article) => article.bookmarked).length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Bookmark className="h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">No bookmarked articles</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Bookmark articles to save them for later reading.
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="recommended" className="mt-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredArticles.slice(0, 3).map((article) => (
                    <ArticleCard
                      key={article.id}
                      article={article}
                      onBookmarkToggle={() => toggleBookmark(article.id)}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="popular" className="mt-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredArticles
                    .sort((a, b) => b.likes - a.likes)
                    .map((article) => (
                      <ArticleCard
                        key={article.id}
                        article={article}
                        onBookmarkToggle={() => toggleBookmark(article.id)}
                      />
                    ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="flex items-center justify-center py-4">
              <Button variant="outline">Load More Articles</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

interface Article {
  id: number
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  readTime: string
  date: string
  bookmarked: boolean
  likes: number
}

interface ArticleCardProps {
  article: Article
  onBookmarkToggle: () => void
}

function ArticleCard({ article, onBookmarkToggle }: ArticleCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
          onClick={onBookmarkToggle}
        >
          {article.bookmarked ? <Bookmark className="h-4 w-4 fill-current" /> : <BookmarkPlus className="h-4 w-4" />}
        </Button>
      </div>
      <CardHeader className="p-4">
        <div className="flex items-center space-x-2">
          <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
            {article.category}
          </span>
          <span className="flex items-center text-xs text-muted-foreground">
            <Clock className="mr-1 h-3 w-3" />
            {article.readTime}
          </span>
        </div>
        <CardTitle className="line-clamp-2 text-xl">{article.title}</CardTitle>
        <CardDescription className="line-clamp-2">{article.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex flex-wrap gap-1">
          {article.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-muted px-2 py-1 text-xs">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <div className="flex items-center text-xs text-muted-foreground">
          <ThumbsUp className="mr-1 h-3 w-3" />
          {article.likes} likes
        </div>
        <Link href={`/articles/${article.id}`}>
          <Button size="sm">Read Article</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

