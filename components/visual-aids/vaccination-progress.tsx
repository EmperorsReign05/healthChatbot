"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react"

interface VaccineProgress {
  name: string
  completed: number
  total: number
  nextDue?: string
  status: "completed" | "in-progress" | "overdue" | "upcoming"
}

const sampleProgress: VaccineProgress[] = [
  { name: "Hepatitis B", completed: 3, total: 3, status: "completed" },
  { name: "DPT", completed: 2, total: 3, nextDue: "2025-02-15", status: "in-progress" },
  { name: "MMR", completed: 0, total: 2, nextDue: "2025-03-01", status: "upcoming" },
  { name: "Polio Booster", completed: 0, total: 1, nextDue: "2024-12-01", status: "overdue" },
]

export function VaccinationProgress() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "in-progress":
        return <Clock className="w-4 h-4 text-blue-500" />
      case "overdue":
        return <AlertCircle className="w-4 h-4 text-destructive" />
      case "upcoming":
        return <Calendar className="w-4 h-4 text-orange-500" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "default"
      case "in-progress":
        return "secondary"
      case "overdue":
        return "destructive"
      case "upcoming":
        return "outline"
      default:
        return "outline"
    }
  }

  const overallProgress = sampleProgress.reduce((acc, vaccine) => acc + vaccine.completed, 0)
  const totalVaccines = sampleProgress.reduce((acc, vaccine) => acc + vaccine.total, 0)
  const progressPercentage = (overallProgress / totalVaccines) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">💉</div>
          Vaccination Progress
        </CardTitle>
        <CardDescription>Track your vaccination schedule and upcoming appointments</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Progress */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Overall Progress</h3>
            <span className="text-sm text-muted-foreground">
              {overallProgress} of {totalVaccines} doses completed
            </span>
          </div>
          <Progress value={progressPercentage} className="h-3" />
          <div className="text-center">
            <span className="text-2xl font-bold text-primary">{Math.round(progressPercentage)}%</span>
            <p className="text-xs text-muted-foreground">Complete</p>
          </div>
        </div>

        {/* Individual Vaccines */}
        <div className="space-y-4">
          <h3 className="font-semibold">Vaccine Schedule</h3>
          {sampleProgress.map((vaccine, index) => (
            <div key={index} className="space-y-2 p-4 border rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getStatusIcon(vaccine.status)}
                  <span className="font-medium">{vaccine.name}</span>
                </div>
                <Badge variant={getStatusColor(vaccine.status)}>{vaccine.status}</Badge>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>
                    Doses: {vaccine.completed}/{vaccine.total}
                  </span>
                  {vaccine.nextDue && <span className="text-muted-foreground">Next: {vaccine.nextDue}</span>}
                </div>
                <Progress value={(vaccine.completed / vaccine.total) * 100} className="h-2" />
              </div>

              {vaccine.status === "overdue" && (
                <div className="flex items-center gap-2 mt-2">
                  <Button size="sm" variant="destructive" className="flex-1">
                    Schedule Now
                  </Button>
                </div>
              )}

              {vaccine.status === "in-progress" && (
                <div className="flex items-center gap-2 mt-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    Set Reminder
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Calendar className="w-4 h-4" />
            View Full Schedule
          </Button>
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <CheckCircle className="w-4 h-4" />
            Mark as Complete
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
