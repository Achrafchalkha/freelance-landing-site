import Image from "next/image"

export function FounderStory() {
  return (
    <section className="py-20 bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F5F5F5]">
              Meet Our Founder: A Story of Passion and Perseverance
            </h2>

            <blockquote className="text-xl sm:text-2xl text-[#F95700] italic font-medium border-l-4 border-[#F95700] pl-6">
              "I believe that with the right guidance, anyone can learn, grow, and succeed..."
            </blockquote>

            <div className="space-y-4 text-[#AAAAAA]">
              <p>
                Mr. Driss founded Highway Academy with a simple yet powerful vision: to create an educational
                environment where every student can reach their full potential. With over 15 years of experience in
                education, he has dedicated his career to transforming lives through learning.
              </p>
              <p>
                His journey began as a passionate educator who noticed that traditional teaching methods didn't work for
                everyone. This realization led him to develop innovative, personalized approaches that cater to
                different learning styles and needs.
              </p>
              <p>
                Today, Highway Academy stands as a testament to his commitment to educational excellence, serving
                students from primary school to university level across Fez.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#F95700] to-[#E04E00] p-1 rounded-lg">
              <div className="bg-[#121212] p-8 rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Mr. Driss - Founder of Highway Academy"
                  width={400}
                  height={400}
                  className="rounded-lg mx-auto"
                />
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold text-[#F5F5F5]">Mr. Driss</h3>
                  <p className="text-[#F95700]">Founder & Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
