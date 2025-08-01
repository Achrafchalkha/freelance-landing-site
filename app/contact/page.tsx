"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/hooks/useLanguage"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Loader2 } from "lucide-react"
import { toast } from "sonner"
import dynamic from "next/dynamic"

// Dynamically import the LeafletMap to avoid SSR issues
const LeafletMap = dynamic(() => import("@/components/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="h-64 w-full bg-[#1E1E1E] rounded-lg border border-[#333] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#333] border-t-[#F95700] mx-auto mb-2"></div>
        <p className="text-[#AAAAAA] text-sm">Loading interactive map...</p>
      </div>
    </div>
  )
})

const getLocations = (t: any) => [
  {
    name: t('contact.locations.montfleuri.name'),
    address: t('contact.locations.montfleuri.address'),
    addressArabic: t('contact.locations.montfleuri.address_arabic'),
    phone: t('contact.locations.montfleuri.phone'),
    coordinates: "34.00595865995687, -4.984858206671568",
    latitude: 34.00595865995687,
    longitude: -4.984858206671568,
    googleMapsUrl: "https://www.google.com/maps?q=34.00595865995687,-4.984858206671568",
  },
  {
    name: t('contact.locations.narjiss.name'),
    address: t('contact.locations.narjiss.address'),
    addressArabic: t('contact.locations.narjiss.address_arabic'),
    phone: t('contact.locations.narjiss.phone'),
    coordinates: "34.008281113881154, -4.969071282883572",
    latitude: 34.008281113881154,
    longitude: -4.969071282883572,
    googleMapsUrl: "https://www.google.com/maps?q=34.008281113881154,-4.969071282883572",
  },
]

const getFaqs = (t: any) => [
  {
    question: t('contact.faq.questions.subjects.question'),
    answer: t('contact.faq.questions.subjects.answer'),
  },
  {
    question: t('contact.faq.questions.class_sizes.question'),
    answer: t('contact.faq.questions.class_sizes.answer'),
  },
  {
    question: t('contact.faq.questions.individual_tutoring.question'),
    answer: t('contact.faq.questions.individual_tutoring.answer'),
  },
  {
    question: t('contact.faq.questions.operating_hours.question'),
    answer: t('contact.faq.questions.operating_hours.answer'),
  },
  {
    question: t('contact.faq.questions.enrollment.question'),
    answer: t('contact.faq.questions.enrollment.answer'),
  },
  {
    question: t('contact.faq.questions.international_exams.question'),
    answer: t('contact.faq.questions.international_exams.answer'),
  },
  {
    question: t('contact.faq.questions.what_makes_different.question'),
    answer: t('contact.faq.questions.what_makes_different.answer'),
  },
  {
    question: t('contact.faq.questions.age_restrictions.question'),
    answer: t('contact.faq.questions.age_restrictions.answer'),
  },
]

