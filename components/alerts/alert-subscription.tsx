"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bell, MapPin, AlertTriangle } from "lucide-react"

export function AlertSubscription() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [selectedDiseases, setSelectedDiseases] = useState<string[]>([])
  const [selectedStates, setSelectedStates] = useState<string[]>([])
  const [alertLevel, setAlertLevel] = useState("Warning")

  const diseases = ["Dengue", "Malaria", "Diarrhea", "Chikungunya", "Typhoid", "Hepatitis"]
  const states = [
    "Rajasthan",
    "Maharashtra",
    "West Bengal",
    "Tamil Nadu",
    "Karnataka",
    "Gujarat",
    "Uttar Pradesh",
    "Punjab",
  ]

  const handleDiseaseChange = (disease: string, checked: boolean) => {
    if (checked) {
      setSelectedDiseases([...selectedDiseases, disease])
    } else {
      setSelectedDiseases(selectedDiseases.filter((d) => d !== disease))
    }
  }

  const handleStateChange = (state: string, checked: boolean) => {
    if (checked) {
      setSelectedStates([...selectedStates, state])
    } else {
      setSelectedStates(selectedStates.filter((s) => s !== state))
    }
  }

  const handleSubscribe = () => {
    // In a real app, this would save subscription preferences
    alert("Alert subscription saved successfully!")
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="w-5 h-5" />
            Alert Subscription Settings
          </CardTitle>
          <CardDescription>
            Configure your alert preferences to receive notifications about disease outbreaks in your area
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Alert Level */}
          <div className="space-y-2">
            <Label htmlFor="alert-level">Minimum Alert Level</Label>
            <Select value={alertLevel} onValueChange={setAlertLevel}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Watch">Watch and above</SelectItem>
                <SelectItem value="Warning">Warning and above</SelectItem>
                <SelectItem value="Outbreak">Outbreak only</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Disease Selection */}
          <div className="space-y-3">
            <h3 className="font-semibold">Diseases to Monitor</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {diseases.map((disease) => (
                <div key={disease} className="flex items-center space-x-2">
                  <Checkbox
                    id={disease}
                    checked={selectedDiseases.includes(disease)}
                    onCheckedChange={(checked) => handleDiseaseChange(disease, checked as boolean)}
                  />
                  <Label htmlFor={disease} className="text-sm">
                    {disease}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Location Selection */}
          <div className="space-y-3">
            <h3 className="font-semibold">States to Monitor</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {states.map((state) => (
                <div key={state} className="flex items-center space-x-2">
                  <Checkbox
                    id={state}
                    checked={selectedStates.includes(state)}
                    onCheckedChange={(checked) => handleStateChange(state, checked as boolean)}
                  />
                  <Label htmlFor={state} className="text-sm">
                    {state}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Button onClick={handleSubscribe} className="w-full">
            <Bell className="w-4 h-4 mr-2" />
            Save Subscription Preferences
          </Button>
        </CardContent>
      </Card>

      {/* Current Subscriptions */}
      <Card>
        <CardHeader>
          <CardTitle>Active Subscriptions</CardTitle>
          <CardDescription>Manage your current alert subscriptions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-500" />
                <span className="text-sm">Dengue alerts in Maharashtra</span>
              </div>
              <Button size="sm" variant="outline">
                Unsubscribe
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span className="text-sm">All outbreak alerts nationwide</span>
              </div>
              <Button size="sm" variant="outline">
                Unsubscribe
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
