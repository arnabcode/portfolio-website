import React from "react"
import Title from "./Title"
import Project from "./Project"
import { graphql, useStaticQuery } from "gatsby"
const query = graphql`
  {
    project1: file(relativePath: { eq: "project-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project2: file(relativePath: { eq: "project-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project3: file(relativePath: { eq: "project-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const projects = [
  {
    description: `A simple python program to take image of a person as input and gives the classification as output. There are six broad classes of faces shapes i.e Rectangular,
     Oval, Traingular, square, Oblong, Circular. The program reads the image and detects edges. Using those image it finds the pivot points .
    Measuring the distance between specefic points and comparing them will get the resultant shape`,
    title: `Physiogamy: Detection of face shapes`,
    github: `https://github.com/arnabcode`,
    stack: ["Python", "OpenCV"],
    url: "",
  },
  {
    description: `Started with developement for Hindi. It is a shortened form of braille where frequently used words, 
    prefixes and suffixes have been given a special Braille representation using only one , conventional, 6 dots arrangement. 
    The objective is to decrease the length of the Braille document and also enhance readability for users.`,
    title: `Grade-2 Braille for Indian Languages`,
    github: `https://github.com/arnabcode`,
    stack: ["Python"],
    url: "",
  },
  {
    description: `Development of an Authoring System using JavaFX .A software to give an instructor the 
    ability to design his own course by including text files, PPTs, videos, images and all sorts of media including
     hyperlinks. The software saves the file in it's own defined format and and can viewed on any Desktop with the Software installed.`,
    title: `Authoring System`,
    github: `https://github.com/arnabcode`,
    stack: ["Java", "JavaFX", "CSS"],
    url: "",
  },
]
const Projects = ({ title }) => {
  const data = useStaticQuery(query)
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              index={index}
              {...project}
              image={data[`project${index + 1}`]}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Projects
