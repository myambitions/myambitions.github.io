import React from "react"
import styled from "styled-components"

import facebookIcon from "../images/social/facebook.svg"
import twitterIcon from "../images/social/twitter.svg"
import youtubeIcon from "../images/social/youtube.svg"
import instagramIcon from "../images/social/instagram.svg"

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 4rem 0 2rem;
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: #000000bd;
  z-index: 1;
`
const Content = styled.div`
  position: relative;
  max-width: 960px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin: auto;
  z-index: 3;

  @media (max-width: 599px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
  }
`
const Item = styled.p`
  margin: 0;
  font-size: 24px;
  line-height: 32px;

  &:nth-child(5) {
    font-size: 96px;
    font-weight: 900;
    margin-top: 4rem;
  }
`
const ItemLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: 0.5s ease;

  &:hover {
    color: #ea8887;
  }
`
const Information = styled.div`
  margin: auto 0;

  @media (max-width: 599px) {
    margin: 0;
    text-align: center;
  }
`
const SocialDiv = styled.div`
  margin: auto 0;

  @media (max-width: 599px) {
    margin: 2rem auto 0;
  }
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
`
const Textarea = styled.textarea`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #eee;
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

  &:hover {
    background-color: #fff;
    color: #ea8887;
    box-shadow: 0 0 18px 0 #fff;
  }
`
const SocialIcons = styled.div`
  width: fit-content;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
  margin-bottom: 1rem;
`
const Icon = styled.img`
  width: 28px;
  heigth: 28px;
  filter: invert(1);
  cursor: pointer;
`

const Contacts = ({ data, bg, lang }) => {
  const sendEmail = event => {}
  return (
    <Wrapper id="contacts" background={bg.src}>
      <Content>
        <SocialDiv>
          <FormHeading>
            {lang === "en" ? "We'd love to" : "Мы с радостью"}
            <br />
            {lang === "en" ? "hear from you." : "выслушаем вас"}
          </FormHeading>
          <Form
            method="post"
            action="https://formspree.io/gulbanu8357@gmail.com"
          >
            <Input type="email" name="_replyto" placeholder="Email" />
            <Textarea
              type="text"
              name="body"
              placeholder={lang === "en" ? "Your message" : "Ваше сообщение"}
              rows="4"
            />
            <Input type="text" name="_gotcha" style={{ display: "none" }} />
            <SubmitButton type="submit" onClick={sendEmail}>
              {lang === "en" ? "Send" : "Отправить"}
            </SubmitButton>
          </Form>
        </SocialDiv>
        <Information>
          <SocialIcons>
            <Icon src={facebookIcon} />
            <Icon src={instagramIcon} />
            <Icon src={twitterIcon} />
            <Icon src={youtubeIcon} />
          </SocialIcons>
          <Item>{data.workingTime}</Item>
          <Item>{lang === "en" ? data.workingDays : data.workingDays_alt}</Item>
          <Item>
            <ItemLink href={`mailto:${data.email}`}>{data.email}</ItemLink>
          </Item>
          <Item>{lang === "en" ? data.town : data.town_alt}</Item>
        </Information>
      </Content>
      <Overlay />
    </Wrapper>
  )
}

export default Contacts
