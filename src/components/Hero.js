import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
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

const bgImageQuery = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "back.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
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
  const image = getImage(placeholderImage)

  // Use like this:
  const bgImage = convertToBgImage(image)
  return (
    <header className="hero">
      <BackgroundImage
        Tag="section"
        // Spread bgImage into BackgroundImage:
        {...bgImage}
        preserveStackingContext
      >
        <div className="section-center hero-center">
          <Image fluid={fluid} className="hero-img" />
          <article className="hero-info">
            <div>
              <div className="underline"></div>
              <h2>i'm Arnab</h2>
              <h1>Arnab Goswami</h1>
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
      </BackgroundImage>
    </header>
  )
}

export default Hero
