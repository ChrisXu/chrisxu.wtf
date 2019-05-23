import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'

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
              I'm Chris Xu from Taiwan, currently enjoying cycling and exploring
              cultural collision in Amsterdam.
            </p>
            <p>As a programmer, I have been building iOS apps for 7 years.</p>
            <p>As a reader, I'm experimenting writing down the reading notes.</p>
            <p>I'm also a foodie and a coffee enthusiant.</p>
          </section>
          <Card
            title="Chris Xu"
            imageURL="https://i.pinimg.com/originals/b5/93/15/b5931516929acb4915e7e5362b563377.jpg"
            description="This is the first card"
          />
          <Card
            title="Second cat"
            imageURL="https://www.quartoknows.com/blog/wp-content/uploads/2017/08/Bengal.png"
            description="This is the second card"
          />
        </main>
      </Layout>
    )
  }
}

export default AboutPage
