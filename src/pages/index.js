import React from "react"

import Layout from "../components/layout"
import Image from "../components/image-adrienne"
import SEO from "../components/seo"

const checkEmojiStyle = {
  marginRight: `0.8rem`
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `480px`, margin: `2rem auto`, textAlign: `center` }}>
      <h1 style={{ fontSize: `2rem`, lineHeight: 1.25 }}>Build amazing applications with Adrienne</h1>
    </div>
    <div style={{ maxWidth: `300px`, margin: `auto`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <div style={{ maxWidth: `550px`, margin: `2rem auto 0` }}>
      Adrienne-as-a-Service (AaaS), is a non-SaaS offering that can help organizations build SaaS applications. 
      <br />
      <br />
      <h2>Features <span role="img" aria-label="featuresPartyPopperEmoji">🎉</span></h2>
      Enterprise-grade features that comes with every subscription of AaaS:    
    </div>
    <ul style={{ maxWidth: `550px`, margin: `1rem auto 2rem`, listStyleType: `none` }}>
      <li>
        <span style={checkEmojiStyle}  role="img" aria-label="greenTickEmoji">✅</span>
        Non-Artificial Intelligence, manually powered by Google, Stack Overflow, coffee & snacks
      </li>
      <li>
        <span style={checkEmojiStyle} role="img" aria-label="greenTickEmoji">✅</span>
        Integrated DevOops solutions
      </li>
      <li>
        <span style={checkEmojiStyle} role="img" aria-label="greenTickEmoji">✅</span>
        State-of-the-art typo sniffing & scribe capabilities
      </li>
      <li>
        <span style={checkEmojiStyle} role="img" aria-label="greenTickEmoji">✅</span>
        Voluntary organization of team social hours
      </li>
      <li>
        <span style={checkEmojiStyle} role="img" aria-label="greenTickBullet">✅</span>
        SLA 87.49%*
        <br />
        <span style={{ marginleft: `2.5rem`, fontSize: `0.8rem`}}>*9-5pm, hours will differ** on public holidays & weekends</span>
        <br />
        <span style={{ marginleft: `2.5rem`, fontSize: `0.8rem`}}>**Outside these hours, Adrienne is busy contributing traffic to services such as 'Netflix' and 'otherLifeChores'</span>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
