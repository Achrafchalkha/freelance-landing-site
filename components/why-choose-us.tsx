"use client"

import { Brain, Award, Users, Target } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"

export function WhyChooseUs() {
  const { t } = useLanguage()
  
  const features = [
    {
      icon: Brain,
      title: t('why_choose.expert_tutors.title'),
      description: t('why_choose.expert_tutors.description'),
    },
    {
      icon: Award,
      title: t('why_choose.proven_results.title'),
      description: t('why_choose.proven_results.description'),
    },
    {
      icon: Users,
      title: t('why_choose.supportive_environment.title'),
      description: t('why_choose.supportive_environment.description'),
    },
    {
      icon: Target,
      title: t('why_choose.personalized_learning.title'),
      description: t('why_choose.personalized_learning.description'),
    },
  ]
  
  return (
    <section className="py-16 sm:py-20 bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4">
            {t('why_choose.title')}
          </h2>
          <p className="text-lg sm:text-xl text-[#AAAAAA] max-w-3xl mx-auto px-4">
            {t('why_choose.subtitle')}
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
