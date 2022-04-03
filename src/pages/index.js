import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Services from "../components/Services"
import Posts from "../components/Posts"
import ReactFullpage from "@fullpage/react-fullpage"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Contact from "./contact"

const IndexPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data
  return (
    <ReactFullpage
      //fullpage options

      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section" style={{ padding: "0rem" }}>
              <Hero />
            </div>
            <div className="section" style={{ padding: "0rem" }}>
              <Services />
            </div>
            <div className="section" style={{ padding: "0rem" }}>
              <Posts posts={posts} title="recently published" indexPage />
            </div>

            <div className="section" style={{ padding: "0rem" }}>
              <Contact indexPage />
            </div>
          </ReactFullpage.Wrapper>
        )
      }}
    />
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
