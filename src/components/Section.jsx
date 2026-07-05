import { Component } from 'react'

class Section extends Component {
  render() {
    const { title, children } = this.props

    return (
      <section className="section">
        <h2 className="section-title">{title}</h2>
        {children}
      </section>
    )
  }
}

export default Section
