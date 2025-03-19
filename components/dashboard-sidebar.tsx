"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import {
  Activity,
  BookOpen,
  Brain,
  Calendar,
  ChevronRight,
  Flame,
  Layers,
  LogOut,
  Plus,
  Settings,
  Trophy,
  Users,
} from "lucide-react"

interface DashboardSidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

export function DashboardSidebar({ open, setOpen }: DashboardSidebarProps) {
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-[240px] sm:w-[300px] pr-0">
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-2 py-4">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">MemoryMaster</span>
            </div>
            <ScrollArea className="flex-1 pr-4">
              <div className="flex flex-col gap-2 py-2">
                <Link href="/dashboard/dashboard" onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                    <Activity className="h-5 w-5" />
                    <span className="text-sm font-medium">Dashboard</span>
                  </div>
                </Link>
                <Link href="/dashboard/my-decks" onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                    <Layers className="h-5 w-5" />
                    <span className="text-sm font-medium">My Decks</span>
                  </div>
                </Link>
                <Link href="/dashboard/study" onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                    <BookOpen className="h-5 w-5" />
                    <span className="text-sm font-medium">Study</span>
                  </div>
                </Link>
                <Link href="/dashboard/community" onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                    <Users className="h-5 w-5" />
                    <span className="text-sm font-medium">Community</span>
                  </div>
                </Link>
                <Link href="/dashboard/analytics" onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                    <Activity className="h-5 w-5" />
                    <span className="text-sm font-medium">Analytics</span>
                  </div>
                </Link>
                <Link href="/dashboard/achievements" onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                    <Trophy className="h-5 w-5" />
                    <span className="text-sm font-medium">Achievements</span>
                  </div>
                </Link>
                <Link href="/dashboard/schedule" onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm font-medium">Schedule</span>
                  </div>
                </Link>
              </div>
              <div className="py-2">
                <h3 className="mb-2 px-4 text-xs font-semibold text-muted-foreground">Your Decks</h3>
                <div className="flex flex-col gap-1">
                  <Link href="/dashboard/decks/spanish" onClick={() => setOpen(false)}>
                    <div className="flex items-center justify-between rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                      <div className="flex items-center gap-2">
                        <Layers className="h-4 w-4" />
                        <span className="text-sm">Spanish Vocabulary</span>
                      </div>
                      <span className="text-xs text-muted-foreground">24 due</span>
                    </div>
                  </Link>
                  <Link href="/dashboard/decks/medical" onClick={() => setOpen(false)}>
                    <div className="flex items-center justify-between rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                      <div className="flex items-center gap-2">
                        <Layers className="h-4 w-4" />
                        <span className="text-sm">Medical Terminology</span>
                      </div>
                      <span className="text-xs text-muted-foreground">12 due</span>
                    </div>
                  </Link>
                  <Link href="/dashboard/decks/programming" onClick={() => setOpen(false)}>
                    <div className="flex items-center justify-between rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                      <div className="flex items-center gap-2">
                        <Layers className="h-4 w-4" />
                        <span className="text-sm">Programming Concepts</span>
                      </div>
                      <span className="text-xs text-muted-foreground">8 due</span>
                    </div>
                  </Link>
                  <Button
                    variant="ghost"
                    className="flex items-center justify-start gap-2 px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                  >
                    <Plus className="h-4 w-4" />
                    <span className="text-sm">Add New Deck</span>
                  </Button>
                </div>
              </div>
              <div className="py-2">
                <h3 className="mb-2 px-4 text-xs font-semibold text-muted-foreground">Achievements</h3>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between rounded-lg px-3 py-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Flame className="h-4 w-4 text-orange-500" />
                      <span className="text-sm">12-Day Streak</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <div className="flex items-center justify-between rounded-lg px-3 py-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Brain className="h-4 w-4 text-primary" />
                      <span className="text-sm">245 Cards Mastered</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </ScrollArea>
            <div className="border-t py-4 pr-4">
              <div className="flex flex-col gap-2">
                <Link href="/settings" onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                    <Settings className="h-5 w-5" />
                    <span className="text-sm font-medium">Settings</span>
                  </div>
                </Link>
                <Link href="/logout" onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                    <LogOut className="h-5 w-5" />
                    <span className="text-sm font-medium">Logout</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div className="hidden border-r bg-background md:block md:w-[240px] lg:w-[300px]">
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center gap-2 border-b px-4">
            <Brain className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">MemoryMaster</span>
          </div>
          <ScrollArea className="flex-1">
            <div className="flex flex-col gap-2 p-4">
              <Link href="/dashboard">
                <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                  <Activity className="h-5 w-5" />
                  <span className="text-sm font-medium">Dashboard</span>
                </div>
              </Link>
              <Link href="/dashboard/my-decks">
                <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                  <Layers className="h-5 w-5" />
                  <span className="text-sm font-medium">My Decks</span>
                </div>
              </Link>
              <Link href="/dashboard/study">
                <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                  <BookOpen className="h-5 w-5" />
                  <span className="text-sm font-medium">Study</span>
                </div>
              </Link>
              <Link href="/dashboard/community">
                <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                  <Users className="h-5 w-5" />
                  <span className="text-sm font-medium">Community</span>
                </div>
              </Link>
              <Link href="/dashboard/analytics">
                <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                  <Activity className="h-5 w-5" />
                  <span className="text-sm font-medium">Analytics</span>
                </div>
              </Link>
              <Link href="/dashboard/achievements">
                <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                  <Trophy className="h-5 w-5" />
                  <span className="text-sm font-medium">Achievements</span>
                </div>
              </Link>
              <Link href="/dashboard/schedule">
                <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm font-medium">Schedule</span>
                </div>
              </Link>
            </div>
            <div className="p-4">
              <h3 className="mb-2 px-4 text-xs font-semibold text-muted-foreground">Your Decks</h3>
              <div className="flex flex-col gap-1">
                <Link href="/decks/spanish">
                  <div className="flex items-center justify-between rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                    <div className="flex items-center gap-2">
                      <Layers className="h-4 w-4" />
                      <span className="text-sm">Spanish Vocabulary</span>
                    </div>
                    <span className="text-xs text-muted-foreground">24 due</span>
                  </div>
                </Link>
                <Link href="/decks/medical">
                  <div className="flex items-center justify-between rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                    <div className="flex items-center gap-2">
                      <Layers className="h-4 w-4" />
                      <span className="text-sm">Medical Terminology</span>
                    </div>
                    <span className="text-xs text-muted-foreground">12 due</span>
                  </div>
                </Link>
                <Link href="/decks/programming">
                  <div className="flex items-center justify-between rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                    <div className="flex items-center gap-2">
                      <Layers className="h-4 w-4" />
                      <span className="text-sm">Programming Concepts</span>
                    </div>
                    <span className="text-xs text-muted-foreground">8 due</span>
                  </div>
                </Link>
                <Button
                  variant="ghost"
                  className="flex items-center justify-start gap-2 px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  <Plus className="h-4 w-4" />
                  <span className="text-sm">Add New Deck</span>
                </Button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="mb-2 px-4 text-xs font-semibold text-muted-foreground">Achievements</h3>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between rounded-lg px-3 py-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Flame className="h-4 w-4 text-orange-500" />
                    <span className="text-sm">12-Day Streak</span>
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-between rounded-lg px-3 py-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Brain className="h-4 w-4 text-primary" />
                    <span className="text-sm">245 Cards Mastered</span>
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </ScrollArea>
          <div className="border-t p-4">
            <div className="flex flex-col gap-2">
              <Link href="/settings">
                <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                  <Settings className="h-5 w-5" />
                  <span className="text-sm font-medium">Settings</span>
                </div>
              </Link>
              <Link href="/logout">
                <div className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground">
                  <LogOut className="h-5 w-5" />
                  <span className="text-sm font-medium">Logout</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

