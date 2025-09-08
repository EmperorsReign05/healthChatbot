"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, Calendar, Mail, Phone } from "lucide-react"

export function VaccineReminder() {
  const [reminderType, setReminderType] = useState("email")
  const [reminderDate, setReminderDate] = useState("")
  const [contact, setContact] = useState("")

  const handleSetReminder = () => {
    // In a real app, this would integrate with a notification system
    alert(`Reminder set for ${reminderDate} via ${reminderType}`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="w-5 h-5" />
          Set Vaccination Reminder
        </CardTitle>
        <CardDescription>Get notified when it's time for your next vaccination</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="reminder-date">Reminder Date</Label>
            <Input
              id="reminder-date"
              type="date"
              value={reminderDate}
              onChange={(e) => setReminderDate(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="reminder-type">Reminder Method</Label>
            <Select value={reminderType} onValueChange={setReminderType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </div>
                </SelectItem>
                <SelectItem value="sms">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    SMS
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact">{reminderType === "email" ? "Email Address" : "Phone Number"}</Label>
          <Input
            id="contact"
            type={reminderType === "email" ? "email" : "tel"}
            placeholder={reminderType === "email" ? "your@email.com" : "+91 9876543210"}
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>

        <Button onClick={handleSetReminder} className="w-full">
          <Calendar className="w-4 h-4 mr-2" />
          Set Reminder
        </Button>
      </CardContent>
    </Card>
  )
}
