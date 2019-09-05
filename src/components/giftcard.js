import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 4rem 0;
  background-image: ${props => `url(${props.background})`};
`
const Content = styled.div`
  max-width: 75%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin: auto;
  align-items: center;

  @media (max-width: 599px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr 1fr;
  }
`

const GiftDescription = styled.p`
  font-size: 32px;
  font-weight: 400;
  line-height: 2.2rem;
  color: #3e484c;
  text-shadow: 0 0 16px #ea8887;
`

const GiftCard = ({ image, bg, lang }) => {
  return (
    <Wrapper background={bg.src}>
      <Content>
        <GiftDescription>
          {lang === "en"
            ? "We offer you a gift card for every product or event from Wonder Woman."
            : "Мы предлагаем вам подарочную карту на каждый продукт или событие от Wonder Woman."}
        </GiftDescription>
        <Img
          fixed={image}
          style={{
            boxShadow: "0 0 24px -5px #000",
            borderRadius: "4px",
            margin: "auto",
          }}
        />
        <GiftDescription style={{ marginTop: "auto" }}>
          {lang === "en"
            ? "Make happy the person you want!"
            : "Порадуйте человека, которого хотите!"}
        </GiftDescription>
      </Content>
    </Wrapper>
  )
}

export default GiftCard
