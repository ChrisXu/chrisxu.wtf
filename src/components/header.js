import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, isRoot }) => (
  <header class="header">
    <div>
      <div class="header-title">
        <Link class="link" style={{color: '#333',textDecoration: 'none', fontSize: isRoot ? '2.25rem' : '1.25rem'}} to="/">
          {siteTitle}
        </Link>
      </div>
      <div>
        <div class="header-social-nav">
          <a class="social-button hover-animation" href="https://github.com/chrisxu" rel="noopener noreferrer" target="_blank"><i class="fa fa-github fa-2x"></i></a>
          <a class="social-button hover-animation" href="https://twitter.com/chrisxu" rel="noopener noreferrer" target="_blank"><i class="fa fa-twitter fa-2x"></i></a>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  isRoot: PropTypes.bool,
}

Header.defaultProps = {
  siteTitle: ``,
  isRoot: true,
}

export default Header
