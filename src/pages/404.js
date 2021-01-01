import React from "react"

import Layout from "../components/layout"
import Image from "../components/image-404"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div style={{ margin: `auto` }}>
      <h1>404: Page Not Found</h1>
      <p>Adrienne couldn't find the page you're looking for... Sorry!</p>
      <Image />
    </div>
  </Layout>
)

export default NotFoundPage