export default function ContactPage() {
  const { t } = useLanguage()
  const locations = getLocations(t)
  const faqs = getFaqs(t)
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form')
    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Message sent successfully!', {
          description: data.message || 'Thank you for contacting us. We\'ll get back to you soon.',
        })
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        toast.error('Failed to send message', {
          description: data.error || 'Please try again later.',
        })
      }
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error('Failed to send message', {
        description: 'Please check your internet connection and try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-[#121212] pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#1E1E1E] to-[#121212]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-6">{t('contact.hero.title')}</h1>
          <p className="text-lg sm:text-xl text-[#AAAAAA] max-w-3xl mx-auto px-4">
            {t('contact.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Details */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-6 sm:mb-8">{t('contact.get_in_touch.title')}</h2>

                {/* Locations */}
                <div className="space-y-4 sm:space-y-6">
                  {locations.map((location, index) => (
                    <Card key={index} className="bg-[#1E1E1E] border-[#333]">
                      <CardHeader>
                        <CardTitle className="text-lg sm:text-xl text-[#F95700] flex items-center">
                          <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                          <span className="text-sm sm:text-base">{location.name}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="text-[#AAAAAA] text-sm sm:text-base">
                          <p>{location.address}</p>
                          <p className="text-xs sm:text-sm">{location.addressArabic}</p>
                        </div>
                        <div className="flex items-center text-[#AAAAAA]">
                          <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-[#F95700] mr-2" />
                          <a
                            href={`tel:${location.phone}`}
                            className="hover:text-[#F95700] transition-colors text-sm sm:text-base"
                          >
                            {location.phone}
                          </a>
                        </div>
                        <div className="flex items-center text-[#AAAAAA]">
                          <MapPin className="h-3 w-3 sm:h-4 sm:w-4 text-[#F95700] mr-2" />
                          <a
                            href={location.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#F95700] transition-colors text-sm sm:text-base underline"
                          >
                            View on Google Maps
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* General Contact Info */}
                <Card className="bg-[#1E1E1E] border-[#333]">
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl text-[#F95700]">{t('contact.general_info.title')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center text-[#AAAAAA]">
                      <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-[#F95700] mr-2" />
                      <a
                        href="mailto:info@highwayacademy.ma"
                        className="hover:text-[#F95700] transition-colors text-sm sm:text-base"
                      >
                        {t('contact.general_info.email')}
                      </a>
                    </div>
                    <div className="flex items-center text-[#AAAAAA]">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-[#F95700] mr-2" />
                      <span className="text-sm sm:text-base">{t('contact.general_info.hours')}</span>
                    </div>
                    <div className="flex items-center space-x-4 pt-2">
                      <a href="#" className="text-[#AAAAAA] hover:text-[#F95700] transition-colors">
                        <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                      <a href="#" className="text-[#AAAAAA] hover:text-[#F95700] transition-colors">
                        <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Maps and Contact Form */}
            <div className="space-y-6 sm:space-y-8">
              {/* Interactive Maps */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] mb-4 sm:mb-6">{t('contact.map.title')}</h3>
                <Tabs defaultValue="montfleuri" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-[#1E1E1E] border border-[#333]">
                    <TabsTrigger
                      value="montfleuri"
                      className="data-[state=active]:bg-[#F95700] data-[state=active]:text-white text-[#AAAAAA] text-sm sm:text-base"
                    >
                      {t('contact.map.montfleuri')}
                    </TabsTrigger>
                    <TabsTrigger
                      value="narjiss"
                      className="data-[state=active]:bg-[#F95700] data-[state=active]:text-white text-[#AAAAAA] text-sm sm:text-base"
                    >
                      {t('contact.map.narjiss')}
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="montfleuri" className="mt-4">
                    <div className="bg-[#1E1E1E] p-3 sm:p-4 rounded-lg border border-[#333]">
                      <LeafletMap
                        latitude={locations[0].latitude}
                        longitude={locations[0].longitude}
                        locationName={locations[0].name}
                        address={locations[0].address}
                        phone={locations[0].phone}
                      />
                      <div className="mt-3 text-center">
                        <a
                          href={locations[0].googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#F95700] hover:text-[#E04E00] transition-colors text-sm"
                        >
                          <MapPin className="h-4 w-4 mr-1" />
                          {t('contact.map.open_google_maps')}
                        </a>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="narjiss" className="mt-4">
                    <div className="bg-[#1E1E1E] p-3 sm:p-4 rounded-lg border border-[#333]">
                      <LeafletMap
                        latitude={locations[1].latitude}
                        longitude={locations[1].longitude}
                        locationName={locations[1].name}
                        address={locations[1].address}
                        phone={locations[1].phone}
                      />
                      <div className="mt-3 text-center">
                        <a
                          href={locations[1].googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-[#F95700] hover:text-[#E04E00] transition-colors text-sm"
                        >
                          <MapPin className="h-4 w-4 mr-1" />
                          {t('contact.map.open_google_maps')}
                        </a>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Contact Form */}
              <Card id="contact-form" className="bg-[#1E1E1E] border-[#333]">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl text-[#F5F5F5]">{t('contact.form.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="name"
                          placeholder={t('contact.form.name_placeholder')}
                          value={formData.name}
                          onChange={handleChange}
                          maxLength={100}
                          className="bg-[#121212] border-[#333] text-[#F5F5F5] placeholder-[#AAAAAA] text-sm sm:text-base"
                          required
                        />
                        <div className="text-xs text-[#AAAAAA] mt-1 text-right">
                          {formData.name.length}/100
                        </div>
                      </div>
                      <Input
                        name="email"
                        type="email"
                        placeholder={t('contact.form.email_placeholder')}
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-[#121212] border-[#333] text-[#F5F5F5] placeholder-[#AAAAAA] text-sm sm:text-base"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="subject"
                        placeholder={t('contact.form.subject_placeholder')}
                        value={formData.subject}
                        onChange={handleChange}
                        maxLength={200}
                        className="bg-[#121212] border-[#333] text-[#F5F5F5] placeholder-[#AAAAAA] text-sm sm:text-base"
                        required
                      />
                      <div className="text-xs text-[#AAAAAA] mt-1 text-right">
                        {formData.subject.length}/200
                      </div>
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder={t('contact.form.message_placeholder')}
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        maxLength={2000}
                        className="bg-[#121212] border-[#333] text-[#F5F5F5] placeholder-[#AAAAAA] text-sm sm:text-base"
                        required
                      />
                      <div className="text-xs text-[#AAAAAA] mt-1 text-right">
                        {formData.message.length}/2000
                      </div>
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#F95700] hover:bg-[#E04E00] text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          {t('contact.form.sending')}
                        </>
                      ) : (
                        t('contact.form.send_button')
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-[#1E1E1E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F5F5F5] mb-4">{t('contact.faq.title')}</h2>
            <p className="text-[#AAAAAA] max-w-2xl mx-auto text-sm sm:text-base px-4">
              {t('contact.faq.subtitle')}
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-[#121212] border border-[#333] rounded-lg px-4 sm:px-6"
              >
                <AccordionTrigger className="text-[#F5F5F5] hover:text-[#F95700] text-left">
                  <span className="font-semibold text-sm sm:text-base">Q: {faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-[#AAAAAA] pt-2">
                  <span className="font-semibold text-[#F95700]">A: </span>
                  <span className="text-sm sm:text-base">{faq.answer}</span>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-[#AAAAAA] mb-4 text-sm sm:text-base">{t('contact.faq.still_have_questions')}</p>
            <Button
              onClick={scrollToContactForm}
              className="bg-[#F95700] hover:bg-[#E04E00] text-white px-6 sm:px-8 py-3 transition-all duration-300 transform hover:scale-105"
            >
              {t('contact.faq.contact_directly')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
