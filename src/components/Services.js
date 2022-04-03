import React from "react"
import services from "../constants/services"
import styled from "styled-components"
const Services = () => {
  return (
    <Section>
      <Title children="What I do " />
      <ServicesContainer>
        {services.map(service => {
          const { id, icon, title, text, stack } = service

          return (
            <Article key={id}>
              <h4>{title}</h4>
              <Line />

              <p>{text}</p>
            </Article>
          )
        })}
      </ServicesContainer>
    </Section>
  )
}

const Article = styled.article`
  background: whitesmoke;
  padding: 0rem 1.5rem;

  border-radius: 10px;
  text-align: left;
  p {
    font-size: 1.2rem;
  }
`

const Line = styled.div`
  width: 5rem;
  height: 0.25rem;

  background: #2988de;
  /* margin-left: auto; */
  margin-right: auto;
`

const Title = styled.h2`
  margin-left: 2rem;
  position: absolute;
  top: 2rem;
`
const ServicesContainer = styled.div``

const Section = styled.section`
  padding: 5rem 0;
  background: offwhite;
  position: relative;

  height: 100vh;
`
export default Services
