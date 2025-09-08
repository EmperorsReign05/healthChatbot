"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { AlertTriangle, Bell, BellRing, MapPin, TrendingUp, Users, Search } from "lucide-react"
import { AlertCard } from "./alert-card"
import { AlertSubscription } from "./alert-subscription"
import { AlertTimeline } from "./alert-timeline"
import { AlertNotifications } from "./alert-notifications"
import alertsData from "@/data/alerts.json"
import type { HealthAlert } from "@/lib/types"

export function OutbreakAlertsView() {
  const [alerts, setAlerts] = useState<HealthAlert[]>(alertsData)
  const [filteredAlerts, setFilteredAlerts] = useState<HealthAlert[]>(alertsData)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLevel, setSelectedLevel] = useState<string>("all")
  const [showNotifications, setShowNotifications] = useState(false)

  useEffect(() => {
    let filtered = alerts

    if (searchTerm) {
      filtered = filtered.filter(
        (alert) =>
          alert.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
          alert.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
          alert.disease.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedLevel !== "all") {
      filtered = filtered.filter((alert) => alert.level === selectedLevel)
    }

    setFilteredAlerts(filtered)
  }, [alerts, searchTerm, selectedLevel])

  const alertLevels = [
    { id: "all", label: "All Alerts", count: alerts.length },
    { id: "Outbreak", label: "Outbreak", count: alerts.filter((a) => a.level === "Outbreak").length },
    { id: "Warning", label: "Warning", count: alerts.filter((a) => a.level === "Warning").length },
    { id: "Watch", label: "Watch", count: alerts.filter((a) => a.level === "Watch").length },
  ]

  const criticalAlerts = alerts.filter((alert) => alert.level === "Outbreak")
  const totalCases = alerts.reduce((sum, alert) => sum + alert.cases, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Outbreak Alerts</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real-time monitoring of disease outbreaks across India. Stay informed about health emergencies in your area
          and receive timely alerts.
        </p>
      </div>

      {/* Critical Alerts Banner */}
      {criticalAlerts.length > 0 && (
        <Card className="border-destructive bg-destructive/5">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <CardTitle className="text-destructive">Critical Outbreak Alert</CardTitle>
            </div>
            <CardDescription>
              {criticalAlerts.length} active outbreak{criticalAlerts.length > 1 ? "s" : ""} requiring immediate
              attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {criticalAlerts.map((alert, index) => (
                <Badge key={index} variant="destructive">
                  {alert.disease} in {alert.district}, {alert.state}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-2xl font-bold">{alerts.length}</p>
                <p className="text-sm text-muted-foreground">Total Alerts</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-destructive" />
              <div>
                <p className="text-2xl font-bold text-destructive">{criticalAlerts.length}</p>
                <p className="text-sm text-muted-foreground">Active Outbreaks</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-2xl font-bold">{totalCases.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">Total Cases</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-2xl font-bold">{new Set(alerts.map((a) => a.district)).size}</p>
                <p className="text-sm text-muted-foreground">Affected Districts</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Search className="w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search by location or disease..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-64"
          />
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setShowNotifications(!showNotifications)}
            className="flex items-center gap-2 bg-transparent"
          >
            <Bell className="w-4 h-4" />
            Notifications
          </Button>
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <BellRing className="w-4 h-4" />
            Subscribe to Alerts
          </Button>
        </div>
      </div>

      {/* Alert Level Filters */}
      <div className="flex flex-wrap gap-2">
        {alertLevels.map((level) => (
          <Button
            key={level.id}
            variant={selectedLevel === level.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedLevel(level.id)}
            className="flex items-center gap-2"
          >
            {level.label}
            <Badge variant="secondary" className="ml-1">
              {level.count}
            </Badge>
          </Button>
        ))}
      </div>

      {/* Main Content */}
      <Tabs defaultValue="alerts" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="alerts">Current Alerts</TabsTrigger>
          <TabsTrigger value="timeline">Alert Timeline</TabsTrigger>
          <TabsTrigger value="subscription">Manage Subscriptions</TabsTrigger>
        </TabsList>

        <TabsContent value="alerts" className="space-y-4">
          <div className="grid gap-4">
            {filteredAlerts.length > 0 ? (
              filteredAlerts.map((alert, index) => <AlertCard key={index} alert={alert} />)
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <AlertTriangle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No alerts found</h3>
                  <p className="text-muted-foreground">
                    No alerts match your current filters. Try adjusting your search criteria.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="timeline">
          <AlertTimeline alerts={alerts} />
        </TabsContent>

        <TabsContent value="subscription">
          <AlertSubscription />
        </TabsContent>
      </Tabs>

      {/* Notifications Panel */}
      {showNotifications && <AlertNotifications onClose={() => setShowNotifications(false)} />}
    </div>
  )
}
