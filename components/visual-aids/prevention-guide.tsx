import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface PreventionStep {
  icon: string
  title: string
  description: string
  effectiveness: "high" | "medium" | "low"
}

interface PreventionGuideProps {
  disease: string
  description: string
  steps: PreventionStep[]
}

const preventionData = {
  dengue: {
    disease: "Dengue Prevention",
    description: "Prevent dengue by controlling mosquito breeding and protecting yourself from bites",
    steps: [
      {
        icon: "🏠",
        title: "Remove Standing Water",
        description: "Empty containers, flower pots, and any water storage weekly",
        effectiveness: "high" as const,
      },
      {
        icon: "🧴",
        title: "Use Repellents",
        description: "Apply mosquito repellent containing DEET on exposed skin",
        effectiveness: "high" as const,
      },
      {
        icon: "👕",
        title: "Wear Protective Clothing",
        description: "Use long-sleeved shirts and pants, especially during dawn and dusk",
        effectiveness: "medium" as const,
      },
      {
        icon: "🪟",
        title: "Install Screens",
        description: "Use window and door screens to prevent mosquito entry",
        effectiveness: "medium" as const,
      },
    ],
  },
  malaria: {
    disease: "Malaria Prevention",
    description: "Protect yourself from malaria-carrying mosquitoes with these proven methods",
    steps: [
      {
        icon: "🛏️",
        title: "Use Bed Nets",
        description: "Sleep under insecticide-treated bed nets every night",
        effectiveness: "high" as const,
      },
      {
        icon: "💊",
        title: "Take Prophylaxis",
        description: "Use antimalarial medication as prescribed by healthcare provider",
        effectiveness: "high" as const,
      },
      {
        icon: "🏠",
        title: "Indoor Spraying",
        description: "Apply indoor residual spraying in high-risk areas",
        effectiveness: "high" as const,
      },
      {
        icon: "🌙",
        title: "Avoid Peak Hours",
        description: "Stay indoors during evening and night when mosquitoes are most active",
        effectiveness: "medium" as const,
      },
    ],
  },
  diarrhea: {
    disease: "Diarrhea Prevention",
    description: "Prevent diarrheal diseases through proper hygiene and safe practices",
    steps: [
      {
        icon: "🧼",
        title: "Hand Hygiene",
        description: "Wash hands with soap for 20 seconds before eating and after using toilet",
        effectiveness: "high" as const,
      },
      {
        icon: "💧",
        title: "Safe Water",
        description: "Drink only boiled, bottled, or properly treated water",
        effectiveness: "high" as const,
      },
      {
        icon: "🍳",
        title: "Cook Food Properly",
        description: "Eat hot, freshly cooked food and avoid raw or undercooked items",
        effectiveness: "high" as const,
      },
      {
        icon: "🧽",
        title: "Food Safety",
        description: "Keep food covered, refrigerated, and consume within safe time limits",
        effectiveness: "medium" as const,
      },
    ],
  },
}

export function PreventionGuide() {
  const getEffectivenessColor = (effectiveness: string) => {
    switch (effectiveness) {
      case "high":
        return "default"
      case "medium":
        return "secondary"
      case "low":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Disease Prevention Guide</CardTitle>
        <CardDescription>Visual guides for preventing common diseases in your area</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="dengue" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="dengue">Dengue</TabsTrigger>
            <TabsTrigger value="malaria">Malaria</TabsTrigger>
            <TabsTrigger value="diarrhea">Diarrhea</TabsTrigger>
          </TabsList>

          {Object.entries(preventionData).map(([key, data]) => (
            <TabsContent key={key} value={key} className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold mb-2">{data.disease}</h3>
                <p className="text-sm text-muted-foreground">{data.description}</p>
              </div>

              <div className="grid gap-4">
                {data.steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold">{step.title}</h4>
                        <Badge variant={getEffectivenessColor(step.effectiveness)} className="text-xs">
                          {step.effectiveness} effectiveness
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold text-sm mb-2">💡 Remember:</h4>
                <p className="text-xs text-muted-foreground">
                  Combine multiple prevention methods for maximum protection. Consistency is key to effective disease
                  prevention.
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
