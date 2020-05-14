import styled from "styled-components"
import { colors, devices } from "../../styles"

export const Container = styled.div`
  background: #f0f0f0;
  padding: 4rem 0;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;

  @media ${devices.laptop} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media ${devices.tablet} {
    padding: 0;
  }
`

export const TabImage = styled.div`
  display: flex;
  flex: 1 0 50%;

  @media ${devices.laptop} {
    flex: 1 0 100%;
  }
`

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 40rem;

  @media ${devices.laptop} {
    max-width: 35rem;
  }
`
export const TabInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 50%;
  padding-left: 2rem;

  @media ${devices.laptop} {
    flex: 1 0 100%;
    margin-top: 1.5rem;
  }

  @media ${devices.tablet} {
    padding: 0 1rem;
  }
`

export const Title = styled.h2`
  color: ${colors.title};
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;

  @media ${devices.laptop} {
    font-size: 2rem;
  }

  @media ${devices.mobileM} {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`

export const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.5rem;

  &:after {
    content: " *";
    color: red;
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
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: ${colors.primary};
  }
`

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  overflow: auto;
  resize: vertical;
  height: auto;

  &:focus {
    border-color: ${colors.primary};
    background: #f8f8f8;
  }
`

export const Button = styled.button`
  display: block;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  user-select: none;
  padding: 0.75rem 3rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #fff;
  background-color: ${colors.primary};
  border-color: ${colors.primary};
  box-shadow: 0 0.25rem 1rem ${colors.primary};
  margin-top: 1rem;
  text-decoration: none;
  float: right;

  &:hover {
    background-color: ${colors.featured};
    border-color: ${colors.featured};
    box-shadow: 0 0.25rem 1rem ${colors.featured};
  }
`
