import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
const query = graphql`
  {
    file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <Image fluid={fluid} className="hero-img" />
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'm Arnab</h1>
            <h4>fullstack web and mobile developer</h4>
            <Link to="/about" className="btn">
              about
            </Link>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks styleClass="social-links " />
          </div>
        </article>
      </div>
    </header>
  )
}

export default Hero
