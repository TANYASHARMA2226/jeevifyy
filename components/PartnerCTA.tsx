import { Handshake, Hospital, Truck, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PartnerCTA() {
  const partnerTypes = [
    {
      icon: <Hospital className="w-8 h-8" />,
      title: "Hospitals & Clinics",
      description: "Integrate with our emergency coordination system",
      benefits: ["Faster patient intake", "Pre-arrival preparation", "Reduced wait times"],
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Emergency Services",
      description: "Connect ambulances and first responders",
      benefits: ["Real-time dispatch", "Optimized routing", "Better coordination"],
    },
    // {
    //   icon: <Phone className="w-8 h-8" />,
    //   title: "Technology Partners",
    //   description: "Enhance our platform capabilities",
    //   benefits: ["Innovation collaboration"],
    // },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 dark:bg-white/10 text-white rounded-full mb-6">
              <Handshake className="w-8 h-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Us to Revolutionize Emergency Healthcare
            </h2>
            <p className="text-xl text-blue-100 dark:text-gray-200 max-w-3xl mx-auto">
              Partner with Jeevifyy to create a comprehensive emergency response network that saves lives through better
              coordination and faster response times.
            </p>
          </div>

          {/* Partner Types */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 justify-center">
            {partnerTypes.map((partner, index) => (
              <div key={index} className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-8 text-center border border-white/20 dark:border-gray-700">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 dark:bg-gray-700 text-white rounded-full mb-6">
                  {partner.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{partner.title}</h3>
                <p className="text-blue-100 dark:text-gray-300 mb-6">{partner.description}</p>
                <ul className="space-y-2 text-sm text-blue-200 dark:text-gray-400">
                  {partner.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-400 dark:bg-green-300 rounded-full mr-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Partnership Benefits */}
          <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/20 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Why Partner With Us?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">24/7</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Always Available</h4>
                <p className="text-blue-100 dark:text-gray-300 text-sm">
                  Emergency response doesn't wait for business hours
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 dark:bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">10min</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Rapid Response</h4>
                <p className="text-blue-100 dark:text-gray-300 text-sm">
                  Coordinated help within 10 minutes guaranteed
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 dark:bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">100%</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Reliable</h4>
                <p className="text-blue-100 dark:text-gray-300 text-sm">
                  Trusted by emergency services nationwide
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Button className="bg-white text-blue-600 dark:bg-white dark:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-200">
              Become a Partner
            </Button>
            <p className="text-blue-100 dark:text-gray-300 mt-4 text-sm">
              Join the revolution in emergency healthcare response
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
