"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Bell, AlertTriangle, CheckCircle, Clock } from "lucide-react"

interface AlertNotificationsProps {
  onClose: () => void
}

export function AlertNotifications({ onClose }: AlertNotificationsProps) {
  const [notifications] = useState([
    {
      id: 1,
      type: "outbreak",
      title: "New Dengue Outbreak",
      message: "Outbreak level alert declared in Jaipur, Rajasthan with 134 reported cases",
      time: "2 minutes ago",
      read: false,
    },
    {
      id: 2,
      type: "warning",
      title: "Malaria Warning",
      message: "Warning level alert for Ludhiana, Punjab with 145 cases reported",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      type: "update",
      title: "Alert Update",
      message: "Diarrhea outbreak in Kolkata shows signs of containment",
      time: "3 hours ago",
      read: true,
    },
  ])

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "outbreak":
        return <AlertTriangle className="w-4 h-4 text-destructive" />
      case "warning":
        return <Bell className="w-4 h-4 text-orange-500" />
      case "update":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      default:
        return <Bell className="w-4 h-4" />
    }
  }

  return (
    <Card className="fixed top-20 right-4 w-80 max-h-96 overflow-y-auto z-50 shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Notifications</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
        <CardDescription>Recent outbreak alerts and updates</CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-3 rounded-lg border ${
              notification.read ? "bg-muted/50" : "bg-background"
            } hover:bg-muted/70 transition-colors`}
          >
            <div className="flex items-start gap-3">
              {getNotificationIcon(notification.type)}
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm">{notification.title}</h4>
                  {!notification.read && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                </div>
                <p className="text-xs text-muted-foreground">{notification.message}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {notification.time}
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="pt-2 border-t">
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            View All Notifications
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
