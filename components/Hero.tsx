"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown, TrendingUp, Users } from "lucide-react"

export default function Hero() {
  const [liveMetrics, setLiveMetrics] = useState({
    rescueTime: 8.2,
    livesImpacted: 15420,
    activeUsers: 127
  })

  const [isVideoOpen, setIsVideoOpen] = useState(false)

  // Update live metrics every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        rescueTime: prev.rescueTime + (Math.random() - 0.5) * 0.2,
        livesImpacted: prev.livesImpacted + Math.floor(Math.random() * 3),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 5) - 2
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const scrollToMission = () => {
    const missionSection = document.getElementById("mission")
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-red-600 dark:from-gray-900 dark:via-blue-900 dark:to-red-900 text-white overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat animate-pulse"></div>
        </div>

        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 dark:bg-white/5 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-red-400/20 dark:bg-red-400/10 rounded-full animate-bounce"></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-blue-400/20 dark:bg-blue-400/10 rounded-full animate-ping"></div>
          <div className="absolute top-60 left-1/3 w-8 h-8 bg-yellow-400/30 dark:bg-yellow-400/20 rounded-full animate-pulse"></div>
          <div
            className="absolute bottom-60 right-1/3 w-14 h-14 bg-green-400/20 dark:bg-green-400/10 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Enhanced Live Metrics Banner */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-full px-6 py-2 border border-white/20 dark:border-white/10 animate-slide-in-up">
            <div className="flex items-center space-x-6 text-sm text-white dark:text-white">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 dark:bg-green-300 rounded-full animate-pulse"></div>
                <span>Avg Rescue: {liveMetrics.rescueTime.toFixed(1)}min</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 animate-bounce" />
                <span>Lives Impacted: {liveMetrics.livesImpacted.toLocaleString()}+</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 animate-pulse" />
                <span>{liveMetrics.activeUsers} Active Now</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Enhanced Left Content */}
            <div className="space-y-8 mt-16">
              <div className="space-y-6">
                <div className="bg-red-500/20 dark:bg-red-500/10 backdrop-blur-sm rounded-full px-4 py-2 w-fit border border-red-300/30 dark:border-red-300/20 animate-slide-in-right">
                  <span className="text-sm font-semibold text-white dark:text-white animate-pulse">🚨 Stay Calm. Help is on the way!</span>
                </div>

                <h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-in-right text-white dark:text-white"
                  style={{ animationDelay: "0.2s" }}
                >
                  Jeevifyy: Your Instant
                  <span className="text-yellow-300 dark:text-yellow-200 animate-text-glow"> Lifeline</span> in Health Emergencies
                </h1>

                <p
                  className="text-xl md:text-2xl text-blue-100 dark:text-gray-200 leading-relaxed animate-slide-in-right"
                  style={{ animationDelay: "0.4s" }}
                >
                  Reach coordinated help in under 10 minutes –
                  <span className="font-semibold text-white dark:text-white animate-shimmer">
                    {" "}
                    Bilingual guidance, smart routing, instant alerts.
                  </span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-right" style={{ animationDelay: "0.6s" }}>
                <Button
                  onClick={() => setIsVideoOpen(true)}
                  className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-gray-700 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200 hover:shadow-xl animate-enhanced-glow"
                >
                  Watch Demo
                  <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
                </Button>
              </div>

              {/* Enhanced Quick Stats with more animations */}
              <div className="grid grid-cols-3 gap-6 pt-8 animate-slide-in-right" style={{ animationDelay: "0.8s" }}>
                <div className="text-center bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/20 dark:border-white/10 transform hover:scale-110 transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10 animate-float">
                  <div className="text-3xl font-bold text-yellow-300 dark:text-yellow-200 animate-heartbeat">{"<10"}</div>
                  <div className="text-sm text-blue-100 dark:text-gray-200">Minutes Response</div>
                  <div className="text-xs text-blue-200 dark:text-gray-300 mt-1 animate-pulse">Guaranteed</div>
                </div>
                <div
                  className="text-center bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/20 dark:border-white/10 transform hover:scale-110 transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10 animate-float"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div
                    className="text-3xl font-bold text-yellow-300 dark:text-yellow-200 animate-heartbeat"
                    style={{ animationDelay: "0.5s" }}
                  >
                    24/7
                  </div>
                  <div className="text-sm text-blue-100 dark:text-gray-200">Availability</div>
                  <div className="text-xs text-blue-200 dark:text-gray-300 mt-1 animate-pulse">Always Ready</div>
                </div>
                <div
                  className="text-center bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/20 dark:border-white/10 transform hover:scale-110 transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10 animate-float"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="text-3xl font-bold text-yellow-300 dark:text-yellow-200 animate-heartbeat" style={{ animationDelay: "1s" }}>
                    2+
                  </div>
                  <div className="text-sm text-blue-100 dark:text-gray-200">Languages</div>
                  <div className="text-xs text-blue-200 dark:text-gray-300 mt-1 animate-pulse">EN + हिंदी</div>
                </div>
              </div>
            </div>

            {/* Enhanced Right Content - Hero Image */}
            <div className="relative animate-slide-in-left">
              <div className="relative z-10 transform hover:scale-105 transition-all duration-500">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl max-w-sm mx-auto bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-600 flex items-center justify-center">
                  <Image
                    src="/homepage.png"
                    alt="Jeevifyy Emergency First Aid Response - Smartphone with SOS button and first aid assistance"
                    width={380}
                    height={480}
                    className="w-full h-full object-contain rounded-lg"
                    priority
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      width: 'auto',
                      height: 'auto'
                    }}
                  />
                </div>
              </div>

              {/* Enhanced Floating Elements with more animations */}
              <div className="absolute -top-4 -right-4 bg-red-500 dark:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse-emergency shadow-lg transform hover:scale-110 transition-all duration-200">
                🚨 SOS Active
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 dark:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce transform hover:scale-110 transition-all duration-200">
                ✅ Help En Route
              </div>
              <div className="absolute top-1/2 -left-8 bg-blue-500 dark:bg-blue-600 text-white px-3 py-2 rounded-full text-xs font-semibold shadow-lg animate-float transform hover:scale-110 transition-all duration-200">
                📍 Location Shared
              </div>

              {/* Additional floating elements */}
              <div className="absolute top-1/4 -right-6 bg-yellow-500 dark:bg-yellow-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg animate-pulse">
                ⚡ Fast
              </div>
              <div
                className="absolute bottom-1/4 -left-6 bg-purple-500 dark:bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg animate-bounce"
                style={{ animationDelay: "1s" }}
              >
                🌐 24/7
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <ArrowDown className="w-6 h-6 text-white/70 dark:text-white/80 animate-pulse" />
            <span className="text-xs text-white/50 dark:text-white/60">Scroll to explore</span>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full mx-4 bg-white dark:bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Jeevifyy Demo</h3>
              <button
                onClick={() => setIsVideoOpen(false)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Video Player */}
            <div className="relative">
              <video
                className="w-full h-auto max-h-[70vh]"
                controls
                autoPlay
                muted
                onEnded={() => setIsVideoOpen(false)}
              >
                <source src="/watch demo/Video 1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
