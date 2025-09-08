import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, TrendingUp } from "lucide-react"
import type { HealthAlert } from "@/lib/types"

interface AlertTimelineProps {
  alerts: HealthAlert[]
}

export function AlertTimeline({ alerts }: AlertTimelineProps) {
  // Sort alerts by week and group by date
  const sortedAlerts = [...alerts].sort((a, b) => b.week_iso.localeCompare(a.week_iso))

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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Alert Timeline
        </CardTitle>
        <CardDescription>Chronological view of recent disease outbreak alerts</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {sortedAlerts.map((alert, index) => (
            <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-b-0">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>

              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{alert.disease} Alert</h4>
                  <Badge variant={getLevelColor(alert.level)}>{alert.level}</Badge>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {alert.district}, {alert.state}
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {alert.cases} cases
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Week {alert.week_iso.split("-W")[1]}, 2025
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
