"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/hooks/useLanguage"

export function HeroSection() {
  const { t } = useLanguage()
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#121212] via-[#1A1A1A] to-[#121212]">
      <Image
        src="/classroom-bg.jpg"
        alt="Highway Academy Classroom"
        fill
        className="object-cover opacity-40"
        priority
        quality={75}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#121212]/60 via-[#1A1A1A]/50 to-[#121212]/60 z-10"></div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              <span className="block text-[#F5F5F5]">{t('hero.title_line1')}</span>
              <span className="block text-[#F95700] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                {t('hero.title_line2')}
              </span>
            </h1>
<p className="text-lg sm:text-xl md:text-2xl text-[#AAAAAA] max-w-4xl mx-auto leading-relaxed px-4">
              {t('hero.description')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button
              asChild
              size="lg"
              className="bg-[#F95700] hover:bg-[#E04E00] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#F95700]/25 active:scale-95"
            >
<Link href="/programs">{t('hero.explore_programs')}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#F95700] text-[#F95700] hover:bg-[#F95700] hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent w-full sm:w-auto transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
            >
<Link href="/contact">{t('hero.contact_us')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
