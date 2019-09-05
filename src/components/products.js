import React, { useState } from "react"
import styled from "styled-components"
import Slider from "react-slick"

import videoUrl from "../video/main.mp4"
import gif1 from "../images/gif/1.gif"
import gif3 from "../images/gif/3.gif"
import gif4 from "../images/gif/4.gif"
import Modal from "./modal"

const Wrapper = styled.div`
  position: relative;
  padding: 4rem 0;
  background: linear-gradient(to left, #a4a4a4, #9dbdd3);
`
const ProductsDiv = styled.div`
  width: 90%;
  margin: auto;
`

const Heading = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 4rem;
`
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc((90% / 3) + (2rem)));
  grid-gap: 2rem;

  @media (max-width: 1368px) {
    grid-template-columns: repeat(3, calc((86% / 3) + (2rem)));
  }

  @media (max-width: 599px) {
    grid-template-columns: none;
    grid-auto-flow: row;
  }
`
const Card = styled.div`
  padding: 2rem;
  box-shadow: 0 0 6px 0px #3e484c;
  background-color: #fff;
  color: #3e484c;
  border-radius: 8px;

  @media (max-width: 599px) {
    width: 90vw;
  }
`
const HeadingSmall = styled.h4`
  font-size: 28px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
`
const CardContent = styled.div``
const CardDescription = styled.p`
  font-size: 1rem;
`
const VideoDiv = styled.div`
  display: flex !important;
  height: 420px;
  align-items: center;
`
const VideoEl = styled.video`
  width: 100%;
  height: 260px;
  object-fit: cover;
`
const Img = styled.img`
  width: 100%;
  height: 267px;
  object-fit: cover;
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
  z-index: 2;
  margin: auto;

  &:hover {
    background-color: #fff;
    color: #ea8887;
    box-shadow: 0 0 18px 0 #fff;
  }
`

const Products = ({ lang }) => {
  const settings = {
    // dots: true,
    arrows: true,
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const [modal, setModal] = useState(false)
  const handleModal = () => {
    setModal({ modal: !modal })
  }
  return (
    <Wrapper id="products">
      <ProductsDiv>
        <Heading>{lang === "en" ? "Products" : "Продукты"}</Heading>
        <Cards>
          <Card>
            <HeadingSmall>
              {lang === "en" ? "Masterclass" : "Мастеркласс"}
            </HeadingSmall>
            <Slider {...settings}>
              <div>
                <CardContent>
                  <Img src={gif3} alt="" />
                  <CardDescription>
                    {lang === "en"
                      ? "Online classes presents platform, which contains video-courses on various topics. Once a client get access, all masterclasses will be always available for a client."
                      : "На онлайн-занятиях представлена платформа, которая содержит видео-курсы на различные темы. Как только клиент получит доступ, все мастер-классы всегда будут доступны для клиента."}
                  </CardDescription>
                  <SubmitButton onClick={handleModal}>
                    {lang === "en" ? "Get Info" : "Узнать"}
                  </SubmitButton>
                </CardContent>
              </div>
            </Slider>
          </Card>

          <Card>
            <HeadingSmall>{lang === "en" ? "Webinar" : "Вебинар"}</HeadingSmall>
            <Slider {...settings}>
              <div>
                <CardContent>
                  <Img src={gif1} alt="" />
                  <CardDescription>
                    {lang === "en"
                      ? "Streaming live video with opportunity to interact between all the participants. Participants can comment, ask questions and give feedback immediately online. All webinars will be available 72 hours."
                      : "Потоковое видео в реальном времени с возможностью взаимодействия между все участники. Участники могут комментировать, спрашивать вопросы и дать отзыв сразу в Интернете. Все вебинары будет доступно 72 часа."}
                  </CardDescription>
                  <SubmitButton onClick={handleModal}>
                    {lang === "en" ? "Get Info" : "Узнать"}
                  </SubmitButton>
                </CardContent>
              </div>
            </Slider>
          </Card>

          <Card>
            <HeadingSmall>{lang === "en" ? "Articles" : "Статьи"}</HeadingSmall>
            <Slider {...settings}>
              <div>
                <CardContent>
                  <Img src={gif4} alt="" />
                  <CardDescription>
                    {lang === "en"
                      ? "Wonder Woman blog will touch actual information about lifestyle and professional environment. Everybody can read and subscribe to every topic they want."
                      : "Блог Wonder Woman коснется актуальной информации о образ жизни и профессиональная среда. Каждый может читать и подписаться на каждую тему, которую они хотят."}
                  </CardDescription>
                  <SubmitButton>
                    {lang === "en" ? "Go to blog" : "Перейти в блог"}
                  </SubmitButton>
                </CardContent>
              </div>
              {/* <VideoDiv>
                <button>Read more</button>
              </VideoDiv> */}
            </Slider>
          </Card>
        </Cards>
      </ProductsDiv>
      {modal && <Modal handle={handleModal} />}
    </Wrapper>
  )
}

export default Products
