import styled from "styled-components"
import { colors } from "../../styles"

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`
export const CardBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 3rem;
`

export const SectionTitle = styled.div`
  padding: 0 10rem;
`

export const Title = styled.h1`
  color: #243e62;
  text-align: center;
`

export const Subtitle = styled.p`
  margin-top: 1rem;
  color: ${colors.text};
  text-align: center;
`

export const ContainerImage = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-top: 4rem;
`

export const SectionImage = styled.div`
  flex: 0 0 33.333333%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  text-align: center;

  h3 {
    margin: 2rem 0;
    color: ${colors.title};
  }

  p {
    font-size: 1.25rem;
    color: ${colors.text};
  }
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 13rem;
`
