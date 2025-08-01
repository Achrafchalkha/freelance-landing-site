"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/hooks/useLanguage"

export default function AboutPage() {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen bg-[#121212] pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#1E1E1E] to-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">{t('about.title')}</h1>
          <p className="text-lg sm:text-xl text-[#AAAAAA] max-w-3xl mx-auto px-4">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="bg-[#1E1E1E] border-[#333]">
              <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col">
                <Target className="h-10 w-10 sm:h-12 sm:w-12 text-[#F95700] mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] mb-4">{t('about.mission.title')}</h3>
                <p className="text-[#AAAAAA] text-sm sm:text-base flex-grow">
                  {t('about.mission.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1E1E1E] border-[#333]">
              <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col">
                <Eye className="h-10 w-10 sm:h-12 sm:w-12 text-[#F95700] mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] mb-4">{t('about.vision.title')}</h3>
                <p className="text-[#AAAAAA] text-sm sm:text-base flex-grow">
                  {t('about.vision.description')}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* About Highway Academy */}
          <div className="bg-[#1E1E1E] rounded-lg p-6 sm:p-8 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-6 text-center">{t('about.academy_story.title')}</h2>
            <div className="space-y-4 sm:space-y-6 text-[#AAAAAA] max-w-4xl mx-auto text-sm sm:text-base">
              <p>
                {t('about.academy_story.paragraph1')}
              </p>
              <p>
                {t('about.academy_story.paragraph2')}
              </p>
              <p>
                {t('about.academy_story.paragraph3')}
              </p>
            </div>
          </div>

          {/* Founder's Story - Detailed */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5]">{t('about.founder.title')}</h2>

              <div className="bg-[#F95700] p-1 rounded-lg inline-block">
                <div className="bg-[#121212] p-3 sm:p-4 rounded-lg">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-[#F95700]" />
                </div>
              </div>

              <blockquote className="text-lg sm:text-xl text-[#F95700] italic font-medium border-l-4 border-[#F95700] pl-4 sm:pl-6">
                "{t('about.founder.quote')}"
              </blockquote>

              <div className="space-y-3 sm:space-y-4 text-[#AAAAAA] text-sm sm:text-base">
                <p>
                  {t('about.founder.paragraph1')}
                </p>
                <p>
                  {t('about.founder.paragraph2')}
                </p>
                <p>
                  {t('about.founder.paragraph3')}
                </p>
                <p>
                  {t('about.founder.paragraph4')}
                </p>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="bg-[#121212] p-6 sm:p-8 rounded-lg border border-[#333]">
                <Image
                  src="/mr-driss.jpg"
                  alt="Mr. Driss - Founder and Director of Highway Academy"
                  width={400}
                  height={500}
                  className="rounded-lg mx-auto w-full max-w-sm object-cover"
                />
                <div className="text-center mt-4 sm:mt-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F5F5]">{t('about.founder.name')}</h3>
                  <p className="text-[#F95700] text-base sm:text-lg">{t('about.founder.title_role')}</p>
                  <p className="text-[#AAAAAA] text-xs sm:text-sm mt-2">{t('about.founder.experience')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
