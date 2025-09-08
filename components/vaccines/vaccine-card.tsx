import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, AlertTriangle } from "lucide-react"
import type { Vaccine } from "@/data/vaccines"

interface VaccineCardProps {
  vaccine: Vaccine
}

export function VaccineCard({ vaccine }: VaccineCardProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive"
      case "medium":
        return "default"
      case "low":
        return "secondary"
      default:
        return "outline"
    }
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{vaccine.name}</CardTitle>
            <CardDescription>{vaccine.description}</CardDescription>
          </div>
          <Badge variant={getPriorityColor(vaccine.priority)}>{vaccine.priority} priority</Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span>Age: {vaccine.age}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span>Doses: {vaccine.doses}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span>Route: {vaccine.route}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium text-sm">Protects Against:</h4>
          <div className="flex flex-wrap gap-1">
            {vaccine.protectsAgainst.map((disease, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {disease}
              </Badge>
            ))}
          </div>
        </div>

        {vaccine.sideEffects && (
          <div className="space-y-2">
            <h4 className="font-medium text-sm flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              Common Side Effects:
            </h4>
            <p className="text-xs text-muted-foreground">{vaccine.sideEffects}</p>
          </div>
        )}

        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
            Schedule Appointment
          </Button>
          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
            Set Reminder
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
