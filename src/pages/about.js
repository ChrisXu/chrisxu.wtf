import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import SEO from '../components/seo'

class AboutPage extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" keywords={[`ios`, `mobile`, `engineering`]} />
        {/* <aside>
                <Bio />
              </aside> */}
        <main>
          <section>
            <p>Hi there,</p>
            <p>
              How is your day? What kind of curiosity brings you here? Anyway, nice to meet you.
              I'm Chris from Taiwan<span role="img" aria-label="taiwan">🇹🇼</span>, living in Amsterdam, unavoidably being a cyclist for a few years. 
              I build apps, teach people code, and read books. 
            </p>
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
