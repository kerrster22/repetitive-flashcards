"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Activity, BookOpen, Brain, Calendar, Clock, Download, Flame, ThumbsDown, ThumbsUp } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Line,
  LineChart as RechartsLineChart,
  Bar,
  BarChart,
  Pie,
  PieChart as RechartsePieChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts"

// Mock data for study activity
const studyActivityData = [
  { day: "Mon", minutes: 35, cards: 45 },
  { day: "Tue", minutes: 25, cards: 30 },
  { day: "Wed", minutes: 45, cards: 60 },
  { day: "Thu", minutes: 30, cards: 40 },
  { day: "Fri", minutes: 50, cards: 65 },
  { day: "Sat", minutes: 15, cards: 20 },
  { day: "Sun", minutes: 40, cards: 55 },
]

// Mock data for retention rate
const retentionRateData = [
  { date: "1/1", rate: 75 },
  { date: "1/2", rate: 78 },
  { date: "1/3", rate: 80 },
  { date: "1/4", rate: 82 },
  { date: "1/5", rate: 79 },
  { date: "1/6", rate: 83 },
  { date: "1/7", rate: 85 },
  { date: "1/8", rate: 84 },
  { date: "1/9", rate: 86 },
  { date: "1/10", rate: 88 },
  { date: "1/11", rate: 87 },
  { date: "1/12", rate: 89 },
  { date: "1/13", rate: 90 },
  { date: "1/14", rate: 91 },
]

// Mock data for deck progress
const deckProgressData = [
  { name: "Spanish Vocabulary", mastered: 250, learning: 150, new: 100, total: 500 },
  { name: "Medical Terminology", mastered: 120, learning: 80, new: 100, total: 300 },
  { name: "Programming Concepts", mastered: 75, learning: 15, new: 10, total: 100 },
  { name: "World History", mastered: 50, learning: 50, new: 100, total: 200 },
  { name: "Calculus Formulas", mastered: 60, learning: 40, new: 50, total: 150 },
]

// Mock data for study distribution
const studyDistributionData = [
  { name: "Spanish", value: 35 },
  { name: "Medical", value: 25 },
  { name: "Programming", value: 15 },
  { name: "History", value: 10 },
  { name: "Math", value: 15 },
]

// Mock data for difficulty distribution
const difficultyDistributionData = [
  { name: "Easy", value: 65, color: "#10b981" },
  { name: "Medium", value: 25, color: "#f59e0b" },
  { name: "Hard", value: 10, color: "#ef4444" },
]

// Mock data for study time by hour
const studyTimeByHourData = [
  { hour: "6am", minutes: 5 },
  { hour: "7am", minutes: 10 },
  { hour: "8am", minutes: 25 },
  { hour: "9am", minutes: 40 },
  { hour: "10am", minutes: 30 },
  { hour: "11am", minutes: 20 },
  { hour: "12pm", minutes: 15 },
  { hour: "1pm", minutes: 10 },
  { hour: "2pm", minutes: 15 },
  { hour: "3pm", minutes: 25 },
  { hour: "4pm", minutes: 35 },
  { hour: "5pm", minutes: 45 },
  { hour: "6pm", minutes: 50 },
  { hour: "7pm", minutes: 40 },
  { hour: "8pm", minutes: 30 },
  { hour: "9pm", minutes: 25 },
  { hour: "10pm", minutes: 15 },
  { hour: "11pm", minutes: 5 },
]

// Mock data for learning insights
const learningInsights = [
  {
    title: "Optimal Study Time",
    description:
      "Your retention is highest when studying between 6-8pm. Consider scheduling your most challenging reviews during this time.",
    icon: <Clock className="h-5 w-5 text-primary" />,
  },
  {
    title: "Consistency Improvement",
    description:
      "Your learning is most effective when you study consistently. Try to maintain your current streak by studying at least 15 minutes every day.",
    icon: <Flame className="h-5 w-5 text-orange-500" />,
  },
  {
    title: "Challenging Topics",
    description:
      "You're having difficulty with Medical Terminology cards related to 'Cardiovascular System'. Consider breaking these down into smaller sub-topics.",
    icon: <ThumbsDown className="h-5 w-5 text-red-500" />,
  },
  {
    title: "Mastery Progress",
    description:
      "You've mastered 45% of your Spanish Vocabulary deck. At your current pace, you'll complete the deck in approximately 3 weeks.",
    icon: <Brain className="h-5 w-5 text-green-500" />,
  },
]

