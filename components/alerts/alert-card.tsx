import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, TrendingUp, Users, ExternalLink, Bell } from "lucide-react"
import type { HealthAlert } from "@/lib/types"

interface AlertCardProps {
  alert: HealthAlert
}

export function AlertCard({ alert }: AlertCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Outbreak":
        return "destructive"
      case "Warning":
        return "default"
      case "Watch":
        return "secondary"
      default:
        return "outline"
    }
  }

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "Outbreak":
        return "🔴"
      case "Warning":
        return "🟠"
      case "Watch":
        return "🟡"
      default:
        return "🟢"
    }
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg flex items-center gap-2">
              <span>{getLevelIcon(alert.level)}</span>
              {alert.disease} Outbreak
            </CardTitle>
            <CardDescription className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {alert.district}, {alert.state}
            </CardDescription>
          </div>
          <Badge variant={getLevelColor(alert.level)}>{alert.level}</Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span>{alert.cases} cases</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span>Week {alert.week_iso.split("-W")[1]}</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
            <span>Active</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium text-sm">Prevention Measures:</h4>
          <div className="text-xs text-muted-foreground space-y-1">
            {alert.disease === "Dengue" && (
              <ul className="list-disc list-inside space-y-1">
                <li>Eliminate stagnant water sources</li>
                <li>Use mosquito repellents and nets</li>
                <li>Seek immediate medical attention for fever</li>
              </ul>
            )}
            {alert.disease === "Malaria" && (
              <ul className="list-disc list-inside space-y-1">
                <li>Use insecticide-treated bed nets</li>
                <li>Apply mosquito repellents</li>
                <li>Take antimalarial medication if prescribed</li>
              </ul>
            )}
            {alert.disease === "Diarrhea" && (
              <ul className="list-disc list-inside space-y-1">
                <li>Drink only boiled or bottled water</li>
                <li>Maintain proper hand hygiene</li>
                <li>Avoid street food and raw vegetables</li>
              </ul>
            )}
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
            <ExternalLink className="w-3 h-3 mr-1" />
            View Details
          </Button>
          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
            <Bell className="w-3 h-3 mr-1" />
            Subscribe
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
