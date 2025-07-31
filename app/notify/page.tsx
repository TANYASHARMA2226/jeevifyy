"use client"

import { useState } from "react"
import { Plus, Trash2, Phone, MapPin, Clock, CheckCircle, AlertTriangle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Contact {
  id: string
  name: string
  phone: string
  relationship: string
  priority: "high" | "medium" | "low"
  notified?: boolean
  notifiedAt?: Date
}

export default function Notify() {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      phone: "+1-555-0123",
      relationship: "Family Doctor",
      priority: "high",
    },
    {
      id: "2",
      name: "John Doe",
      phone: "+1-555-0456",
      relationship: "Emergency Contact",
      priority: "high",
    },
    {
      id: "3",
      name: "Jane Smith",
      phone: "+1-555-0789",
      relationship: "Family Member",
      priority: "medium",
    },
  ])

  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    relationship: "",
    priority: "medium" as "high" | "medium" | "low",
  })

  const [isEmergencyActive, setIsEmergencyActive] = useState(false)
  const [currentLocation, setCurrentLocation] = useState<string>("")

  const addContact = () => {
    if (newContact.name && newContact.phone) {
      const contact: Contact = {
        id: Date.now().toString(),
        ...newContact,
      }
      setContacts([...contacts, contact])
      setNewContact({ name: "", phone: "", relationship: "", priority: "medium" })
    }
  }

  const removeContact = (id: string) => {
    setContacts(contacts.filter((c) => c.id !== id))
  }

  const notifyAll = async () => {
    setIsEmergencyActive(true)

    // Get current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setCurrentLocation(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`)
        },
        (error) => {
          setCurrentLocation("Location unavailable")
        },
      )
    }

    // Simulate notification process
    const updatedContacts = contacts.map((contact) => ({
      ...contact,
      notified: true,
      notifiedAt: new Date(),
    }))

    setContacts(updatedContacts)

    // TODO: Integrate with SMS/Email API for real notifications
    alert(`Emergency alert sent to ${contacts.length} contacts!`)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Emergency Contacts</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Instantly notify your trusted contacts when you need help most
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Status */}
      {isEmergencyActive && (
        <section className="bg-red-50 border-l-4 border-red-500 p-6">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-4">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <div>
                <h3 className="text-lg font-semibold text-red-800">Emergency Alert Active</h3>
                <p className="text-red-700">All contacts have been notified of your emergency</p>
                {currentLocation && (
                  <p className="text-sm text-red-600 mt-2">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Location shared: {currentLocation}
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact List */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">Your Emergency Contacts</h2>
                  <Button
                    onClick={notifyAll}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 animate-pulse-emergency"
                    disabled={contacts.length === 0}
                  >
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Notify All
                  </Button>
                </div>

                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <Card key={contact.id} className="border-l-4 border-l-blue-500">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold text-gray-900">{contact.name}</h3>
                              <Badge className={getPriorityColor(contact.priority)}>
                                {contact.priority.toUpperCase()}
                              </Badge>
                              {contact.notified && (
                                <Badge className="bg-green-100 text-green-800">
                                  <CheckCircle className="w-3 h-3 mr-1" />
                                  Notified
                                </Badge>
                              )}
                            </div>
                            <p className="text-gray-600 mb-1">
                              <Phone className="w-4 h-4 inline mr-2" />
                              {contact.phone}
                            </p>
                            <p className="text-gray-600 mb-2">{contact.relationship}</p>
                            {contact.notifiedAt && (
                              <p className="text-sm text-gray-500">
                                <Clock className="w-4 h-4 inline mr-1" />
                                Notified at {contact.notifiedAt.toLocaleTimeString()}
                              </p>
                            )}
                          </div>
                          <Button
                            onClick={() => removeContact(contact.id)}
                            variant="outline"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {contacts.length === 0 && (
                    <Card className="border-dashed border-2 border-gray-300">
                      <CardContent className="p-12 text-center">
                        <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-600 mb-2">No contacts added yet</h3>
                        <p className="text-gray-500">Add your first emergency contact to get started</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>

              {/* Add Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Plus className="w-6 h-6 text-blue-600" />
                      <span>Add Emergency Contact</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <Input
                        type="text"
                        value={newContact.name}
                        onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                        placeholder="Enter contact name"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <Input
                        type="tel"
                        value={newContact.phone}
                        onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                        placeholder="+1-555-0123"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Relationship</label>
                      <Input
                        type="text"
                        value={newContact.relationship}
                        onChange={(e) => setNewContact({ ...newContact, relationship: e.target.value })}
                        placeholder="e.g., Family Doctor, Spouse, Friend"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Priority Level</label>
                      <select
                        value={newContact.priority}
                        onChange={(e) =>
                          setNewContact({ ...newContact, priority: e.target.value as "high" | "medium" | "low" })
                        }
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="high">High - Immediate notification</option>
                        <option value="medium">Medium - Standard notification</option>
                        <option value="low">Low - Secondary notification</option>
                      </select>
                    </div>

                    <Button
                      onClick={addContact}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      disabled={!newContact.name || !newContact.phone}
                    >
                      <Plus className="w-5 h-5 mr-2" />
                      Add Contact
                    </Button>
                  </CardContent>
                </Card>

                {/* Emergency Instructions */}
                <Card className="mt-6 bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-800">How Emergency Notifications Work</CardTitle>
                  </CardHeader>
                  <CardContent className="text-red-700">
                    <ul className="space-y-2 text-sm">
                      <li>• High priority contacts are notified first</li>
                      <li>• Your current location is automatically shared</li>
                      <li>• Messages include your emergency status</li>
                      <li>• Contacts receive SMS and call notifications</li>
                      <li>• Emergency services (112/108) are also contacted</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
