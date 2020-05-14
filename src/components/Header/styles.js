import styled from "styled-components"
import { colors, devices } from "../../styles"
import { Link } from "gatsby"

import blobImage from "../../images/blob-shape.svg"

export const Title = styled.h1`
  color: #243e62;
  font-weight: 500;
  font-size: 4.5rem;
  line-height: 4.5rem;

  @media ${devices.desktop} {
    font-size: 3.5rem;
    line-height: 3.5rem;
  }

  @media ${devices.laptop} {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }

  @media ${devices.tablet} {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
`

export const Text = styled.p`
  margin-top: 1rem;
  line-height: 1.7rem;
  font-size: 1.3rem;
  color: ${colors.text};

  @media ${devices.desktop} {
    line-height: 1.5rem;
    font-size: 1.3rem;
  }

  @media ${devices.laptop} {
    line-height: 1.3rem;
    font-size: 1rem;
  }

  @media ${devices.tablet} {
    line-height: 1.1rem;
    font-size: 0.85rem;
  }
`

export const Masthead = styled.div`
  height: 100vh;
  min-height: 500px;
  background-image: url(${blobImage});
  background-repeat: no-repeat;
  background-size: 40rem 30rem;
  background-position: right 0 top 0;
  margin-bottom: 5rem;

  @media ${devices.desktop} {
    height: 60vh;
    background-size: 25rem 20rem;
  }

  @media ${devices.tablet} {
    height: 100vh;
    background: none;
  }

  @media ${devices.mobileL} {
    height: 20vh;
    margin-bottom: 0;
    min-height: 400px;
  }
`

export const Image = styled.img`
  max-width: 35rem;
  height: auto;

  @media ${devices.desktop} {
    max-width: 30rem;
  }
  @media ${devices.laptop} {
    max-width: 25rem;
  }

  @media ${devices.tablet} {
    max-width: 23rem;
  }
`

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media ${devices.tablet} {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`

export const HeaderInfo = styled.div`
  align-self: center;
  margin-left: 8rem;
  width: 100%;

  @media ${devices.desktop} {
    margin-left: 2rem;
  }

  @media ${devices.tablet} {
    margin: auto 2rem;
    width: 90%;
  }
`

export const HeaderImage = styled.div`
  margin-bottom: 2rem;

  @media ${devices.mobileL} {
    display: none;
  }
`

export const Button = styled(Link)`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #fff;
  background-color: ${colors.primary};
  border-color: ${colors.primary};
  box-shadow: 0 0.5rem 1rem ${colors.primary};
  margin-top: 1rem;
  text-decoration: none;

  &:hover {
    background-color: ${colors.featured};
    border-color: ${colors.featured};
    box-shadow: 0 0.5rem 1rem ${colors.featured};
  }
  @media ${devices.tablet} {
    padding: 0.75rem 1rem;
    font-size: 0.75rem;
    line-height: 1;
  }
`
