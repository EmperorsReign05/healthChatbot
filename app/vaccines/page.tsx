import { VaccineScheduleView } from "@/components/vaccines/vaccine-schedule-view"
import { VaccinationProgress } from "@/components/visual-aids/vaccination-progress"
import { HealthInfographic } from "@/components/visual-aids/health-infographic"

export default function VaccinesPage() {
  const vaccinationSteps = [
    {
      step: 1,
      title: "Consult Healthcare Provider",
      description: "Discuss your vaccination needs and medical history with a qualified healthcare professional",
      icon: "👩‍⚕️",
    },
    {
      step: 2,
      title: "Schedule Appointment",
      description: "Book your vaccination appointment at a certified healthcare facility or clinic",
      icon: "📅",
    },
    {
      step: 3,
      title: "Prepare for Vaccination",
      description: "Bring your vaccination record, stay hydrated, and inform about any allergies",
      icon: "📋",
    },
    {
      step: 4,
      title: "Receive Vaccination",
      description: "Get vaccinated by trained healthcare professionals in a safe environment",
      icon: "💉",
    },
    {
      step: 5,
      title: "Post-Vaccination Care",
      description: "Monitor for side effects, follow care instructions, and schedule follow-up if needed",
      icon: "🏥",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Vaccine Schedule */}
        <div className="lg:col-span-2">
          <VaccineScheduleView />
        </div>

        {/* Visual Aids Sidebar */}
        <div className="space-y-6">
          <VaccinationProgress />

          <HealthInfographic
            title="Vaccination Process"
            description="Step-by-step guide to getting vaccinated safely"
            steps={vaccinationSteps}
            category="Vaccination"
          />
        </div>
      </div>
    </div>
  )
}
