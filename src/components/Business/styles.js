import styled from "styled-components"
import { colors, devices } from "../../styles"

export const Container = styled.div`
  padding: 4rem 0 2rem 0;
`

export const SectionTitle = styled.div`
  padding: 0 10rem;

  @media ${devices.laptop} {
    padding: 0;
  }
`

export const Title = styled.h1`
  color: #243e62;
  text-align: center;
  font-size: 3rem;

  @media ${devices.laptop} {
    font-size: 2.5rem;
  }

  @media ${devices.mobileM} {
    font-size: 2rem;
  }
`

export const Subtitle = styled.h3`
  margin-top: 1rem;
  color: ${colors.text};
  text-align: center;
  font-weight: 400;
`

export const TabContent = styled.div`
  display: flex;
  padding: 2rem 0;

  @media ${devices.laptop} {
    padding: 2rem 1rem;
  }

  @media ${devices.tablet} {
    flex-direction: column;
    padding: 0;
  }
`

export const TabImage = styled.div`
  display: flex;
  flex: 1 0 50%;

  @media ${devices.laptop} {
    margin-right: 2rem;
  }

  @media ${devices.tablet} {
    flex: 1 0 100%;
    margin-bottom: 1rem;
    justify-content: center;
    order: 0;
  }
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 27rem;

  @media ${devices.tablet} {
    max-width: 20rem;
  }

  @media ${devices.mobileL} {
    max-width: 15rem;
  }
`

export const TabInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 50%;

  @media ${devices.tablet} {
    flex: 1 0 100%;
    order: 1;
  }
`

export const TabTitle = styled.h4`
  color: ${colors.title};
  font-size: 2.5rem;
  margin-bottom: 2rem;

  @media ${devices.laptop} {
    font-size: 2rem;
  }

  @media ${devices.tablet} {
    text-align: center;
  }
`

export const TabText = styled.p`
  color: ${colors.title};
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 2rem;
  margin-bottom: 1rem;

  @media ${devices.laptop} {
    font-size: 1rem;
  }

  @media ${devices.tablet} {
    font-size: 1.15rem;
  }
`
