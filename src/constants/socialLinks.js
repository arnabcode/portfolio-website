import React from "react"
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa"
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://www.facebook.com/arnab.goswami.3363334">
          <FaFacebookSquare className="social-icon facebook-icon"></FaFacebookSquare>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/goswami.arnabkumar/">
          <FaInstagramSquare className="social-icon dribble-icon"></FaInstagramSquare>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/AKumarG1">
          <FaTwitterSquare className="social-icon twitter-icon"></FaTwitterSquare>
        </a>
      </li>
    </ul>
  )
}
export default SocialLinks
