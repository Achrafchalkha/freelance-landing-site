"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/hooks/useLanguage"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <nav className="bg-[#1E1E1E] border-b border-[#333] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Highway Academy"
              width={320}
              height={107}
              className="h-20 sm:h-24 w-auto"
              priority
              sizes="(max-width: 640px) 240px, 320px"
            />
          </Link>

          {/* Desktop Navigation - Centered with rounded background */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="bg-[#2A2A2A] rounded-full px-6 py-2 flex items-center space-x-6 border border-[#404040]">
              <Link
                href="/"
                prefetch={true}
                className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                  isActive("/")
                    ? "bg-[#F95700] text-white shadow-lg"
                    : "text-[#F5F5F5] hover:bg-[#404040] hover:text-[#F95700]"
                }`}
              >
{t('nav.home')}
              </Link>
              <Link
                href="/about"
                prefetch={true}
                className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                  isActive("/about")
                    ? "bg-[#F95700] text-white shadow-lg"
                    : "text-[#F5F5F5] hover:bg-[#404040] hover:text-[#F95700]"
                }`}
              >
{t('nav.about')}
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium flex items-center ${
                    isActive("/programs")
                      ? "bg-[#F95700] text-white shadow-lg"
                      : "text-[#F5F5F5] hover:bg-[#404040] hover:text-[#F95700]"
                  }`}
                >
{t('nav.programs')} <ChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#1E1E1E] border-[#333] mt-2">
                  <DropdownMenuItem asChild>
                    <Link href="/programs?tab=language" prefetch={true} className="text-[#F5F5F5] hover:text-[#F95700] cursor-pointer">
{t('nav.language_skills')}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/programs?tab=academic" prefetch={true} className="text-[#F5F5F5] hover:text-[#F95700] cursor-pointer">
{t('nav.academic_support')}
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="/news"
                prefetch={true}
                className={`px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                  isActive("/news")
                    ? "bg-[#F95700] text-white shadow-lg"
                    : "text-[#F5F5F5] hover:bg-[#404040] hover:text-[#F95700]"
                }`}
              >
{t('nav.news_events')}
              </Link>
            </div>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className={`transition-all duration-300 transform hover:scale-105 ${
                isActive("/contact")
                  ? "bg-[#E04E00] text-white shadow-lg ring-2 ring-[#F95700]/50"
                  : "bg-[#F95700] hover:bg-[#E04E00] text-white hover:shadow-lg"
              }`}
            >
<Link href="/contact" prefetch={true}>{t('nav.contact')}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-[#F5F5F5]">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <div className="bg-[#2A2A2A] rounded-2xl p-4 mx-2 border border-[#404040]">
              <div className="space-y-3">
                <Link
                  href="/"
                  className={`block px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                    isActive("/")
                      ? "bg-[#F95700] text-white shadow-lg"
                      : "text-[#F5F5F5] hover:bg-[#404040] hover:text-[#F95700]"
                  }`}
                >
{t('nav.home')}
                </Link>
                <Link
                  href="/about"
                  className={`block px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                    isActive("/about")
                      ? "bg-[#F95700] text-white shadow-lg"
                      : "text-[#F5F5F5] hover:bg-[#404040] hover:text-[#F95700]"
                  }`}
                >
{t('nav.about')}
                </Link>
                <Link
                  href="/programs"
                  className={`block px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                    isActive("/programs")
                      ? "bg-[#F95700] text-white shadow-lg"
                      : "text-[#F5F5F5] hover:bg-[#404040] hover:text-[#F95700]"
                  }`}
                >
{t('nav.programs')}
                </Link>
                <Link
                  href="/news"
                  className={`block px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium ${
                    isActive("/news")
                      ? "bg-[#F95700] text-white shadow-lg"
                      : "text-[#F5F5F5] hover:bg-[#404040] hover:text-[#F95700]"
                  }`}
                >
{t('nav.news_events')}
                </Link>
              </div>
            </div>
            <div className="px-2">
              <Button
                asChild
                className={`w-full transition-all duration-300 transform hover:scale-105 ${
                  isActive("/contact")
                    ? "bg-[#E04E00] text-white shadow-lg ring-2 ring-[#F95700]/50"
                    : "bg-[#F95700] hover:bg-[#E04E00] text-white hover:shadow-lg"
                }`}
              >
<Link href="/contact">{t('nav.contact')}</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
