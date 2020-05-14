import React, { useState, useEffect } from "react"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaAlignRight,
} from "react-icons/fa"

import {
  Nav,
  Brand,
  NavCenter,
  NavRight,
  NavLinkCenter,
  NavLinkRight,
  BurguerMenu,
} from "./styles"

function Navbar() {
  const [scroll, setScroll] = useState(1)
  const [navbarOpen, setNavbarOpen] = useState(false)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 20
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  })

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <Nav scroll={scroll}>
      <div className="container">
        <Brand href="/">Unnitec</Brand>
        <BurguerMenu onClick={handleNavbar}>
          <FaAlignRight className="navbar-toggler-icon"></FaAlignRight>
        </BurguerMenu>
        <NavCenter>
          <li>
            <NavLinkCenter to="/#home">Início</NavLinkCenter>
          </li>
          <li>
            <NavLinkCenter to="/#services">Serviços</NavLinkCenter>
          </li>
          <li>
            <NavLinkCenter to="/#business">Desenvolvimento</NavLinkCenter>
          </li>
          <li>
            <NavLinkCenter to="/#contact">Contato</NavLinkCenter>
          </li>
        </NavCenter>
        <NavRight>
          <li>
            <NavLinkRight scroll={scroll} href="#" aria-label="Facebook">
              <FaFacebook />
            </NavLinkRight>
          </li>
          <li>
            <NavLinkRight scroll={scroll} href="#" aria-label="Twitter">
              <FaTwitter />
            </NavLinkRight>
          </li>
          <li>
            <NavLinkRight scroll={scroll} href="#" aria-label="Youtube">
              <FaYoutube />
            </NavLinkRight>
          </li>
          <li>
            <NavLinkRight scroll={scroll} href="#" aria-label="Instagram">
              <FaInstagram />
            </NavLinkRight>
          </li>
          <li>
            <NavLinkRight scroll={scroll} href="#" aria-label="Whatsapp">
              <FaWhatsapp />
            </NavLinkRight>
          </li>
        </NavRight>
      </div>
    </Nav>
  )
}

export default Navbar
