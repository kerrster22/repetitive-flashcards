import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import type { ReactNode } from "react"

interface DeckCardProps {
  title: string
  description: string
  progress: number
  icon: ReactNode
  href: string
}

export function DeckCard({ title, description, progress, icon, href }: DeckCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        <div className="bg-primary/10 p-2 rounded-full">{icon}</div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground">{description}</div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span>Mastered</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Link href={href} className="flex-1">
          <Button variant="outline" className="w-full">
            View
          </Button>
        </Link>
        <Link href={`${href}/study`} className="flex-1">
          <Button className="w-full">Study</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

