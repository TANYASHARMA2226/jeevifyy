import { Clock, Users, Globe, TrendingUp } from "lucide-react"

export default function ImpactMetrics() {
  const metrics = [
    {
      icon: <Clock className="w-12 h-12" />,
      number: "< 10",
      unit: "Minutes",
      label: "Average Response Time",
      description: "From SOS to help arrival",
      color: "text-red-600",
    },
    {
      icon: <Users className="w-12 h-12" />,
      number: "10,000+",
      unit: "",
      label: "Potential Lives Saved",
      description: "Through faster emergency response",
      color: "text-blue-600",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      number: "24/7",
      unit: "",
      label: "Global Coverage",
      description: "Available anywhere, anytime",
      color: "text-green-600",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      number: "85%",
      unit: "",
      label: "Faster Than Traditional",
      description: "Compared to standard emergency calls",
      color: "text-purple-600",
    },
  ]

  const populations = [
    "Urban communities with high connectivity",
    "Rural areas with limited infrastructure",
    "Elderly populations requiring immediate assistance",
    "Travelers in unfamiliar locations",
    "People with disabilities or mobility challenges",
    "Non-native speakers needing multilingual support",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Impact Promise</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Measurable results in emergency response times and lives saved through intelligent coordination and
              universal accessibility.
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <div className={metric.color}>{metric.icon}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">
                    {metric.number}
                    <span className="text-2xl text-blue-200 ml-1">{metric.unit}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{metric.label}</h3>
                  <p className="text-sm text-blue-200">{metric.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Designed for All Populations */}
          <div className="bg-white/5 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Designed for All Populations</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {populations.map((population, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 rounded-lg p-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">{population}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold mb-4">Every Second Counts</h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join us in revolutionizing emergency healthcare response. Together, we can ensure no one waits alone in
              their moment of need.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
