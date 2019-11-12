import React from "react"
import { Link } from "gatsby"
import { FaLinkedinIn, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"
import { IconContext } from "react-icons"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `180px` }} className="mb-4">
      <Image />
    </div>
    <h1 className="mb-4 text-4xl">
      Hi{" "}
      <span role="img" aria-label="waving hand">
        👋🏼
      </span>
      , I'm Ufedo
    </h1>
    <p className="mb-2">
      Welcome to my space on the web. I’m a Software developer mostly focused on
      the web. I’m most interested in working on products and tools that enable
      people and businesses be more productive and efficient. I’m always
      thinking; how can I automate this, how can I make this process easier, 
      how can I enable people to create, express their creativity and get things done.
    </p>
    <p className="mb-2">
      I’ve worked with companies like HappyMoney, Parkloco building products and
      solutions to delight users.
    </p>
    <p className="mb-2">
      Amongst other things, I’m a pround uncle, Arsenal 😭 and Warriors fan.
      When I'm not coding, I enjoy watching movies, reading, occasional gaming,
      a good time out as long as food is involved.
    </p>
    <div className="flex mt-4">
      <span className="pr-6 text-3xl"> 
        <a href="https://www.linkedin.com/in/ufedojoopaluwa/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </span> 
      <span className="pr-6 text-3xl">
        <a href="https://github.com/uopaluwa" target="_blank" rel="noopener noreferrer">
          <FaGithub /> 
        </a>
      </span>
      <span className="pr-6 text-3xl">
        <a href="https://twitter.com/Ufedo_opals" target="_blank" rel="noopener noreferrer">
          <FaTwitter /> 
        </a>
      </span>
    </div>
  </Layout>
)

export default IndexPage
