import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Languages, GraduationCap } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    icon: BookOpen,
    title: "Academic Support",
    description: "Comprehensive tutoring from primary school to university level across all subjects.",
    features: ["Primary to University", "All Subjects", "Individual & Group Sessions"],
    link: "/programs#academic",
  },
  {
    icon: Languages,
    title: "Language Courses",
    description: "Master English, French, and other languages with our expert instructors.",
    features: ["English & French", "All Levels (A1-C2)", "Conversation Practice"],
    link: "/programs#language",
  },
  {
    icon: GraduationCap,
    title: "Exam Preparation",
    description: "Specialized preparation for TOEFL, IELTS, and national examinations.",
    features: ["TOEFL & IELTS", "National Exams", "Mock Tests"],
    link: "/programs#exam",
  },
]

export function ProgramsOverview() {
  return (
    <section className="py-16 sm:py-20 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
            Find Your Path to Excellence
          </h2>
          <p className="text-lg sm:text-xl text-[#AAAAAA] max-w-3xl mx-auto px-4">
            Choose from our comprehensive range of educational programs designed to meet your specific learning goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="bg-[#1E1E1E] border-[#333] hover:border-[#F95700] transition-all duration-300 group hover:transform hover:scale-105 h-full flex flex-col"
            >
              <CardHeader className="text-center flex-shrink-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F95700] rounded-full mb-4 mx-auto group-hover:bg-[#E04E00] transition-colors">
                  <program.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-[#F5F5F5]">{program.title}</CardTitle>
                <CardDescription className="text-[#AAAAAA] text-sm sm:text-base">{program.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow flex flex-col">
                <ul className="space-y-2 flex-grow">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-[#AAAAAA] text-sm sm:text-base">
                      <div className="w-2 h-2 bg-[#F95700] rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full bg-transparent border border-[#F95700] text-[#F95700] hover:bg-[#F95700] hover:text-white mt-auto"
                >
                  <Link href={program.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
