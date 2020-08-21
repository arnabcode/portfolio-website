import React from "react"
import { Link } from "gatsby"
const Links = ({ styleClass, sidebar, children }) => {
  return (
    <ul className={styleClass}>
      {sidebar && (
        <li>
          <Link to="/" className="page-link">
            Home
          </Link>
        </li>
      )}
      <li>
        <Link to="/about" className="page-link">
          About
        </Link>
      </li>
      <li>
        <Link to="/blog" className="page-link">
          Blog
        </Link>
        {children}
      </li>
      <li>
        <Link to="/contact" className="page-link">
          Contact
        </Link>
      </li>

      {/* <li>
        <Link to="/post" className="page-link">
          Post
        </Link>
      </li> */}
    </ul>
  )
}

export default Links
