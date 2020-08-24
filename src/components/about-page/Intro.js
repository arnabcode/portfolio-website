import React from "react"

export default function Intro() {
  return (
    <div className="intro-wrapper">
      <header>
        <h2> Introduction</h2>
      </header>
      <div className="underline"></div>
      <article className="intro-text">
        <p>
          Greetings!
          <br /> I am Arnab Kumar Goswami. I'm a full stack developer,
          specialised in React , Node and Java (Spring Boot). I care about
          building interfaces that are usable and pleasant along with backend
          which can be scaled and are resilient to support dynamic content.
          <br />
          <br />
          My choice of software developement as a career is largely driven by
          passion for being updated with digital trends. Another key aspect of
          development is planning. Management and delivery of quality software
          within expected time with realistic targets , is another strength that
          I possess.
        </p>
        <br />
        <h3>Academics</h3>
        <div className="underline"></div>

        <div className="intro-date">
          <p>
            <strong>2015 - 2019</strong>
            <br />
            B.Tech in Computer Science and Engineering, NIT Durgapur
          </p>
        </div>
        <p></p>
      </article>
    </div>
  )
}
