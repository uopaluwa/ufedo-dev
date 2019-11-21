import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="sm:text-2xl md:text-4xl">
      <span role="img" aria-label="construction sign">🚧</span>
      Blog will be launched soon!!
      <span role="img" aria-label="construction sign">🚧</span>
    </div>
  </Layout>
)

export default BlogPage
