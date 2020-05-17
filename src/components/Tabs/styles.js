import styled from "styled-components"
import { devices } from "../../styles"

export const Container = styled.div`
  width: 100%;
`

export const TabList = styled.ul`
  width: 100%;
  padding: 2rem 0 0 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  overflow: hidden;
`

export const TabContent = styled.div`
  margin: 2rem auto;
  width: 100%;

  @media ${devices.tablet} {
    &:not(:last-child) {
      border-bottom: 1px solid #dcdcdc;
    }
  }
`
