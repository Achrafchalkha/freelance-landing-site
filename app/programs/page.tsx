"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, Languages, GraduationCap, Clock, Users, Award, Globe, Target, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { useLanguage } from '@/hooks/useLanguage'

// Component that uses useSearchParams - wrapped in Suspense
function ProgramsContent() {
  const { t, isRTL } = useLanguage()
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("language")
  const [isLoading, setIsLoading] = useState(true)

  // Academic programs data will be generated from translations
  const getAcademicPrograms = () => [
    {
      level: t('programs.academic_programs.primary_school.level'),
      subjects: t('programs.academic_programs.primary_school.subjects'),
      description: t('programs.academic_programs.primary_school.description'),
    },
    {
      level: t('programs.academic_programs.middle_school.level'),
      subjects: t('programs.academic_programs.middle_school.subjects'),
      description: t('programs.academic_programs.middle_school.description'),
    },
    {
      level: t('programs.academic_programs.high_school.level'),
      subjects: t('programs.academic_programs.high_school.subjects'),
      description: t('programs.academic_programs.high_school.description'),
    },
    {
      level: t('programs.academic_programs.university_support.level'),
      subjects: t('programs.academic_programs.university_support.subjects'),
      description: t('programs.academic_programs.university_support.description'),
    },
  ]

  // Language courses data will be generated from translations
  const getLanguageCourses = () => [
    {
      title: t('programs.language_courses.general_english.title'),
      levels: t('programs.language_courses.general_english.levels'),
      description: t('programs.language_courses.general_english.description'),
      features: t('programs.language_courses.general_english.features'),
      icon: Globe
    },
    {
      title: t('programs.language_courses.business_english.title'),
      levels: t('programs.language_courses.business_english.levels'),
      description: t('programs.language_courses.business_english.description'),
      features: t('programs.language_courses.business_english.features'),
      icon: Target
    },
    {
      title: t('programs.language_courses.toefl_preparation.title'),
      levels: t('programs.language_courses.toefl_preparation.levels'),
      description: t('programs.language_courses.toefl_preparation.description'),
      features: t('programs.language_courses.toefl_preparation.features'),
      icon: Award
    },
    {
      title: t('programs.language_courses.ielts_preparation.title'),
      levels: t('programs.language_courses.ielts_preparation.levels'),
      description: t('programs.language_courses.ielts_preparation.description'),
      features: t('programs.language_courses.ielts_preparation.features'),
      icon: CheckCircle
    },
    {
      title: t('programs.language_courses.french_language.title'),
      levels: t('programs.language_courses.french_language.levels'),
      description: t('programs.language_courses.french_language.description'),
      features: t('programs.language_courses.french_language.features'),
      icon: Globe
    },
    {
      title: t('programs.language_courses.arabic_kids.title'),
      levels: t('programs.language_courses.arabic_kids.levels'),
      description: t('programs.language_courses.arabic_kids.description'),
      features: t('programs.language_courses.arabic_kids.features'),
      icon: BookOpen
    }
  ]

  // Memoize heavy data to prevent re-computation
  const memoizedAcademicPrograms = useMemo(() => getAcademicPrograms(), [t])
  const memoizedLanguageCourses = useMemo(() => getLanguageCourses(), [t])

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)

    // Check URL query parameter first, then hash for backward compatibility
    const tab = searchParams.get('tab')
    const hash = window.location.hash.replace('#', '')

    if (tab === 'academic' || tab === 'language') {
      setActiveTab(tab)
    } else if (hash === 'academic' || hash === 'language') {
      setActiveTab(hash)
    } else {
      // Default to language tab if no specific tab is requested
      setActiveTab('language')
    }

    // Simulate loading completion
    const timer = setTimeout(() => setIsLoading(false), 100)
    return () => clearTimeout(timer)
  }, [searchParams])

  return (
    <div className="min-h-screen bg-[#121212] pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#1E1E1E] to-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">{t('programs.title')}</h1>
          <p className="text-lg sm:text-xl text-[#AAAAAA] max-w-3xl mx-auto px-4">
            {t('programs.subtitle')}
          </p>
        </div>
      </section>

      {/* Programs Tabs */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-[#1E1E1E] border border-[#333] mb-8 sm:mb-12">
              <TabsTrigger
                value="language"
                className="data-[state=active]:bg-[#F95700] data-[state=active]:text-white text-[#AAAAAA] text-sm sm:text-base"
              >
                <Languages className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                <span className="hidden sm:inline">{t('programs.language_tab')}</span>
                <span className="sm:hidden">Language</span>
              </TabsTrigger>
              <TabsTrigger
                value="academic"
                className="data-[state=active]:bg-[#F95700] data-[state=active]:text-white text-[#AAAAAA] text-sm sm:text-base"
              >
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                <span className="hidden sm:inline">{t('programs.academic_tab')}</span>
                <span className="sm:hidden">Academic</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="language" id="language">
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-4">{t('programs.language_section.title')}</h2>
                  <p className="text-[#AAAAAA] max-w-3xl mx-auto text-sm sm:text-base px-4">
                    {t('programs.language_section.subtitle')}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {memoizedLanguageCourses.map((course, index) => (
                    <Card
                      key={index}
                                          className="bg-[#1E1E1E] border-[#333] hover:border-[#F95700] transition-all duration-300 h-full flex flex-col"
                    >
                      <CardHeader className="flex-shrink-0">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <CardTitle className="text-lg sm:text-xl text-[#F5F5F5]">{course.title}</CardTitle>
                          <div className="bg-[#F95700] text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                            {course.levels}
                          </div>
                        </div>
                        <CardDescription className="text-[#AAAAAA] text-sm sm:text-base">
                          {course.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow flex flex-col">
                        <div className="space-y-3 flex-grow">
                          <h4 className="font-semibold text-[#F5F5F5] flex items-center text-sm sm:text-base">
                            <course.icon className="h-3 w-3 sm:h-4 sm:w-4 text-[#F95700] me-2" />
                            <span>{t('programs.language_section.key_features')}</span>
                          </h4>
                          <ul className="space-y-2">
                            {Array.isArray(course.features) && course.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-[#AAAAAA] text-xs sm:text-sm">
                                <div className="w-2 h-2 bg-[#F95700] rounded-full flex-shrink-0 me-3"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="academic" id="academic">
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-4">{t('programs.academic_section.title')}</h2>
                  <p className="text-[#AAAAAA] max-w-3xl mx-auto text-sm sm:text-base px-4">
                    {t('programs.academic_section.subtitle')}
                  </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {memoizedAcademicPrograms.map((program, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-[#1E1E1E] border border-[#333] rounded-lg px-4 sm:px-6"
                    >
                      <AccordionTrigger className="text-[#F5F5F5] hover:text-[#F95700]">
                        <div className="flex items-center space-x-3">
                          <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-[#F95700]" />
                          <span className="text-lg sm:text-xl font-semibold">{program.level}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-[#AAAAAA] pt-4">
                        <p className="mb-4 text-sm sm:text-base">{program.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                          {Array.isArray(program.subjects) && program.subjects.map((subject, subIndex) => (
                            <div
                              key={subIndex}
                              className="bg-[#121212] px-3 py-2 rounded-md text-xs sm:text-sm border border-[#333]"
                            >
                              {subject}
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>

          {/* Additional Info */}
          <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-[#1E1E1E] border-[#333] text-center h-full flex flex-col">
              <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-[#F95700] mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#F5F5F5] mb-2">{t('programs.features.flexible_scheduling.title')}</h3>
                <p className="text-[#AAAAAA] text-sm sm:text-base flex-grow">
                  {t('programs.features.flexible_scheduling.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1E1E1E] border-[#333] text-center h-full flex flex-col">
              <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                <Users className="h-10 w-10 sm:h-12 sm:w-12 text-[#F95700] mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#F5F5F5] mb-2">{t('programs.features.small_classes.title')}</h3>
                <p className="text-[#AAAAAA] text-sm sm:text-base flex-grow">
                  {t('programs.features.small_classes.description')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1E1E1E] border-[#333] text-center h-full flex flex-col">
              <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                <Award className="h-10 w-10 sm:h-12 sm:w-12 text-[#F95700] mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#F5F5F5] mb-2">{t('programs.features.certified_instructors.title')}</h3>
                <p className="text-[#AAAAAA] text-sm sm:text-base flex-grow">
                  {t('programs.features.certified_instructors.description')}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 sm:mt-20 text-center">
            <div className="bg-[#1E1E1E] rounded-lg p-6 sm:p-8 border border-[#333]">
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] mb-4">
                {t('programs.cta.title')}
              </h3>
              <p className="text-[#AAAAAA] mb-6 max-w-2xl mx-auto text-sm sm:text-base px-4">
                {t('programs.cta.description')}
              </p>
              <div className="flex justify-center">
                <Button
                  asChild
                  variant="outline"
                  className="border-[#F95700] text-[#F95700] hover:bg-[#F95700] hover:text-white px-6 sm:px-8 py-3 bg-transparent w-full sm:w-auto"
                >
                  <Link href="/contact">{t('programs.cta.button')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Loading component that can use translations
function LoadingFallback() {
  const { t, isRTL } = useLanguage()
  
  return (
    <div className={`min-h-screen bg-[#121212] pt-16 sm:pt-20 flex items-center justify-center ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F95700] mx-auto mb-4"></div>
        <p className="text-[#AAAAAA]">{t('programs.loading')}</p>
      </div>
    </div>
  )
}

// Main export with Suspense boundary
export default function ProgramsPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ProgramsContent />
    </Suspense>
  )
}
