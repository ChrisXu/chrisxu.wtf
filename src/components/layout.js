import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'
import './config.scss'
import '../styles/layout.scss'

class Layout extends React.Component {
  renderHeader() {
    const { location, title } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    return (
      <Header siteTitle={title} isRoot={(location.pathname === rootPath)} />
    );
  }
  render() {
    const { children } = this.props
    
    return (
      <div>
        {this.renderHeader()}
        <div>
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}

// const Layout = ({ children }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Header siteTitle={data.site.siteMetadata.title} />
//         <div>{children}</div>
//         <Footer />
//       </>
//     )}
//   />
// )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
