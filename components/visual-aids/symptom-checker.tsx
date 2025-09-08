"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, User, Activity } from "lucide-react"

interface Symptom {
  id: string
  name: string
  severity: "mild" | "moderate" | "severe"
  bodyPart: string
}

const symptoms: Symptom[] = [
  { id: "fever", name: "Fever", severity: "moderate", bodyPart: "general" },
  { id: "headache", name: "Headache", severity: "mild", bodyPart: "head" },
  { id: "cough", name: "Cough", severity: "mild", bodyPart: "chest" },
  { id: "breathing", name: "Difficulty Breathing", severity: "severe", bodyPart: "chest" },
  { id: "chest-pain", name: "Chest Pain", severity: "severe", bodyPart: "chest" },
  { id: "nausea", name: "Nausea", severity: "mild", bodyPart: "abdomen" },
  { id: "vomiting", name: "Vomiting", severity: "moderate", bodyPart: "abdomen" },
  { id: "diarrhea", name: "Diarrhea", severity: "moderate", bodyPart: "abdomen" },
]

export function SymptomChecker() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)

  const toggleSymptom = (symptomId: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptomId) ? prev.filter((id) => id !== symptomId) : [...prev, symptomId],
    )
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "severe":
        return "destructive"
      case "moderate":
        return "default"
      case "mild":
        return "secondary"
      default:
        return "outline"
    }
  }

  const getRecommendation = () => {
    const selectedSeverities = selectedSymptoms.map((id) => symptoms.find((s) => s.id === id)?.severity)

    if (selectedSeverities.includes("severe")) {
      return {
        level: "urgent",
        message: "Seek immediate medical attention. Call emergency services if necessary.",
        icon: <AlertTriangle className="w-5 h-5 text-destructive" />,
        color: "destructive",
      }
    } else if (selectedSeverities.includes("moderate")) {
      return {
        level: "moderate",
        message: "Consider consulting a healthcare provider within 24 hours.",
        icon: <Activity className="w-5 h-5 text-orange-500" />,
        color: "default",
      }
    } else {
      return {
        level: "mild",
        message: "Monitor symptoms. Rest and stay hydrated. Consult a doctor if symptoms worsen.",
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
        color: "secondary",
      }
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="w-5 h-5" />
          Symptom Checker
        </CardTitle>
        <CardDescription>
          Select your symptoms to get basic health guidance. This is not a substitute for professional medical advice.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Body Diagram */}
        <div className="text-center">
          <div className="inline-block p-8 bg-muted rounded-lg">
            <div className="w-32 h-48 mx-auto relative">
              {/* Simple body outline */}
              <svg viewBox="0 0 100 150" className="w-full h-full">
                {/* Head */}
                <circle
                  cx="50"
                  cy="20"
                  r="15"
                  fill="currentColor"
                  opacity="0.1"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                {/* Body */}
                <rect
                  x="35"
                  y="35"
                  width="30"
                  height="40"
                  rx="5"
                  fill="currentColor"
                  opacity="0.1"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                {/* Arms */}
                <rect
                  x="20"
                  y="40"
                  width="15"
                  height="25"
                  rx="7"
                  fill="currentColor"
                  opacity="0.1"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <rect
                  x="65"
                  y="40"
                  width="15"
                  height="25"
                  rx="7"
                  fill="currentColor"
                  opacity="0.1"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                {/* Legs */}
                <rect
                  x="40"
                  y="75"
                  width="8"
                  height="35"
                  rx="4"
                  fill="currentColor"
                  opacity="0.1"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <rect
                  x="52"
                  y="75"
                  width="8"
                  height="35"
                  rx="4"
                  fill="currentColor"
                  opacity="0.1"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Select symptoms from the list below</p>
          </div>
        </div>

        {/* Symptom Selection */}
        <div className="space-y-4">
          <h3 className="font-semibold">Select Your Symptoms:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {symptoms.map((symptom) => (
              <Button
                key={symptom.id}
                variant={selectedSymptoms.includes(symptom.id) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleSymptom(symptom.id)}
                className="h-auto p-3 flex flex-col items-center gap-2"
              >
                <span className="text-sm font-medium">{symptom.name}</span>
                <Badge variant={getSeverityColor(symptom.severity)} className="text-xs">
                  {symptom.severity}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Results */}
        {selectedSymptoms.length > 0 && (
          <div className="space-y-4">
            <Button onClick={() => setShowResults(true)} className="w-full">
              Get Health Guidance ({selectedSymptoms.length} symptoms selected)
            </Button>

            {showResults && (
              <Card className="border-2">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    {getRecommendation().icon}
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">Health Guidance</h4>
                      <p className="text-sm text-muted-foreground mb-3">{getRecommendation().message}</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedSymptoms.map((id) => {
                          const symptom = symptoms.find((s) => s.id === id)
                          return (
                            <Badge key={id} variant="outline" className="text-xs">
                              {symptom?.name}
                            </Badge>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        <div className="p-3 bg-muted rounded-lg">
          <p className="text-xs text-muted-foreground">
            <strong>Disclaimer:</strong> This tool provides general guidance only. Always consult qualified healthcare
            professionals for proper medical diagnosis and treatment.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
