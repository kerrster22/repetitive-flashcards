import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { ReactNode } from "react"

interface AchievementCardProps {
  title: string
  description: string
  icon: ReactNode
  unlocked: boolean
  progress?: number
}

export function AchievementCard({ title, description, icon, unlocked, progress = 0 }: AchievementCardProps) {
  return (
    <Card className={`${unlocked ? "border-yellow-500/50" : ""}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-4">
          <div className={`p-2 rounded-full ${unlocked ? "bg-yellow-500/20" : "bg-muted"}`}>{icon}</div>
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {!unlocked && progress > 0 && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
        {unlocked && (
          <div className="flex items-center justify-center p-2 text-yellow-500">
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
              className="h-6 w-6"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="ml-2 text-sm font-medium">Unlocked</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

