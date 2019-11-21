/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children, path = "" }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="flex flex-col h-screen text-gray-800">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="flex-grow md:max-w-2xl sm:max-w-lg max-w-3xl mx-auto px-5 py-8">
        <main>{children}</main>
      </div>
      <Footer siteTitle={data.site.siteMetadata.title} path={path} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
