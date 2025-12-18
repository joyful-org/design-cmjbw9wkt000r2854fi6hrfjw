import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Progress } from "../components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { TrendingUp, TrendingDown, Minus, Calendar, Award, Target } from "lucide-react"

export default function StatsScreen() {
  const weeklyData = [
    { day: "Mon", steps: 8500, water: 7, sleep: 7 },
    { day: "Tue", steps: 10200, water: 8, sleep: 8 },
    { day: "Wed", steps: 7800, water: 6, sleep: 6.5 },
    { day: "Thu", steps: 9100, water: 8, sleep: 7.5 },
    { day: "Fri", steps: 11000, water: 7, sleep: 8 },
    { day: "Sat", steps: 6500, water: 5, sleep: 9 },
    { day: "Sun", steps: 8432, water: 6, sleep: 7.5 },
  ]

  const achievements = [
    { name: "Step Master", description: "10K steps 5 days in a row", progress: 80, icon: "🏃" },
    { name: "Hydration Hero", description: "Drink 8 glasses daily for a week", progress: 57, icon: "💧" },
    { name: "Sleep Champion", description: "8 hours sleep for 7 days", progress: 43, icon: "😴" },
    { name: "Consistency King", description: "Log every day for 30 days", progress: 40, icon: "👑" },
  ]

  const summaryStats = [
    { label: "Avg Steps", value: "8,790", trend: "up", change: "+12%" },
    { label: "Avg Water", value: "6.7", trend: "down", change: "-5%" },
    { label: "Avg Sleep", value: "7.6h", trend: "same", change: "0%" },
    { label: "Calories", value: "1,920", trend: "up", change: "+8%" },
  ]

  const maxSteps = Math.max(...weeklyData.map(d => d.steps))

  return (
    <div className="p-4 space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-foreground">Statistics</h1>
        <p className="text-muted-foreground">Your health journey insights</p>
      </header>

      <div className="grid grid-cols-2 gap-3">
        {summaryStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-xl font-bold text-foreground">{stat.value}</p>
                <div className={`flex items-center text-xs ${
                  stat.trend === "up" ? "text-primary" : 
                  stat.trend === "down" ? "text-destructive" : "text-muted-foreground"
                }`}>
                  {stat.trend === "up" && <TrendingUp className="h-3 w-3" />}
                  {stat.trend === "down" && <TrendingDown className="h-3 w-3" />}
                  {stat.trend === "same" && <Minus className="h-3 w-3" />}
                  <span className="ml-1">{stat.change}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="week" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="month">Month</TabsTrigger>
          <TabsTrigger value="year">Year</TabsTrigger>
        </TabsList>

        <TabsContent value="week" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Steps This Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between gap-2 h-32">
                {weeklyData.map((day, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className="w-full bg-primary rounded-t-sm transition-all"
                      style={{ height: `${(day.steps / maxSteps) * 100}%` }}
                    />
                    <span className="text-xs text-muted-foreground mt-2">{day.day}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="month" className="mt-4">
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground">Monthly view coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="year" className="mt-4">
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground">Yearly view coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <section>
        <div className="flex items-center gap-2 mb-4">
          <Award className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Achievements</h2>
        </div>
        <div className="space-y-3">
          {achievements.map((achievement, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-foreground">{achievement.name}</span>
                      <Badge variant="secondary">{achievement.progress}%</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{achievement.description}</p>
                    <Progress value={achievement.progress} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Weekly Goal Progress</p>
              <p className="text-sm text-muted-foreground">You've completed 78% of your weekly goals</p>
            </div>
          </div>
          <Progress value={78} className="h-3 mt-4" />
        </CardContent>
      </Card>
    </div>
  )
}