export default function AnalyticsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [timeRange, setTimeRange] = useState("week")

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1">
        <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
              <p className="text-muted-foreground">
                Track your learning progress and gain insights to optimize your study habits
              </p>
            </div>

            <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold">Learning Overview</h2>
                <p className="text-sm text-muted-foreground">Your study activity and progress at a glance</p>
              </div>
              <div className="flex items-center space-x-2">
                <Select defaultValue={timeRange} onValueChange={setTimeRange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select time range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="day">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="year">This Year</SelectItem>
                    <SelectItem value="all">All Time</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Study Time</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.2 hours</div>
                  <p className="text-xs text-muted-foreground">+0.8 hours compared to last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cards Reviewed</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">315</div>
                  <p className="text-xs text-muted-foreground">+42 cards compared to last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Retention Rate</CardTitle>
                  <Brain className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">85%</div>
                  <p className="text-xs text-muted-foreground">+3% compared to last week</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
                  <Flame className="h-4 w-4 text-orange-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12 days</div>
                  <p className="text-xs text-muted-foreground">Keep it going!</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="activity">
              <TabsList>
                <TabsTrigger value="activity">Study Activity</TabsTrigger>
                <TabsTrigger value="retention">Retention</TabsTrigger>
                <TabsTrigger value="decks">Deck Progress</TabsTrigger>
                <TabsTrigger value="insights">Insights</TabsTrigger>
              </TabsList>

              <TabsContent value="activity" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Daily Study Activity</CardTitle>
                    <CardDescription>Your study time and cards reviewed over the past week</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ChartContainer
                        config={{
                          minutes: {
                            label: "Study Time (minutes)",
                            color: "hsl(var(--chart-1))",
                          },
                          cards: {
                            label: "Cards Reviewed",
                            color: "hsl(var(--chart-2))",
                          },
                        }}
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={studyActivityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis yAxisId="left" orientation="left" stroke="var(--color-minutes)" />
                            <YAxis yAxisId="right" orientation="right" stroke="var(--color-cards)" />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Legend />
                            <Bar
                              yAxisId="left"
                              dataKey="minutes"
                              name="Study Time (minutes)"
                              fill="var(--color-minutes)"
                            />
                            <Bar yAxisId="right" dataKey="cards" name="Cards Reviewed" fill="var(--color-cards)" />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Study Distribution by Deck</CardTitle>
                      <CardDescription>How your study time is distributed across different decks</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsePieChart>
                            <Pie
                              data={studyDistributionData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                              {studyDistributionData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={`hsl(${index * 40}, 70%, 60%)`} />
                              ))}
                            </Pie>
                            <Tooltip formatter={(value) => [`${value}%`, "Study Time"]} />
                            <Legend />
                          </RechartsePieChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Study Time by Hour</CardTitle>
                      <CardDescription>When you study most throughout the day</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ChartContainer
                          config={{
                            minutes: {
                              label: "Minutes",
                              color: "hsl(var(--chart-1))",
                            },
                          }}
                        >
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={studyTimeByHourData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="hour" />
                              <YAxis />
                              <ChartTooltip content={<ChartTooltipContent />} />
                              <Bar dataKey="minutes" name="Minutes" fill="var(--color-minutes)" />
                            </BarChart>
                          </ResponsiveContainer>
                        </ChartContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Study Sessions</CardTitle>
                    <CardDescription>Your most recent study activity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Activity className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">Spanish Vocabulary</p>
                          <p className="text-xs text-muted-foreground">
                            45 cards reviewed • 35 minutes • 82% retention
                          </p>
                        </div>
                        <div className="text-xs text-muted-foreground">Today, 10:30 AM</div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Activity className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">Medical Terminology</p>
                          <p className="text-xs text-muted-foreground">
                            30 cards reviewed • 25 minutes • 78% retention
                          </p>
                        </div>
                        <div className="text-xs text-muted-foreground">Yesterday, 8:15 PM</div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Activity className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">Programming Concepts</p>
                          <p className="text-xs text-muted-foreground">
                            20 cards reviewed • 15 minutes • 90% retention
                          </p>
                        </div>
                        <div className="text-xs text-muted-foreground">Yesterday, 3:45 PM</div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Activity className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">World History</p>
                          <p className="text-xs text-muted-foreground">
                            25 cards reviewed • 20 minutes • 75% retention
                          </p>
                        </div>
                        <div className="text-xs text-muted-foreground">2 days ago, 7:30 PM</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="retention" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Retention Rate Over Time</CardTitle>
                    <CardDescription>How well you're remembering information over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <ChartContainer
                        config={{
                          rate: {
                            label: "Retention Rate (%)",
                            color: "hsl(var(--chart-1))",
                          },
                        }}
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsLineChart
                            data={retentionRateData}
                            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis domain={[50, 100]} />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Line
                              type="monotone"
                              dataKey="rate"
                              name="Retention Rate (%)"
                              stroke="var(--color-rate)"
                              strokeWidth={2}
                              dot={{ r: 4 }}
                            />
                          </RechartsLineChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Difficulty Distribution</CardTitle>
                      <CardDescription>How you rate the difficulty of your flashcards</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsePieChart>
                            <Pie
                              data={difficultyDistributionData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                              {difficultyDistributionData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip formatter={(value) => [`${value}%`, "Cards"]} />
                            <Legend />
                          </RechartsePieChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Retention by Deck</CardTitle>
                      <CardDescription>Your retention rate across different decks</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Spanish Vocabulary</span>
                            <span className="text-sm">82%</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-full rounded-full bg-primary" style={{ width: "82%" }}></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Medical Terminology</span>
                            <span className="text-sm">78%</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-full rounded-full bg-primary" style={{ width: "78%" }}></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Programming Concepts</span>
                            <span className="text-sm">90%</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-full rounded-full bg-primary" style={{ width: "90%" }}></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">World History</span>
                            <span className="text-sm">75%</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-full rounded-full bg-primary" style={{ width: "75%" }}></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Calculus Formulas</span>
                            <span className="text-sm">85%</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-full rounded-full bg-primary" style={{ width: "85%" }}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Retention Tips</CardTitle>
                    <CardDescription>Strategies to improve your memory retention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-3">
                      <div className="space-y-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Brain className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-medium">Active Recall</h3>
                        <p className="text-sm text-muted-foreground">
                          Try to recall the answer before flipping the card. This strengthens neural pathways and
                          improves retention.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-medium">Spaced Repetition</h3>
                        <p className="text-sm text-muted-foreground">
                          Review information at increasing intervals. This optimizes the learning process and improves
                          long-term retention.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <ThumbsUp className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-medium">Honest Ratings</h3>
                        <p className="text-sm text-muted-foreground">
                          Be honest when rating your recall. This helps the algorithm optimize your review schedule for
                          maximum retention.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="decks" className="space-y-6 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Deck Progress Overview</CardTitle>
                    <CardDescription>Your progress across all decks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <ChartContainer
                        config={{
                          mastered: {
                            label: "Mastered",
                            color: "hsl(var(--chart-1))",
                          },
                          learning: {
                            label: "Learning",
                            color: "hsl(var(--chart-2))",
                          },
                          new: {
                            label: "New",
                            color: "hsl(var(--chart-3))",
                          },
                        }}
                      >
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={deckProgressData}
                            layout="vertical"
                            margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis type="category" dataKey="name" width={100} />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Legend />
                            <Bar dataKey="mastered" name="Mastered" stackId="a" fill="var(--color-mastered)" />
                            <Bar dataKey="learning" name="Learning" stackId="a" fill="var(--color-learning)" />
                            <Bar dataKey="new" name="New" stackId="a" fill="var(--color-new)" />
                          </BarChart>
                        </ResponsiveContainer>
                      </ChartContainer>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Deck Completion Forecast</CardTitle>
                      <CardDescription>Estimated completion dates based on your current pace</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="text-sm font-medium">Spanish Vocabulary</p>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <BookOpen className="mr-1 h-3 w-3" />
                              <span>250/500 cards mastered (50%)</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">3 weeks</p>
                            <p className="text-xs text-muted-foreground">Est. completion</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="text-sm font-medium">Medical Terminology</p>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <BookOpen className="mr-1 h-3 w-3" />
                              <span>120/300 cards mastered (40%)</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">5 weeks</p>
                            <p className="text-xs text-muted-foreground">Est. completion</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="text-sm font-medium">Programming Concepts</p>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <BookOpen className="mr-1 h-3 w-3" />
                              <span>75/100 cards mastered (75%)</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">1 week</p>
                            <p className="text-xs text-muted-foreground">Est. completion</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="text-sm font-medium">World History</p>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <BookOpen className="mr-1 h-3 w-3" />
                              <span>50/200 cards mastered (25%)</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">8 weeks</p>
                            <p className="text-xs text-muted-foreground">Est. completion</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="text-sm font-medium">Calculus Formulas</p>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <BookOpen className="mr-1 h-3 w-3" />
                              <span>60/150 cards mastered (40%)</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">4 weeks</p>
                            <p className="text-xs text-muted-foreground">Est. completion</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Learning Efficiency</CardTitle>
                      <CardDescription>How efficiently you're learning each deck</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Spanish Vocabulary</span>
                            <span className="text-sm">High</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-full rounded-full bg-green-500" style={{ width: "85%" }}></div>
                          </div>
                          <p className="text-xs text-muted-foreground">8.5 cards mastered per study session</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Medical Terminology</span>
                            <span className="text-sm">Medium</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-full rounded-full bg-yellow-500" style={{ width: "65%" }}></div>
                          </div>
                          <p className="text-xs text-muted-foreground">6.2 cards mastered per study session</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Programming Concepts</span>
                            <span className="text-sm">Very High</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-full rounded-full bg-green-500" style={{ width: "95%" }}></div>
                          </div>
                          <p className="text-xs text-muted-foreground">9.8 cards mastered per study session</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">World History</span>
                            <span className="text-sm">Low</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-full rounded-full bg-red-500" style={{ width: "45%" }}></div>
                          </div>
                          <p className="text-xs text-muted-foreground">4.2 cards mastered per study session</p>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Calculus Formulas</span>
                            <span className="text-sm">Medium</span>
                          </div>
                          <div className="h-2 rounded-full bg-muted">
                            <div className="h-full rounded-full bg-yellow-500" style={{ width: "70%" }}></div>
                          </div>
                          <p className="text-xs text-muted-foreground">7.1 cards mastered per study session</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="insights" className="space-y-6 mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {learningInsights.map((insight, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2">
                        <div className="flex items-center space-x-2">
                          <div className="bg-primary/10 p-2 rounded-full">{insight.icon}</div>
                          <CardTitle className="text-lg">{insight.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{insight.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Personalized Recommendations</CardTitle>
                    <CardDescription>Suggestions to improve your learning based on your study patterns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium">Focus on World History</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Your retention rate for World History is lower than your other decks. Consider breaking down
                          complex topics into smaller, more manageable cards.
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          View Deck
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium">Optimize Study Schedule</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Your data shows you learn most effectively between 6-8pm. Try to schedule your most
                          challenging study sessions during this time window.
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Adjust Schedule
                        </Button>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium">Review Cardiovascular System</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          You're consistently struggling with cards related to the Cardiovascular System in your Medical
                          Terminology deck. Consider creating a focused study session for these cards.
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Create Focused Session
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Learning Milestones</CardTitle>
                    <CardDescription>Track your progress towards key learning goals</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">1,000 Cards Mastered</span>
                          <span className="text-sm">65%</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted">
                          <div className="h-full rounded-full bg-primary" style={{ width: "65%" }}></div>
                        </div>
                        <p className="text-xs text-muted-foreground">650/1,000 cards mastered across all decks</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">30-Day Streak</span>
                          <span className="text-sm">40%</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted">
                          <div className="h-full rounded-full bg-primary" style={{ width: "40%" }}></div>
                        </div>
                        <p className="text-xs text-muted-foreground">12/30 days completed</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Complete Spanish Vocabulary Deck</span>
                          <span className="text-sm">50%</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted">
                          <div className="h-full rounded-full bg-primary" style={{ width: "50%" }}></div>
                        </div>
                        <p className="text-xs text-muted-foreground">250/500 cards mastered</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">90% Overall Retention Rate</span>
                          <span className="text-sm">94%</span>
                        </div>
                        <div className="h-2 rounded-full bg-muted">
                          <div className="h-full rounded-full bg-primary" style={{ width: "94%" }}></div>
                        </div>
                        <p className="text-xs text-muted-foreground">Current retention rate: 85%</p>
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

