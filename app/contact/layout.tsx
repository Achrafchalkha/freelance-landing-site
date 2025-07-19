import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Highway Academy Fez - Montfleuri & Narjiss Locations | Morocco",
  description: "Contact Highway Academy Fez: 2 locations in Montfleuri & Narjiss. Call +212535765701 or +212535614990. Open Mon-Sat 9AM-11PM. Best education center in Fez, Morocco.",
  keywords: [
    "contact Highway Academy", "Highway Academy Fez phone", "education center Montfleuri", 
    "language school Narjiss", "private academy Fez contact", "tutoring center Morocco",
    "Highway Academy address", "best school Fez contact", "education Fez Morocco phone"
  ],
  openGraph: {
    title: "Contact Highway Academy - Education Center in Fez, Morocco",
    description: "Get in touch with Highway Academy. Two convenient locations in Fez: Montfleuri & Narjiss.",
    url: "https://highwayacademy.ma/contact",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Contact Highway Academy" }],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
