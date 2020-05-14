import React from "react"
import HomePage from "./home"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const IndexPage = () => <HomePage></HomePage>

export default IndexPage
