import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Progress } from "../components/ui/progress"
import { Badge } from "../components/ui/badge"
import { Droplets, Footprints, Moon, Apple, Flame, Heart, TrendingUp, Bell } from "lucide-react"

export default function HomeScreen() {
  const healthMetrics = [
    { icon: Footprints, label: "Steps", value: "8,432", goal: "10,000", progress: 84, color: "text-primary" },
    { icon: Droplets, label: "Water", value: "6", goal: "8 glasses", progress: 75, color: "text-primary" },
    { icon: Moon, label: "Sleep", value: "7.5h", goal: "8h", progress: 94, color: "text-primary" },
    { icon: Flame, label: "Calories", value: "1,850", goal: "2,200", progress: 84, color: "text-primary" },
  ]

  const quickStats = [
    { label: "Streak", value: "12 days", icon: TrendingUp },
    { label: "Avg Heart Rate", value: "72 bpm", icon: Heart },
  ]

  return (
    <div className="p-4 space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-muted-foreground text-sm">Good morning,</p>
          <h1 className="text-2xl font-bold text-foreground">Sarah</h1>
        </div>
        <button className="relative p-2">
          <Bell className="h-6 w-6 text-foreground" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full" />
        </button>
      </header>

      <Card className="bg-primary text-primary-foreground">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Today's Progress</p>
              <p className="text-3xl font-bold">84%</p>
              <p className="text-sm opacity-90 mt-1">Keep it up! You're doing great</p>
            </div>
            <div className="h-20 w-20 rounded-full border-4 border-primary-foreground/30 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Flame className="h-8 w-8" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-3">
        {quickStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="font-semibold text-foreground">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-foreground">Daily Goals</h2>
          <Badge variant="secondary">3 of 4</Badge>
        </div>
        <div className="space-y-3">
          {healthMetrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <metric.icon className={`h-6 w-6 ${metric.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">{metric.label}</span>
                      <span className="text-sm text-muted-foreground">
                        {metric.value} / {metric.goal}
                      </span>
                    </div>
                    <Progress value={metric.progress} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h2>
        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Apple className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Logged breakfast</p>
                <p className="text-sm text-muted-foreground">450 calories • 8:30 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Footprints className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Morning walk</p>
                <p className="text-sm text-muted-foreground">2,500 steps • 7:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Droplets className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Drank water</p>
                <p className="text-sm text-muted-foreground">2 glasses • 6:45 AM</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}