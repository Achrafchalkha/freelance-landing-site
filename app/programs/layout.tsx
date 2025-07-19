import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Programs - Language Courses & Academic Support | Highway Academy Fez",
  description: "Comprehensive education programs at Highway Academy Fez: English & French language courses, IELTS/TOEFL preparation, academic support from primary to university level. Expert tutoring in Morocco.",
  keywords: [
    "Highway Academy programs", "language courses Fez Morocco", "English courses Fez", 
    "French courses Morocco", "IELTS preparation Fez", "TOEFL courses Morocco",
    "academic support Fez", "university preparation Morocco", "private tutoring Fez",
    "conversation clubs Morocco", "exam preparation Fez", "language school Morocco"
  ],
  openGraph: {
    title: "Education Programs - Highway Academy Fez Morocco",
    description: "Language courses, academic support, and exam preparation programs designed for success.",
    url: "https://highwayacademy.ma/programs",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Highway Academy Programs" }],
  },
}

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
