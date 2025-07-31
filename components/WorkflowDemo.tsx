"use client"

import { useState } from "react"
import { AlertTriangle, Phone, MapPin, Car, Navigation, Activity, ArrowRight, X, Play, Clock, Users, Shield, Zap, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"


export default function WorkflowDemo() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  const workflowSteps = [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "SOS Activation",
      description: "One-tap emergency activation or voice command 'Help Jeevifyy'",
      color: "bg-red-500",
      detail: "Works even with limited connectivity",
      fullDescription: "The SOS activation system is designed for maximum accessibility and reliability. Users can activate emergency services through multiple methods: a single tap on the SOS button, voice command 'Help Jeevifyy', or automatic detection of emergency keywords. The system works even with poor network connectivity, using offline capabilities and emergency protocols.",
      features: [
        "One-tap emergency activation",
        "Voice command recognition",
        "Offline functionality",
        "Automatic emergency detection",
        "Bilingual voice support"
      ],
      timeToActivate: "2-5 seconds",
      successRate: "99.9%"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Auto-Alert System",
      description: "Simultaneous alerts to contacts, hospitals, and emergency services",
      color: "bg-green-500",
      detail: "112/108 calls automated",
      fullDescription: "Our intelligent alert system simultaneously notifies all relevant parties within seconds. The system automatically calls emergency services (112/108), alerts pre-configured emergency contacts, and notifies nearby hospitals. The system uses smart routing to ensure the fastest response time and includes fallback mechanisms for network issues.",
      features: [
        "Simultaneous multi-party alerts",
        "Automated emergency service calls",
        "Smart contact prioritization",
        "Hospital pre-notification",
        "Fallback communication protocols"
      ],
      timeToActivate: "3-7 seconds",
      successRate: "99.7%"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location Share",
      description: "Instant GPS location sharing with emergency contacts",
      color: "bg-blue-500",
      detail: "Precise location even indoors",
      fullDescription: "Advanced location technology provides precise coordinates even in challenging environments. The system uses GPS, Wi-Fi triangulation, and cellular tower data to determine location with high accuracy. Indoor positioning is enhanced through building mapping and signal strength analysis, ensuring emergency responders can locate the user quickly.",
      features: [
        "High-precision GPS tracking",
        "Indoor positioning technology",
        "Real-time location updates",
        "Building floor mapping",
        "Emergency route optimization"
      ],
      timeToActivate: "1-3 seconds",
      successRate: "99.5%"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Transport Booking",
      description: "Automatic ambulance/cab booking with priority routing",
      color: "bg-purple-500",
      detail: "Green routing optimization",
      fullDescription: "Intelligent transport booking automatically selects the nearest available emergency vehicle and optimizes the route for the fastest arrival time. The system considers traffic conditions, road closures, and vehicle availability to ensure the most efficient response. Green routing minimizes environmental impact while maximizing speed.",
      features: [
        "Automatic vehicle selection",
        "Real-time traffic analysis",
        "Priority routing algorithms",
        "Green route optimization",
        "Multi-vehicle coordination"
      ],
      timeToActivate: "5-10 seconds",
      successRate: "98.9%"
    },
    {
      icon: <Navigation className="w-8 h-8" />,
      title: "Real-time Tracking",
      description: "Live vehicle tracking and ETA updates for all parties",
      color: "bg-orange-500",
      detail: "Family stays informed",
      fullDescription: "Comprehensive tracking system provides real-time updates to all stakeholders. Family members, emergency contacts, and medical personnel receive live updates on vehicle location, estimated arrival time, and route progress. The system includes predictive analytics to anticipate arrival times and automatically adjusts for changing conditions.",
      features: [
        "Live vehicle tracking",
        "Real-time ETA updates",
        "Family notification system",
        "Predictive arrival times",
        "Route progress monitoring"
      ],
      timeToActivate: "Continuous updates",
      successRate: "99.2%"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Coordinated Care",
      description: "Hospital preparation and seamless handoff",
      color: "bg-teal-500",
      detail: "Medical history shared securely",
      fullDescription: "Seamless coordination between emergency responders and healthcare facilities ensures optimal patient care. The system automatically shares relevant medical information, prepares hospital teams, and coordinates the handoff process. Secure data transmission protects patient privacy while providing essential information for medical decision-making.",
      features: [
        "Secure medical data sharing",
        "Hospital team preparation",
        "Seamless patient handoff",
        "Medical history integration",
        "Treatment coordination"
      ],
      timeToActivate: "Pre-arrival preparation",
      successRate: "99.8%"
    },
  ]

  const openStepDialog = (stepIndex: number) => {
    setSelectedStep(stepIndex)
    setShowVideo(false)
    setIsDialogOpen(true)
  }

  const openVideoDialog = () => {
    setSelectedStep(null)
    setShowVideo(true)
    setIsDialogOpen(true)
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    setSelectedStep(null)
    setShowVideo(false)
  }

  return (
    <>
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
                      <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">How Jeevifyy Works</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From emergency to care in 6 coordinated steps. Every action happens automatically to save precious time
              when it matters most.
            </p>
          </div>

          {/* Workflow Steps */}
          <div className="space-y-8">
            {workflowSteps.map((step, index) => (
              <div
                key={index}
                  className="relative animate-slide-in-right cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
                  onClick={() => openStepDialog(index)}
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 relative transform hover:scale-110 transition-all duration-300">
                    <div
                      className={`${step.color} text-white rounded-full p-4 shadow-lg animate-heartbeat`}
                      style={{ animationDelay: `${index * 0.3}s` }}
                    >
                      {step.icon}
                    </div>
                    <div
                      className="absolute -top-2 -right-2 bg-white text-gray-900 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow animate-bounce"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* Step Content */}
                    <div className="flex-grow bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transform hover:scale-105 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 animate-pulse">{step.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-2">{step.description}</p>
                          <p className="text-sm text-blue-600 dark:text-blue-400 font-medium animate-shimmer">{step.detail}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Play className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">Click to learn more</span>
                        </div>
                      </div>
                  </div>

                  {/* Enhanced Arrow */}
                  {index < workflowSteps.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-gray-400 animate-pulse" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Demo CTA */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-blue-600 to-red-600 dark:from-blue-700 dark:to-red-700 text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Experience the Full Workflow</h3>
                <p className="text-lg mb-6 opacity-90">Watch our complete demo or click on any step above to see detailed information</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={openVideoDialog}
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-200 hover:shadow-xl"
                  >
                    <Video className="w-5 h-5 mr-2" />
                    Watch Complete Demo
                  </Button>
              <div className="bg-white/20 rounded-lg p-4 text-center">
                    <p className="text-sm">🚀 Interactive Workflow Demo - Click any step to explore</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          {showVideo ? (
            // Video Content
            <>
              <DialogHeader className="p-6">
                <div className="flex items-center justify-between">
                  <DialogTitle className="flex items-center space-x-4 text-2xl text-gray-900 dark:text-white">
                    <Video className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    <span>Jeevifyy Workflow Demo</span>
                  </DialogTitle>
                  <Button
                    onClick={closeDialog}
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </DialogHeader>
              
              <div className="p-6">
                <div className="relative">
                  <video
                    className="w-full h-auto max-h-[70vh] rounded-lg"
                    controls
                    autoPlay
                    muted
                    onEnded={() => closeDialog()}
                  >
                    <source src="/watch demo/Video 1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </>
          ) : selectedStep !== null && workflowSteps[selectedStep] ? (
            // Step Details Content
            <>
              <DialogHeader className="p-6">
                <div className="flex items-center justify-between">
                  <DialogTitle className="flex items-center space-x-4 text-2xl text-gray-900 dark:text-white">
                    <div className={`${workflowSteps[selectedStep].color} text-white rounded-full p-3`}>
                      {workflowSteps[selectedStep].icon}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                          {selectedStep + 1}
                        </span>
                        <span>{workflowSteps[selectedStep].title}</span>
                      </div>
                    </div>
                  </DialogTitle>
                  <Button
                    onClick={closeDialog}
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </DialogHeader>

              <div className="p-6 space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Overview</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {workflowSteps[selectedStep].fullDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {workflowSteps[selectedStep].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span className="font-semibold text-blue-700 dark:text-blue-300">Activation Time</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {workflowSteps[selectedStep].timeToActivate}
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <span className="font-semibold text-green-700 dark:text-green-300">Success Rate</span>
                    </div>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {workflowSteps[selectedStep].successRate}
                    </p>
                  </div>
                </div>

                {/* Integration Info */}
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <span className="font-semibold text-purple-700 dark:text-purple-300">System Integration</span>
                  </div>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    This step integrates seamlessly with the next phase, ensuring continuous emergency response coordination.
                  </p>
        </div>
      </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  )
}
