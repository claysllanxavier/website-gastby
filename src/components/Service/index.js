import React from "react"

import prototypeImg from "../../images/prototype.svg"
import developImg from "../../images/develop.svg"
import testingImg from "../../images/testing.svg"

import {
  Card,
  CardBody,
  Title,
  Subtitle,
  SectionTitle,
  Image,
  SectionImage,
  ContainerImage,
} from "./styles"

function Service() {
  return (
    <section id="services">
      <div className="container-fluid">
        <Card>
          <CardBody>
            <SectionTitle>
              <Title>Determinamos que você é nosso público-alvo</Title>
              <Subtitle>
                Veja como nós iremos desenvolver a criação de aplicativos e de
                que forma, você estará acompanhando o passo a passo da criação
                de aplicativos.
              </Subtitle>
            </SectionTitle>
            <ContainerImage>
              <SectionImage>
                <Image src={prototypeImg} alt="Prototipo do App" />
                <h3>Estruturando a ideia</h3>
                <p>
                  Com base no que você procura, nós iremos desenvolver toda a
                  estrutura para que seu aplicativo seja totalmente funcional,
                  eficiente e seguro.
                </p>
              </SectionImage>
              <SectionImage>
                <Image src={developImg} alt="Desenvolvimento do App" />
                <h3>Desenvolvimento do produto</h3>
                <p>
                  Desenvolvimento de aplicativos não se resume apenas a parte
                  técnica. Nós damos vida às ideias e através da tecnologia
                  iremos desenvolver uma solução de forma estratégica e focada
                  no crescimento do seu negócio.
                </p>
              </SectionImage>
              <SectionImage>
                <Image src={testingImg} alt="Desenvolvimento do App" />
                <h3>Testes</h3>
                <p>
                  Depois de tudo pronto, chegou a hora da validação. Você poderá
                  testar o aplicativo em diferentes situações, para confirmar
                  que tudo está funcionando perfeitamente. Após o
                  desenvolvimento do aplicativo, todos os testes serão feitos
                  cuidadosamente, para garantir 100% de funcionalidade!
                </p>
              </SectionImage>
            </ContainerImage>
          </CardBody>
        </Card>
      </div>
    </section>
  )
}

export default Service
