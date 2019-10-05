import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Bio from '../components/bio'

class AboutPage extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" keywords={[`ios`, `mobile`, `chrisxu`, `swiftbartender`]} />
        <aside>
          <Bio />
        </aside> 
        <main>
          <section>
            <h4>Hi there,</h4>
            <p>I'm Chris from Taiwan<span role="img" aria-label="taiwan">🇹🇼</span>, a software engineer and Swift bartender in Amsterdam. I make mobile applications and development tools for living. I also like to build teams and engineer culture for fun.</p>

            <p>In the daytime, I enjoy reading books with classical music. At night, I turn into coding with electronic music. If you hear lo-fi music in my house, I am probably cooking.</p>

            <p>Sometimes people find me boring because I tend to speak objectively, which is too plain to understand. I do have biases on many things, but I try to eliminate those in my posts and talks. So please do feel free to hit me up, and also all kind of feedback is much appreciated.</p>
          </section>
          <hr></hr>
          <section>
            <h4>Upcoming show-up</h4>
            <ul>
              <li>Nov 15 - Nov 17 @ Glasgow, UK</li>
              <li>Dec 19 - Dev 20 @ Tokyo, JP</li>
              <li>Dec 21 - Jan 11 @ Everywhere, TW</li>
            </ul>
          </section>
        </main>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
