import React from "react"
import Title from "./Title"
import services from "../constants/services"
const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="services" />
      <div className="section-center services-center">
        {services.map(service => {
          const { id, icon, title, text, stack } = service

          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              {stack.map(item => {
                return <span className="stack">{item}</span>
              })}
              <p>{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
