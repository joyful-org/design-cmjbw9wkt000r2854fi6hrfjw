import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Switch } from "../components/ui/switch"
import { Label } from "../components/ui/label"
import { Separator } from "../components/ui/separator"
import { Badge } from "../components/ui/badge"
import { 
  Settings, 
  Bell, 
  Moon, 
  Shield, 
  HelpCircle, 
  LogOut, 
  ChevronRight,
  Target,
  Award,
  Calendar,
  Edit2
} from "lucide-react"

export default function ProfileScreen() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [healthReminders, setHealthReminders] = useState(true)

  const userStats = [
    { label: "Days Active", value: "127" },
    { label: "Goals Met", value: "89" },
    { label: "Streak", value: "12" },
  ]

  const menuItems = [
    { icon: Target, label: "Goals & Targets", badge: null },
    { icon: Award, label: "Achievements", badge: "3 new" },
    { icon: Calendar, label: "History", badge: null },
    { icon: Shield, label: "Privacy", badge: null },
    { icon: HelpCircle, label: "Help & Support", badge: null },
  ]

  return (
    <div className="p-4 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Profile</h1>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </header>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-20 w-20">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
              <button className="absolute bottom-0 right-0 h-7 w-7 bg-primary rounded-full flex items-center justify-center">
                <Edit2 className="h-3.5 w-3.5 text-primary-foreground" />
              </button>
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-foreground">Sarah Johnson</h2>
              <p className="text-muted-foreground text-sm">sarah.j@email.com</p>
              <Badge className="mt-2" variant="secondary">Premium Member</Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-6">
            {userStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <Label htmlFor="notifications">Push Notifications</Label>
            </div>
            <Switch
              id="notifications"
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Moon className="h-5 w-5 text-muted-foreground" />
              <Label htmlFor="darkMode">Dark Mode</Label>
            </div>
            <Switch
              id="darkMode"
              checked={darkMode}
              onCheckedChange={setDarkMode}
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-muted-foreground" />
              <Label htmlFor="reminders">Health Reminders</Label>
            </div>
            <Switch
              id="reminders"
              checked={healthReminders}
              onCheckedChange={setHealthReminders}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          {menuItems.map((item, index) => (
            <div key={index}>
              <button className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-muted-foreground" />
                  <span className="text-foreground">{item.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {item.badge && (
                    <Badge variant="secondary" className="text-xs">{item.badge}</Badge>
                  )}
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </button>
              {index < menuItems.length - 1 && <Separator />}
            </div>
          ))}
        </CardContent>
      </Card>

      <Button variant="outline" className="w-full text-destructive hover:text-destructive">
        <LogOut className="h-4 w-4 mr-2" />
        Sign Out
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Health Tracker v2.1.0
      </p>
    </div>
  )
}