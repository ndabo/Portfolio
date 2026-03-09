import Navbar from './components/nav/Navbar'
import Hero from './components/hero/Hero'
import ProjectsGrid from './components/projects/ProjectsGrid'
import AthleticsSection from './components/athletics/AthleticsSection'
import SkillsSection from './components/skills/SkillsSection'
import ContactSection from './components/contact/ContactSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProjectsGrid />
      <AthleticsSection />
      <SkillsSection />
      <ContactSection />
    </>
  )
}
