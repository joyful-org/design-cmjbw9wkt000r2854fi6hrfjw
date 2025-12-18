import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Slider } from "../components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Droplets, Footprints, Moon, Apple, Plus, Minus, Check } from "lucide-react"

export default function LogScreen() {
  const [waterGlasses, setWaterGlasses] = useState(6)
  const [sleepHours, setSleepHours] = useState([7.5])
  const [steps, setSteps] = useState("")
  const [calories, setCalories] = useState("")
  const [mealName, setMealName] = useState("")

  const quickAddMeals = [
    { name: "Breakfast", calories: 400 },
    { name: "Lunch", calories: 600 },
    { name: "Dinner", calories: 700 },
    { name: "Snack", calories: 150 },
  ]

  return (
    <div className="p-4 space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-foreground">Log Activity</h1>
        <p className="text-muted-foreground">Track your daily health metrics</p>
      </header>

      <Tabs defaultValue="water" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="water" className="text-xs">
            <Droplets className="h-4 w-4" />
          </TabsTrigger>
          <TabsTrigger value="food" className="text-xs">
            <Apple className="h-4 w-4" />
          </TabsTrigger>
          <TabsTrigger value="steps" className="text-xs">
            <Footprints className="h-4 w-4" />
          </TabsTrigger>
          <TabsTrigger value="sleep" className="text-xs">
            <Moon className="h-4 w-4" />
          </TabsTrigger>
        </TabsList>

        <TabsContent value="water" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-primary" />
                Water Intake
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center gap-6">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full"
                  onClick={() => setWaterGlasses(Math.max(0, waterGlasses - 1))}
                >
                  <Minus className="h-5 w-5" />
                </Button>
                <div className="text-center">
                  <p className="text-5xl font-bold text-foreground">{waterGlasses}</p>
                  <p className="text-muted-foreground">glasses</p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full"
                  onClick={() => setWaterGlasses(waterGlasses + 1)}
                >
                  <Plus className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex justify-center gap-2">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-8 w-4 rounded-full transition-colors ${
                      i < waterGlasses ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
              <Button className="w-full" size="lg">
                <Check className="h-4 w-4 mr-2" />
                Save Water Intake
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="food" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Apple className="h-5 w-5 text-primary" />
                Log Meal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Meal Name</Label>
                <Input
                  placeholder="What did you eat?"
                  value={mealName}
                  onChange={(e) => setMealName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Calories</Label>
                <Input
                  type="number"
                  placeholder="Enter calories"
                  value={calories}
                  onChange={(e) => setCalories(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Quick Add</Label>
                <div className="grid grid-cols-2 gap-2">
                  {quickAddMeals.map((meal) => (
                    <Button
                      key={meal.name}
                      variant="outline"
                      className="justify-start"
                      onClick={() => {
                        setMealName(meal.name)
                        setCalories(meal.calories.toString())
                      }}
                    >
                      <span className="truncate">{meal.name}</span>
                      <span className="ml-auto text-muted-foreground text-xs">
                        {meal.calories} cal
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
              <Button className="w-full" size="lg">
                <Check className="h-4 w-4 mr-2" />
                Log Meal
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="steps" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Footprints className="h-5 w-5 text-primary" />
                Steps
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Manual Entry</Label>
                <Input
                  type="number"
                  placeholder="Enter steps"
                  value={steps}
                  onChange={(e) => setSteps(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1000, 2500, 5000].map((val) => (
                  <Button
                    key={val}
                    variant="outline"
                    onClick={() => setSteps(val.toString())}
                  >
                    +{val.toLocaleString()}
                  </Button>
                ))}
              </div>
              <Button className="w-full" size="lg">
                <Check className="h-4 w-4 mr-2" />
                Log Steps
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sleep" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Moon className="h-5 w-5 text-primary" />
                Sleep
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-5xl font-bold text-foreground">{sleepHours[0]}</p>
                <p className="text-muted-foreground">hours of sleep</p>
              </div>
              <div className="px-4">
                <Slider
                  value={sleepHours}
                  onValueChange={setSleepHours}
                  min={0}
                  max={12}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>0h</span>
                  <span>6h</span>
                  <span>12h</span>
                </div>
              </div>
              <Button className="w-full" size="lg">
                <Check className="h-4 w-4 mr-2" />
                Log Sleep
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}