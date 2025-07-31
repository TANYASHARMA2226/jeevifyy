import { Globe, Users, Zap } from "lucide-react"

export default function Mission() {
  return (
    <section id="mission" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">Our Mission</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
                <span className="font-semibold text-red-600 dark:text-red-400">No one should suffer or lose their life</span> due to delayed
                medical response, lack of coordination, or poor information. Jeevifyy connects people in urgent health
                crises to rapid, coordinated help.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We believe emergency healthcare should be accessible to everyone, everywhere – from bustling urban
                centers to remote rural communities, regardless of connectivity or language barriers.
              </p>
            </div>
          </div>

          {/* Key Principles */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-blue-50 dark:bg-gray-800 rounded-xl border border-blue-200 dark:border-gray-700">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 dark:bg-blue-500 text-white rounded-full mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Instant Response</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every second counts in emergencies. Our system activates help within seconds and coordinates response
                within minutes.
              </p>
            </div>

            <div className="text-center p-8 bg-red-50 dark:bg-gray-800 rounded-xl border border-red-200 dark:border-gray-700">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 dark:bg-red-500 text-white rounded-full mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Universal Access</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Designed for all populations – urban and rural, high and low connectivity, multiple languages and
                accessibility needs.
              </p>
            </div>

            <div className="text-center p-8 bg-green-50 dark:bg-gray-800 rounded-xl border border-green-200 dark:border-gray-700">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 dark:bg-green-500 text-white rounded-full mb-6">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Smart Coordination</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Intelligent routing, real-time updates, and seamless coordination between all emergency response
                stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
