"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Globe, Key, Lock, LogOut, Mail, Moon, Save, Shield, Sun, User } from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "Alex Johnson",
    username: "alexj",
    email: "alex@example.com",
    bio: "Language enthusiast and medical student. I use MemoryMaster to study medical terminology and Spanish vocabulary.",
    location: "San Francisco, CA",
    website: "alexjohnson.com",
  })

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1">
        <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
              <p className="text-muted-foreground">Manage your account settings and preferences</p>
            </div>

            <Tabs defaultValue="account" className="space-y-4">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="appearance">Appearance</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="study">Study Preferences</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="account" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your account information and public profile</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
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
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          value={profileData.bio}
                          onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                          rows={4}
                        />
                        <p className="text-xs text-muted-foreground">
                          Brief description for your profile. Maximum 160 characters.
                        </p>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
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
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Profile Picture</CardTitle>
                    <CardDescription>Upload a profile picture to personalize your account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative h-24 w-24 overflow-hidden rounded-full bg-muted">
                        <User className="h-24 w-24 p-4 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            Upload New
                          </Button>
                          <Button variant="outline" size="sm">
                            Remove
                          </Button>
                        </div>
                        <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size 2MB.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Account Management</CardTitle>
                    <CardDescription>Manage your account settings and data</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Email Preferences</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Manage your email notification settings</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="flex items-center space-x-2">
                          <Globe className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Language & Region</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Set your preferred language and region</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="flex items-center space-x-2">
                          <Shield className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Privacy Settings</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Control your privacy and data sharing preferences
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="flex items-center space-x-2 text-red-500">
                          <LogOut className="h-4 w-4" />
                          <span className="font-medium">Delete Account</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Permanently delete your account and all your data
                        </p>
                      </div>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="appearance" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Theme</CardTitle>
                    <CardDescription>Customize the appearance of the application</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="dark-mode">Dark Mode</Label>
                        <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Sun className="h-4 w-4 text-muted-foreground" />
                        <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
                        <Moon className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <Label htmlFor="theme-color">Accent Color</Label>
                      <div className="grid grid-cols-5 gap-2">
                        {["#0ea5e9", "#8b5cf6", "#10b981", "#f59e0b", "#ef4444"].map((color) => (
                          <div
                            key={color}
                            className="flex h-10 w-full cursor-pointer items-center justify-center rounded-md border"
                            style={{ backgroundColor: color }}
                          >
                            {color === "#0ea5e9" && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <Label htmlFor="font-size">Font Size</Label>
                      <select
                        id="font-size"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="small">Small</option>
                        <option value="medium" selected>
                          Medium
                        </option>
                        <option value="large">Large</option>
                      </select>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Save Appearance Settings</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Layout Preferences</CardTitle>
                    <CardDescription>Customize how content is displayed</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Compact Mode</Label>
                        <p className="text-sm text-muted-foreground">Display more content with reduced spacing</p>
                      </div>
                      <Switch />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Show Card Count</Label>
                        <p className="text-sm text-muted-foreground">Display the number of cards in each deck</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Show Progress Bars</Label>
                        <p className="text-sm text-muted-foreground">
                          Display progress bars for decks and study sessions
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notifications" className="space-y-6">
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
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Achievement Notifications</Label>
                        <p className="text-sm text-muted-foreground">Get notified when you earn new achievements</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Streak Alerts</Label>
                        <p className="text-sm text-muted-foreground">Receive alerts when your streak is at risk</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Community Updates</Label>
                        <p className="text-sm text-muted-foreground">
                          Get notified about new challenges and community events
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <Separator />
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

                <Card>
                  <CardHeader>
                    <CardTitle>Study Reminder Schedule</CardTitle>
                    <CardDescription>Set up your daily study reminder schedule</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="reminder-time">Reminder Time</Label>
                      <Input id="reminder-time" type="time" defaultValue="08:00" />
                      <p className="text-xs text-muted-foreground">
                        Set the time when you want to receive daily study reminders
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label>Study Days</Label>
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
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Save Reminder Schedule</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="study" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Spaced Repetition Settings</CardTitle>
                    <CardDescription>
                      Customize the spaced repetition algorithm to match your learning style
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="difficulty">Default Difficulty</Label>
                        <select
                          id="difficulty"
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
                        <p className="text-xs text-muted-foreground">Maximum number of new cards to introduce daily</p>
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
                      <div className="space-y-2">
                        <Label htmlFor="max-interval">Maximum Interval (days)</Label>
                        <Input id="max-interval" type="number" defaultValue="365" min="30" max="3650" />
                        <p className="text-xs text-muted-foreground">Longest possible interval between reviews</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Reset to Defaults</Button>
                    <Button>Save Settings</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Study Interface</CardTitle>
                    <CardDescription>Customize your study experience</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Distraction-Free Mode</Label>
                        <p className="text-sm text-muted-foreground">
                          Hide navigation and other elements during study sessions
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Show Answer Timer</Label>
                        <p className="text-sm text-muted-foreground">
                          Display a timer showing how long you take to answer
                        </p>
                      </div>
                      <Switch />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Auto-Play Audio</Label>
                        <p className="text-sm text-muted-foreground">
                          Automatically play audio when available on cards
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <Label htmlFor="card-order">Card Order</Label>
                      <select
                        id="card-order"
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="due">Due First</option>
                        <option value="random">Random</option>
                        <option value="difficulty">Hardest First</option>
                        <option value="added">Newest First</option>
                      </select>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Save Interface Settings</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Change Password</CardTitle>
                    <CardDescription>Update your password to keep your account secure</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                    <div className="rounded-md bg-muted p-3">
                      <div className="text-sm font-medium">Password Requirements:</div>
                      <ul className="mt-1 text-xs text-muted-foreground">
                        <li>At least 8 characters long</li>
                        <li>Include at least one uppercase letter</li>
                        <li>Include at least one number</li>
                        <li>Include at least one special character</li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <Lock className="mr-2 h-4 w-4" />
                      Update Password
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Two-Factor Authentication</CardTitle>
                    <CardDescription>Add an extra layer of security to your account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="flex items-center space-x-2">
                          <Shield className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Two-Factor Authentication</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Require a verification code when logging in</p>
                      </div>
                      <Switch />
                    </div>
                    <div className="rounded-md bg-muted p-3">
                      <p className="text-sm">
                        Two-factor authentication adds an extra layer of security to your account by requiring a
                        verification code in addition to your password when you log in.
                      </p>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Key className="mr-2 h-4 w-4" />
                      Set Up Two-Factor Authentication
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Login Sessions</CardTitle>
                    <CardDescription>Manage your active login sessions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="flex items-center">
                            <span className="font-medium">Current Session</span>
                            <Badge className="ml-2" variant="outline">
                              Active
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <span>Chrome on macOS</span>
                            <span className="mx-1">•</span>
                            <span>San Francisco, CA</span>
                            <span className="mx-1">•</span>
                            <span>Started 2 hours ago</span>
                          </div>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <span className="font-medium">iPhone 13</span>
                          <div className="text-sm text-muted-foreground">
                            <span>Safari on iOS</span>
                            <span className="mx-1">•</span>
                            <span>San Francisco, CA</span>
                            <span className="mx-1">•</span>
                            <span>Last active 1 day ago</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Logout
                        </Button>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <span className="font-medium">Windows Laptop</span>
                          <div className="text-sm text-muted-foreground">
                            <span>Firefox on Windows</span>
                            <span className="mx-1">•</span>
                            <span>San Francisco, CA</span>
                            <span className="mx-1">•</span>
                            <span>Last active 3 days ago</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Logout
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Logout of All Other Sessions
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

