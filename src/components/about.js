import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Slider from "react-slick"

const Wrapper = styled.div`
  margin-top: -0.5rem;
  padding-bottom: 4rem;
  background: linear-gradient(to right, #a4a4a4, #9dbdd3);
`

const About = styled.div`
  max-width: 960px;
  margin: auto;
  padding: 4rem 0;
`
const Block = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  padding: 1rem;
  border: 3px solid #3e484c;
`
const Content = styled.div`
  width: 70%;
  margin-left: auto;
`
const Text = styled.p`
  font-weight: 500;
  line-height: 1.75rem;
  letter-spacing: 1px;
  align-items: center;
  text-indent: 2rem;
  text-align: justify;
  margin-bottom: 0;
`
const Heading = styled.h2`
  font-family: Abril Fatface;
  font-size: 48px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
`
const HeadingInner = styled.h4`
  text-align: center;
  text-transform: uppercase;
  font-size: 36px;
  margin: 0;
`
const HR = styled.hr`
  width: 30%;
  margin: 1rem auto;
  background-color: #3e484c;
`
const Profiles = styled.div`
  position: relative;
  margin-top: 4rem;
`
const ProfileBorder = styled.div`
  position: absolute;
  width: 75%;
  height: 100%;
  top: 60px;
  left: 50px;
  border: 3px solid #3e484c;
`
const SliderDiv = styled.div`
  position: relative;
`
const SliderOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 98.1%;
  z-index: 1;
  top: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.1) 100%
  );
`
const SliderText = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10px;
  color: #fff;
  font-size: 0.75rem;
  text-align: center;
  z-index: 2;
`
const TeamText = styled.p`
  font-weight: 500;
  letter-spacing: 1px;
  align-items: center;
  text-indent: 2rem;
  width: 86%;
  padding: 0 1rem;
  line-height: 1.25rem;
  margin: 0;
  text-align: justify;
`

const AboutPage = ({ img, photos, names, lang }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const carousel = names.map((profile, index) => {
    let x = photos.shift()
    profile.image = x

    return (
      <SliderDiv key={index}>
        <Img fixed={profile.image} style={{ height: "400px" }}></Img>
        <SliderText>
          {lang === "en" ? profile.name : profile.name_alt}
          <br />
          {lang === "en" ? profile.position : profile.position_alt}
        </SliderText>
        <SliderOverlay />
      </SliderDiv>
    )
  })

  return (
    <Wrapper>
      <About id="about">
        <Heading>{lang === "en" ? "Who we are" : "О нас"}</Heading>
        <Block>
          <Img
            fixed={img}
            style={{
              position: "absolute",
              left: "-1.5rem",
              bottom: "1.716rem",
              filter: "grayscale(1)",
              transform: "scale(1.15)",
            }}
          ></Img>
          <Content>
            <HeadingInner>
              {lang === "en" ? "The Project" : "ПРОЕКТ"}
            </HeadingInner>
            <HR />
            <Text>
              {lang === "en"
                ? "Wonder Woman covers the most relevant and interesting programs created for developing the intelligent and professional level for women in Kazakhstan, and also attracts the attention of their contributions to various areas of activity."
                : "Wonder Woman освещает наиболее актуальные и интересные программы, созданные для интеллектуального и профессионального  развития среди женщин в Казахстане."}
            </Text>
            <Text>
              {lang === "en"
                ? "Wonder Woman is the project for Kazakhstan women different ages from all regions and different spheres of professional development. Here every woman can find any tools for growth and networking.The project is based in Almaty, Kazakhstan. It is an ambitious idea to help each other in the World of Women Development through new technologies and digital environment."
                : "Wonder Woman - это проект для казахстанских женщин разного возраста и всех сфер профессионального развития. Мы предоставляет возможность каждой  женщине раскрыть свои лучшие качества и усовершенствовать навыки в различных сферах бизнеса, образования, психологии, искусства, науки."}
            </Text>
            <Text>
              {lang === "en"
                ? "The Wonder Woman will illustrate the collaboration of digital commerce, project management tools and highly important theme, that can help women to develop themselves."
                : "Идея проекта была создана во Франции, штаб квартира команды базируется в Алматы, Казахстан."}
            </Text>
          </Content>
        </Block>
        <Profiles>
          <span></span>
          <ProfileBorder>
            <HeadingInner style={{ paddingTop: "1rem" }}>
              {lang === "en" ? "Our team" : "НАША КОМАНДА"}
            </HeadingInner>
            <HR />
            <TeamText>
              {lang === "en"
                ? "The project was found in Lille, Paris and developed by Global E-commerce program Master students of Lille university, France in 2018."
                : "Наш проект был  разработан магистрантами Программы Глобальной Электронной Коммерции государственного Университета Лилль, во Франции в 2018 году."}
            </TeamText>
            <TeamText>
              {lang === "en"
                ? "The intention to create such a great platform for women support came to 2 girls from Kazakhstan, who want to use all knowledge to build the network of strong, smart and strategic women. The realization was with help of Taoufik, who was the market analytic through the whole process of developing."
                : "Идея создания сообщества сильных, умных и стратегически развитых женщин, пришла к двум выпускницам из Казахстана. Реализация была осуществлена с помощью выпускника Таофика, который был аналитиком рынка на протяжении всего процесса разработки."}
            </TeamText>
            <TeamText>
              {lang === "en"
                ? "The project Wonder Woman will be a start of new opportunities for everyone, who wants to develop skills and share knowledge with others."
                : "Проект Wonder Woman станет началом новых возможностей для всех, кто хочет развивать навыки и делиться знаниями с другими."}
            </TeamText>
          </ProfileBorder>
          <Slider
            {...settings}
            style={{ width: "300px", height: "400px", marginLeft: "auto" }}
          >
            {carousel}
          </Slider>
        </Profiles>
      </About>
    </Wrapper>
  )
}
export default AboutPage
