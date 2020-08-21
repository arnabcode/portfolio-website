import React from "react"
import styled from "styled-components"
import About from "./About"
//import Instagram from "./Instagram"
import Recent from "./Recent"
import BannerCategories from "./BannerCategories"
const Banner = ({ contact }) => {
  return (
    <aside className={contact ? "banner-wrapper-contact" : "banner-wrapper"}>
      <About />

      <Recent />
      <BannerCategories />
    </aside>
  )
}

export default Banner
