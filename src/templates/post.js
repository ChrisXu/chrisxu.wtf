import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Feedback from '../components/feedback'
import GithubReport from '../components/githubreport'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.brief}
          slug={post.fields.slug}
        />
        <small style={{ fontWeight: '400', color: '#757575' }}>
          {post.frontmatter.date}
        </small>
        <div>
          <h1>{post.frontmatter.title}</h1>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <GithubReport articleId={this.props.location.pathname}/>
        <Feedback/>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        brief
      }
      fields {
        slug
      }
    }
  }
`
