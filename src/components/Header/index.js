import React from "react"

import headerImage from "../../images/header.svg"

import {
  Title,
  Text,
  Masthead,
  Image,
  Container,
  HeaderInfo,
  HeaderImage,
  Button,
} from "./styles"

const Header = () => (
  <Masthead id="home">
    <Container>
      <HeaderInfo>
        <Title>Nós ajudamos você a impulsionar seu negócio.</Title>
        <Text>
          Como qualquer grande empresa, somos tão bons quanto os resultados que
          entregamos em nossos trabalhos recentes.
        </Text>
        <Button to="/#services">Quero Conhecer</Button>
      </HeaderInfo>
      <HeaderImage>
        <Image src={headerImage} alt="Header Image" />
      </HeaderImage>
    </Container>
  </Masthead>
)

export default Header
