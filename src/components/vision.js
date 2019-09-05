import React from "react"
import styled from "styled-components"
import Slider from "react-slick"

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background-image: ${props => `url(${props.background})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 600px;
  top: 0;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 1;
`

const Text = styled.p`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  line-height: 1.75rem;
  z-index: 2;
  text-align: center;
  line-height: 2.5rem;
`
const Quote = styled.span`
  font-family: PassionOne;
  font-size: 120px;
  transform: rotate(180deg);
  width: fit-content;
  margin-bottom: 72px !important;
  margin-right: auto;
`

const Content = styled.div`
  max-width: 960px;
  height: 60%;
  margin: auto;
`
const Heading = styled.h2`
  position: relative;
  padding-top: 4rem;
  margin-bottom: 0;
  font-family: Abril Fatface;
  font-size: 48px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  z-index: 2;
`
const Author = styled.i`
  margin-top: 4rem;
  margin-left: auto;
  font-size: 1rem;
`

const Vision = ({ background, lang }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Wrapper id="mission" background={background.src}>
      <Content>
        <Slider {...settings} style={{ zIndex: 3 }}>
          <div>
            <Heading>{lang === "en" ? "Vision" : "Видение"}</Heading>
            <Text>
              <Quote>"</Quote>
              {lang === "en"
                ? "There is no tool for development more effective than the empowerment of women."
                : "Нет более эффективного инструмента развития, чем расширение прав и возможностей женщин."}
              <Author>
                {lang === "en"
                  ? "Kofi Annan, Secretary-General of The United Nations"
                  : "Кофи Аннан, Генеральный секретарь ООН"}
              </Author>
            </Text>
          </div>
          <div>
            <Heading>{lang === "en" ? "Mission" : "Миссия"}</Heading>
            <Text>
              <Quote>"</Quote>
              {lang === "en"
                ? "We strive to offer all our customers high quality services in the education and development, use best business techniques to inspire and to connect all Kazakhstan woman together."
                : "Мы стремимся предлагать всем нашим клиентам высококачественные услуги в образование и развитие, использовать лучшие методы ведения бизнеса, чтобы вдохновить и соединить всю казахстанку вместе."}
            </Text>
          </div>
          <div>
            <Heading>{lang === "en" ? "Philosophy" : "Философия"}</Heading>
            <Text>
              <Quote>"</Quote>
              {lang === "en"
                ? "We all have a wonder woman inside us."
                : "У всех нас есть удивительная женщина внутри нас."}
              <Author>
                {lang === "en"
                  ? "Diane Von Furstenberg, President of the Council of Fashion Designers of America"
                  : "Диана фон Фюрстенберг, президент Совета модельеров Америки"}
              </Author>
            </Text>
          </div>
        </Slider>
      </Content>
      <Overlay />
    </Wrapper>
  )
}

export default Vision
