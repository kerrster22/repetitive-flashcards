"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Award, BookOpen, Brain, Calendar, Clock, Flame, Layers, Share2, Star, Trophy, Users } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { AchievementCard } from "@/components/achievement-card"

// Mock data for achievements
const mockAchievements = {
  unlocked: [
    {
      id: 1,
      title: "10-Day Streak",
      description: "Study for 10 consecutive days",
      icon: <Flame className="h-10 w-10 text-orange-500" />,
      unlocked: true,
      unlockedDate: "2 weeks ago",
      category: "Consistency",
      rarity: "Common",
      points: 100,
    },
    {
      id: 2,
      title: "100 Cards Mastered",
      description: "Master 100 flashcards",
      icon: <Brain className="h-10 w-10 text-primary" />,
      unlocked: true,
      unlockedDate: "1 month ago",
      category: "Mastery",
      rarity: "Common",
      points: 100,
    },
    {
      id: 3,
      title: "First Deck Completed",
      description: "Complete your first deck",
      icon: <Layers className="h-10 w-10 text-green-500" />,
      unlocked: true,
      unlockedDate: "3 weeks ago",
      category: "Milestones",
      rarity: "Common",
      points: 150,
    },
    {
      id: 7,
      title: "Early Bird",
      description: "Complete a study session before 8 AM",
      icon: <Clock className="h-10 w-10 text-blue-500" />,
      unlocked: true,
      unlockedDate: "5 days ago",
      category: "Habits",
      rarity: "Uncommon",
      points: 200,
    },
    {
      id: 8,
      title: "Night Owl",
      description: "Complete a study session after 10 PM",
      icon: <Clock className="h-10 w-10 text-indigo-500" />,
      unlocked: true,
      unlockedDate: "2 days ago",
      category: "Habits",
      rarity: "Uncommon",
      points: 200,
    },
    {
      id: 11,
      title: "Sharing is Caring",
      description: "Share a deck with the community",
      icon: <Share2 className="h-10 w-10 text-purple-500" />,
      unlocked: true,
      unlockedDate: "1 week ago",
      category: "Community",
      rarity: "Uncommon",
      points: 250,
    },
  ],
  inProgress: [
    {
      id: 4,
      title: "Study Marathon",
      description: "Study for 2 hours in one day",
      icon: <Clock className="h-10 w-10 text-blue-500" />,
      unlocked: false,
      progress: 75,
      category: "Dedication",
      rarity: "Uncommon",
      points: 250,
    },
    {
      id: 5,
      title: "Social Learner",
      description: "Add 5 friends to your network",
      icon: <Users className="h-10 w-10 text-purple-500" />,
      unlocked: false,
      progress: 40,
      category: "Community",
      rarity: "Uncommon",
      points: 200,
    },
    {
      id: 6,
      title: "Perfect Week",
      description: "Complete all scheduled reviews for 7 days",
      icon: <Calendar className="h-10 w-10 text-yellow-500" />,
      unlocked: false,
      progress: 40,
      category: "Consistency",
      rarity: "Rare",
      points: 300,
    },
    {
      id: 9,
      title: "Polyglot",
      description: "Study flashcards in 3 different languages",
      icon: <BookOpen className="h-10 w-10 text-emerald-500" />,
      unlocked: false,
      progress: 66,
      category: "Diversity",
      rarity: "Rare",
      points: 350,
    },
    {
      id: 10,
      title: "Memory Master",
      description: "Achieve 95% retention rate across all decks",
      icon: <Brain className="h-10 w-10 text-primary" />,
      unlocked: false,
      progress: 85,
      category: "Mastery",
      rarity: "Epic",
      points: 500,
    },
    {
      id: 12,
      title: "Deck Creator",
      description: "Create 5 decks with at least 50 cards each",
      icon: <Layers className="h-10 w-10 text-green-500" />,
      unlocked: false,
      progress: 60,
      category: "Creation",
      rarity: "Rare",
      points: 300,
    },
  ],
  locked: [
    {
      id: 13,
      title: "100-Day Streak",
      description: "Study for 100 consecutive days",
      icon: <Flame className="h-10 w-10 text-orange-500" />,
      unlocked: false,
      progress: 12,
      category: "Consistency",
      rarity: "Epic",
      points: 500,
    },
    {
      id: 14,
      title: "1000 Cards Mastered",
      description: "Master 1000 flashcards",
      icon: <Brain className="h-10 w-10 text-primary" />,
      unlocked: false,
      progress: 25,
      category: "Mastery",
      rarity: "Epic",
      points: 500,
    },
    {
      id: 15,
      title: "Community Leader",
      description: "Have 10 of your decks downloaded by other users",
      icon: <Users className="h-10 w-10 text-purple-500" />,
      unlocked: false,
      progress: 0,
      category: "Community",
      rarity: "Legendary",
      points: 1000,
    },
    {
      id: 16,
      title: "Perfect Month",
      description: "Complete all scheduled reviews for 30 days",
      icon: <Calendar className="h-10 w-10 text-yellow-500" />,
      unlocked: false,
      progress: 0,
      category: "Consistency",
      rarity: "Legendary",
      points: 1000,
    },
    {
      id: 17,
      title: "Knowledge Omnivore",
      description: "Study decks from 10 different categories",
      icon: <BookOpen className="h-10 w-10 text-emerald-500" />,
      unlocked: false,
      progress: 0,
      category: "Diversity",
      rarity: "Epic",
      points: 500,
    },
    {
      id: 18,
      title: "Year of Learning",
      description: "Maintain an active account for 365 days",
      icon: <Award className="h-10 w-10 text-yellow-500" />,
      unlocked: false,
      progress: 0,
      category: "Dedication",
      rarity: "Legendary",
      points: 1000,
    },
  ],
}

