import { Brain, Award, Users, Target } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Expert Tutors",
    description: "Learn from the best minds in Fez, dedicated to your growth and success in every subject.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Track record of academic excellence and student achievement across all educational levels.",
  },
  {
    icon: Users,
    title: "Supportive Environment",
    description: "Collaborative learning atmosphere that encourages growth, builds confidence, and fosters success.",
  },
  {
    icon: Target,
    title: "Personalized Learning",
    description: "Tailored approach to meet each student's unique needs and individual learning style effectively.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
            Why Choose Highway Academy?
          </h2>
          <p className="text-lg sm:text-xl text-[#AAAAAA] max-w-3xl mx-auto px-4">
            We combine expertise, innovation, and personalized attention to create the perfect learning environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-[#121212] p-6 rounded-lg border border-[#333] hover:border-[#F95700] transition-all duration-300 group-hover:transform group-hover:scale-105 h-full flex flex-col">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F95700] rounded-full mb-4 mx-auto group-hover:bg-[#E04E00] transition-colors">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#F5F5F5] mb-2">{feature.title}</h3>
                <p className="text-[#AAAAAA] text-sm sm:text-base flex-grow">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
