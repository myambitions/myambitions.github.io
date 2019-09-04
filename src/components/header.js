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

const Header = ({ menu, logo }) => {
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
              {item.name}
            </Link>
          ))}
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
