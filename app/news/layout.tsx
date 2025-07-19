import { Metadata } from "next"

export const metadata: Metadata = {
  title: "News & Events - Highway Academy Fez | Latest Updates & Success Stories",
  description: "Stay updated with Highway Academy Fez news: student success stories, upcoming workshops, IELTS achievements, summer courses, and educational events in Morocco.",
  keywords: [
    "Highway Academy news", "education events Fez", "student success Morocco", 
    "IELTS success stories", "summer courses Fez", "educational workshops Morocco",
    "academy updates Fez", "learning events Morocco", "student achievements Fez"
  ],
  openGraph: {
    title: "News & Events - Highway Academy Fez Morocco",
    description: "Latest news, events, and student success stories from Highway Academy.",
    url: "https://highwayacademy.ma/news",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Highway Academy News" }],
  },
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