// Categories for filtering
const categories = [
  "All Categories",
  "Consistency",
  "Mastery",
  "Milestones",
  "Habits",
  "Community",
  "Dedication",
  "Diversity",
  "Creation",
]

// Rarity levels for filtering
const rarityLevels = ["All Rarities", "Common", "Uncommon", "Rare", "Epic", "Legendary"]

export default function AchievementsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedRarity, setSelectedRarity] = useState("All Rarities")

  // Filter achievements based on selected category and rarity
  const filterAchievements = (achievements: (typeof mockAchievements.unlocked | typeof mockAchievements.inProgress | typeof mockAchievements.locked)[number][]) => {
    return achievements.filter((achievement) => {
      const matchesCategory = selectedCategory === "All Categories" || achievement.category === selectedCategory
      const matchesRarity = selectedRarity === "All Rarities" || achievement.rarity === selectedRarity
      return matchesCategory && matchesRarity
    })
  }

  const filteredUnlocked = filterAchievements(mockAchievements.unlocked)
  const filteredInProgress = filterAchievements(mockAchievements.inProgress)
  const filteredLocked = filterAchievements(mockAchievements.locked)

  // Calculate achievement statistics
  const totalAchievements =
    mockAchievements.unlocked.length + mockAchievements.inProgress.length + mockAchievements.locked.length
  const unlockedPercentage = (mockAchievements.unlocked.length / totalAchievements) * 100
  const totalPoints = mockAchievements.unlocked.reduce((sum, achievement) => sum + achievement.points, 0)

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1">
        <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Achievements</h1>
              <p className="text-muted-foreground">Track your learning milestones and unlock rewards</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Achievements Unlocked</CardTitle>
                  <Trophy className="h-4 w-4 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {mockAchievements.unlocked.length}/{totalAchievements}
                  </div>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span>Progress</span>
                      <span>{Math.round(unlockedPercentage)}%</span>
                    </div>
                    <Progress value={unlockedPercentage} className="h-2" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Achievement Points</CardTitle>
                  <Star className="h-4 w-4 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalPoints}</div>
                  <p className="text-xs text-muted-foreground">Earn points by unlocking achievements</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
                  <Flame className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12 days</div>
                  <p className="text-xs text-muted-foreground">Keep studying daily to increase your streak</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Rarest Achievement</CardTitle>
                  <Award className="h-4 w-4 text-purple-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold truncate">First Deck Completed</div>
                  <p className="text-xs text-muted-foreground">Unlocked by 15% of users</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold">Your Achievements</h2>
                <p className="text-sm text-muted-foreground">Unlock achievements by reaching learning milestones</p>
              </div>
              <div className="flex items-center space-x-2">
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
                <select
                  className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  value={selectedRarity}
                  onChange={(e) => setSelectedRarity(e.target.value)}
                >
                  {rarityLevels.map((rarity) => (
                    <option key={rarity} value={rarity}>
                      {rarity}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <Tabs defaultValue="unlocked">
              <TabsList>
                <TabsTrigger value="unlocked">Unlocked</TabsTrigger>
                <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                <TabsTrigger value="locked">Locked</TabsTrigger>
              </TabsList>

              <TabsContent value="unlocked" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredUnlocked.map((achievement) => (
                    <AchievementCard
                      key={achievement.id}
                      title={achievement.title}
                      description={achievement.description}
                      icon={achievement.icon}
                      unlocked={achievement.unlocked}
                    />
                  ))}
                </div>

                {filteredUnlocked.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Trophy className="h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">No achievements found</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Try adjusting your filters to see more achievements.
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="in-progress" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredInProgress.map((achievement) => (
                    <AchievementCard
                      key={achievement.id}
                      title={achievement.title}
                      description={achievement.description}
                      icon={achievement.icon}
                      unlocked={achievement.unlocked}
                      progress={achievement.progress}
                    />
                  ))}
                </div>

                {filteredInProgress.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Trophy className="h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">No achievements in progress</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Try adjusting your filters to see more achievements.
                    </p>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="locked" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredLocked.map((achievement) => (
                    <AchievementCard
                      key={achievement.id}
                      title={achievement.title}
                      description={achievement.description}
                      icon={achievement.icon}
                      unlocked={achievement.unlocked}
                      progress={achievement.progress}
                    />
                  ))}
                </div>

                {filteredLocked.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Trophy className="h-12 w-12 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">No locked achievements</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Try adjusting your filters to see more achievements.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Achievement Showcase</CardTitle>
                <CardDescription>Select up to 3 achievements to display on your profile</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-3">
                  {mockAchievements.unlocked.slice(0, 3).map((achievement) => (
                    <div key={achievement.id} className="relative rounded-lg border p-4">
                      <div className="absolute top-2 right-2">
                        <Button variant="ghost" size="icon" className="h-6 w-6">
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
                            className="h-4 w-4"
                          >
                            <path d="m3 3 18 18" />
                            <path d="M10.5 10.5 3 18" />
                            <path d="M21 3 10.5 13.5" />
                          </svg>
                        </Button>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-2">{achievement.icon}</div>
                        <h3 className="font-medium">{achievement.title}</h3>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        <Badge variant="outline" className="mt-2">
                          {achievement.rarity}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Save Showcase
                </Button>
              </CardFooter>
            </Card>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Achievement Statistics</CardTitle>
                  <CardDescription>Your progress in unlocking achievements</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Overall Completion</span>
                      <span className="text-sm text-muted-foreground">
                        {mockAchievements.unlocked.length}/{totalAchievements} ({Math.round(unlockedPercentage)}%)
                      </span>
                    </div>
                    <Progress value={unlockedPercentage} className="h-2" />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Consistency</span>
                        <span className="text-sm text-muted-foreground">2/4</span>
                      </div>
                      <Progress value={50} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Mastery</span>
                        <span className="text-sm text-muted-foreground">1/3</span>
                      </div>
                      <Progress value={33} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Community</span>
                        <span className="text-sm text-muted-foreground">1/3</span>
                      </div>
                      <Progress value={33} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Habits</span>
                        <span className="text-sm text-muted-foreground">2/2</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Achievements</CardTitle>
                  <CardDescription>Achievements you're close to unlocking</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockAchievements.inProgress
                      .filter((achievement) => achievement.progress >= 50)
                      .sort((a, b) => b.progress - a.progress)
                      .slice(0, 3)
                      .map((achievement) => (
                        <div key={achievement.id} className="flex items-center space-x-4">
                          <div className="shrink-0">{achievement.icon}</div>
                          <div className="flex-1 space-y-1">
                            <p className="font-medium">{achievement.title}</p>
                            <p className="text-xs text-muted-foreground">{achievement.description}</p>
                            <div className="flex items-center justify-between text-xs">
                              <span>{achievement.progress}% complete</span>
                              <Badge variant="outline">{achievement.rarity}</Badge>
                            </div>
                            <Progress value={achievement.progress} className="h-2" />
                          </div>
                        </div>
                      ))}
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

