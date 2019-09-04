import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import About from "./about"
import Banner from "./banner"
import Vision from "./vision"
import Products from "./products"
import Events from "./events"
import Contacts from "./contacts"
import "./layout.css"
import GiftCard from "./giftcard"
import Modal from "./modal"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Main = styled.main`
  margin: 0 auto;
  max-width: 960;
  padding: 0px;
  padding-top: 0;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMenu {
        nodes {
          name
          link
        }
      }
      allAuthor {
        nodes {
          name
          age
          degree
        }
      }
      allEvent {
        nodes {
          name
          date(formatString: "MMMM Do, YYYY")
          place
          about
        }
      }
      contacts {
        workingTime
        workingDays
        town
        phone
        email
      }
      site {
        siteMetadata {
          title
          description
        }
      }
      logoImage: file(relativePath: { eq: "logo-inverted.png" }) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      statueImage: file(relativePath: { eq: "statue.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mountainImage: file(relativePath: { eq: "mountain.jpg" }) {
        childImageSharp {
          fixed(width: 1920, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      AishaImage: file(relativePath: { eq: "profiles/Aisha.jpg" }) {
        childImageSharp {
          fixed(width: 300, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      GulbanuImage: file(relativePath: { eq: "profiles/Gulbanu.jpg" }) {
        childImageSharp {
          fixed(width: 300, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      TaofikImage: file(relativePath: { eq: "profiles/Taofik.jpg" }) {
        childImageSharp {
          fixed(width: 300, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      eventsImage: file(relativePath: { eq: "qwe.jpg" }) {
        childImageSharp {
          fixed(width: 600, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      NetworkingImage: file(relativePath: { eq: "events/networking.jpg" }) {
        childImageSharp {
          fixed(width: 600, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      MeetupImage: file(relativePath: { eq: "events/meetup.jpg" }) {
        childImageSharp {
          fixed(width: 600, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      MasterclassImage: file(relativePath: { eq: "events/masterclass.jpg" }) {
        childImageSharp {
          fixed(width: 600, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      MapImage: file(relativePath: { eq: "map.jpg" }) {
        childImageSharp {
          fixed(width: 1920, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      giftImage: file(relativePath: { eq: "gift1.jpg" }) {
        childImageSharp {
          fixed(quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const arr = [
    data.NetworkingImage.childImageSharp.fixed,
    data.MeetupImage.childImageSharp.fixed,
    data.MasterclassImage.childImageSharp.fixed,
  ]
  const events = data.allEvent.nodes.map(event => {
    const x = arr.shift()
    event.image = x
    return event
  })

  return (
    <>
      <Header
        menu={data.allMenu.nodes}
        logo={data.logoImage.childImageSharp.fixed}
      />
      <Main>
        <Banner meta={data.site.siteMetadata} />
        <About
          img={data.statueImage.childImageSharp.fixed}
          photos={[
            data.AishaImage.childImageSharp.fixed,
            data.GulbanuImage.childImageSharp.fixed,
            data.TaofikImage.childImageSharp.fixed,
          ]}
          names={data.allAuthor.nodes}
        />
        <Vision background={data.mountainImage.childImageSharp.fixed} />
        <Products />
        <Events
          events={events}
          image={data.TaofikImage.childImageSharp.fixed}
          bg={data.eventsImage.childImageSharp.fixed}
        />
        <GiftCard
          image={data.giftImage.childImageSharp.fixed}
          bg={data.eventsImage.childImageSharp.fixed}
        />
        <Contacts
          data={data.contacts}
          bg={data.MapImage.childImageSharp.fixed}
        />
        {children}
      </Main>
      {/* <footer>
        &copy; {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
