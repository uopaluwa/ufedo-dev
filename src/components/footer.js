import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
  <footer className="h-20 text-purple-700">
    <div className="p-5">
      © 2019 {siteTitle}, Built using
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
