import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <header className="mb-16">
    <div className="flex items-center text-purple-700 justify-between p-5">
      <h2 className="">
        <Link to="/">
          <Logo />
        </Link>
      </h2>
      <div className="font-medium">
        <Link className="hover:text-gold text-xl ml-8 pb-1" to="/blog" activeClassName="border-b-2 border-gold">
          blog
        </Link>
        <Link className="hover:text-gold text-xl ml-8 pb-1" to="/contact" activeClassName="border-b-2 border-gold">
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
