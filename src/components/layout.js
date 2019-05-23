import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'
import './config.scss'
import '../styles/layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>{children}</div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// class Layout extends React.Component {
//   render() {
//     const { location, title } = this.props;
//     const rootPath = `${__PATH_PREFIX__}/`;
//     const siteTitle = get(this, 'props.data.site.siteMetadata.title');
//     const { children } = this.props;

//     return (
//       <div>
//         <Header siteTitle={siteTitle} />
//         <div>
//           <p>{title}</p>
//           {children}
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// }

// export default Layout;

// export const pageQuery = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//   }
// `;
