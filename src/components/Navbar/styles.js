import styled from "styled-components"
import { colors, devices } from "../../styles"
import { Link } from "gatsby"

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  background: ${props => (props.scroll ? "transparent" : "#fff")};
  box-shadow: ${props =>
    props.scroll ? "none" : "0 0.125rem 0.25rem rgba(0, 0, 0, 0.15);"};

  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0.5rem 1rem;
  }
`

export const Brand = styled.a`
  color: ${colors.title};
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.5rem;
  line-height: inherit;
  white-space: nowrap;
  text-decoration: none;
`

export const BurguerMenu = styled.button`
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: ${props => (props.scroll ? "#fff" : colors.title)};
  display: none;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  .navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: "";
    background: no-repeat center center;
    background-size: 100% 100%;
  }

  @media ${devices.laptop} {
    display: block;
    margin-left: auto;
  }

  @media ${devices.tablet} {
    color: ${colors.title};
  }
`

export const Collapse = styled.div`
  display: flex;
  flex: 1;

  @media ${devices.laptop} {
    flex: 0 1 auto;
    flex-direction: column;
    width: 100%;
    background: #fff;
    display: ${props => (props.open ? "flex" : "none")};
  }
`

export const NavCenter = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  margin: 0 auto;

  @media ${devices.laptop} {
    flex-direction: column;
    margin: 0;
  }
`

export const NavRight = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 0;
  list-style: none;
  flex-wrap: wrap;
  margin-left: auto;

  @media ${devices.laptop} {
    flex-direction: row;
    margin: 0;
  }

  a {
    color: ${props => (props.scroll ? "#fff" : colors.title)};

    @media ${devices.laptop} {
      color: ${colors.title};
    }
  }
`

export const NavLinkCenter = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  color: ${colors.title};
  text-decoration: none;
  font-size: 1.15rem;
`

export const NavLinkRight = styled.a`
  display: block;
  padding: 0.5rem 0.55rem;
  font-size: 1.15rem;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  @media ${devices.laptop} {
    padding: 0.5rem 1rem;
  }
`
