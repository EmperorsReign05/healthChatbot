"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Lightbulb } from "lucide-react"

interface HealthTip {
  id: number
  icon: string
  title: string
  description: string
  category: string
}

const healthTips: HealthTip[] = [
  {
    id: 1,
    icon: "💧",
    title: "Stay Hydrated",
    description: "Drink at least 8 glasses of water daily to maintain proper body function and prevent dehydration.",
    category: "General Health",
  },
  {
    id: 2,
    icon: "🧼",
    title: "Wash Your Hands",
    description: "Regular handwashing with soap for 20 seconds prevents the spread of infections and diseases.",
    category: "Hygiene",
  },
  {
    id: 3,
    icon: "🏃",
    title: "Exercise Regularly",
    description: "Aim for at least 30 minutes of moderate exercise daily to boost immunity and overall health.",
    category: "Fitness",
  },
  {
    id: 4,
    icon: "😴",
    title: "Get Quality Sleep",
    description: "Adults need 7-9 hours of sleep nightly for proper immune function and mental health.",
    category: "Sleep",
  },
  {
    id: 5,
    icon: "🥗",
    title: "Eat Balanced Diet",
    description: "Include fruits, vegetables, whole grains, and lean proteins for optimal nutrition.",
    category: "Nutrition",
  },
  {
    id: 6,
    icon: "🦟",
    title: "Prevent Mosquito Bites",
    description: "Use repellents and remove standing water to prevent vector-borne diseases like dengue and malaria.",
    category: "Disease Prevention",
  },
]

export function HealthTipsCarousel() {
  const [currentTip, setCurrentTip] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % healthTips.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % healthTips.length)
  }

  const prevTip = () => {
    setCurrentTip((prev) => (prev - 1 + healthTips.length) % healthTips.length)
  }

  const tip = healthTips[currentTip]

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Health Tip of the Day</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm">
              {tip.icon}
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">{tip.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{tip.description}</p>
              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">{tip.category}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-1">
              {healthTips.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTip ? "bg-primary" : "bg-primary/30"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={prevTip} className="w-8 h-8 p-0 bg-white/50">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" onClick={nextTip} className="w-8 h-8 p-0 bg-white/50">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
