import styled from "styled-components"
import { colors, devices } from "../../styles"

export const Container = styled.footer`
  flex-shrink: none;
  background: ${colors.primary};
  padding: 3rem 0;
  color: #fff;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const Title = styled.h1`
  font-size: 2.75rem;
  line-height: 3rem;

  @media ${devices.tablet} {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  @media ${devices.mobileL} {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`
export const Form = styled.form`
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  margin: 2rem 0;
  margin-right: auto;
  margin-left: auto;
  width: 50%;

  @media ${devices.tablet} {
    width: 100%;
  }
`

export const FormControl = styled.input`
  display: block;
  width: 100%;
  height: calc(2em + 1rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
  background-color: #6c83eb;
  background-clip: padding-box;
  border: 1px solid #6c83eb;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-right: 1rem;

  &::placeholder {
    color: #fff;
  }
`

export const Button = styled.button`
  display: block;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  padding: 0.25rem 1.5rem;
  font-size: 1.15rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #2342dc;
  background-color: #fff;
  border-color: #fff;
  text-decoration: none;
`

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  margin-top: 2rem;

  @media ${devices.tablet} {
    flex-direction: column;
  }
`

export const Brand = styled.a`
  color: #fff;
  font-weight: 700;
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.5rem;
  line-height: inherit;
  white-space: nowrap;
  text-decoration: none;
`

export const NavRight = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 0;
  list-style: none;
  flex-wrap: wrap;
  margin: 0 0 0 auto;
`

export const NavLink = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  color: #fff;
  text-decoration: none;
  font-size: 1.15rem;

  @media ${devices.tablet} {
    font-size: 1rem;
  }
`

export const Social = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  margin-top: 1rem;

  @media ${devices.tablet} {
    flex-direction: column;
    justify-content: center;
  }
`

export const SocialIcons = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 0;
  list-style: none;
  flex-wrap: wrap;
  margin: 0 0 0 auto;

  @media ${devices.tablet} {
    order: 1;
    margin: 0;
  }
`

export const SocialIcon = styled.a`
  display: block;
  padding: 0.5rem 0.55rem;
  font-size: 1.15rem;
  color: #fff;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

export const Copyright = styled.p`
  @media ${devices.tablet} {
    order: 2;
    margin-top: 2rem;
  }
`
