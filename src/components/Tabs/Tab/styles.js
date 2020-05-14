import styled from "styled-components"
import { colors, devices } from "../../../styles"

export const TabItem = styled.li`
  display: inline-block;
  flex: 0 0 33.333333%;
  border-bottom: 0.25rem solid #d3d3d3;
  text-align: center;

  &.active {
    font-weight: bold;
    border-bottom-color: ${colors.featured};
  }

  @media ${devices.tablet} {
    flex: 1 0 100%;
  }
`

export const TabLink = styled.a`
  display: inline-block;
  padding: 2rem 0;
  color: ${colors.title};
  font-size: 1.25rem;
  cursor: pointer;

  @media ${devices.laptop} {
    font-size: 1rem;
  }
`
