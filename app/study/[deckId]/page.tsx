"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ChevronLeft,
  Clock,
  Maximize2,
  Minimize2,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"

// Mock data for the flashcards
const mockDecks = {
  spanish: {
    title: "Spanish Vocabulary",
    cards: [
      { id: 1, front: "Hola", back: "Hello", difficulty: 3, nextReview: new Date() },
      { id: 2, front: "Adiós", back: "Goodbye", difficulty: 2, nextReview: new Date() },
      { id: 3, front: "Por favor", back: "Please", difficulty: 1, nextReview: new Date() },
      { id: 4, front: "Gracias", back: "Thank you", difficulty: 2, nextReview: new Date() },
      { id: 5, front: "Buenos días", back: "Good morning", difficulty: 3, nextReview: new Date() },
    ],
  },
  medical: {
    title: "Medical Terminology",
    cards: [
      { id: 1, front: "Cardiology", back: "Study of the heart", difficulty: 3, nextReview: new Date() },
      { id: 2, front: "Neurology", back: "Study of the nervous system", difficulty: 4, nextReview: new Date() },
      { id: 3, front: "Oncology", back: "Study of cancer", difficulty: 2, nextReview: new Date() },
      {
        id: 4,
        front: "Pediatrics",
        back: "Medical care of infants, children, and adolescents",
        difficulty: 1,
        nextReview: new Date(),
      },
      { id: 5, front: "Dermatology", back: "Study of skin", difficulty: 2, nextReview: new Date() },
    ],
  },
  programming: {
    title: "Programming Concepts",
    cards: [
      {
        id: 1,
        front: "Algorithm",
        back: "A step-by-step procedure for solving a problem",
        difficulty: 2,
        nextReview: new Date(),
      },
      {
        id: 2,
        front: "Variable",
        back: "A storage location paired with an associated symbolic name",
        difficulty: 1,
        nextReview: new Date(),
      },
      {
        id: 3,
        front: "Function",
        back: "A block of code designed to perform a particular task",
        difficulty: 2,
        nextReview: new Date(),
      },
      {
        id: 4,
        front: "Object",
        back: "An instance of a class that may contain data and methods",
        difficulty: 3,
        nextReview: new Date(),
      },
      {
        id: 5,
        front: "API",
        back: "Application Programming Interface - a set of functions that allows applications to access data and interact with external systems",
        difficulty: 4,
        nextReview: new Date(),
      },
    ],
  },
}

// SM-2 algorithm implementation
function calculateNextReview(difficulty: number, repetitions: number): number {
  // Simplified SM-2 algorithm
  if (difficulty < 3) {
    return 1 // Review again in 1 day
  } else {
    const interval = Math.pow(2, repetitions)
    return Math.min(interval, 30) // Cap at 30 days
  }
}

export default function StudyPage() {
  const params = useParams()
  const router = useRouter()
  const deckId = params.deckId as string

  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [sessionStartTime, setSessionStartTime] = useState(Date.now())
  const [elapsedTime, setElapsedTime] = useState(0)
  const [completedCards, setCompletedCards] = useState<number[]>([])
  const [timerRunning, setTimerRunning] = useState(true)

  const deck = mockDecks[deckId as keyof typeof mockDecks]

  if (!deck) {
    return <div>Deck not found</div>
  }

  const cards = deck.cards
  const currentCard = cards[currentCardIndex]

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (timerRunning) {
      timer = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - sessionStartTime) / 1000))
      }, 1000)
    }

    return () => clearInterval(timer)
  }, [sessionStartTime, timerRunning])

  useEffect(() => {
    setProgress((completedCards.length / cards.length) * 100)
  }, [completedCards, cards.length])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleDifficulty = (difficulty: number) => {
    // Mark card as completed
    if (!completedCards.includes(currentCard.id)) {
      setCompletedCards([...completedCards, currentCard.id])
    }

    // Move to next card
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
      setIsFlipped(false)
    } else {
      // End of session
      router.push(`/study/${deckId}/complete`)
    }
  }

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {!fullscreen && <DashboardHeader setSidebarOpen={setSidebarOpen} />}
      <div className={`flex flex-1 ${fullscreen ? "bg-background" : ""}`}>
        <main className="flex-1 p-4 md:p-6">
          <div className="mx-auto max-w-4xl">
            {!fullscreen && (
              <div className="mb-6 flex items-center justify-between">
                <Button variant="outline" size="sm" onClick={() => router.back()}>
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back to Deck
                </Button>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{formatTime(elapsedTime)}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>
                      {completedCards.length}/{cards.length} cards
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="mb-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Progress</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <div className="relative">
              <Card
                className={`mx-auto cursor-pointer transition-all duration-500 ${
                  isFlipped ? "rotate-y-180" : ""
                } ${fullscreen ? "h-[70vh]" : "h-[50vh]"}`}
                onClick={handleFlip}
              >
                <CardContent className="flex h-full items-center justify-center p-6">
                  <div
                    className={`absolute inset-0 flex items-center justify-center p-6 backface-hidden ${isFlipped ? "hidden" : ""}`}
                  >
                    <div className="text-center">
                      <h2 className="mb-4 text-2xl font-bold">{currentCard.front}</h2>
                      <p className="text-sm text-muted-foreground">Click to reveal answer</p>
                    </div>
                  </div>
                  <div
                    className={`absolute inset-0 flex items-center justify-center p-6 backface-hidden ${isFlipped ? "" : "hidden"}`}
                  >
                    <div className="text-center">
                      <h2 className="mb-4 text-2xl font-bold">{currentCard.back}</h2>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button variant="outline" size="icon" className="absolute right-4 top-4" onClick={toggleFullscreen}>
                {fullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </Button>
            </div>

            {isFlipped && (
              <div className="mt-6 flex justify-center space-x-4">
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 border-red-500 text-red-500 hover:bg-red-500/10 hover:text-red-500"
                  onClick={() => handleDifficulty(1)}
                >
                  <ThumbsDown className="h-4 w-4" />
                  <span>Hard</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 border-orange-500 text-orange-500 hover:bg-orange-500/10 hover:text-orange-500"
                  onClick={() => handleDifficulty(2)}
                >
                  <span>Medium</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2 border-green-500 text-green-500 hover:bg-green-500/10 hover:text-green-500"
                  onClick={() => handleDifficulty(3)}
                >
                  <ThumbsUp className="h-4 w-4" />
                  <span>Easy</span>
                </Button>
              </div>
            )}

            {!isFlipped && (
              <div className="mt-6 flex justify-between">
                <Button
                  variant="outline"
                  disabled={currentCardIndex === 0}
                  onClick={() => {
                    if (currentCardIndex > 0) {
                      setCurrentCardIndex(currentCardIndex - 1)
                    }
                  }}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button
                  variant="outline"
                  disabled={currentCardIndex === cards.length - 1}
                  onClick={() => {
                    if (currentCardIndex < cards.length - 1) {
                      setCurrentCardIndex(currentCardIndex + 1)
                    }
                  }}
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}

            {!fullscreen && (
              <div className="mt-8">
                <h3 className="mb-2 text-lg font-medium">Keyboard Shortcuts</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground md:grid-cols-4">
                  <div className="flex items-center space-x-2">
                    <kbd className="rounded border px-2 py-1 text-xs">Space</kbd>
                    <span>Flip Card</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <kbd className="rounded border px-2 py-1 text-xs">→</kbd>
                    <span>Next Card</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <kbd className="rounded border px-2 py-1 text-xs">←</kbd>
                    <span>Previous Card</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <kbd className="rounded border px-2 py-1 text-xs">F</kbd>
                    <span>Fullscreen</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

