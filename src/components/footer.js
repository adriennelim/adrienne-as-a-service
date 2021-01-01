import React from "react"

const Footer = () => (
  <footer
    style={{
      background: `#503193`,
      padding: `2rem`,
      color: `#fff`,
      fontSize: `0.9rem`,
      textAlign: `center`
    }}
  >
    <div style={{ maxWidth: `600px`, margin: `auto`, fontSize: `1.1rem`, fontStyle: `italic` }}>
      "The cucumber is bitter? Then throw it out... That's all you need to know. Nothing more. Don't demand to know why such things exist."
      <div style={{ textAlign: `end`, fontSize: `1rem`, margin: `0.5rem auto 1rem` }}>
        - Marcus Aurelius
      </div>
    </div>
    AaaS is a wonderful product, even though it's sometimes full of <span role="img" aria-label="poopEmoji">💩</span>
    <br />
    © Adrienne Lim {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.com" style={{ color: `#ff0`, fontWeight: `bold`  }}>Gatsby</a>
  </footer>
)

export default Footer
