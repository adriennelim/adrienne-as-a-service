import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/image-logo"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#008080`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem`,
        display: `flex`,
        alignItems: `center`
      }}
    >
      
      <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <div style={{ marginTop: `0.4rem`, paddingRight: `0.5rem` }}>
            <Logo />
          </div>
        </Link>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
