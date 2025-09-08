import { ChatInterface } from "@/components/chat/chat-interface"
import { HealthTipsCarousel } from "@/components/visual-aids/health-tips-carousel"
import { SymptomChecker } from "@/components/visual-aids/symptom-checker"
import { PreventionGuide } from "@/components/visual-aids/prevention-guide"

export default function ChatPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-balance">Health Assistant Chat</h1>
        <p className="text-muted-foreground mt-2">
          Ask questions about health, symptoms, and prevention. Available in English and Hindi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chat Interface */}
        <div className="lg:col-span-2">
          <ChatInterface />
        </div>

        {/* Visual Aids Sidebar */}
        <div className="space-y-6">
          <HealthTipsCarousel />

          <SymptomChecker />

          <PreventionGuide />
        </div>
      </div>
    </div>
  )
}
