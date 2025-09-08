import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HealthTipsCarousel } from "./health-tips-carousel"
import { SymptomChecker } from "./symptom-checker"
import { PreventionGuide } from "./prevention-guide"
import { VaccinationProgress } from "./vaccination-progress"
import { HealthInfographic } from "./health-infographic"

export function VisualAidsShowcase() {
  const sampleSteps = [
    {
      step: 1,
      title: "Interactive Health Tools",
      description: "Engage with visual symptom checkers and health assessments",
      icon: "🔍",
    },
    {
      step: 2,
      title: "Educational Content",
      description: "Learn through infographics and visual prevention guides",
      icon: "📚",
    },
    {
      step: 3,
      title: "Progress Tracking",
      description: "Monitor your health journey with visual progress indicators",
      icon: "📈",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Visual Health Aids</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Interactive visual tools to enhance your health education and awareness
        </p>
      </div>

      <Tabs defaultValue="tools" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="tools">Health Tools</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="tracking">Progress</TabsTrigger>
          <TabsTrigger value="tips">Daily Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="tools" className="space-y-6">
          <SymptomChecker />
        </TabsContent>

        <TabsContent value="education" className="space-y-6">
          <div className="grid gap-6">
            <PreventionGuide />
            <HealthInfographic
              title="Visual Health Education"
              description="Learn health concepts through interactive visual guides"
              steps={sampleSteps}
              category="Education"
            />
          </div>
        </TabsContent>

        <TabsContent value="tracking" className="space-y-6">
          <VaccinationProgress />
        </TabsContent>

        <TabsContent value="tips" className="space-y-6">
          <HealthTipsCarousel />
        </TabsContent>
      </Tabs>
    </div>
  )
}
