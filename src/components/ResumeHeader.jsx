import { Component } from 'react'
import ContactLinks from './ContactLinks'

class ResumeHeader extends Component {
  render() {
    const { name, contact, summary } = this.props

    return (
      <header className="header">
        <h1>{name}</h1>
        <ContactLinks contact={contact} />
        <p className="summary">{summary}</p>
      </header>
    )
  }
}

export default ResumeHeader
