import { Component } from 'react'
import Section from './Section'

class ExperienceSection extends Component {
  render() {
    const { experience } = this.props

    return (
      <Section title="Experience">
        {experience.map((job) => (
          <article className="job" key={`${job.company}-${job.startDate}`}>
            <div className="job-header">
              <div>
                <div className="job-company">{job.company}</div>
                <div className="job-role">{job.role}</div>
              </div>
              <time className="job-period">
                {job.startDate} — {job.endDate}
              </time>
            </div>
            <p className="job-stack">{job.stack}</p>
            {job.summary && <p className="job-summary">{job.summary}</p>}
            {job.highlights.length > 0 && (
              <ul>
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </Section>
    )
  }
}

export default ExperienceSection
