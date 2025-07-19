"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, Languages, GraduationCap, Clock, Users, Award } from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"

const academicPrograms = [
  {
    level: "Primary School",
    subjects: ["Mathematics", "Arabic", "French", "English"],
    description: "Building strong foundations in core subjects with engaging, age-appropriate methods.",
  },
  {
    level: "Middle School",
    subjects: ["French", "English", "Physics", "Science", "Mathematics"],
    description: "Comprehensive support across all subjects to ensure smooth transition to high school.",
  },
  {
    level: "High School",
    subjects: [
      "English",
      "Arabic",
      "French",
      "Philosophy",
      "Physics & Chemistry",
      "Biology",
      "Mathematics",
      "History & Geography",
      "Islamic Studies",
      "Economics & Management",
      "Technology",
    ],
    description:
      "We support all educational streams (Literary, Scientific, Technical) with comprehensive coverage of core subjects and exam preparation for both regional and national levels.",
  },
  {
    level: "University Support",
    subjects: [
      "English",
      "French",
      "Biology",
      "Chemistry",
      "Physics",
      "Economics",
      "Research Writing",
      "Business English",
      "Presentation Skills",
    ],
    description:
      "We provide academic assistance in languages, scientific subjects, and essential skills like research writing and presentations to enhance academic and professional performance.",
  },
]

const languageCourses = [
  {
    title: "General English",
    levels: "A1 - C2",
    description:
      "Comprehensive English language training covering all four skills: speaking, listening, reading, and writing.",
    features: ["Interactive lessons", "Conversation practice", "Grammar mastery", "Vocabulary building"],
  },
  {
    title: "Business English",
    levels: "B1 - C2",
    description: "Professional English for workplace communication, presentations, and business correspondence.",
    features: ["Business vocabulary", "Professional communication", "Presentation skills", "Email writing"],
  },
  {
    title: "TOEFL Preparation",
    levels: "B2 - C2",
    description: "Intensive preparation for the TOEFL exam with practice tests and targeted skill development.",
    features: ["Mock exams", "Test strategies", "Time management", "Score improvement"],
  },
  {
    title: "IELTS Preparation",
    levels: "B2 - C2",
    description: "Comprehensive IELTS preparation covering all four modules with expert guidance.",
    features: ["Band score improvement", "Speaking practice", "Writing techniques", "Listening skills"],
  },
  {
    title: "French Language",
    levels: "A1 - C2",
    description: "Complete French language program from beginner to advanced levels.",
    features: ["Native speaker instruction", "Cultural immersion", "DELF/DALF prep", "Conversation clubs"],
  },
  {
    title: "Arabic Reading & Writing for Kids and Teens",
    levels: "All levels",
    description:
      "Comprehensive Arabic literacy program designed specifically for children and teenagers to master reading and writing skills.",
    features: [
      "Age-appropriate curriculum",
      "Interactive learning methods",
      "Cultural context integration",
      "Progress tracking",
    ],
  },
]

// Component that uses useSearchParams - wrapped in Suspense
function ProgramsContent() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("language")
  const [isLoading, setIsLoading] = useState(true)

  // Memoize heavy data to prevent re-computation
  const memoizedAcademicPrograms = useMemo(() => academicPrograms, [])
  const memoizedLanguageCourses = useMemo(() => languageCourses, [])

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">Our Programs</h1>
          <p className="text-lg sm:text-xl text-[#AAAAAA] max-w-3xl mx-auto px-4">
            Discover our comprehensive range of educational programs designed to meet your specific learning goals and
            academic aspirations.
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
                <span className="hidden sm:inline">Language & Skills Courses</span>
                <span className="sm:hidden">Language</span>
              </TabsTrigger>
              <TabsTrigger
                value="academic"
                className="data-[state=active]:bg-[#F95700] data-[state=active]:text-white text-[#AAAAAA] text-sm sm:text-base"
              >
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                <span className="hidden sm:inline">Academic Support</span>
                <span className="sm:hidden">Academic</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="language" id="language">
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-4">Language & Skills Courses</h2>
                  <p className="text-[#AAAAAA] max-w-3xl mx-auto text-sm sm:text-base px-4">
                    Master new languages and develop essential skills with our expert instructors.
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
                            <Award className="h-3 w-3 sm:h-4 sm:w-4 text-[#F95700] mr-2" />
                            Key Features:
                          </h4>
                          <ul className="space-y-2">
                            {course.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-[#AAAAAA] text-xs sm:text-sm">
                                <div className="w-2 h-2 bg-[#F95700] rounded-full mr-3 flex-shrink-0"></div>
                                {feature}
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
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-4">Academic Support Programs</h2>
                  <p className="text-[#AAAAAA] max-w-3xl mx-auto text-sm sm:text-base px-4">
                    Comprehensive tutoring and academic support from primary school through university level.
                  </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {memoizedAcademicPrograms.map((program, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-[#1E1E1E] border border-[#333] rounded-lg px-4 sm:px-6"
                    >
                      <AccordionTrigger className="text-[#F5F5F5] hover:text-[#F95700] text-left">
                        <div className="flex items-center space-x-3">
                          <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-[#F95700]" />
                          <span className="text-lg sm:text-xl font-semibold">{program.level}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-[#AAAAAA] pt-4">
                        <p className="mb-4 text-sm sm:text-base">{program.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                          {program.subjects.map((subject, subIndex) => (
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
                <h3 className="text-lg sm:text-xl font-semibold text-[#F5F5F5] mb-2">Flexible Scheduling</h3>
                <p className="text-[#AAAAAA] text-sm sm:text-base flex-grow">
                  Morning, afternoon, and evening classes to fit your schedule.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1E1E1E] border-[#333] text-center h-full flex flex-col">
              <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                <Users className="h-10 w-10 sm:h-12 sm:w-12 text-[#F95700] mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#F5F5F5] mb-2">Small Class Sizes</h3>
                <p className="text-[#AAAAAA] text-sm sm:text-base flex-grow">
                  Maximum 8 students per class for personalized attention.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1E1E1E] border-[#333] text-center h-full flex flex-col">
              <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                <Award className="h-10 w-10 sm:h-12 sm:w-12 text-[#F95700] mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#F5F5F5] mb-2">Certified Instructors</h3>
                <p className="text-[#AAAAAA] text-sm sm:text-base flex-grow">
                  All our teachers are qualified and experienced professionals.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-16 sm:mt-20 text-center">
            <div className="bg-[#1E1E1E] rounded-lg p-6 sm:p-8 border border-[#333]">
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] mb-4">
                Ready to Start Your Learning Journey?
              </h3>
              <p className="text-[#AAAAAA] mb-6 max-w-2xl mx-auto text-sm sm:text-base px-4">
                Contact us today to discuss your educational goals and find the perfect program for you.
              </p>
              <div className="flex justify-center">
                <Button
                  asChild
                  variant="outline"
                  className="border-[#F95700] text-[#F95700] hover:bg-[#F95700] hover:text-white px-6 sm:px-8 py-3 bg-transparent w-full sm:w-auto"
                >
                  <Link href="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Main export with Suspense boundary
export default function ProgramsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#121212] pt-16 sm:pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-2 border-[#333] border-t-[#F95700] mx-auto mb-4"></div>
          <p className="text-[#AAAAAA] text-lg">Loading programs...</p>
        </div>
      </div>
    }>
      <ProgramsContent />
    </Suspense>
  )
}
