import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Services from "../components/Services"
import Posts from "../components/Posts"

import { graphql } from "gatsby"
import SEO from "../components/SEO"

const IndexPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Services />
      <Posts posts={posts} title="recently published" indexPage />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
      nodes {
        frontmatter {
          readTime
          title
          category
          date(formatString: "MMMM Do, YYYY")
          slug
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
        id
      }
    }
  }
`

export default IndexPage
