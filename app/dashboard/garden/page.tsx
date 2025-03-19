"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Flower2, LeafyGreen, SproutIcon as Seedling, Trophy, CalendarIcon } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { MasteryGarden, type GrowthStage, type PlantHealth } from "@/components/mastery-garden"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

// Mock data for the garden
const mockPlants = [
  {
    id: "1",
    name: "Spanish Basics",
    stage: "blooming" as GrowthStage,
    health: "healthy" as PlantHealth,
    progress: 100,
    lastReviewed: new Date(),
    reviewCount: 50,
    masteryLevel: 100,
  },
  {
    id: "2",
    name: "Medical Terms",
    stage: "mature" as GrowthStage,
    health: "needsWater" as PlantHealth,
    progress: 85,
    lastReviewed: new Date(Date.now() - 86400000), // 1 day ago
    reviewCount: 30,
    masteryLevel: 85,
  },
  {
    id: "3",
    name: "Programming",
    stage: "sapling" as GrowthStage,
    health: "healthy" as PlantHealth,
    progress: 45,
    lastReviewed: new Date(),
    reviewCount: 15,
    masteryLevel: 45,
  },
  {
    id: "4",
    name: "World History",
    stage: "seedling" as GrowthStage,
    health: "wilting" as PlantHealth,
    progress: 25,
    lastReviewed: new Date(Date.now() - 172800000), // 2 days ago
    reviewCount: 8,
    masteryLevel: 25,
  },
  {
    id: "5",
    name: "Mathematics",
    stage: "seed" as GrowthStage,
    health: "healthy" as PlantHealth,
    progress: 0,
    lastReviewed: new Date(),
    reviewCount: 0,
    masteryLevel: 0,
  },
]

export default function GardenPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [plants, setPlants] = useState(mockPlants)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  // Calculate garden stats
  const totalPlants = plants.length
  const bloomingPlants = plants.filter((p) => p.stage === "blooming").length
  const averageMastery = Math.round(plants.reduce((acc, p) => acc + p.masteryLevel, 0) / totalPlants)
  const plantsNeedingWater = plants.filter((p) => p.health === "needsWater").length

  // Handle watering plants
  const handleWater = (plantId: string) => {
    setPlants(plants.map((p) => (p.id === plantId ? { ...p, health: "healthy" as PlantHealth } : p)))
  }

  // Handle reviewing plants
  const handleReview = (plantId: string) => {
    // In a real app, this would navigate to the review page for the specific deck
    console.log(`Reviewing plant ${plantId}`)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1">
        <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Learning Garden</h1>
              <p className="text-muted-foreground">Watch your knowledge grow as you learn and review</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Plants</CardTitle>
                  <LeafyGreen className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{totalPlants}</div>
                  <p className="text-xs text-muted-foreground">Active learning subjects</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Blooming</CardTitle>
                  <Flower2 className="h-4 w-4 text-pink-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{bloomingPlants}</div>
                  <p className="text-xs text-muted-foreground">Fully mastered subjects</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Mastery</CardTitle>
                  <Trophy className="h-4 w-4 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{averageMastery}%</div>
                  <Progress value={averageMastery} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Needs Attention</CardTitle>
                  <Seedling className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{plantsNeedingWater}</div>
                  <p className="text-xs text-muted-foreground">Plants needing review</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Your Garden</h2>
                  <p className="text-sm text-muted-foreground">Each plant represents a deck of flashcards</p>
                </div>
                <Button>Plant New Seed</Button>
              </div>

              <MasteryGarden plants={plants} onWater={handleWater} onReview={handleReview} />
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Growth Stages</CardTitle>
                  <CardDescription>Understanding your garden's growth stages</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Seedling className="h-8 w-8 text-zinc-600" />
                    <div>
                      <p className="font-medium">Seed & Seedling</p>
                      <p className="text-sm text-muted-foreground">
                        Just started learning. Regular reviews help it grow!
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <LeafyGreen className="h-8 w-8 text-green-500" />
                    <div>
                      <p className="font-medium">Sapling & Growing</p>
                      <p className="text-sm text-muted-foreground">Making progress. Keep up the good work!</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Flower2 className="h-8 w-8 text-pink-500" />
                    <div>
                      <p className="font-medium">Blooming</p>
                      <p className="text-sm text-muted-foreground">Mastered! But don't forget to water occasionally.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Schedule</CardTitle>
                  <CardDescription>Plan your watering schedule</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>{selectedDate ? format(selectedDate, "PPP") : "Pick a date"}</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                  <CardDescription>Your gardening milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Novice Gardener</Badge>
                        <span className="text-sm text-muted-foreground">Plant your first seed</span>
                      </div>
                      <Trophy className="h-4 w-4 text-yellow-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Growing Success</Badge>
                        <span className="text-sm text-muted-foreground">Reach 5 saplings</span>
                      </div>
                      <Trophy className="h-4 w-4 text-zinc-300" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Master Gardener</Badge>
                        <span className="text-sm text-muted-foreground">10 blooming plants</span>
                      </div>
                      <Trophy className="h-4 w-4 text-zinc-300" />
                    </div>
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

