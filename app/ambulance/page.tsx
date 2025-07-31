"use client"

import { useState, useEffect } from "react"
import { MapPin, Clock, Truck, Navigation, Leaf, Phone, Star, Route } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Vehicle {
  id: string
  type: "ambulance" | "cab" | "bike"
  name: string
  eta: number
  distance: string
  rating: number
  price?: number
  features: string[]
  available: boolean
}

interface Hospital {
  id: string
  name: string
  distance: string
  specialties: string[]
  rating: number
}

export default function Ambulance() {
  const [currentLocation, setCurrentLocation] = useState<string>("")
  const [destination, setDestination] = useState<string>("")
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null)
  const [isBooking, setIsBooking] = useState(false)
  const [trackingActive, setTrackingActive] = useState(false)

  const vehicles: Vehicle[] = [
    {
      id: "1",
      type: "ambulance",
      name: "Emergency Ambulance - Unit 101",
      eta: 8,
      distance: "2.3 km",
      rating: 4.9,
      features: ["Advanced Life Support", "Cardiac Monitor", "Oxygen Supply"],
      available: true,
    },
    {
      id: "2",
      type: "ambulance",
      name: "Basic Ambulance - Unit 205",
      eta: 12,
      distance: "3.1 km",
      rating: 4.7,
      features: ["Basic Life Support", "First Aid Kit", "Stretcher"],
      available: true,
    },
    {
      id: "3",
      type: "cab",
      name: "Emergency Cab - Green Route",
      eta: 5,
      distance: "1.8 km",
      rating: 4.5,
      price: 150,
      features: ["Green Corridor Access", "Hospital Direct", "First Aid Kit"],
      available: true,
    },
    {
      id: "4",
      type: "bike",
      name: "Medical Bike - Rapid Response",
      eta: 3,
      distance: "1.2 km",
      rating: 4.8,
      price: 80,
      features: ["First Responder", "Medical Kit", "Traffic Navigation"],
      available: true,
    },
  ]

  const hospitals: Hospital[] = [
    {
      id: "1",
      name: "City General Hospital",
      distance: "4.2 km",
      specialties: ["Emergency", "Cardiology", "Trauma"],
      rating: 4.8,
    },
    {
      id: "2",
      name: "Metro Medical Center",
      distance: "6.1 km",
      specialties: ["Emergency", "Neurology", "ICU"],
      rating: 4.6,
    },
    {
      id: "3",
      name: "Regional Emergency Hospital",
      distance: "3.8 km",
      specialties: ["Emergency", "Surgery", "Pediatrics"],
      rating: 4.9,
    },
  ]

  useEffect(() => {
    // Get current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setCurrentLocation(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`)
        },
        (error) => {
          setCurrentLocation("Location access denied")
        },
      )
    }
  }, [])

  const bookVehicle = async (vehicle: Vehicle) => {
    setIsBooking(true)
    setSelectedVehicle(vehicle)

    // Simulate booking process
    setTimeout(() => {
      setIsBooking(false)
      setTrackingActive(true)
      // TODO: Integrate with real booking API
      alert(`${vehicle.name} booked successfully! ETA: ${vehicle.eta} minutes`)
    }, 2000)
  }

  const getVehicleIcon = (type: string) => {
    switch (type) {
      case "ambulance":
        return "🚑"
      case "cab":
        return "🚗"
      case "bike":
        return "🏍️"
      default:
        return "🚗"
    }
  }

  const getVehicleColor = (type: string) => {
    switch (type) {
      case "ambulance":
        return "border-red-500 bg-red-50"
      case "cab":
        return "border-blue-500 bg-blue-50"
      case "bike":
        return "border-green-500 bg-green-50"
      default:
        return "border-gray-500 bg-gray-50"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Truck className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Emergency Transport</h1>
            <p className="text-xl md:text-2xl opacity-90">Fast, reliable transport with green corridor access</p>
          </div>
        </div>
      </section>

      {/* Tracking Status */}
      {trackingActive && selectedVehicle && (
        <section className="bg-green-50 border-l-4 border-green-500 p-6">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Navigation className="w-8 h-8 text-green-600 animate-spin" />
                <div>
                  <h3 className="text-lg font-semibold text-green-800">Vehicle En Route</h3>
                  <p className="text-green-700">
                    {selectedVehicle.name} - ETA: {selectedVehicle.eta} minutes
                  </p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800">
                <Clock className="w-4 h-4 mr-1" />
                Live Tracking Active
              </Badge>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Booking Form */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <MapPin className="w-6 h-6 text-blue-600" />
                      <span>Book Emergency Transport</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Location</label>
                      <Input
                        type="text"
                        value={currentLocation}
                        readOnly
                        className="w-full bg-gray-50"
                        placeholder="Detecting location..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Destination Hospital</label>
                      <select
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select Hospital</option>
                        {hospitals.map((hospital) => (
                          <option key={hospital.id} value={hospital.name}>
                            {hospital.name} - {hospital.distance}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Green Corridor Info */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Leaf className="w-5 h-5 text-green-600" />
                        <h4 className="font-semibold text-green-800">Green Corridor Active</h4>
                      </div>
                      <p className="text-sm text-green-700">
                        Optimized route with traffic signal priority and real-time congestion avoidance
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Hospital List */}
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Nearby Hospitals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {hospitals.map((hospital) => (
                        <div key={hospital.id} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-900">{hospital.name}</h4>
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                              <span className="text-sm text-gray-600">{hospital.rating}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            <MapPin className="w-4 h-4 inline mr-1" />
                            {hospital.distance}
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {hospital.specialties.map((specialty, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Available Vehicles */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Vehicles</h2>

                <div className="grid gap-6">
                  {vehicles.map((vehicle) => (
                    <Card key={vehicle.id} className={`${getVehicleColor(vehicle.type)} border-2`}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="text-4xl">{getVehicleIcon(vehicle.type)}</div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{vehicle.name}</h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                                <span className="flex items-center">
                                  <Clock className="w-4 h-4 mr-1" />
                                  ETA: {vehicle.eta} min
                                </span>
                                <span className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  {vehicle.distance}
                                </span>
                                <span className="flex items-center">
                                  <Star className="w-4 h-4 mr-1 text-yellow-500 fill-current" />
                                  {vehicle.rating}
                                </span>
                                {vehicle.price && (
                                  <span className="font-semibold text-green-600">₹{vehicle.price}</span>
                                )}
                              </div>
                            </div>
                          </div>

                          <Button
                            onClick={() => bookVehicle(vehicle)}
                            disabled={!vehicle.available || isBooking}
                            className={`${
                              vehicle.type === "ambulance"
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-blue-600 hover:bg-blue-700"
                            } text-white px-6 py-2`}
                          >
                            {isBooking && selectedVehicle?.id === vehicle.id ? (
                              "Booking..."
                            ) : (
                              <>
                                <Phone className="w-4 h-4 mr-2" />
                                Book Now
                              </>
                            )}
                          </Button>
                        </div>

                        {/* Features */}
                        <div className="mt-4">
                          <div className="flex flex-wrap gap-2">
                            {vehicle.features.map((feature, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Green Corridor Badge */}
                        {vehicle.type !== "bike" && (
                          <div className="mt-3 flex items-center space-x-2">
                            <Badge className="bg-green-100 text-green-800">
                              <Leaf className="w-3 h-3 mr-1" />
                              Green Corridor Access
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800">
                              <Route className="w-3 h-3 mr-1" />
                              Real-time Traffic Optimization
                            </Badge>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Live Tracking Placeholder */}
                {trackingActive && (
                  <Card className="mt-8 bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Navigation className="w-6 h-6 text-blue-600" />
                        <span>Live Vehicle Tracking</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                        <div className="text-center text-gray-600">
                          <Navigation className="w-12 h-12 mx-auto mb-2 animate-spin" />
                          <p className="font-semibold">Real-time Map Tracking</p>
                          <p className="text-sm">Integration with live GPS coming soon</p>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-blue-600">2.3 km</div>
                          <div className="text-sm text-gray-600">Distance Remaining</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-600">6 min</div>
                          <div className="text-sm text-gray-600">ETA</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-orange-600">45 km/h</div>
                          <div className="text-sm text-gray-600">Current Speed</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
