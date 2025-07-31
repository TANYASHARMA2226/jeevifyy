import Link from "next/link"
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-red-600 dark:text-red-400" />
              <span className="text-2xl font-bold text-white">Jeevifyy</span>
            </Link>
            <p className="text-gray-300 dark:text-gray-200 text-sm">
              Your instant lifeline in health emergencies. Rapid, coordinated help when every second counts.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 dark:text-gray-200 hover:text-white dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 dark:text-gray-200 hover:text-white dark:hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 dark:text-gray-200 hover:text-white dark:hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/first-aid" className="text-gray-300 dark:text-gray-200 hover:text-white dark:hover:text-white transition-colors">
                  First Aid
                </Link>
              </li>
              <li>
                <Link href="/sos" className="text-gray-300 dark:text-gray-200 hover:text-white dark:hover:text-white transition-colors">
                  SOS
                </Link>
              </li>
              <li>
                <Link href="/ambulance" className="text-gray-300 dark:text-gray-200 hover:text-white dark:hover:text-white transition-colors">
                  Ambulance
                </Link>
              </li>
              <li>
                <Link href="/notify" className="text-gray-300 dark:text-gray-200 hover:text-white dark:hover:text-white transition-colors">
                  Notify
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info - Moved to the right */}
          <div className="md:col-start-3">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400 dark:text-gray-300" />
                <span className="text-gray-300 dark:text-gray-200">info@jeevifyy.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400 dark:text-gray-300" />
                <span className="text-gray-300 dark:text-gray-200">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gray-400 dark:text-gray-300 mt-0.5" />
                <span className="text-gray-300 dark:text-gray-200">
                  Greater Noida, Uttar Pradesh
                  <br />
                  India.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-300 text-sm">© {currentYear} Jeevifyy. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 dark:text-gray-300 hover:text-white dark:hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
