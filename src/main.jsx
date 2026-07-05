import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import resume from './data.json'
import ResumeHeader from './components/ResumeHeader'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import ProjectsSection from './components/ProjectsSection'

function App() {
  const { name, summary, contact, skills, experience, education, projects } = resume

  return (
    <>
      <button className="print-btn" onClick={() => window.print()}>
        Export PDF
      </button>

      <main className="page">
        <ResumeHeader name={name} contact={contact} summary={summary} />
        <SkillsSection skills={skills} />
        <ExperienceSection experience={experience} />
        <EducationSection education={education} />
        <ProjectsSection projects={projects} />
      </main>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
