import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const newsEvents = [
  {
    title: "Summer Intensive Courses ",
    description: "Join our comprehensive summer program designed to boost academic performance and language skills.",
    status: "upcoming",
    category: "Academic Programs",
    image: "/conversation-clubs.jpg",
  },
  {
    title: "IELTS Success Stories",
    description:
      "Celebrating our students who achieved outstanding IELTS scores and secured university admissions abroad.",
    status: "concluded",
    category: "Student Success",
    image: "/IELTS.jpg",
  },
  {
    title: "Conversation Clubs (All Levels)",
    description:
      "Join our weekly conversation clubs to practice English and French in a relaxed, supportive environment with fellow learners.",
    status: "upcoming",
    category: "Language Practice",
    image: "/summer-intensive.jpg",
  },
  {
    title: "University Preparation Workshop",
    description:
      "Free workshop for high school students covering university application processes and entrance exam strategies.",
    status: "concluded",
    category: "Workshops",
    image: "/university-prep.jpg",
  },
  {
    title: "Public Speaking Workshop",
    description:
      "Develop confidence and communication skills in our intensive public speaking workshop for students and professionals.",
    status: "upcoming",
    category: "Skills Development",
    image: "/PUBLIC SPEAKING.jpg",
  },
  {
    title: "Teacher Training Seminar",
    description: "Professional development seminar for our educators focusing on innovative teaching methodologies.",
    status: "concluded",
    category: "Professional Development",
    image: "/SEMINAR.jpeg",
  },
]

export default function NewsPage() {
  const upcomingEvents = newsEvents.filter((event) => event.status === "upcoming")
  const pastEvents = newsEvents.filter((event) => event.status === "concluded")

  return (
    <div className="min-h-screen bg-[#121212] pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#1E1E1E] to-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">News & Events</h1>
          <p className="text-lg sm:text-xl text-[#AAAAAA] max-w-3xl mx-auto px-4">
            Stay updated with the latest news, events, and announcements from Highway Academy.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-4">Upcoming Events</h2>
            <p className="text-[#AAAAAA] text-sm sm:text-base">
              Don't miss out on these exciting upcoming events and programs.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-4">Recent News & Past Events</h2>
            <p className="text-[#AAAAAA] text-sm sm:text-base">
              Catch up on recent happenings and concluded events at Highway Academy.
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
