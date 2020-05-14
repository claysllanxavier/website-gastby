import React from "react"

import Layout from "../../components/Layout"
import Service from "../../components/Service"
import Business from "../../components/Business"
import Contact from "../../components/Contact"
import SEO from "../../components/Seo"

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
