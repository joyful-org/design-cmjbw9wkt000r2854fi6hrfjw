import { useState } from "react"
import HomeScreen from "./components/HomeScreen"
import LogScreen from "./components/LogScreen"
import StatsScreen from "./components/StatsScreen"
import ProfileScreen from "./components/ProfileScreen"
import { Home, PlusCircle, BarChart3, User } from "lucide-react"

export default function App() {
  const [activeTab, setActiveTab] = useState("home")

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen />
      case "log":
        return <LogScreen />
      case "stats":
        return <StatsScreen />
      case "profile":
        return <ProfileScreen />
      default:
        return <HomeScreen />
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 overflow-auto pb-20">
        {renderScreen()}
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
        <div className="flex items-center justify-around py-2">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center gap-1 p-2 ${activeTab === "home" ? "text-primary" : "text-muted-foreground"}`}
          >
            <Home className="h-5 w-5" />
            <span className="text-xs">Home</span>
          </button>
          <button
            onClick={() => setActiveTab("log")}
            className={`flex flex-col items-center gap-1 p-2 ${activeTab === "log" ? "text-primary" : "text-muted-foreground"}`}
          >
            <PlusCircle className="h-5 w-5" />
            <span className="text-xs">Log</span>
          </button>
          <button
            onClick={() => setActiveTab("stats")}
            className={`flex flex-col items-center gap-1 p-2 ${activeTab === "stats" ? "text-primary" : "text-muted-foreground"}`}
          >
            <BarChart3 className="h-5 w-5" />
            <span className="text-xs">Stats</span>
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex flex-col items-center gap-1 p-2 ${activeTab === "profile" ? "text-primary" : "text-muted-foreground"}`}
          >
            <User className="h-5 w-5" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  )
}