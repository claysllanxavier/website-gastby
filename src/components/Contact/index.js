import React from "react"

import contactUsImg from "../../images/contact_us.svg"
import {
  Container,
  Content,
  TabImage,
  Image,
  TabInfo,
  Title,
  FormGroup,
  Label,
  FormControl,
  TextArea,
  Button,
} from "./styles"

function Contact() {
  return (
    <Container id="contact">
      <Content className="container-fluid">
        <TabImage>
          <Image src={contactUsImg} alt="Person Contact" />
        </TabImage>
        <TabInfo>
          <Title>
            Precisa de Ajuda? Não se preocupe, entre em contato conosco
          </Title>
          <form>
            <FormGroup>
              <Label htmlFor="name">Nome</Label>
              <FormControl type="text" name="name" id="name" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <FormControl type="email" name="email" id="email" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Mensagem</Label>
              <TextArea
                name="message"
                cols="30"
                rows="7"
                id="message"
              ></TextArea>
            </FormGroup>
            <Button type="submit">Enviar</Button>
          </form>
        </TabInfo>
      </Content>
    </Container>
  )
}

export default Contact
