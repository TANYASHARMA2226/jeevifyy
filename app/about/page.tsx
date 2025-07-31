import { Users, Heart, Target, Shield } from "lucide-react"
import Image from "next/image"

export default function About() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & CEO",
      bio: "Emergency medicine physician with 15+ years of experience. Passionate about leveraging technology to save lives.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Raj Patel",
      role: "CTO",
      bio: "Former Google engineer specializing in real-time systems and emergency response technology.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Operations",
      bio: "Healthcare operations expert with deep experience in emergency medical services coordination.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Life First",
      description: "Every decision made prioritizes saving lives and reducing suffering.",
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Speed & Precision",
      description: "Every second counts in emergency situations.",
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Universal Access",
      description: "Healthcare emergencies shouldn't depend on location or connectivity.",
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Trust & Reliability",
      description: "People can depend on Jeevifyy in their most vulnerable moments.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Jeevifyy</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Born from the belief that no life should be lost due to delayed emergency response
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Jeevifyy was founded after witnessing too many preventable tragedies where lives were lost not due to
                the severity of medical conditions, but due to delayed response times, poor coordination, and lack of
                real-time information during critical moments.
              </p>
              {/* <p className="text-lg leading-relaxed mb-6">
                Our founder, Dr. Sarah Johnson, experienced firsthand how precious minutes lost in emergency situations
                can mean the difference between life and death. After years in emergency medicine, she realized that
                technology could bridge the gap between when help is needed and when it arrives.
              </p> */}
              <p className="text-lg leading-relaxed">
                Today, Jeevifyy represents our commitment to ensuring that whether you're in a bustling city or a remote
                village, help is always within reach - coordinated, intelligent, and fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-full mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Purpose</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission Section */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 dark:bg-blue-500 text-white rounded-full mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-4">Our Mission</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  To revolutionize emergency healthcare by creating an{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">intelligent, coordinated system</span> that
                  connects people in crisis to rapid help within minutes, regardless of location or language barriers.
                </p>
              </div>

              {/* Divider for Mobile */}
              <div className="md:hidden flex justify-center my-8">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-full"></div>
              </div>

              {/* Vision Section */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 dark:bg-green-500 text-white rounded-full mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  A world where no one suffers or loses their life due to delayed medical response, lack of
                  coordination, or poor information during health emergencies. Every person deserves access to
                  immediate, coordinated emergency care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Enhanced Bifurcation */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-500 dark:to-pink-500 text-white rounded-full mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-500 dark:to-pink-500 mx-auto rounded-full"></div>
            </div>

            {/* Values Grid with Dividers */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="relative">
                  {/* Vertical Divider for Desktop */}
                  {index < values.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600"></div>
                  )}
                  
                  {/* Horizontal Divider for Mobile/Tablet */}
                  {index % 2 === 0 && index < values.length - 1 && (
                    <div className="md:hidden absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600"></div>
                  )}

                  <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-600 dark:text-gray-300 rounded-full mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Divider */}
            <div className="mt-12 flex justify-center">
              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 dark:from-blue-500 dark:via-purple-500 dark:to-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Founder Spotlight */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Meet Our Founder</h2>
            <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-lg p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Dr. Sarah Johnson"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Dr. Sarah Johnson, MD</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    With over 15 years in emergency medicine and a passion for healthcare innovation, Dr. Johnson has
                    dedicated her career to improving emergency response systems. She holds an MD from Johns Hopkins and
                    has published extensively on emergency care optimization. Her vision for Jeevifyy stems from
                    countless nights in the ER, where she witnessed how technology could transform patient outcomes
                    during critical moments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
