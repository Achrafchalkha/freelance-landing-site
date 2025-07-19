import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1E1E1E] border-t border-[#333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/logo.png"
              alt="Highway Academy"
              width={400}
              height={133}
              className="h-24 sm:h-28 w-auto mb-4"
            />
            <p className="text-[#AAAAAA] mb-4 max-w-md">
              Where academic excellence meets personalized learning. Let us guide you to success.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/highwayacademy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#AAAAAA] hover:text-[#F95700] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/highwayacademyFez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#AAAAAA] hover:text-[#F95700] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#F5F5F5] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[#AAAAAA] hover:text-[#F95700] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-[#AAAAAA] hover:text-[#F95700] transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-[#AAAAAA] hover:text-[#F95700] transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#AAAAAA] hover:text-[#F95700] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#F5F5F5] font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-[#F95700] mt-1 flex-shrink-0" />
                <div className="text-[#AAAAAA] text-sm">
                  <p>Montfleuri & Narjiss</p>
                  <p>Fez, Morocco</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#F95700]" />
                <a href="tel:+212123456789" className="text-[#AAAAAA] hover:text-[#F95700] transition-colors text-sm">
                  +212 535765701 - Montfleuri
                </a>
              </div>
               <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#F95700]" />
                <a href="tel:+212123456789" className="text-[#AAAAAA] hover:text-[#F95700] transition-colors text-sm">
                  +212 535614990 - Narjiss
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#F95700]" />
                <a
                  href="mailto:info@highwayacademy.ma"
                  className="text-[#AAAAAA] hover:text-[#F95700] transition-colors text-sm"
                >
                  highwayaca@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#333] mt-8 pt-8 text-center">
          <p className="text-[#AAAAAA] text-sm">© 2025 Highway Academy. All rights reserved.</p>
          <p className="text-[#666666] text-xs mt-2">
             created by{" "}
            <span className="text-[#F95700] font-medium">Achraf Chalkha</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
