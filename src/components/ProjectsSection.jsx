import { Component } from 'react'
import Section from './Section'

class ProjectsSection extends Component {
  render() {
    const { projects } = this.props

    return (
      <Section title="Projects">
        {projects.map((project) => (
          <div className="project" key={project.name}>
            <div className="project-name">
              <a href={project.url} target="_blank" rel="noreferrer">
                {project.name}
              </a>
            </div>
            <p className="project-desc">{project.description}</p>
          </div>
        ))}
      </Section>
    )
  }
}

export default ProjectsSection
