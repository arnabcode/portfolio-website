import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Banner from "../components/Banner"

const contact = ({ indexPage }) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <form
            action="https://formsubmit.co/goswamiarnab3@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
        {!indexPage && (
          <article>
            <Banner contact />
          </article>
        )}
      </section>
    </Layout>
  )
}

export default contact
