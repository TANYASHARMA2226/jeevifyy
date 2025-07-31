import Hero from "@/components/Hero"
import Mission from "@/components/Mission"
import WorkflowDemo from "@/components/WorkflowDemo"
import TechnologyHighlights from "@/components/TechnologyHighlights"
import ImpactMetrics from "@/components/ImpactMetrics"
import PartnerCTA from "@/components/PartnerCTA"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Mission />
      <WorkflowDemo />
      <TechnologyHighlights />
      <ImpactMetrics />
      <PartnerCTA />
    </main>
  )
}
