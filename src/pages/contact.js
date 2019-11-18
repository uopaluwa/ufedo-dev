import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <form className="mx-auto" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
      <div className="w-9/12 mx-auto">
        <h1 className="text-3xl mb-2 mt-2 text-center">SAY HELLO</h1>
        <p className="invisible">
          <label>Don't fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <div className="mb-4">
          <label>
            <span className="block">Name</span> 
            <input className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded py-1 px-1" type="text" name="name" />
          </label>
        </div>
        <div className="mb-4">
          <label>
            <span className="block">Email</span> 
            <input className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded py-1 px-1" type="email" name="email" />
          </label>
        </div>
        <div className="mb-4">
          <label>
            <span className="block">Message</span> 
            <textarea rows="5" className="w-full bg-gray-200 appearance-none border-2 border-gray-200 rounded py-1 px-1" name="message"></textarea>
          </label>
        </div>
        <div className="mt-4">
          <button className="w-full font-semibold py-2 px-4 bg-purple-700 text-white rounded shadow mb-4" type="submit">Send</button>
        </div>
      </div>
    </form>
  </Layout>
)

export default Contact
