import { DashboardView } from "@/components/dashboard/dashboard-view"
import { HealthInfographic } from "@/components/visual-aids/health-infographic"

export default function DashboardPage() {
  const healthMonitoringSteps = [
    {
      step: 1,
      title: "Data Collection",
      description: "Gather health data from hospitals, clinics, and community health centers across districts",
      icon: "📊",
    },
    {
      step: 2,
      title: "Analysis & Processing",
      description: "Analyze disease patterns, trends, and identify potential outbreak indicators",
      icon: "🔍",
    },
    {
      step: 3,
      title: "Alert Generation",
      description: "Generate automated alerts when disease thresholds are exceeded in any region",
      icon: "🚨",
    },
    {
      step: 4,
      title: "Public Notification",
      description: "Notify healthcare authorities and the public about health risks and prevention measures",
      icon: "📢",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-balance">Health Dashboard</h1>
        <p className="text-muted-foreground mt-2">Disease trends and surveillance analytics</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Dashboard */}
        <div className="lg:col-span-3">
          <DashboardView />
        </div>

        {/* Visual Aids Sidebar */}
        <div className="space-y-6">
          <HealthInfographic
            title="Health Surveillance Process"
            description="How we monitor and track disease outbreaks"
            steps={healthMonitoringSteps}
            category="Surveillance"
          />
        </div>
      </div>
    </div>
  )
}
