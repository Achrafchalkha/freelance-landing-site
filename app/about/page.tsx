import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Highway Academy - Leading Education Center in Fez, Morocco",
  description: "Discover Highway Academy's mission: Excellence in education since our founding. Top-rated private academy in Fez offering academic support, language courses, and university preparation with expert teachers.",
  keywords: [
    "about Highway Academy", "best private school Fez", "education center Morocco",
    "academic excellence Fez", "language school Morocco", "university preparation Fez",
    "private tutoring Morocco", "educational institution Fez", "learning center Morocco"
  ],
  openGraph: {
    title: "About Highway Academy - Leading Education Center in Fez, Morocco",
    description: "Excellence in education with expert teachers, proven results, and comprehensive programs from primary to university level.",
    url: "https://highwayacademy.ma/about",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Highway Academy About" }],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#121212] pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#1E1E1E] to-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">About Highway Academy</h1>
          <p className="text-lg sm:text-xl text-[#AAAAAA] max-w-3xl mx-auto px-4">
            Dedicated to excellence in education, we've been shaping futures and building success stories in Fez for
            years.
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
                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] mb-4">Our Mission</h3>
                <p className="text-[#AAAAAA] text-sm sm:text-base flex-grow">
                  To provide exceptional educational support and language training that empowers students to achieve
                  their academic goals and unlock their full potential.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#1E1E1E] border-[#333]">
              <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col">
                <Eye className="h-10 w-10 sm:h-12 sm:w-12 text-[#F95700] mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] mb-4">Our Vision</h3>
                <p className="text-[#AAAAAA] text-sm sm:text-base flex-grow">
                  To be the leading educational academy in Morocco, recognized for our innovative teaching methods and
                  commitment to student success.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* About Highway Academy */}
          <div className="bg-[#1E1E1E] rounded-lg p-6 sm:p-8 mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-6 text-center">About Highway Academy</h2>
            <div className="space-y-4 sm:space-y-6 text-[#AAAAAA] max-w-4xl mx-auto text-sm sm:text-base">
              <p>
                Highway Academy was founded with a clear purpose: to bridge the gap between traditional education and
                the personalized learning that every student deserves. Located in the heart of Fez, we serve students
                from primary school through university level, offering comprehensive academic support and specialized
                language courses.
              </p>
              <p>
                Our academy stands out through our commitment to individualized attention, innovative teaching
                methodologies, and a deep understanding of each student's unique learning style. We believe that
                education is not one-size-fits-all, which is why we tailor our approach to meet the specific needs and
                goals of every learner who walks through our doors.
              </p>
              <p>
                With locations in both Montfleuri and Narjiss, we've made quality education accessible to families
                across Fez. Our experienced educators bring passion, expertise, and dedication to every lesson, creating
                an environment where students feel supported, challenged, and inspired to excel.
              </p>
            </div>
          </div>

          {/* Founder's Story - Detailed */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5]">Meet Our Founder: Mr. Driss</h2>

              <div className="bg-[#F95700] p-1 rounded-lg inline-block">
                <div className="bg-[#121212] p-3 sm:p-4 rounded-lg">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-[#F95700]" />
                </div>
              </div>

              <blockquote className="text-lg sm:text-xl text-[#F95700] italic font-medium border-l-4 border-[#F95700] pl-4 sm:pl-6">
                "I believe that with the right guidance, anyone can learn, grow, and succeed. Education is not just
                about transferring knowledge—it's about igniting curiosity, building confidence, and empowering students
                to become the leaders of tomorrow."
              </blockquote>

              <div className="space-y-3 sm:space-y-4 text-[#AAAAAA] text-sm sm:text-base">
                <p>
                  Mr. Driss's journey in education began over 15 years ago when he first stepped into a classroom as a
                  young teacher. What started as a career quickly became a calling when he witnessed the transformative
                  power of personalized education.
                </p>
                <p>
                  Throughout his career, he noticed that many bright students were struggling not because they lacked
                  ability, but because traditional teaching methods didn't align with their learning styles. This
                  observation sparked his passion for developing innovative, student-centered approaches to education.
                </p>
                <p>
                  After years of refining his methods and seeing remarkable results with his students, Mr. Driss founded
                  Highway Academy in 2018. His vision was simple yet ambitious: create an educational institution where
                  every student could thrive, regardless of their starting point or learning challenges.
                </p>
                <p>
                  Today, under his leadership, Highway Academy has become a beacon of educational excellence in Fez,
                  helping hundreds of students achieve their academic dreams and build confidence for their future
                  endeavors.
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
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#F5F5F5]">Mr. Driss</h3>
                  <p className="text-[#F95700] text-base sm:text-lg">Founder & Director</p>
                  <p className="text-[#AAAAAA] text-xs sm:text-sm mt-2">15+ Years in Education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
