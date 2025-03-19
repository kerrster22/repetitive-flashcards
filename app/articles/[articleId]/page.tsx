"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  Bookmark,
  BookmarkPlus,
  ChevronLeft,
  Clock,
  MessageSquare,
  Share2,
  ThumbsUp,
  Volume2,
  VolumeX,
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

// Mock article data
const mockArticle = {
  id: 1,
  title: "The Science of Spaced Repetition",
  subtitle: "How to remember more of what you learn",
  description: "Learn how spaced repetition can improve your memory retention by up to 50%.",
  image: "/placeholder.svg?height=400&width=800",
  category: "Learning Techniques",
  tags: ["memory", "spaced repetition", "science"],
  readTime: "5 min read",
  date: "Mar 15, 2023",
  author: {
    name: "Dr. Sarah Johnson",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "Cognitive neuroscientist specializing in memory and learning",
  },
  bookmarked: false,
  likes: 245,
  content: [
    {
      type: "paragraph",
      text: "Spaced repetition is a learning technique that incorporates increasing intervals of time between subsequent review of previously learned material in order to exploit the psychological spacing effect. The spacing effect demonstrates that learning is more effective when study sessions are spaced out over time, rather than crammed into a single session.",
    },
    {
      type: "heading",
      text: "The Science Behind Spaced Repetition",
    },
    {
      type: "paragraph",
      text: "The spacing effect was first identified by Hermann Ebbinghaus in 1885. Ebbinghaus observed that we tend to forget most of what we learn quickly, but that the rate of forgetting can be reduced with periodic review. This observation led to the development of the 'forgetting curve,' which shows how information is lost over time when there is no attempt to retain it.",
    },
    {
      type: "paragraph",
      text: "When we learn something new, our brains create neural pathways that allow us to recall that information later. However, these pathways weaken over time if they're not used. Spaced repetition strengthens these pathways by activating them just as they're about to weaken, which makes the memory more durable.",
    },
    {
      type: "image",
      url: "/placeholder.svg?height=300&width=600",
      caption:
        "The Ebbinghaus Forgetting Curve shows how information is lost over time when there is no attempt to retain it.",
    },
    {
      type: "heading",
      text: "How Spaced Repetition Works",
    },
    {
      type: "paragraph",
      text: "Spaced repetition systems typically use flashcards that are reviewed at increasing intervals. When you review a flashcard, you rate how well you remembered the information. If you remembered it easily, the interval before the next review will be longer. If you had difficulty, the interval will be shorter.",
    },
    {
      type: "paragraph",
      text: "This adaptive scheduling ensures that you spend more time on difficult material and less time on material you already know well. Over time, the intervals between reviews can grow from days to weeks to months, as the information becomes more firmly embedded in your long-term memory.",
    },
    {
      type: "heading",
      text: "Benefits of Spaced Repetition",
    },
    {
      type: "list",
      items: [
        "Improved long-term retention of information",
        "More efficient use of study time",
        "Reduced forgetting of important material",
        "Better performance on tests and exams",
        "Ability to learn and retain large amounts of information",
      ],
    },
    {
      type: "paragraph",
      text: "Research has shown that spaced repetition can increase retention by 200-400% compared to massed practice (cramming). This makes it an invaluable tool for students, language learners, medical professionals, and anyone who needs to remember large amounts of information.",
    },
    {
      type: "heading",
      text: "Implementing Spaced Repetition in Your Learning",
    },
    {
      type: "paragraph",
      text: "There are several ways to implement spaced repetition in your learning routine. You can use physical flashcards with a box system, where cards move to different boxes based on how well you remember them. Alternatively, you can use digital spaced repetition software (SRS) like Anki, SuperMemo, or MemoryMaster, which automate the scheduling process.",
    },
    {
      type: "paragraph",
      text: "The key is to review information just as you're about to forget it. This creates a desirable level of difficulty that enhances learning. By spacing out your reviews and focusing on the material you find most challenging, you can dramatically improve your ability to retain information over the long term.",
    },
    {
      type: "conclusion",
      text: "Spaced repetition is a powerful learning technique backed by over a century of research. By incorporating spaced repetition into your study routine, you can remember more of what you learn and make more efficient use of your study time. Whether you're learning a new language, studying for exams, or mastering professional knowledge, spaced repetition can help you achieve your learning goals.",
    },
  ],
  quiz: [
    {
      question: "What is the spacing effect?",
      options: [
        "Learning is more effective when study sessions are crammed into a single session",
        "Learning is more effective when study sessions are spaced out over time",
        "Learning is more effective when study sessions are conducted in groups",
        "Learning is more effective when study sessions are conducted in silence",
      ],
      correctAnswer: 1,
    },
    {
      question: "Who first identified the spacing effect?",
      options: ["Ivan Pavlov", "B.F. Skinner", "Hermann Ebbinghaus", "Jean Piaget"],
      correctAnswer: 2,
    },
    {
      question: "By how much can spaced repetition increase retention compared to cramming?",
      options: ["50-100%", "100-200%", "200-400%", "400-600%"],
      correctAnswer: 2,
    },
    {
      question: "What happens to neural pathways when we don't use them?",
      options: ["They strengthen over time", "They remain unchanged", "They weaken over time", "They multiply"],
      correctAnswer: 2,
    },
    {
      question: "What is the key principle of spaced repetition?",
      options: [
        "Reviewing information as frequently as possible",
        "Reviewing information just as you're about to forget it",
        "Reviewing information only once",
        "Reviewing information only when you feel like it",
      ],
      correctAnswer: 1,
    },
  ],
  relatedArticles: [
    {
      id: 7,
      title: "Memory Palaces: Ancient Technique for Modern Learning",
      description: "How to use spatial memory to remember large amounts of information.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Learning Techniques",
      readTime: "7 min read",
    },
    {
      id: 8,
      title: "The Pomodoro Technique for Focused Study",
      description: "Using timed intervals to improve concentration and productivity.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Learning Techniques",
      readTime: "4 min read",
    },
    {
      id: 9,
      title: "Active Recall: Test Yourself to Remember",
      description: "Why testing yourself is more effective than rereading or highlighting.",
      image: "/placeholder.svg?height=200&width=400",
      category: "Learning Techniques",
      readTime: "6 min read",
    },
  ],
}

