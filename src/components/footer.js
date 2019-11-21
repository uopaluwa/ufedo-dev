import PropTypes from "prop-types"
import React from "react"
import SocialIcons from "./social"

const Footer = ({ siteTitle, path }) => (
  <footer className="h-20 text-center text-purple-700 text-sm">
    { path === "" ? <SocialIcons iconType="solid"/> : null}
    <div className="pb-5 px-5 ">
      © 2019 {siteTitle}, Built using
      {` `}
      <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>
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
