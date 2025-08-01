'use client'

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useLanguage } from "@/hooks/useLanguage"

const getNewsEvents = (t: any) => [
  {
    key: "summer_intensive",
    title: t('news.events.summer_intensive.title'),
    description: t('news.events.summer_intensive.description'),
    status: "upcoming",
    category: t('news.events.summer_intensive.category'),
    image: "/summer-intensive.jpg",
  },
  {
    key: "ielts_success",
    title: t('news.events.ielts_success.title'),
    description: t('news.events.ielts_success.description'),
    status: "concluded",
    category: t('news.events.ielts_success.category'),
    image: "/IELTS.jpg",
  },
  {
    key: "conversation_clubs",
    title: t('news.events.conversation_clubs.title'),
    description: t('news.events.conversation_clubs.description'),
    status: "upcoming",
    category: t('news.events.conversation_clubs.category'),
    image: "/conversation-clubs.jpg",
  },
  {
    key: "university_prep",
    title: t('news.events.university_prep.title'),
    description: t('news.events.university_prep.description'),
    status: "concluded",
    category: t('news.events.university_prep.category'),
    image: "/university-prep.jpg",
  },
  {
    key: "public_speaking",
    title: t('news.events.public_speaking.title'),
    description: t('news.events.public_speaking.description'),
    status: "upcoming",
    category: t('news.events.public_speaking.category'),
    image: "/PUBLIC SPEAKING.jpg",
  },
  {
    key: "teacher_training",
    title: t('news.events.teacher_training.title'),
    description: t('news.events.teacher_training.description'),
    status: "concluded",
    category: t('news.events.teacher_training.category'),
    image: "/SEMINAR.jpeg",
  },
]

export default function NewsPage() {
  const { t } = useLanguage()
  const newsEvents = getNewsEvents(t)
  const upcomingEvents = newsEvents.filter((event) => event.status === "upcoming")
  const pastEvents = newsEvents.filter((event) => event.status === "concluded")

  return (
    <div className="min-h-screen bg-[#121212] pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#1E1E1E] to-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">{t('news.title')}</h1>
          <p className="text-lg sm:text-xl text-[#AAAAAA] max-w-3xl mx-auto px-4">
            {t('news.subtitle')}
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-4">{t('news.upcoming_events.title')}</h2>
            <p className="text-[#AAAAAA] text-sm sm:text-base">
              {t('news.upcoming_events.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="bg-[#1E1E1E] border-[#333] hover:border-[#F95700] transition-all duration-300 group h-full flex flex-col"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={400}
                    height={200}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#F95700] text-white text-xs sm:text-sm">Upcoming</Badge>
                  </div>
                </div>
                <CardHeader className="flex-grow">
                  <div className="mb-2">
                    <Badge variant="outline" className="border-[#F95700] text-[#F95700] text-xs sm:text-sm">
                      {event.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-[#F5F5F5] group-hover:text-[#F95700] transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-[#AAAAAA] text-sm sm:text-base">{event.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Past Events */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-4">{t('news.past_events.title')}</h2>
            <p className="text-[#AAAAAA] text-sm sm:text-base">
              {t('news.past_events.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pastEvents.map((event, index) => (
              <Card
                key={index}
                className="bg-[#1E1E1E] border-[#333] hover:border-[#F95700] transition-all duration-300 group h-full flex flex-col"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={400}
                    height={200}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-[#AAAAAA] text-[#121212] text-xs sm:text-sm">
                      Concluded
                    </Badge>
                  </div>
                </div>
                <CardHeader className="flex-grow">
                  <div className="mb-2">
                    <Badge variant="outline" className="border-[#F95700] text-[#F95700] text-xs sm:text-sm">
                      {event.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-[#F5F5F5] group-hover:text-[#F95700] transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-[#AAAAAA] text-sm sm:text-base">{event.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
