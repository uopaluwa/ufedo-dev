import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>
      Hi{" "}
      <span role="img" aria-label="waving hand">
        👋🏼
      </span>
      , I'm Ufedo
    </h1>
    <p>
      Welcome to my space on the web. I’m a Software developer mostly focused on
      the web. I’m most interested in working on products and tools that enables
      people and businesses be more productive and efficient. I’m always
      thinking how can I automate this, how can I make this process easier with
      minimal human intervention, how can I enable people to create, express
      their creativity and get things done.
    </p>
    <p>
      I’ve worked with companies like HappyMoney, Parkloco building products and
      solutions to delight users.
    </p>
    <p>
      Amongst other things, I’m a pround uncle, Arsenal 😭 and Warriors fan.
      When I'm not coding, I enjoy watching movies, reading, occasional gaming, 
      a good time out as long as food is involved.
    </p>
  </Layout>
)

export default IndexPage
