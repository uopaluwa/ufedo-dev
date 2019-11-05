import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header style={{ background: 'lightgray'}} className="mb-16">
    <div className="flex items-center justify-between p-5">
      <h2 className="">
        <Link to="/">
          UFD
        </Link>
      </h2>
      <div>
        <Link className="pl-8" to="/blog">
          blog
        </Link>
        <Link className="pl-8" to="/contact">
          contact
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
