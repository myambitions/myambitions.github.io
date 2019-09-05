import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Wrapper = styled.header`
  position: absolute;
  width: 100%;
  z-index: 2;
`

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 960px;
  margin: auto;
`

const Logo = styled.div`
  filter: invert(1);
`

const Menu = styled.nav`
  margin: auto 0;
`
const LanguageSpan = styled.span`
  margin-left: 0.5rem;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`

const Header = ({ menu, logo, lang, change }) => {
  return (
    <Wrapper>
      <Navigation>
        <Logo>
          <Link to="/">
            <Img fixed={logo} />
          </Link>
        </Logo>
        <Menu>
          {menu.map((item, index) => (
            <Link
              key={index}
              to={`/#${item.link}`}
              style={{
                color: `#ffffff`,
                textDecoration: `none`,
                textTransform: `capitalize`,
                marginLeft: `1rem`,
              }}
            >
              {lang === "en" ? item.name : item.name_alt}
            </Link>
          ))}
          <LanguageSpan
            style={{ marginLeft: "1.5rem" }}
            onClick={() => change("en")}
          >
            en
          </LanguageSpan>
          <LanguageSpan onClick={() => change("ru")}>ru</LanguageSpan>
        </Menu>
      </Navigation>
    </Wrapper>
  )
}

Header.propTypes = {
  menu: PropTypes.array,
}

Header.defaultProps = {
  menu: [],
}

export default Header
