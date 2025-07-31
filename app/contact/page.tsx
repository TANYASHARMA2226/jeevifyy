"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" })
    alert("Thank you for your message! We'll get back to you soon.")
    setIsContactDialogOpen(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      description: "Send us a message anytime",
      action: "Send Email",
      color: "from-blue-500 to-blue-600",
      details: [
        "General Inquiries: xyz@jeevifyy.com",
        // "Partnerships: partners@jeevifyy.com",
        "Support: abc@jeevifyy.com",
      ],
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      description: "Speak with our team directly",
      action: "Call Now",
      color: "from-green-500 to-green-600",
      details: [
        // "Main Office: +1 (555) 123-4567",
        "Emergency Partnerships: xxxxx xxxxx",
        "Available Monday - Friday, 9 AM - 6 PM EST",
      ],
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Us",
      description: "Come to our headquarters",
      action: "Get Directions",
      color: "from-purple-500 to-purple-600",
      details: ["Jeevifyy Headquarters", "Greater Noida", "India"],
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Get in Touch",
      description: "Fill out our contact form",
      action: "Contact Form",
      color: "from-red-500 to-red-600",
      details: ["Quick response within 24 hours", "Detailed inquiry support", "Partnership opportunities"],
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Enhanced Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 dark:from-blue-900 dark:via-purple-900 dark:to-red-900 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat animate-pulse"></div>
          </div>

          {/* Animated Background Elements */}
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

          <div className="relative container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in-up">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
                We're here to help and answer any questions you might have
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Choose Your Preferred Contact Method
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Multiple ways to reach us - we're here to help
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactMethods.map((method, index) => (
                                     <Card
                     key={index}
                     className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                   >
                    <CardContent className="p-6 text-center">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.color} text-white rounded-full mb-4`}>
                        {method.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{method.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{method.description}</p>
                      <Button
                        className={`w-full bg-gradient-to-r ${method.color} hover:opacity-90 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200`}
                      >
                        {method.action}
                      </Button>
                      <div className="mt-4 space-y-1">
                        {method.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-gray-500 dark:text-gray-400">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                  Send Us a Message
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Have a specific question or partnership inquiry? We'd love to hear from you.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-vertical"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="newsletter" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                      Subscribe to our newsletter for updates and emergency healthcare insights
                    </label>
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all duration-200"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>


    </>
  )
}
