"use client"

import { Progress } from "@/components/ui/progress"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Check,
  CreditCard,
  Download,
  Gift,
  HelpCircle,
  History,
  Layers,
  Shield,
  Users,
  X,
} from "lucide-react"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

// Mock data for subscription plans
const subscriptionPlans = [
  {
    id: "free",
    name: "Free",
    price: "£0",
    period: "forever",
    description: "Basic features for individual learners",
    features: [
      { text: "Up to 5 decks", included: true },
      { text: "Up to 500 cards total", included: true },
      { text: "Basic spaced repetition", included: true },
      { text: "Community deck access", included: true },
      { text: "Basic statistics", included: true },
      { text: "Ad-supported", included: true },
      { text: "Cloud sync", included: false },
      { text: "Advanced analytics", included: false },
      { text: "Priority support", included: false },
    ],
    popular: false,
    current: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "£9.99",
    period: "per month",
    description: "Advanced features for serious learners",
    features: [
      { text: "Unlimited decks", included: true },
      { text: "Unlimited cards", included: true },
      { text: "Advanced spaced repetition", included: true },
      { text: "Community deck access", included: true },
      { text: "Advanced statistics", included: true },
      { text: "Ad-free experience", included: true },
      { text: "Cloud sync across devices", included: true },
      { text: "Priority support", included: true },
      { text: "Offline mode", included: true },
    ],
    popular: true,
    current: false,
  },
  {
    id: "family",
    name: "Family",
    price: "£19.99",
    period: "per month",
    description: "Premium features for up to 5 family members",
    features: [
      { text: "All Premium features", included: true },
      { text: "Up to 5 user accounts", included: true },
      { text: "Shared family decks", included: true },
      { text: "Family progress tracking", included: true },
      { text: "Family leaderboards", included: true },
      { text: "Parental controls", included: true },
      { text: "Priority support", included: true },
      { text: "Offline mode", included: true },
      { text: "Early access to new features", included: true },
    ],
    popular: false,
    current: false,
  },
]

// Mock data for billing history
const billingHistory = [
  {
    id: "INV-001",
    date: "Mar 1, 2023",
    amount: "£9.99",
    status: "Paid",
    plan: "Premium Monthly",
  },
  {
    id: "INV-002",
    date: "Feb 1, 2023",
    amount: "£9.99",
    status: "Paid",
    plan: "Premium Monthly",
  },
  {
    id: "INV-003",
    date: "Jan 1, 2023",
    amount: "£9.99",
    status: "Paid",
    plan: "Premium Monthly",
  },
  {
    id: "INV-004",
    date: "Dec 1, 2022",
    amount: "£9.99",
    status: "Paid",
    plan: "Premium Monthly",
  },
]

