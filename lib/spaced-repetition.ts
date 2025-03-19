export interface Card {
  id: number
  front: string
  back: string
  easinessFactor: number // Initial value: 2.5
  interval: number // Initial value: 0
  repetitions: number // Initial value: 0
  nextReview: Date
  lastReview?: Date
}

export interface ReviewResult {
  card: Card
  quality: number // 0-5 scale where 0 is complete blackout, 5 is perfect recall
  reviewedAt: Date
}

// Quality ratings:
// 0 - complete blackout, wrong response
// 1 - wrong response, but upon seeing the correct answer it felt familiar
// 2 - wrong response, but upon seeing the correct answer it seemed easy to remember
// 3 - correct response, but required significant effort to recall
// 4 - correct response, after some hesitation
// 5 - correct response, perfect recall

export function processReview(card: Card, quality: number): Card {
  // Make a copy of the card to avoid mutating the original
  const updatedCard = { ...card }

  // Record the review date
  updatedCard.lastReview = new Date()

  // Update repetitions
  if (quality < 3) {
    // If quality is less than 3, reset repetitions to 0
    updatedCard.repetitions = 0
    updatedCard.interval = 1
  } else {
    // If quality is 3 or higher, increment repetitions
    updatedCard.repetitions += 1

    // Calculate new interval based on repetitions
    if (updatedCard.repetitions === 1) {
      updatedCard.interval = 1
    } else if (updatedCard.repetitions === 2) {
      updatedCard.interval = 6
    } else {
      updatedCard.interval = Math.round(updatedCard.interval * updatedCard.easinessFactor)
    }
  }

  // Update easiness factor
  updatedCard.easinessFactor = Math.max(
    1.3, // Minimum easiness factor
    updatedCard.easinessFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)),
  )

  // Calculate next review date
  const nextReview = new Date()
  nextReview.setDate(nextReview.getDate() + updatedCard.interval)
  updatedCard.nextReview = nextReview

  return updatedCard
}

// Get cards due for review
export function getDueCards(cards: Card[]): Card[] {
  const now = new Date()
  return cards.filter((card) => card.nextReview <= now)
}

// Initialize a new card with default values
export function createNewCard(id: number, front: string, back: string): Card {
  const now = new Date()
  return {
    id,
    front,
    back,
    easinessFactor: 2.5,
    interval: 0,
    repetitions: 0,
    nextReview: now,
  }
}

// Calculate retention score (percentage of cards remembered)
export function calculateRetentionScore(results: ReviewResult[]): number {
  if (results.length === 0) return 0

  const remembered = results.filter((result) => result.quality >= 3).length
  return (remembered / results.length) * 100
}

// Estimate time to mastery for a deck
export function estimateTimeToMastery(cards: Card[], averageCardsPerDay: number): number {
  // A card is considered "mastered" when its interval is at least 30 days
  const unmasteredCards = cards.filter((card) => card.interval < 30).length

  // Simple estimation: unmasteredCards / averageCardsPerDay
  return Math.ceil(unmasteredCards / averageCardsPerDay)
}

// Get recommended daily review count
export function getRecommendedDailyReviews(cards: Card[]): number {
  const dueToday = getDueCards(cards).length
  const dueNextWeek = cards.filter((card) => {
    const weekFromNow = new Date()
    weekFromNow.setDate(weekFromNow.getDate() + 7)
    return card.nextReview <= weekFromNow
  }).length

  // Base recommendation on current due cards plus a portion of upcoming reviews
  return dueToday + Math.ceil(dueNextWeek / 7)
}

