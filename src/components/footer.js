import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer className="h-20 bg-purple-700 text-l text-white text-center">
    <div className="p-5">
      © {new Date().getFullYear()} {siteTitle}, Built using
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
    <div>

    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
