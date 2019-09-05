import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import CalendarIcon from "../images/calendar.svg"
import LocationIcon from "../images/location.svg"

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 4rem 0;
  background-image: ${props => `url(${props.background})`};
`
const Heading = styled.h2`
  text-align: center;
  padding-bottom: 4rem;
  text-transform: uppercase;
  z-index: 2;
  color: #3e484c;
`
const EventsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 80%;
  margin: auto;
  padding: 2rem 0;
  z-index: 2;
  background-color: #38383880;
  border-radius: 8px;
`
const EventInformation = styled.div`
  display: grid;
  grid-template-columns: 40% 57%;
  color: #3e484c;
  grid-gap: 1rem;
`
const EventsNames = styled.div`
  margin: 0 auto;
`
const EventName = styled.p`
  font-weight: 600;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: #3e484c;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 6px 2px #ccc;
  }
`
const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  background: #00000094;
  padding: 1rem;
  border-radius: 8px;
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`
const InfoP = styled.p`
  margin: 0;
  color: #ffffff;
`
const Icon = styled.img`
  width: 48px;
  height: 48px;
  margin: 0;
  filter: invert(1);
`
const Button = styled.button`
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
  margin: 6rem auto 0;
  display: flex;

  &:hover {
    background-color: #fff;
    color: #ea8887;
    box-shadow: 0 0 18px 0 #fff;
  }
`

class Events extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      event: "Networking",
    }

    this.handleEvent = this.handleEvent.bind(this)
  }

  handleEvent(event) {
    this.setState({ event })
  }

  render() {
    const { events, bg, lang } = this.props
    return (
      <Wrapper id="events" background={bg.src}>
        <Heading>{lang === "en" ? "Events" : "События"}</Heading>
        <EventsDiv>
          <EventsNames>
            {events.map((event, index) => (
              <EventName
                key={index}
                onClick={() => this.handleEvent(event.name)}
                className={this.state.event === event.name && "active"}
              >
                {lang === "en" ? event.name : event.name_alt}
              </EventName>
            ))}
            <Button>{lang === "en" ? "Get Info" : "Узнать"}</Button>
          </EventsNames>
          {events.map((event, index) => {
            return (
              this.state.event === event.name && (
                <EventInformation key={index}>
                  <div>
                    <InfoDiv>
                      <Icon src={CalendarIcon} alt="" />
                      <InfoP>
                        {lang === "en"
                          ? "Event date will be anounced soon"
                          : "Дата события будет объявлена в скором времени"}
                      </InfoP>
                    </InfoDiv>
                    <InfoDiv>
                      <Icon src={LocationIcon} alt="" />
                      <InfoP>
                        {lang === "en"
                          ? "Location will be anounced soon"
                          : "Локация будет объявлена в скором времени"}
                      </InfoP>
                    </InfoDiv>
                    <InfoDiv>
                      <InfoP>
                        {lang === "en" ? event.about : event.about_alt}
                      </InfoP>
                    </InfoDiv>
                  </div>
                  <Img
                    fixed={event.image}
                    style={{
                      borderRadius: "8px",
                      margin: "auto",
                      width: "90%",
                    }}
                  />
                </EventInformation>
              )
            )
          })}
        </EventsDiv>
      </Wrapper>
    )
  }
}

export default Events
