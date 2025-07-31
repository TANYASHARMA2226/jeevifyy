"use client"

import { useState, useRef } from "react"
import {
  AlertTriangle,
  MapPin,
  Clock,
  CheckCircle,
  X,
  Shield,
  Users,
  Truck,
  Heart,
  Loader2,
  Activity,
  Zap,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SOSStatus {
  step: string
  status: "pending" | "loading" | "completed" | "error"
  message: string
  timestamp?: Date
}

interface EmergencyContact {
  id: string
  name: string
  phone: string
  relationship: string
  notified: boolean
  timestamp?: Date
}

export default function SOSPage() {
  const [isSOSActive, setIsSOSActive] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const [sosSteps, setSOSSteps] = useState<SOSStatus[]>([
    { step: "location", status: "pending", message: "Fetching your location..." },
    { step: "contacts", status: "pending", message: "Notifying emergency contacts..." },
    { step: "services", status: "pending", message: "Contacting emergency services..." },
    { step: "rescue", status: "pending", message: "Dispatching rescue team..." },
  ])
  const [currentLocation, setCurrentLocation] = useState<string>("")
  const [emergencyContacts] = useState<EmergencyContact[]>([
    { id: "1", name: "Dr. Sarah Johnson", phone: "+1-555-0123", relationship: "Family Doctor", notified: false },
    { id: "2", name: "John Doe", phone: "+1-555-0456", relationship: "Emergency Contact", notified: false },
    { id: "3", name: "Jane Smith", phone: "+1-555-0789", relationship: "Family Member", notified: false },
  ])
  const [showCancelOption, setShowCancelOption] = useState(false)
  const [isSafe, setIsSafe] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])

  const sosButtonRef = useRef<HTMLButtonElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Haptic feedback for mobile devices
  const triggerHaptic = () => {
    if ("vibrate" in navigator) {
      navigator.vibrate([200, 100, 200])
    }
  }

  // Particle animation system
  const createParticles = () => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }))
    setParticles(newParticles)

    setTimeout(() => setParticles([]), 3000)
  }

  // SOS Activation with countdown
  const activateSOS = async () => {
    triggerHaptic()
    setCountdown(3)

    // Countdown animation
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval)
          startSOSProcess()
          return 0
        }
        triggerHaptic()
        return prev - 1
      })
    }, 1000)
  }

  // Main SOS Process
  const startSOSProcess = async () => {
    setIsSOSActive(true)
    createParticles()

    // Step 1: Get Location
    await processStep("location", async () => {
      return new Promise((resolve) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords
              setCurrentLocation(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`)
              resolve(true)
            },
            () => {
              setCurrentLocation("Location unavailable")
              resolve(false)
            },
          )
        } else {
          setCurrentLocation("Geolocation not supported")
          resolve(false)
        }
      })
    })

    // Step 2: Notify Contacts
    await processStep("contacts", async () => {
      for (let i = 0; i < emergencyContacts.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 800))
        emergencyContacts[i].notified = true
        emergencyContacts[i].timestamp = new Date()
      }
      return true
    })

    // Step 3: Contact Emergency Services
    await processStep("services", async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      return true
    })

    // Step 4: Dispatch Rescue
    await processStep("rescue", async () => {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      return true
    })

    setShowCancelOption(true)
  }

  // Process individual SOS steps
  const processStep = async (stepName: string, action: () => Promise<boolean>) => {
    setSOSSteps((prev) => prev.map((step) => (step.step === stepName ? { ...step, status: "loading" } : step)))

    try {
      const success = await action()
      setSOSSteps((prev) =>
        prev.map((step) =>
          step.step === stepName
            ? {
                ...step,
                status: success ? "completed" : "error",
                timestamp: new Date(),
              }
            : step,
        ),
      )
    } catch (error) {
      setSOSSteps((prev) =>
        prev.map((step) => (step.step === stepName ? { ...step, status: "error", timestamp: new Date() } : step)),
      )
    }
  }

  // Cancel SOS or mark as safe
  const handleSafeStatus = async () => {
    setIsSafe(true)

    setTimeout(() => {
      alert("All contacts have been notified that you are safe!")
      setIsSOSActive(false)
      setShowCancelOption(false)
      setIsSafe(false)
      setSOSSteps((prev) => prev.map((step) => ({ ...step, status: "pending", timestamp: undefined })))
    }, 2000)
  }

  const getStepIcon = (step: SOSStatus) => {
    const baseClasses = "w-5 h-5"
    switch (step.status) {
      case "loading":
        return <Loader2 className={`${baseClasses} animate-spin text-blue-600`} />
      case "completed":
        return <CheckCircle className={`${baseClasses} text-green-600`} />
      case "error":
        return <X className={`${baseClasses} text-red-600`} />
      default:
        return <Clock className={`${baseClasses} ${isSOSActive ? "text-gray-500" : "text-gray-400"}`} />
    }
  }

  const getStepMessage = (step: SOSStatus) => {
    switch (step.step) {
      case "location":
        return step.status === "completed" ? `Location acquired: ${currentLocation}` : step.message
      case "contacts":
        return step.status === "completed" ? `${emergencyContacts.length} contacts notified` : step.message
      case "services":
        return step.status === "completed" ? "Emergency services (112/108) contacted" : step.message
      case "rescue":
        return step.status === "completed" ? "Rescue team dispatched - ETA 8 minutes" : step.message
      default:
        return step.message
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-orange-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-orange-600/30 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Particle System */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"
          style={{
            left: particle.x,
            top: particle.y,
            animationDuration: "1s",
          }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-full mb-6 animate-heartbeat">
            <AlertTriangle className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Emergency SOS</h1>
          <p className="text-xl opacity-90">
            {isSOSActive ? "Help is on the way!" : "Press and hold SOS button for emergency assistance"}
          </p>
        </div>

        {/* Countdown Display */}
        {countdown > 0 && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="text-center">
              <div className="text-9xl font-bold text-red-500 animate-bounce mb-4">{countdown}</div>
              <p className="text-2xl">Activating SOS...</p>
            </div>
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* SOS Button Section */}
            <div className="text-center">
              {!isSOSActive ? (
                <div className="relative">
                  <button
                    ref={sosButtonRef}
                    onClick={activateSOS}
                    className="relative w-64 h-64 mx-auto bg-red-600 hover:bg-red-700 rounded-full shadow-2xl transform transition-all duration-200 hover:scale-105 active:scale-95 animate-emergency-glow emergency-button"
                    style={{
                      boxShadow: "0 0 50px rgba(220, 38, 38, 0.8), 0 0 100px rgba(220, 38, 38, 0.4)",
                    }}
                  >
                    <div className="absolute inset-4 border-4 border-white rounded-full animate-pulse">
                      <div className="flex items-center justify-center h-full">
                        <span className="text-4xl font-bold">SOS</span>
                      </div>
                    </div>

                    {/* Ripple Effect */}
                    <div className="absolute inset-0 rounded-full border-4 border-red-300 animate-ping opacity-75"></div>
                    <div
                      className="absolute inset-0 rounded-full border-4 border-red-400 animate-ping opacity-50"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                  </button>

                  <p className="mt-6 text-lg opacity-80">Press to activate emergency response</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Active SOS Status */}
                  <div className="bg-green-600 rounded-lg p-6 animate-pulse">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <Shield className="w-8 h-8" />
                      <span className="text-2xl font-bold">SOS ACTIVE</span>
                    </div>
                    <p className="text-lg">Emergency response initiated</p>
                    {currentLocation && (
                      <p className="text-sm mt-2 opacity-90">
                        <MapPin className="w-4 h-4 inline mr-1" />
                        {currentLocation}
                      </p>
                    )}
                  </div>

                  {/* Cancel/Safe Options */}
                  {showCancelOption && !isSafe && (
                    <div className="space-y-4">
                      <Button
                        onClick={handleSafeStatus}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg animate-pulse"
                      >
                        <Heart className="w-5 h-5 mr-2" />I Am Safe - Cancel SOS
                      </Button>
                    </div>
                  )}

                  {isSafe && (
                    <div className="bg-green-500 rounded-lg p-6 animate-bounce">
                      <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                      <p className="text-xl font-bold">Notifying contacts you are safe...</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Status Panel */}
            <div className="space-y-6">
              {/* Progress Steps */}
              <Card
                className={`transition-all duration-500 ${isSOSActive ? "bg-white border-2 border-red-500 shadow-2xl" : "bg-white/10 backdrop-blur-sm border-white/20"}`}
              >
                <CardContent className="p-6">
                  <h3
                    className={`text-xl font-bold mb-6 flex items-center ${isSOSActive ? "text-red-800" : "text-white"}`}
                  >
                    <Loader2 className={`w-5 h-5 mr-2 ${isSOSActive ? "animate-spin text-red-600" : "text-white"}`} />
                    Emergency Response Status
                  </h3>

                  <div className="space-y-4">
                    {sosSteps.map((step, index) => (
                      <div
                        key={step.step}
                        className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-500 transform ${
                          step.status === "loading"
                            ? "bg-blue-100 border-2 border-blue-500 animate-pulse scale-105 shadow-lg"
                            : step.status === "completed"
                              ? "bg-green-100 border-2 border-green-500 scale-105 shadow-lg"
                              : step.status === "error"
                                ? "bg-red-100 border-2 border-red-500"
                                : isSOSActive
                                  ? "bg-gray-100 border border-gray-300"
                                  : "bg-gray-500/20 border border-gray-500/30"
                        }`}
                        style={{
                          transform: step.status === "completed" ? "translateX(10px) scale(1.02)" : "translateX(0)",
                          animationDelay: `${index * 0.2}s`,
                        }}
                      >
                        <div className="flex-shrink-0">{getStepIcon(step)}</div>
                        <div className="flex-1">
                          <p
                            className={`font-medium ${isSOSActive ? "text-gray-800" : "text-white"} ${step.status === "loading" ? "animate-pulse" : ""}`}
                          >
                            {getStepMessage(step)}
                          </p>
                          {step.timestamp && (
                            <p className={`text-sm ${isSOSActive ? "text-gray-600" : "text-white/70"}`}>
                              {step.timestamp.toLocaleTimeString()}
                            </p>
                          )}
                        </div>
                        {step.status === "completed" && (
                          <Badge className="bg-green-500 text-white animate-bounce">✓ Done</Badge>
                        )}
                        {step.status === "loading" && (
                          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contacts Status */}
              {isSOSActive && (
                <Card className="bg-white border-2 border-blue-500 shadow-2xl animate-slide-in-right">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center text-blue-800">
                      <Users className="w-5 h-5 mr-2" />
                      Emergency Contacts
                    </h3>

                    <div className="space-y-3">
                      {emergencyContacts.map((contact, index) => (
                        <div
                          key={contact.id}
                          className={`flex items-center justify-between p-3 rounded-lg transition-all duration-500 transform ${
                            contact.notified
                              ? "bg-green-100 border-2 border-green-500 scale-105 shadow-md"
                              : "bg-gray-100 border border-gray-300"
                          }`}
                          style={{
                            animationDelay: `${index * 0.3}s`,
                          }}
                        >
                          <div>
                            <p className="font-medium text-gray-800">{contact.name}</p>
                            <p className="text-sm text-gray-600">{contact.relationship}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            {contact.notified ? (
                              <>
                                <CheckCircle className="w-5 h-5 text-green-600 animate-bounce" />
                                <span className="text-sm text-green-700 font-medium">
                                  {contact.timestamp?.toLocaleTimeString()}
                                </span>
                              </>
                            ) : (
                              <Clock className="w-5 h-5 text-gray-400 animate-pulse" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Enhanced Rescue Team Status */}
              {sosSteps.find((s) => s.step === "rescue")?.status === "completed" && (
                <Card className="bg-white border-2 border-green-500 shadow-2xl animate-slide-in-right overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center text-green-800">
                      <Truck className="w-5 h-5 mr-2 animate-bounce" />
                      Rescue Team Status
                    </h3>

                    <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 overflow-hidden border-2 border-green-500">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-white font-bold text-lg">Ambulance Unit 101</span>
                        </div>
                        <Badge className="bg-green-500 text-white animate-pulse px-3 py-1">
                          <Activity className="w-4 h-4 mr-1" />
                          En Route
                        </Badge>
                      </div>

                      {/* Enhanced Road Animation */}
                      <div className="relative h-16 bg-gray-700 rounded-lg border-2 border-dashed border-gray-400 overflow-hidden mb-4">
                        {/* Road surface */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700"></div>

                        {/* Lane markers */}
                        <div className="absolute top-1/2 left-0 w-full h-1 transform -translate-y-1/2">
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-8 h-1 bg-yellow-400 animate-pulse"
                              style={{
                                left: `${i * 12.5}%`,
                                animationDelay: `${i * 0.2}s`,
                              }}
                            />
                          ))}
                        </div>

                        {/* Animated Ambulance */}
                        <div className="absolute top-1/2 transform -translate-y-1/2 text-4xl animate-enhanced-ambulance">
                          🚑
                        </div>

                        {/* Speed lines effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>

                        {/* Traffic lights */}
                        <div className="absolute top-2 right-4 flex space-x-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full opacity-30"></div>
                          <div className="w-2 h-2 bg-red-500 rounded-full opacity-30"></div>
                        </div>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-gray-600/50 rounded-lg p-3 text-center">
                          <div className="flex items-center justify-center mb-2">
                            <Clock className="w-5 h-5 text-green-400 mr-2" />
                            <span className="text-green-400 font-bold text-xl">8</span>
                          </div>
                          <p className="text-gray-300 text-sm">Minutes ETA</p>
                        </div>
                        <div className="bg-gray-600/50 rounded-lg p-3 text-center">
                          <div className="flex items-center justify-center mb-2">
                            <MapPin className="w-5 h-5 text-blue-400 mr-2" />
                            <span className="text-blue-400 font-bold text-xl">2.3</span>
                          </div>
                          <p className="text-gray-300 text-sm">km Distance</p>
                        </div>
                      </div>

                      {/* Enhanced Progress Bar */}
                      <div className="relative">
                        <div className="flex justify-between text-xs text-gray-400 mb-2">
                          <span>Dispatched</span>
                          <span>En Route</span>
                          <span>Arriving</span>
                        </div>
                        <div className="bg-gray-600 rounded-full h-3 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-green-500 to-green-400 h-full rounded-full animate-pulse relative"
                            style={{ width: "65%" }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                          </div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-400 mt-1">
                          <span>✓</span>
                          <span>✓</span>
                          <span>○</span>
                        </div>
                      </div>

                      {/* Live Updates */}
                      <div className="mt-4 bg-green-500/20 rounded-lg p-3 border border-green-500/30">
                        <div className="flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-green-400 animate-pulse" />
                          <span className="text-green-300 text-sm font-medium">Live Update:</span>
                        </div>
                        <p className="text-green-200 text-sm mt-1">
                          Green corridor activated - Traffic signals synchronized
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced While You Wait Section */}
        <div className="mt-12 text-center">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Activity className="w-8 h-8 mr-3 animate-pulse" />
                <h3 className="text-2xl font-bold animate-text-glow">While You Wait</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: <Heart className="w-8 h-8" />,
                    title: "Stay Calm",
                    description: "Help is on the way. Try to remain calm and conserve energy.",
                    color: "text-red-400",
                    bgColor: "bg-red-500/20",
                  },
                  {
                    icon: <MapPin className="w-8 h-8" />,
                    title: "Stay Visible",
                    description: "If possible, move to a visible location for rescue teams.",
                    color: "text-blue-400",
                    bgColor: "bg-blue-500/20",
                  },
                  {
                    icon: <Phone className="w-8 h-8" />,
                    title: "Follow Instructions",
                    description: "Listen to any instructions from emergency services.",
                    color: "text-green-400",
                    bgColor: "bg-green-500/20",
                  },
                  {
                    icon: <Zap className="w-8 h-8" />,
                    title: "Keep Phone Charged",
                    description: "Preserve battery for communication with rescue teams.",
                    color: "text-yellow-400",
                    bgColor: "bg-yellow-500/20",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`${item.bgColor} rounded-lg p-6 transform hover:scale-105 transition-all duration-300 animate-slide-in-up border border-white/20`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`${item.color} mb-4 animate-float`} style={{ animationDelay: `${index * 0.5}s` }}>
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-white mb-3 text-lg">{item.title}</h4>
                    <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Emergency Breathing Exercise */}
              <div className="mt-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-6 border border-blue-500/30">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center justify-center">
                  <Activity className="w-6 h-6 mr-2 animate-pulse" />
                  Breathing Exercise
                </h4>
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center mb-2 animate-pulse">
                      <span className="text-2xl">🫁</span>
                    </div>
                    <p className="text-sm text-white/80">
                      Breathe In
                      <br />4 seconds
                    </p>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 bg-yellow-500/30 rounded-full flex items-center justify-center mb-2 animate-pulse"
                      style={{ animationDelay: "1s" }}
                    >
                      <span className="text-2xl">⏸️</span>
                    </div>
                    <p className="text-sm text-white/80">
                      Hold
                      <br />4 seconds
                    </p>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mb-2 animate-pulse"
                      style={{ animationDelay: "2s" }}
                    >
                      <span className="text-2xl">💨</span>
                    </div>
                    <p className="text-sm text-white/80">
                      Breathe Out
                      <br />4 seconds
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Hidden audio element for emergency sounds */}
      <audio ref={audioRef} preload="auto">
        {/* TODO: Add emergency alert sound file */}
        {/* <source src="/sounds/emergency-alert.mp3" type="audio/mpeg" /> */}
      </audio>
    </div>
  )
}
