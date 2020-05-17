import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from "../styles/global"

import Header from "./Header"
import Navbar from "./NavBar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Header />
      <main id="page-content">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