export default function ArticlePage() {
  const params = useParams()
  const router = useRouter()
  const articleId = params.articleId as string

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isBookmarked, setIsBookmarked] = useState(mockArticle.bookmarked)
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(mockArticle.likes)
  const [isPlaying, setIsPlaying] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState<number[]>(Array(mockArticle.quiz.length).fill(-1))
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  const articleRef = useRef<HTMLDivElement>(null)

  // Calculate reading progress based on scroll position
  const handleScroll = () => {
    if (articleRef.current) {
      const element = articleRef.current
      const totalHeight = element.scrollHeight - element.clientHeight
      const scrollPosition = element.scrollTop

      const progress = (scrollPosition / totalHeight) * 100
      setReadingProgress(progress)
    }
  }

  // Toggle bookmark status
  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  // Toggle like status
  const toggleLike = () => {
    if (isLiked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setIsLiked(!isLiked)
  }

  // Toggle text-to-speech
  const toggleTextToSpeech = () => {
    setIsPlaying(!isPlaying)
    // Implement actual text-to-speech functionality here
  }

  // Handle quiz answer selection
  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    if (!quizSubmitted) {
      const newAnswers = [...quizAnswers]
      newAnswers[questionIndex] = answerIndex
      setQuizAnswers(newAnswers)
    }
  }

  // Submit quiz
  const submitQuiz = () => {
    setQuizSubmitted(true)
  }

  // Calculate quiz score
  const calculateScore = () => {
    let correctCount = 0
    quizAnswers.forEach((answer, index) => {
      if (answer === mockArticle.quiz[index].correctAnswer) {
        correctCount++
      }
    })
    return {
      score: correctCount,
      total: mockArticle.quiz.length,
      percentage: Math.round((correctCount / mockArticle.quiz.length) * 100),
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1">
        <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <main className="flex-1">
          <div className="container mx-auto max-w-4xl px-4 py-6">
            <div className="mb-6 flex items-center justify-between">
              <Button variant="outline" size="sm" onClick={() => router.back()}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Articles
              </Button>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="flex items-center space-x-1" onClick={toggleTextToSpeech}>
                  {isPlaying ? (
                    <>
                      <VolumeX className="h-4 w-4" />
                      <span>Stop Reading</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="h-4 w-4" />
                      <span>Read Aloud</span>
                    </>
                  )}
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center space-x-1" onClick={toggleBookmark}>
                  {isBookmarked ? (
                    <>
                      <Bookmark className="h-4 w-4 fill-current" />
                      <span>Bookmarked</span>
                    </>
                  ) : (
                    <>
                      <BookmarkPlus className="h-4 w-4" />
                      <span>Bookmark</span>
                    </>
                  )}
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center space-x-1" onClick={toggleLike}>
                  <ThumbsUp className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                  <span>{likes}</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
              </div>
            </div>

            <div className="relative mb-4 h-2 w-full rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all duration-300"
                style={{ width: `${readingProgress}%` }}
              />
            </div>

            <article className="space-y-6" ref={articleRef} onScroll={handleScroll}>
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{mockArticle.title}</h1>
                <p className="text-xl text-muted-foreground">{mockArticle.subtitle}</p>

                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={mockArticle.author.avatar || "/placeholder.svg"}
                      alt={mockArticle.author.name}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{mockArticle.author.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {mockArticle.date} · {mockArticle.readTime}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                <Image
                  src={mockArticle.image || "/placeholder.svg"}
                  alt={mockArticle.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6">
                {mockArticle.content.map((section, index) => {
                  switch (section.type) {
                    case "paragraph":
                      return (
                        <p key={index} className="leading-7">
                          {section.text}
                        </p>
                      )
                    case "heading":
                      return (
                        <h2 key={index} className="mt-8 text-2xl font-bold">
                          {section.text}
                        </h2>
                      )
                    case "image":
                      return (
                        <figure key={index} className="my-8">
                          <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                            <Image
                              src={section.url || "/placeholder.svg"}
                              alt={section.caption || ""}
                              fill
                              className="object-cover"
                            />
                          </div>
                          {section.caption && (
                            <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                              {section.caption}
                            </figcaption>
                          )}
                        </figure>
                      )
                    case "list":
                      return (
                        <ul key={index} className="ml-6 list-disc space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      )
                    case "conclusion":
                      return (
                        <div key={index} className="rounded-lg border bg-muted/50 p-4">
                          <h3 className="mb-2 font-bold">Conclusion</h3>
                          <p>{section.text}</p>
                        </div>
                      )
                    default:
                      return null
                  }
                })}
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm" className="flex items-center space-x-1" onClick={toggleLike}>
                    <ThumbsUp className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
                    <span>{likes} likes</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center space-x-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>Comments</span>
                  </Button>
                </div>
                <Button variant="outline" size="sm" className="flex items-center space-x-1" onClick={toggleBookmark}>
                  {isBookmarked ? (
                    <>
                      <Bookmark className="h-4 w-4 fill-current" />
                      <span>Bookmarked</span>
                    </>
                  ) : (
                    <>
                      <BookmarkPlus className="h-4 w-4" />
                      <span>Bookmark</span>
                    </>
                  )}
                </Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Test Your Understanding</h2>
                  {!showQuiz && <Button onClick={() => setShowQuiz(true)}>Take Quiz</Button>}
                </div>

                {showQuiz && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Quiz: {mockArticle.title}</CardTitle>
                      <CardDescription>Test your understanding of the article with these questions.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {mockArticle.quiz.map((question, questionIndex) => (
                        <div key={questionIndex} className="space-y-3">
                          <h3 className="font-medium">
                            {questionIndex + 1}. {question.question}
                          </h3>
                          <div className="space-y-2">
                            {question.options.map((option, optionIndex) => (
                              <div
                                key={optionIndex}
                                className={`flex items-center space-x-2 rounded-md border p-3 ${
                                  quizAnswers[questionIndex] === optionIndex ? "border-primary bg-primary/10" : ""
                                } ${
                                  quizSubmitted && optionIndex === question.correctAnswer
                                    ? "border-green-500 bg-green-500/10"
                                    : ""
                                } ${
                                  quizSubmitted &&
                                  quizAnswers[questionIndex] === optionIndex &&
                                  optionIndex !== question.correctAnswer
                                    ? "border-red-500 bg-red-500/10"
                                    : ""
                                }`}
                                onClick={() => handleAnswerSelect(questionIndex, optionIndex)}
                              >
                                <div
                                  className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                                    quizAnswers[questionIndex] === optionIndex
                                      ? "border-primary"
                                      : "border-muted-foreground"
                                  }`}
                                >
                                  {quizAnswers[questionIndex] === optionIndex && (
                                    <div className="h-2.5 w-2.5 rounded-full bg-primary" />
                                  )}
                                </div>
                                <span>{option}</span>
                              </div>
                            ))}
                          </div>
                          {quizSubmitted && (
                            <div className="text-sm">
                              {quizAnswers[questionIndex] === question.correctAnswer ? (
                                <p className="text-green-500">Correct!</p>
                              ) : (
                                <p className="text-red-500">
                                  Incorrect. The correct answer is: {question.options[question.correctAnswer]}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      {!quizSubmitted ? (
                        <Button onClick={submitQuiz} disabled={quizAnswers.includes(-1)}>
                          Submit Answers
                        </Button>
                      ) : (
                        <div className="space-y-2 w-full">
                          <div className="flex items-center justify-between">
                            <span>
                              Your Score: {calculateScore().score}/{calculateScore().total}
                            </span>
                            <span className="font-bold">{calculateScore().percentage}%</span>
                          </div>
                          <Progress value={calculateScore().percentage} className="h-2" />
                        </div>
                      )}
                    </CardFooter>
                  </Card>
                )}
              </div>

              <Separator />

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Related Articles</h2>
                <div className="grid gap-6 sm:grid-cols-3">
                  {mockArticle.relatedArticles.map((article) => (
                    <Link key={article.id} href={`/articles/${article.id}`}>
                      <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                        <div className="relative h-32 w-full">
                          <Image
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            fill
                            className="object-cover"
                          />
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
                          <CardTitle className="line-clamp-2 text-base">{article.title}</CardTitle>
                          <CardDescription className="line-clamp-2 text-xs">{article.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            <div className="fixed bottom-4 right-4 flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full bg-background/80 backdrop-blur-sm"
                onClick={() => {
                  if (articleRef.current) {
                    articleRef.current.scrollTop = 0
                  }
                }}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full bg-background/80 backdrop-blur-sm"
                onClick={() => setShowQuiz(true)}
              >
                Take Quiz
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

