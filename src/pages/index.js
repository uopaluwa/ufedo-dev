import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"

const IndexPage = ({ path }) => (
  <Layout path={path}>
    <SEO title="Home" />
    <About />
  </Layout>
)

export default IndexPage
