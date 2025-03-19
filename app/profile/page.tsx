"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  BookOpen,
  Brain,
  Calendar,
  Camera,
  Clock,
  Edit,
  Flame,
  Layers,
  Moon,
  Save,
  Settings,
  Sun,
  Trophy,
  User,
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { AchievementCard } from "@/components/achievement-card"

export default function ProfilePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    username: "alexj",
    email: "alex@example.com",
    bio: "Language enthusiast and medical student. I use MemoryMaster to study medical terminology and Spanish vocabulary.",
    location: "San Francisco, CA",
    website: "alexjohnson.com",
    joinDate: "March 2023",
  })

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1">
        <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
              <p className="text-muted-foreground">Manage your profile information and preferences</p>
            </div>

            <Tabs defaultValue="profile" className="space-y-4">
              <TabsList>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="preferences">Study Preferences</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="statistics">Statistics</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-4">
                <Card>
                  <CardHeader className="relative">
                    <div className="absolute right-6 top-6">
                      <Button variant="outline" size="sm" onClick={() => setEditMode(!editMode)}>
                        {editMode ? (
                          <>
                            <Save className="mr-2 h-4 w-4" />
                            Save
                          </>
                        ) : (
                          <>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Profile
                          </>
                        )}
                      </Button>
                    </div>
                    <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                      <div className="relative">
                        <div className="h-24 w-24 overflow-hidden rounded-full bg-muted">
                          <User className="h-24 w-24 p-4 text-muted-foreground" />
                        </div>
                        {editMode && (
                          <Button
                            variant="secondary"
                            size="icon"
                            className="absolute bottom-0 right-0 h-8 w-8 rounded-full"
                          >
                            <Camera className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                      <div className="space-y-1 text-center sm:text-left">
                        <h2 className="text-2xl font-bold">{profileData.name}</h2>
                        <p className="text-muted-foreground">@{profileData.username}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {editMode ? (
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            value={profileData.name}
                            onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="username">Username</Label>
                          <Input
                            id="username"
                            value={profileData.username}
                            onChange={(e) => setProfileData({ ...profileData, username: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={profileData.email}
                            onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            value={profileData.location}
                            onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="website">Website</Label>
                          <Input
                            id="website"
                            value={profileData.website}
                            onChange={(e) => setProfileData({ ...profileData, website: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2 sm:col-span-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Textarea
                            id="bio"
                            value={profileData.bio}
                            onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                            rows={4}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <h3 className="text-sm font-medium text-muted-foreground">Bio</h3>
                          <p>{profileData.bio}</p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-1">
                            <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                            <p>{profileData.email}</p>
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                            <p>{profileData.location}</p>
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-sm font-medium text-muted-foreground">Website</h3>
                            <p>{profileData.website}</p>
                          </div>
                          <div className="space-y-1">
                            <h3 className="text-sm font-medium text-muted-foreground">Joined</h3>
                            <p>{profileData.joinDate}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Learning Progress</CardTitle>
                    <CardDescription>Track your progress towards your learning goals</CardDescription>
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
                      View All Learning Goals
                    </Button>
                  </CardFooter>
                </Card>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Achievements</CardTitle>
                      <CardDescription>Your latest learning milestones</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="bg-yellow-500/20 p-2 rounded-full">
                          <Flame className="h-5 w-5 text-orange-500" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">10-Day Streak</p>
                          <p className="text-xs text-muted-foreground">Achieved 2 days ago</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/20 p-2 rounded-full">
                          <Brain className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">100 Cards Mastered</p>
                          <p className="text-xs text-muted-foreground">Achieved 1 week ago</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="bg-green-500/20 p-2 rounded-full">
                          <Layers className="h-5 w-5 text-green-500" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">First Deck Completed</p>
                          <p className="text-xs text-muted-foreground">Achieved 2 weeks ago</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        View All Achievements
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Study Streak</CardTitle>
                      <CardDescription>Your daily learning consistency</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Flame className="h-5 w-5 text-orange-500" />
                          <span className="text-sm font-medium">Current Streak</span>
                        </div>
                        <span className="text-xl font-bold">12 days</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Trophy className="h-5 w-5 text-yellow-500" />
                          <span className="text-sm font-medium">Longest Streak</span>
                        </div>
                        <span className="text-xl font-bold">21 days</span>
                      </div>
                      <div className="grid grid-cols-7 gap-1">
                        {Array.from({ length: 7 }).map((_, i) => (
                          <div
                            key={i}
                            className={`h-8 rounded-md ${
                              i < 5 ? "bg-orange-500/80" : "bg-muted"
                            } flex items-center justify-center text-xs font-medium ${
                              i < 5 ? "text-white" : "text-muted-foreground"
                            }`}
                          >
                            {["M", "T", "W", "T", "F", "S", "S"][i]}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">
                        View Detailed History
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="preferences" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Study Preferences</CardTitle>
                    <CardDescription>Customize your learning experience</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Spaced Repetition Settings</h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="difficulty">Default Difficulty</Label>
                          <select
                            id="difficulty"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="easy">Easy (Longer intervals)</option>
                            <option value="medium" selected>
                              Medium (Standard intervals)
                            </option>
                            <option value="hard">Hard (Shorter intervals)</option>
                          </select>
                          <p className="text-xs text-muted-foreground">
                            Affects how frequently cards are shown for review
                          </p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="new-cards">New Cards Per Day</Label>
                          <Input id="new-cards" type="number" defaultValue="20" min="1" max="100" />
                          <p className="text-xs text-muted-foreground">
                            Maximum number of new cards to introduce daily
                          </p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="review-cards">Reviews Per Day</Label>
                          <Input id="review-cards" type="number" defaultValue="100" min="1" max="500" />
                          <p className="text-xs text-muted-foreground">Maximum number of review cards to show daily</p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="learning-steps">Learning Steps (minutes)</Label>
                          <Input id="learning-steps" defaultValue="1 10 60 360" />
                          <p className="text-xs text-muted-foreground">
                            Intervals for learning cards (in minutes, space-separated)
                          </p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Study Schedule</h3>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="study-days">Study Days</Label>
                          <div className="flex flex-wrap gap-2">
                            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                              <div key={day} className="flex items-center space-x-2 rounded-md border px-3 py-2">
                                <input
                                  type="checkbox"
                                  id={`day-${day}`}
                                  defaultChecked={day !== "Sat" && day !== "Sun"}
                                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                />
                                <Label htmlFor={`day-${day}`} className="text-sm">
                                  {day}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="reminder-time">Daily Reminder Time</Label>
                          <Input id="reminder-time" type="time" defaultValue="08:00" />
                          <p className="text-xs text-muted-foreground">When to send daily study reminders</p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Display Settings</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="dark-mode">Dark Mode</Label>
                            <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Sun className="h-4 w-4 text-muted-foreground" />
                            <Switch id="dark-mode" />
                            <Moon className="h-4 w-4 text-muted-foreground" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="font-size">Font Size</Label>
                            <p className="text-sm text-muted-foreground">Adjust text size for better readability</p>
                          </div>
                          <select
                            id="font-size"
                            className="w-32 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                          >
                            <option value="small">Small</option>
                            <option value="medium" selected>
                              Medium
                            </option>
                            <option value="large">Large</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Reset to Defaults</Button>
                    <Button>Save Preferences</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Notification Preferences</CardTitle>
                    <CardDescription>Control when and how you receive notifications</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Daily Study Reminders</Label>
                        <p className="text-sm text-muted-foreground">Receive reminders for your daily study sessions</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Achievement Notifications</Label>
                        <p className="text-sm text-muted-foreground">Get notified when you earn new achievements</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Streak Alerts</Label>
                        <p className="text-sm text-muted-foreground">Receive alerts when your streak is at risk</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Community Updates</Label>
                        <p className="text-sm text-muted-foreground">
                          Get notified about new challenges and community events
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Save Notification Settings</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Achievements</CardTitle>
                    <CardDescription>Track your learning milestones and accomplishments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                        icon={<User className="h-10 w-10 text-purple-500" />}
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
                      <AchievementCard
                        title="Early Bird"
                        description="Complete a study session before 8 AM"
                        icon={<Clock className="h-10 w-10 text-orange-500" />}
                        unlocked={true}
                      />
                      <AchievementCard
                        title="Night Owl"
                        description="Complete a study session after 10 PM"
                        icon={<Moon className="h-10 w-10 text-indigo-500" />}
                        unlocked={true}
                      />
                      <AchievementCard
                        title="Polyglot"
                        description="Study flashcards in 3 different languages"
                        icon={<BookOpen className="h-10 w-10 text-emerald-500" />}
                        unlocked={false}
                        progress={66}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Achievement Statistics</CardTitle>
                    <CardDescription>Your progress in unlocking achievements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Overall Completion</span>
                      <span className="text-sm text-muted-foreground">12/30 (40%)</span>
                    </div>
                    <Progress value={40} className="h-2" />

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Study Habits</span>
                          <span className="text-sm text-muted-foreground">4/8</span>
                        </div>
                        <Progress value={50} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Mastery</span>
                          <span className="text-sm text-muted-foreground">3/10</span>
                        </div>
                        <Progress value={30} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Social</span>
                          <span className="text-sm text-muted-foreground">1/6</span>
                        </div>
                        <Progress value={16.7} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Consistency</span>
                          <span className="text-sm text-muted-foreground">3/4</span>
                        </div>
                        <Progress value={75} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">Exploration</span>
                          <span className="text-sm text-muted-foreground">1/2</span>
                        </div>
                        <Progress value={50} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="statistics" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Study Statistics</CardTitle>
                    <CardDescription>Detailed metrics about your learning progress</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Total Study Time</h3>
                        <p className="text-2xl font-bold">42.5 hours</p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Cards Reviewed</h3>
                        <p className="text-2xl font-bold">3,245</p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Cards Mastered</h3>
                        <p className="text-2xl font-bold">245</p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-medium text-muted-foreground">Average Accuracy</h3>
                        <p className="text-2xl font-bold">85%</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Study Activity</h3>
                      <div className="h-[200px] w-full rounded-md border bg-muted/40 p-4">
                        <div className="flex h-full items-end gap-2">
                          {Array.from({ length: 7 }).map((_, i) => {
                            const height = Math.floor(Math.random() * 80) + 20
                            return (
                              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                                <div className="w-full bg-primary rounded-t-sm" style={{ height: `${height}%` }} />
                                <span className="text-xs text-muted-foreground">
                                  {["M", "T", "W", "T", "F", "S", "S"][i]}
                                </span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground text-center">Study activity over the past week</p>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Performance by Subject</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Spanish Vocabulary</span>
                            <span className="text-sm text-muted-foreground">85% accuracy</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Medical Terminology</span>
                            <span className="text-sm text-muted-foreground">78% accuracy</span>
                          </div>
                          <Progress value={78} className="h-2" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Programming Concepts</span>
                            <span className="text-sm text-muted-foreground">92% accuracy</span>
                          </div>
                          <Progress value={92} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Learning Insights</CardTitle>
                    <CardDescription>Personalized recommendations based on your study patterns</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border bg-muted/50 p-4">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/20 p-2 rounded-full">
                          <Brain className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">Optimal Study Time</p>
                          <p className="text-sm text-muted-foreground">
                            Based on your performance data, you learn most effectively in the morning between 8-10 AM.
                            Consider scheduling your most challenging study sessions during this time.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-muted/50 p-4">
                      <div className="flex items-start space-x-4">
                        <div className="bg-yellow-500/20 p-2 rounded-full">
                          <Flame className="h-5 w-5 text-yellow-500" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">Consistency Improvement</p>
                          <p className="text-sm text-muted-foreground">
                            Your learning is most effective when you study consistently. Try to maintain your current
                            streak by studying at least 15 minutes every day, even on weekends.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border bg-muted/50 p-4">
                      <div className="flex items-start space-x-4">
                        <div className="bg-red-500/20 p-2 rounded-full">
                          <Settings className="h-5 w-5 text-red-500" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium">Challenging Topics</p>
                          <p className="text-sm text-muted-foreground">
                            You're having difficulty with Medical Terminology cards related to "Cardiovascular System".
                            Consider breaking these down into smaller sub-topics or using mnemonic devices.
                          </p>
                        </div>
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

