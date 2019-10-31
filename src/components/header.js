import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `inherit`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          UFD
        </Link>
      </h2>
      <div
        style={{
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-around`,
          textDecoration: `none`
        }}
      >
        <Link
          to="/blog"
          style={{
            textDecoration: `none`,
            padding: `0 1.45rem`,
            color: `inherit`
          }}
        >
          blog
        </Link>
        <Link
          style={{
            textDecoration: `none`,
            padding: `0 0 0 1.45rem`,
            color: `inherit`
          }}
          to="/contact"
        >
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