export default function SubscriptionPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [billingCycle, setBillingCycle] = useState("monthly")

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1">
        <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">Subscription</h1>
              <p className="text-muted-foreground">Manage your subscription plan and billing information</p>
            </div>

            <Tabs defaultValue="plans" className="space-y-4">
              <TabsList>
                <TabsTrigger value="plans">Subscription Plans</TabsTrigger>
                <TabsTrigger value="billing">Billing & Payment</TabsTrigger>
              </TabsList>

              <TabsContent value="plans" className="space-y-6">
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-bold">Choose Your Plan</h2>
                    <p className="text-sm text-muted-foreground">Select the plan that best fits your learning needs</p>
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg border p-1">
                    <Button
                      variant={billingCycle === "monthly" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setBillingCycle("monthly")}
                    >
                      Monthly
                    </Button>
                    <Button
                      variant={billingCycle === "annual" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setBillingCycle("annual")}
                    >
                      Annual (Save 20%)
                    </Button>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {subscriptionPlans.map((plan) => (
                    <Card
                      key={plan.id}
                      className={`relative overflow-hidden ${plan.popular ? "border-primary shadow-md" : ""}`}
                    >
                      {plan.popular && (
                        <div className="absolute right-0 top-0">
                          <div className="bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                            Popular
                          </div>
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>{plan.name}</CardTitle>
                        <CardDescription>{plan.description}</CardDescription>
                        <div className="mt-2">
                          <span className="text-3xl font-bold">{plan.price}</span>
                          <span className="text-muted-foreground">/{plan.period}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="space-y-2">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              {feature.included ? (
                                <Check className="mr-2 h-5 w-5 shrink-0 text-green-500" />
                              ) : (
                                <X className="mr-2 h-5 w-5 shrink-0 text-muted-foreground" />
                              )}
                              <span className={feature.included ? "" : "text-muted-foreground"}>{feature.text}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        {plan.current ? (
                          <Button variant="outline" className="w-full" disabled>
                            Current Plan
                          </Button>
                        ) : (
                          <Button className="w-full">
                            {plan.id === "free" ? "Downgrade" : "Upgrade"}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Current Subscription</CardTitle>
                    <CardDescription>You are currently on the Free plan</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">Free Plan</span>
                            <Badge variant="outline">Current</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Basic features for individual learners</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">$0</div>
                          <div className="text-xs text-muted-foreground">forever</div>
                        </div>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Decks Used</span>
                          <span>3/5</span>
                        </div>
                        <Progress value={60} className="h-2" />
                        <div className="flex items-center justify-between text-sm">
                          <span>Cards Used</span>
                          <span>245/500</span>
                        </div>
                        <Progress value={49} className="h-2" />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 rounded-lg border border-dashed p-4">
                      <Gift className="h-5 w-5 text-primary" />
                      <div className="flex-1">
                        <p className="font-medium">Upgrade to Premium</p>
                        <p className="text-sm text-muted-foreground">
                          Unlock unlimited decks, cards, and advanced features
                        </p>
                      </div>
                      <Button>Upgrade</Button>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Frequently Asked Questions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <HelpCircle className="mt-0.5 h-4 w-4 text-primary" />
                          <div>
                            <p className="font-medium">Can I cancel my subscription at any time?</p>
                            <p className="text-sm text-muted-foreground">
                              Yes, you can cancel your subscription at any time. Your plan will remain active until the
                              end of your current billing period.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <HelpCircle className="mt-0.5 h-4 w-4 text-primary" />
                          <div>
                            <p className="font-medium">What happens to my data if I downgrade?</p>
                            <p className="text-sm text-muted-foreground">
                              If you exceed the limits of your new plan, your data will be preserved but you won't be
                              able to add new content until you're under the limit.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <HelpCircle className="mt-0.5 h-4 w-4 text-primary" />
                          <div>
                            <p className="font-medium">Do you offer student discounts?</p>
                            <p className="text-sm text-muted-foreground">
                              Yes, we offer a 50% discount for verified students. Contact our support team with your
                              student ID to apply.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Need Help?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-start space-x-4">
                          <Users className="mt-0.5 h-5 w-5 text-primary" />
                          <div className="space-y-1">
                            <p className="font-medium">Contact Support</p>
                            <p className="text-sm text-muted-foreground">
                              Our support team is available 24/7 to help with any subscription or billing questions.
                            </p>
                            <Button variant="outline" size="sm" className="mt-2">
                              Contact Support
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="flex items-start space-x-4">
                          <Layers className="mt-0.5 h-5 w-5 text-primary" />
                          <div className="space-y-1">
                            <p className="font-medium">Compare Plans</p>
                            <p className="text-sm text-muted-foreground">
                              View a detailed comparison of all our subscription plans and features.
                            </p>
                            <Button variant="outline" size="sm" className="mt-2">
                              View Comparison
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="billing" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                    <CardDescription>Manage your payment methods and billing information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex h-10 w-16 items-center justify-center rounded-md border bg-muted">
                            <CreditCard className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-medium">No payment method added</p>
                            <p className="text-sm text-muted-foreground">
                              Add a payment method to upgrade your subscription
                            </p>
                          </div>
                        </div>
                        <Button>Add Payment Method</Button>
                      </div>
                    </div>
                    <div className="rounded-lg border border-dashed p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Shield className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium">Secure Payment Processing</p>
                            <p className="text-sm text-muted-foreground">
                              All payments are securely processed and encrypted
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Billing History</CardTitle>
                    <CardDescription>View your past invoices and payment history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border">
                      <div className="grid grid-cols-5 gap-4 p-4 font-medium border-b">
                        <div>Invoice</div>
                        <div>Date</div>
                        <div>Plan</div>
                        <div>Amount</div>
                        <div>Status</div>
                      </div>
                      <div className="divide-y">
                        {billingHistory.map((invoice) => (
                          <div key={invoice.id} className="grid grid-cols-5 gap-4 p-4">
                            <div className="flex items-center">
                              <span className="text-sm font-medium">{invoice.id}</span>
                            </div>
                            <div className="text-sm">{invoice.date}</div>
                            <div className="text-sm">{invoice.plan}</div>
                            <div className="text-sm">{invoice.amount}</div>
                            <div className="flex items-center">
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                {invoice.status}
                              </Badge>
                              <Button variant="ghost" size="icon" className="ml-2">
                                <Download className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Billing Information</CardTitle>
                    <CardDescription>Manage your billing address and tax information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Billing Address</p>
                          <p className="text-sm text-muted-foreground">No billing address added</p>
                        </div>
                        <Button variant="outline">Add Address</Button>
                      </div>
                    </div>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Tax Information</p>
                          <p className="text-sm text-muted-foreground">No tax information added</p>
                        </div>
                        <Button variant="outline">Add Tax Info</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Subscription Management</CardTitle>
                    <CardDescription>Manage your subscription status</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start space-x-4">
                        <History className="mt-0.5 h-5 w-5 text-primary" />
                        <div className="space-y-1">
                          <p className="font-medium">Cancel Subscription</p>
                          <p className="text-sm text-muted-foreground">
                            You are currently on the Free plan. Upgrading to a paid plan will give you access to premium
                            features.
                          </p>
                          <Button variant="outline" size="sm" className="mt-2" disabled>
                            Cancel Subscription
                          </Button>
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

