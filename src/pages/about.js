import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import HeroPost from "../components/HeroPost"
import Intro from "../components/about-page/Intro"
import Jobs from "../components/about-page/Jobs"
import Projects from "../components/Projects"
export default function about() {
  return (
    <div>
      <Layout>
        <SEO title="About" />
        <HeroPost postsPage />
        <Intro />
        <Jobs />
        <Projects title="featured projects" />
      </Layout>
    </div>
  )
}
