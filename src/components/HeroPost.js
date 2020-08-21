import React from "react"
//import { graphql, useStaticQuery } from "gatsby"

// ...GatsbyImageSharpFluid

// const query = graphql`
//   {
//     person: file(relativePath: { eq: "person.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

const Hero = ({ postsPage }) => {
  // const { person } = useStaticQuery(query)
  return <header className={postsPage ? "postPageHero" : "heroPosts"}></header>
}

export default Hero
