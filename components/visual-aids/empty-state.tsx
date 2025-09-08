"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface EmptyStateProps {
  icon: React.ReactNode
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
}

export function EmptyState({ icon, title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <Card>
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 text-muted-foreground">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 max-w-sm mx-auto">{description}</p>
        {actionLabel && onAction && (
          <Button onClick={onAction} variant="outline" className="bg-transparent">
            {actionLabel}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
