import React from 'react'

const Footer = () => (
  <div
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `1.45rem 1.0875rem`,
    }}
  >
    <footer class="footer-copyright">
      © {new Date().getFullYear()}
      {` `}
      <a href="/">Chris Xu</a>.{` `}
      This site is
      {` `}
      <a href="https://github.com/ChrisXu/chrisxu.wtf">open source</a>
    </footer>
  </div>
)

export default Footer
