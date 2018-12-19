import React from 'react'
import { Link } from 'gatsby'
import Image from '../components/image'

import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <h1>Feedback and Suggestions</h1>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
    <Image />
      
    </div>
      <form
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      {/* <input name="name" placeholder="Your Name" type="text" />
      <input name="email" placeholder="name@name.com" type="email" /> */}
      <textarea name="message" />
      <button>Send</button>
    </form>
  </Layout>
)

export default ContactPage