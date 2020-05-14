import React from "react"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa"

import {
  Container,
  Content,
  Title,
  FormControl,
  Button,
  Nav,
  Brand,
  NavRight,
  NavLink,
  Social,
  SocialIcons,
  SocialIcon,
  Form,
  Copyright,
} from "./styles"

function Footer() {
  return (
    <Container>
      <div className="container">
        <Content>
          <Title>
            Tem perguntas em mente? <br /> Deixe-nos ajudá-lo.
          </Title>
        </Content>
        <Form>
          <FormControl
            type="email"
            placeholder="Email"
            name="email"
            id="email_footer"
          />
          <Button type="submit">Enviar</Button>
        </Form>
        <Nav>
          <Brand>Unnitec</Brand>
          <NavRight>
            <li>
              <NavLink>Início</NavLink>
            </li>
            <li>
              <NavLink>Serviços</NavLink>
            </li>
            <li>
              <NavLink>Soluções</NavLink>
            </li>
            <li>
              <NavLink>Contato</NavLink>
            </li>
          </NavRight>
        </Nav>
        <Social>
          <Copyright>© {new Date().getFullYear()} Copyright Unnitec</Copyright>
          <SocialIcons>
            <li>
              <SocialIcon aria-label="Facebook">
                <FaFacebook />
              </SocialIcon>
            </li>
            <li>
              <SocialIcon aria-label="Twitter">
                <FaTwitter />
              </SocialIcon>
            </li>
            <li>
              <SocialIcon aria-label="Youtube">
                <FaYoutube />
              </SocialIcon>
            </li>
            <li>
              <SocialIcon aria-label="Instagram">
                <FaInstagram />
              </SocialIcon>
            </li>
            <li>
              <SocialIcon aria-label="Whatsapp">
                <FaWhatsapp />
              </SocialIcon>
            </li>
          </SocialIcons>
        </Social>
      </div>
    </Container>
  )
}

export default Footer
