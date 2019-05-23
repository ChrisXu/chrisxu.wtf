import { Link } from 'gatsby'
import React from 'react'

class Bio extends React.Component {
  render() {
    return (
      <div class="bio">
        <div class="avatar_outer_container">
          <div class="avatar_inner_container">
            <a href="https://www.instagram.com/_chrisxu">
              <img
                src="https://avatars3.githubusercontent.com/u/3436374?s=460&v=4"
                alt={`Chris Xu`}
              />
            </a>
          </div>
        </div>
        <div
          style={{ diplay: 'block', position: 'relative', margin: `auto 1em` }}
        >
          <h4>Chris Xu</h4>
          <Link to="/about">
            <i>Learn more about me</i>
          </Link>
        </div>
      </div>
    )
  }
}

export default Bio
