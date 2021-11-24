import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import SEO from '../components/seo'

class FreelancePage extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Freelance" keywords={[`ios`, `mobile`, `chrisxu`, `swiftbartender`]} />
        <main>
          <section>
            <h2>Why me</h2>
            <p>I'm Chris from Taiwan<span role="img" aria-label="taiwan">🇹🇼</span>, a software engineer and Swift bartender in Amsterdam. I have been building beautiful iOS apps for almost a decade. I am also passionate about helping other engineers and shaping a healthier engineering culture.</p>

            <p>I code in Swift by day, Python by night, and JS on weekends.</p>

            <p>I like reading books. <a href="https://bit.ly/chrisxu-booklist">Here is my booklist</a></p>
          </section>
          <hr></hr>
          <section>
            <h2>Availability</h2>
            <div style={{ display: "flex" }}>
              <Button variant="outlined" color="primary" href="">
                Let's Talk
              </Button>
            </div>
          </section>
          <hr></hr>
        </main>
      </Layout>
    )
  }
}

export default FreelancePage

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
