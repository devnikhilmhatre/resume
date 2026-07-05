import { Component } from 'react'
import Section from './Section'

class EducationSection extends Component {
  render() {
    const { education } = this.props

    return (
      <Section title="Education">
        {education.map((edu) => (
          <div className="edu-item" key={edu.school}>
            <div>
              <div className="edu-school">{edu.school}</div>
              <div className="edu-degree">{edu.degree}</div>
            </div>
            <span className="edu-year">{edu.year}</span>
          </div>
        ))}
      </Section>
    )
  }
}

export default EducationSection
