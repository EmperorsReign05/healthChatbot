import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <Card key={i}>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-muted rounded-full animate-pulse"></div>
              <div className="space-y-2 flex-1">
                <div className="h-4 bg-muted rounded animate-pulse"></div>
                <div className="h-3 bg-muted rounded w-2/3 animate-pulse"></div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="h-3 bg-muted rounded animate-pulse"></div>
              <div className="h-3 bg-muted rounded w-4/5 animate-pulse"></div>
              <div className="h-3 bg-muted rounded w-3/5 animate-pulse"></div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
