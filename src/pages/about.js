import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
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
