import { Languages, Leaf, Bell, Brain, Smartphone, Shield } from "lucide-react"

export default function TechnologyHighlights() {
  const technologies = [
    {
      icon: <Languages className="w-12 h-12" />,
      title: "Bilingual Guidance",
      description: "Audio and visual first aid instructions in local languages",
      features: ["Voice-guided CPR", "Visual emergency steps", "Multi-language support"],
      color: "from-blue-500 to-blue-600",
      badge: "Live",
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Green Routing",
      description: "Eco-optimized route suggestions based on real-time traffic data",
      features: ["Live traffic analysis", "Fuel-efficient paths", "Carbon footprint tracking"],
      color: "from-green-500 to-green-600",
      badge: "Live",
    },
    {
      icon: <Bell className="w-12 h-12" />,
      title: "Automated Contact Alerts",
      description: "Instant notifications to all contacts even if user is unconscious",
      features: ["Emergency contact cascade", "Hospital notifications", "Family updates"],
      color: "from-red-500 to-red-600",
      badge: "Live",
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI Triage System",
      description: "Smart case scoring and priority assessment for optimal care",
      features: ["Symptom analysis", "Priority scoring", "Resource allocation"],
      color: "from-purple-500 to-purple-600",
      badge: "Coming Soon",
    },
  ]

  const additionalFeatures = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Offline Capability",
      description: "Core functions work even with limited connectivity",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy First",
      description: "End-to-end encryption for all medical data",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Powered by Smart Technology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced features designed to save lives through intelligent automation, real-time coordination, and
              inclusive accessibility.
            </p>
          </div>

          {/* Main Technology Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover-lift animate-slide-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold animate-pulse ${
                      tech.badge === "Live" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {tech.badge}
                  </span>
                </div>

                {/* Header with Enhanced Gradient */}
                <div className={`bg-gradient-to-r ${tech.color} text-white p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                  <div className="flex items-center space-x-4 relative z-10">
                    <div className="animate-float">{tech.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold animate-text-glow">{tech.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-700 animate-slide-in-right"
                        style={{ animationDelay: `${index * 0.2 + featureIndex * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Features */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Built for Reliability</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white rounded-lg p-4">
                  <div className="text-blue-600">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
