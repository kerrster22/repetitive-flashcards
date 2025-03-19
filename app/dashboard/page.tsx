"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, BookOpen, Brain, Calendar, Clock, Flame, Layers, Plus, Settings, Trophy, Users } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { StudySessionCard } from "@/components/study-session-card"
import { DeckCard } from "@/components/deck-card"
import { AchievementCard } from "@/components/achievement-card"

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1">
        <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Alex! You have 24 cards due for review today.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Daily Streak</CardTitle>
                  <Flame className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12 days</div>
                  <p className="text-xs text-muted-foreground">+2 days compared to last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cards Mastered</CardTitle>
                  <Brain className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">245</div>
                  <p className="text-xs text-muted-foreground">+22 since last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Study Time</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5.2 hours</div>
                  <p className="text-xs text-muted-foreground">This week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Achievements</CardTitle>
                  <Trophy className="h-4 w-4 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12/30</div>
                  <p className="text-xs text-muted-foreground">Unlocked</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Learning Goals</CardTitle>
                <CardDescription>Track your progress towards your learning goals.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Spanish Vocabulary</span>
                    </div>
                    <span className="text-sm text-muted-foreground">250/500 words</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Medical Terminology</span>
                    </div>
                    <span className="text-sm text-muted-foreground">120/300 terms</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">Programming Concepts</span>
                    </div>
                    <span className="text-sm text-muted-foreground">75/100 concepts</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Goal
                </Button>
              </CardFooter>
            </Card>

            <Tabs defaultValue="due">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="due">Due Today</TabsTrigger>
                  <TabsTrigger value="decks">My Decks</TabsTrigger>
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                  <TabsTrigger value="activity">Recent Activity</TabsTrigger>
                </TabsList>
                <div className="hidden md:flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule
                  </Button>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    New Study Session
                  </Button>
                </div>
              </div>

              <TabsContent value="due" className="space-y-4 mt-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <StudySessionCard
                    title="Spanish Vocabulary"
                    description="24 cards due"
                    progress={65}
                    icon={<BookOpen className="h-5 w-5" />}
                    href="/study/spanish"
                  />
                  <StudySessionCard
                    title="Medical Terminology"
                    description="12 cards due"
                    progress={40}
                    icon={<BookOpen className="h-5 w-5" />}
                    href="/study/medical"
                  />
                  <StudySessionCard
                    title="Programming Concepts"
                    description="8 cards due"
                    progress={25}
                    icon={<BookOpen className="h-5 w-5" />}
                    href="/study/programming"
                  />
                </div>
              </TabsContent>

              <TabsContent value="decks" className="space-y-4 mt-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <DeckCard
                    title="Spanish Vocabulary"
                    description="500 cards"
                    progress={50}
                    icon={<Layers className="h-5 w-5" />}
                    href="/decks/spanish"
                  />
                  <DeckCard
                    title="Medical Terminology"
                    description="300 cards"
                    progress={40}
                    icon={<Layers className="h-5 w-5" />}
                    href="/decks/medical"
                  />
                  <DeckCard
                    title="Programming Concepts"
                    description="100 cards"
                    progress={75}
                    icon={<Layers className="h-5 w-5" />}
                    href="/decks/programming"
                  />
                  <DeckCard
                    title="World History"
                    description="200 cards"
                    progress={25}
                    icon={<Layers className="h-5 w-5" />}
                    href="/decks/history"
                  />
                  <Card className="flex flex-col items-center justify-center p-6 border-dashed">
                    <Button variant="outline" className="h-20 w-full">
                      <Plus className="mr-2 h-5 w-5" />
                      Create New Deck
                    </Button>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-4 mt-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <AchievementCard
                    title="10-Day Streak"
                    description="Study for 10 consecutive days"
                    icon={<Flame className="h-10 w-10 text-orange-500" />}
                    unlocked={true}
                  />
                  <AchievementCard
                    title="100 Cards Mastered"
                    description="Master 100 flashcards"
                    icon={<Brain className="h-10 w-10 text-primary" />}
                    unlocked={true}
                  />
                  <AchievementCard
                    title="First Deck Completed"
                    description="Complete your first deck"
                    icon={<Layers className="h-10 w-10 text-green-500" />}
                    unlocked={true}
                  />
                  <AchievementCard
                    title="Study Marathon"
                    description="Study for 2 hours in one day"
                    icon={<Clock className="h-10 w-10 text-blue-500" />}
                    unlocked={false}
                    progress={75}
                  />
                  <AchievementCard
                    title="Social Learner"
                    description="Share a deck with the community"
                    icon={<Users className="h-10 w-10 text-purple-500" />}
                    unlocked={false}
                    progress={0}
                  />
                  <AchievementCard
                    title="Perfect Week"
                    description="Complete all scheduled reviews for 7 days"
                    icon={<Calendar className="h-10 w-10 text-yellow-500" />}
                    unlocked={false}
                    progress={40}
                  />
                </div>
              </TabsContent>

              <TabsContent value="activity" className="space-y-4 mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your learning activity over the past week.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Activity className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">Completed study session</p>
                          <p className="text-xs text-muted-foreground">Spanish Vocabulary - 24 cards reviewed</p>
                        </div>
                        <div className="text-xs text-muted-foreground">2 hours ago</div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Trophy className="h-5 w-5 text-yellow-500" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">Achievement unlocked</p>
                          <p className="text-xs text-muted-foreground">10-Day Streak - Keep up the good work!</p>
                        </div>
                        <div className="text-xs text-muted-foreground">Yesterday</div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Layers className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">Created new deck</p>
                          <p className="text-xs text-muted-foreground">Programming Concepts - 100 cards</p>
                        </div>
                        <div className="text-xs text-muted-foreground">2 days ago</div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Settings className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">Updated profile settings</p>
                          <p className="text-xs text-muted-foreground">Changed notification preferences</p>
                        </div>
                        <div className="text-xs text-muted-foreground">3 days ago</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

