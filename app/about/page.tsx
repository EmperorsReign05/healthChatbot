import { AboutView } from "@/components/about/about-view"
import { HealthInfographic } from "@/components/visual-aids/health-infographic"

export default function AboutPage() {
  const appFeaturesSteps = [
    {
      step: 1,
      title: "AI-Powered Chat",
      description: "Get instant health advice and answers to medical questions in English and Hindi",
      icon: "🤖",
    },
    {
      step: 2,
      title: "Disease Mapping",
      description: "View real-time disease outbreaks and health alerts on an interactive map",
      icon: "🗺️",
    },
    {
      step: 3,
      title: "Vaccination Tracking",
      description: "Track vaccination schedules and get reminders for upcoming immunizations",
      icon: "💉",
    },
    {
      step: 4,
      title: "Health Analytics",
      description: "Access comprehensive health data, trends, and surveillance information",
      icon: "📈",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main About Content */}
        <div className="lg:col-span-2">
          <AboutView />
        </div>

        {/* Visual Aids Sidebar */}
        <div className="space-y-6">
          <HealthInfographic
            title="App Features"
            description="Comprehensive health tools at your fingertips"
            steps={appFeaturesSteps}
            category="Features"
          />
        </div>
      </div>
    </div>
  )
}
