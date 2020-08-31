import React from "react"
import { graphql, Link } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container" >
      <div 
        className="blog-post"   
        style={{
          textAlign: "center",
          marginLeft: "15%",
          marginRight: "15%"
        }}      
      >
        <h1>{frontmatter.title}</h1>
        <h4>{frontmatter.date}</h4> 
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <p><Link to="/blog" style={{textDecoration: "none", color: "black"}}>Voltar para Pagina Blog</Link></p>
    </div> 
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
