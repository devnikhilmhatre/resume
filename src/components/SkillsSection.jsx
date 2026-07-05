import { Component } from 'react'
import Section from './Section'

class SkillsSection extends Component {
  render() {
    const { skills } = this.props

    return (
      <Section title="Skills">
        <div className="skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </Section>
    )
  }
}

export default SkillsSection
