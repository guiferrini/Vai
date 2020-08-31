import React from 'react'
import { Link } from 'gatsby'

import BlogRoll from '../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1
          style={{
            textAlign: "center"
          }}
        >Latest Posts</h1>
        <section>
          <div className="content">
            <BlogRoll />
          </div>
          <p><Link to="/" style={{textDecoration: "none", color: "black"}}>Voltar para Principal</Link></p>
        </section>
      </React.Fragment>
    )
  }
}