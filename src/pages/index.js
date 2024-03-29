import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Bio from '../components/bio'

class BlogIndexPage extends React.Component {
  render() {
    const posts = get(this.props, 'data.allMarkdownRemark.edges')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} keywords={[`ios`, `mobile`, `engineering`]} />
        <aside>
          <Bio link="/about" hint="Learn more about me"/>
        </aside>
        <main>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <article key={node.fields.slug}>
                <div>
                  <h3>
                    <Link
                      style={{ textDecoration: 'none', color: '$apple-color-light-blue' }}
                      to={node.fields.slug}
                      rel="bookmark"
                    >
                      {title}
                    </Link>
                  </h3>
                  <small style={{ fontWeight: '400', color: '#757575' }}>
                    {node.frontmatter.date}
                  </small>
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: node.frontmatter.brief }}
                />
              </article>
            )
          })}
        </main>
      </Layout>
    )
  }
}

export default BlogIndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            brief
          }
          excerpt
        }
      }
    }
  }
`
