import { Component } from 'react'

class ContactLinks extends Component {
  render() {
    const { contact } = this.props

    return (
      <div className="contact">
        <span>{contact.phone}</span>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={contact.github.url} target="_blank" rel="noreferrer">
          {contact.github.label}
        </a>
        <a href={contact.linkedin.url} target="_blank" rel="noreferrer">
          {contact.linkedin.label}
        </a>
      </div>
    )
  }
}

export default ContactLinks
