import React from "react"
import styled from "styled-components"

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 4;
`
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  top: 0;
  background-color: #000000d6;
  z-index: 5;
`
const SocialDiv = styled.div`
  margin: auto 0;
  background-color: #eee;
  padding: 2rem 3rem;
`
const FormHeading = styled.p`
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 2rem;
  color: #ea8887;
`
const Form = styled.form`
  display: grid;
  grid-auto-flow: rows;
  grid-gap: 1rem;
  width: 60%;
`
const Input = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #eee;
  z-index: 5;
`
const Textarea = styled.textarea`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #eee;
  z-index: 5;
`
const SubmitButton = styled.button`
  width: fit-content;
  padding: 0.325rem 2rem;
  border: none;
  border-radius: 4px;
  color: #fff;
  background-color: #ea8887;
  cursor: pointer;
  box-shadow: 0 0 18px 0 #ea8887;
  font-weight: 600;
  transition: 0.5s ease;
  z-index: 5;

  &:hover {
    background-color: #fff;
    color: #ea8887;
    box-shadow: 0 0 18px 0 #fff;
  }
`

const Modal = ({ handleModal }) => {
  const sendEmail = event => {}

  return (
    <Wrapper>
      <SocialDiv>
        <FormHeading>
          We'd love to
          <br />
          hear from you.
        </FormHeading>
        <Form method="post" action="https://formspree.io/gulbanu8357@gmail.com">
          <Input type="email" name="_replyto" placeholder="Email" />
          <Textarea
            type="text"
            name="body"
            placeholder="Your message"
            rows="4"
          />
          <Input type="text" name="_gotcha" style={{ display: "none" }} />
          <SubmitButton type="submit" onClick={sendEmail}>
            Send
          </SubmitButton>
        </Form>
      </SocialDiv>
      <Overlay onClick={handleModal} />
    </Wrapper>
  )
}

export default Modal
