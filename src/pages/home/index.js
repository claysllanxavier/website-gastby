import React from "react"

import Layout from "../../components/layout"
import Service from "../../components/Service"
import Business from "../../components/Business"
import Contact from "../../components/Contact"
import SEO from "../../components/seo"

export default function HomePage() {
  return (
    <Layout>
      <SEO />
      <Service />
      <Business />
      <Contact />
    </Layout>
  )
}
