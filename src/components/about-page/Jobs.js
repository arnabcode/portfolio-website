import React from "react"
import Title from "../Title"
import { FaAngleDoubleRight } from "react-icons/fa"

const jobs = [
  {
    company: "Comviva Technologies Ltd.",
    position: "Product Development Engineer",
    date: "15/06/2019 -  PRESENT",
    desc: [
      ` Full Stack responsibilites using Agile Methodologies.`,
      `Development of API services , using Spring Boot for Mobile Banking application. 
      Learnt and implemented Microservice architechture along with Api documentation using Swagger.`,
      `Implemented CQRS (Command Query Responsibility Segregation using) using Kafka Messaging system. `,
      `Worked on developement of User onboarding Portal of Banking application using React and Redux. 
      This Portal also provided services of user management such as User status
       Management(Unblocking a user and Suspend/resume) and user Account/wallet status management.`,
    ],
  },
  {
    company: "MangoBlogger Analytics",
    position: "JavaScript Specialist",
    date: "26/02/2018-20/12/2018",
    desc: [
      ` Working with Google App Scripts to access various API's for automating digital marketing tasks`,
      `Development of  add-ons 
      for Google Spreadsheets for using Google Analytics Data and creating reports.`,
      `Created a scheduling app for processing data from a spreadsheet `,
    ],
  },
]

const Jobs = () => {
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="expierence" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map((item, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default Jobs
