import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
      <h1>SAY HELL<span role="img" aria-label="grinning face">😀</span></h1>
      <p style={{ visibility: `hidden` }}>
        {/* hide this */}
        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
      </p>
      <p>
        <label>Your Name: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </Layout>
)

export default Contact
