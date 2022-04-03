import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import { FaLinkedin, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa"
import bg from "../assets/back.svg"
import styled from "styled-components"
const query = graphql`
  {
    hero: file(relativePath: { eq: "hero1.webp" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const { hero } = useStaticQuery(query)

  // Use like this:
  //const bgImage = convertToBgImage(image)
  return (
    <Header bg={bg}>
      <HeroImage fluid={hero.childImageSharp.fluid} />
      <article>
        <Intro>
          <Line />
          <h3>Hey there!! I am</h3>
          <h2> Arnab Goswami</h2>
          <h4>
            I'm a full-stack mobile and web developer who is really interested
            in finance and technology around it. I like to keep fit and jam
            along with my friends when I'm not in front of a screen
          </h4>

          <SocialContainer>
            <SocialButton href="https://www.facebook.com/arnab.goswami.3363334">
              <LinkedIn />
            </SocialButton>

            <SocialButton href="https://www.instagram.com/goswami.arnabkumar/">
              <Instagram />
            </SocialButton>

            <SocialButton href="https://twitter.com/AKumarG1">
              <Twitter />
            </SocialButton>
          </SocialContainer>
        </Intro>
      </article>
      {/* </div> */}
    </Header>
  )
}

const Header = styled.header`
  height: 110vh;
  position: relative;
  z-index: -1;
  padding-top: 5rem;
  /* margin-bottom: 6rem; */
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (min-width: 800px) {
  }
`

const HeroImage = styled(Image)``

const Intro = styled.div`
  text-align: center;
  color: whitesmoke;
  padding: 2rem;

  h3 {
    text-transform: none;
  }
  h4 {
    text-transform: none;
  }
`

const Line = styled.div`
  width: 5rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background: #2988de;
  margin-left: auto;
  margin-right: auto;
`

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  /* border: 1px solid white; */
`

const SocialButton = styled.a`
  font-size: 2rem;
`

const LinkedIn = styled(FaLinkedin)`
  font-size: 3rem;
  color: #3b5998;
`

const Instagram = styled(FaInstagramSquare)`
  font-size: 3rem;
  color: #ea4c89;
`

const Twitter = styled(FaTwitterSquare)`
  font-size: 3rem;
  color: #00acee;
`
export default Hero
