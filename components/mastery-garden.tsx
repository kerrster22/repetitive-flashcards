"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Cloud, Droplets, Flower2, LeafyGreen, SproutIcon as Seedling, Sun, TreeDeciduous } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

// Types for plant growth stages
export type GrowthStage = "seed" | "seedling" | "sapling" | "growing" | "mature" | "blooming"
export type PlantHealth = "healthy" | "needsWater" | "wilting"

interface Plant {
  id: string
  name: string
  stage: GrowthStage
  health: PlantHealth
  progress: number
  lastReviewed: Date
  reviewCount: number
  masteryLevel: number
}

interface MasteryGardenProps {
  plants: Plant[]
  onWater?: (plantId: string) => void
  onReview?: (plantId: string) => void
}

const stageConfig = {
  seed: {
    icon: Seedling,
    color: "text-zinc-600",
    bgColor: "bg-zinc-100",
    height: "h-8",
  },
  seedling: {
    icon: LeafyGreen,
    color: "text-green-400",
    bgColor: "bg-green-50",
    height: "h-12",
  },
  sapling: {
    icon: LeafyGreen,
    color: "text-green-500",
    bgColor: "bg-green-100",
    height: "h-16",
  },
  growing: {
    icon: TreeDeciduous,
    color: "text-green-600",
    bgColor: "bg-green-200",
    height: "h-20",
  },
  mature: {
    icon: TreeDeciduous,
    color: "text-green-700",
    bgColor: "bg-green-300",
    height: "h-24",
  },
  blooming: {
    icon: Flower2,
    color: "text-green-800",
    bgColor: "bg-green-400",
    height: "h-28",
  },
}

export function PlantVisual({
  stage,
  health,
  progress,
}: { stage: GrowthStage; health: PlantHealth; progress: number }) {
  const config = stageConfig[stage]
  const Icon = config.icon

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col items-center"
    >
      <div className={`${config.bgColor} rounded-full p-4 mb-2`}>
        <Icon className={`${config.color} ${config.height} w-auto transition-all duration-500`} />
      </div>
      {health === "needsWater" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="absolute -top-2 -right-2"
        >
          <Droplets className="h-6 w-6 text-blue-500" />
        </motion.div>
      )}
      <Progress value={progress} className="w-24 h-1" />
    </motion.div>
  )
}

export function WeatherEffects() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        initial={{ x: "100%", y: "0%" }}
        animate={{ x: "-100%", y: "10%" }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="absolute top-0"
      >
        <Cloud className="h-8 w-8 text-white/20" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="absolute top-4 right-4"
      >
        <Sun className="h-12 w-12 text-yellow-200/20" />
      </motion.div>
    </div>
  )
}

export function MasteryGarden({ plants, onWater, onReview }: MasteryGardenProps) {
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null)

  const getStageDescription = (stage: GrowthStage) => {
    switch (stage) {
      case "seed":
        return "Just planted! This card needs initial review."
      case "seedling":
        return "Beginning to grow. Keep reviewing to help it flourish!"
      case "sapling":
        return "Making good progress. Regular reviews will help it grow stronger."
      case "growing":
        return "Growing well! You're getting better at remembering this card."
      case "mature":
        return "Almost fully grown! Just a few more reviews to reach mastery."
      case "blooming":
        return "Fully bloomed! You've mastered this card."
      default:
        return "Keep learning and watching your garden grow!"
    }
  }

  return (
    <div className="relative min-h-[600px] w-full rounded-xl bg-gradient-to-b from-sky-100 to-green-100 p-6">
      <WeatherEffects />

      <div className="relative z-10">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight">Your Learning Garden</h2>
          <p className="text-sm text-muted-foreground">Watch your knowledge grow as you learn and review</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {plants.map((plant) => (
            <Card
              key={plant.id}
              className={`relative overflow-hidden transition-shadow hover:shadow-lg ${
                selectedPlant?.id === plant.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedPlant(plant)}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-sm">{plant.name}</CardTitle>
                <CardDescription className="text-xs">{plant.reviewCount} reviews</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center pb-4">
                <PlantVisual stage={plant.stage} health={plant.health} progress={plant.progress} />
              </CardContent>
              <CardFooter className="flex justify-center gap-2">
                {plant.health === "needsWater" && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation()
                      onWater?.(plant.id)
                    }}
                  >
                    <Droplets className="mr-1 h-4 w-4" />
                    Water
                  </Button>
                )}
                <Button
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    onReview?.(plant.id)
                  }}
                >
                  Review
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <AnimatePresence>
          {selectedPlant && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6"
            >
              <Card className="mx-auto max-w-2xl">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>{selectedPlant.name}</CardTitle>
                      <CardDescription>{getStageDescription(selectedPlant.stage)}</CardDescription>
                    </div>
                    <Badge variant={selectedPlant.stage === "blooming" ? "default" : "secondary"}>
                      {selectedPlant.stage}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Mastery Level:</span>
                        <span>{selectedPlant.masteryLevel}%</span>
                      </div>
                      <Progress value={selectedPlant.masteryLevel} />
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Reviews:</span>
                        <span>{selectedPlant.reviewCount}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Last Reviewed:</span>
                        <span>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant={"ghost"} className="pl-0 font-normal text-left">
                                {format(selectedPlant.lastReviewed, "PPP")}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={selectedPlant.lastReviewed}
                                onSelect={() => {}}
                                disabled
                                className="rounded-md border"
                              />
                            </PopoverContent>
                          </Popover>
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="outline" onClick={() => setSelectedPlant(null)}>
                    Close
                  </Button>
                  <Button onClick={() => onReview?.(selectedPlant.id)}>Review Now</Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

