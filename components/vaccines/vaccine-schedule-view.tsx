"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, AlertCircle, Baby, Shield as Child, User, Users } from "lucide-react"
import { VaccineCard } from "./vaccine-card"
import { VaccineReminder } from "./vaccine-reminder"
import { vaccineSchedules } from "@/data/vaccines"

export function VaccineScheduleView() {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("infant")
  const [showReminders, setShowReminders] = useState(false)

  const ageGroups = [
    { id: "infant", label: "Infants (0-2 years)", icon: Baby },
    { id: "child", label: "Children (2-18 years)", icon: Child },
    { id: "adult", label: "Adults (18-60 years)", icon: User },
    { id: "elderly", label: "Elderly (60+ years)", icon: Users },
  ]

  const currentSchedule = vaccineSchedules[selectedAgeGroup as keyof typeof vaccineSchedules]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Vaccination Schedules</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Stay up-to-date with recommended vaccination schedules for all age groups. Protect yourself and your community
          through timely immunization.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Button variant="outline" onClick={() => setShowReminders(!showReminders)} className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          {showReminders ? "Hide" : "Set"} Reminders
        </Button>
        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
          <Clock className="w-4 h-4" />
          Find Nearby Centers
        </Button>
      </div>

      {/* Age Group Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Select Age Group
          </CardTitle>
          <CardDescription>Choose the appropriate age group to view relevant vaccination schedules</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ageGroups.map((group) => {
              const Icon = group.icon
              return (
                <Button
                  key={group.id}
                  variant={selectedAgeGroup === group.id ? "default" : "outline"}
                  className="h-auto p-4 flex flex-col items-center gap-2"
                  onClick={() => setSelectedAgeGroup(group.id)}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-sm font-medium text-center">{group.label}</span>
                </Button>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Vaccination Schedule */}
      <Tabs defaultValue="schedule" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="schedule">Vaccination Schedule</TabsTrigger>
          <TabsTrigger value="info">Vaccine Information</TabsTrigger>
        </TabsList>

        <TabsContent value="schedule" className="space-y-4">
          <div className="grid gap-4">
            {currentSchedule.map((vaccine, index) => (
              <VaccineCard key={index} vaccine={vaccine} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="info" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Important Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Before Vaccination:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Inform your healthcare provider about any allergies</li>
                  <li>Mention any current medications or health conditions</li>
                  <li>Bring your vaccination record/card</li>
                  <li>Stay hydrated and get adequate rest</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">After Vaccination:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Stay at the clinic for 15-30 minutes for observation</li>
                  <li>Apply ice to reduce soreness at injection site</li>
                  <li>Monitor for any unusual reactions</li>
                  <li>Contact healthcare provider if severe reactions occur</li>
                </ul>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Disclaimer:</strong> This information is for educational purposes only. Always consult with
                  qualified healthcare professionals for personalized medical advice.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Reminder Component */}
      {showReminders && <VaccineReminder />}
    </div>
  )
}
