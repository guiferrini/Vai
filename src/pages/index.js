// import React from "react"

// export default function Home() {
//   return <div>Hello world!</div>
// }
import React from 'react'
import { Link } from 'gatsby'

export default () => {
  return (
    <>
      Hello world!
      <p><Link to="/blog">View Blog</Link></p>
    </>)
}