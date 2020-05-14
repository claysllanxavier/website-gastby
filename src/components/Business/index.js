import React from "react"

import mobileDevelopImg from "../../images/mobile_develop.svg"
import webDevelopImg from "../../images/web_develop.svg"
import shoppingImg from "../../images/shopping.svg"
import Tabs from "../Tabs"

import {
  Container,
  Title,
  Subtitle,
  SectionTitle,
  TabContent,
  TabImage,
  Image,
  TabInfo,
  TabText,
  TabTitle,
} from "./styles"

function Business() {
  return (
    <Container id="business">
      <div className="container">
        <SectionTitle>
          <Title>Nós fazemos seu serviço de desing bem rápido</Title>
          <Subtitle>
            Os profissionais de marketing geralmente concentram seus esforços na
            compra.
          </Subtitle>
        </SectionTitle>

        <Tabs>
          <Tabs.Tab label={"1. Desenvolvimento de Aplicativo"}>
            <TabContent>
              <TabInfo>
                <TabTitle>Nós tornamos sua idéia em aplictivos</TabTitle>
                <TabText>
                  Uma solução para sua ideia! Transformamos desejos em
                  realidades, seja um projeto para sua startup ou para um
                  negócio consolidado. Desenvolvimento de aplicativos é aqui na
                  Unnitec!
                </TabText>
                <TabText>
                  Criação de aplicativos híbridos gera mais agilidade no
                  desenvolvimento e menor custo, sem perda de qualidade.
                </TabText>
              </TabInfo>
              <TabImage>
                <Image src={mobileDevelopImg} alt="Mobile App Develop" />
              </TabImage>
            </TabContent>
          </Tabs.Tab>

          <Tabs.Tab label={"2. Desenvolvimento Sob Demanda"}>
            <TabContent>
              <TabImage>
                <Image src={webDevelopImg} alt="Web Develop" />
              </TabImage>
              <TabInfo>
                <TabTitle>Transformamos ideias em realidade!</TabTitle>
                <TabText>
                  Desenvolvimento de Sistemas Web personalizados e de interação
                  do site com o seu cliente para pequenas, médias e grandes
                  empresas de vários segmentos feitos sob medida.
                </TabText>
                <TabText>
                  Muitas ações do dia a dia podem ser automatizadas para
                  otimizar o seu tempo e de seus funcionários gerando maior
                  produtividade e contribuindo para o sucesso do seu negócio.
                </TabText>
              </TabInfo>
            </TabContent>
          </Tabs.Tab>

          <Tabs.Tab label={"3.Website Loja Virtual"}>
            <TabContent>
              <TabImage>
                <Image src={shoppingImg} alt="Mobile App Develop" />
              </TabImage>
              <TabInfo>
                <TabTitle>Saiba como vender pela internet!</TabTitle>
                <TabText>
                  O comércio eletrônico é o principal canal de crescimento do
                  varejo atualmente. O momento é perfeito para criar uma loja
                  online, mas para ter sucesso é preciso começar da forma certa.
                </TabText>
                <TabText>
                  As vendas online crescem de forma consistente ano após ano,
                  por isso cada vez mais empresas e empreendedores querem criar
                  uma loja online.
                </TabText>
              </TabInfo>
            </TabContent>
          </Tabs.Tab>
        </Tabs>
      </div>
    </Container>
  )
}

export default Business
