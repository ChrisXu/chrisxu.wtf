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
            <p>I'm Chris from Taiwan<span role="img" aria-label="taiwan">🇹🇼</span>, a software engineer and Swift bartender in Amsterdam. I have been building beautiful iOS apps for almost a decade. I am also passionate about helping other engineers and shaping a healthier engineering culture.</p>

            <p>I code in Swift by day, Python by night, and JS on weekends.</p>

            <p>I like reading books. <a href="https://bit.ly/chrisxu-booklist">Here is my booklist</a></p>
          </section>
          <hr></hr>
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
