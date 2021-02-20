import { Link } from 'gatsby'
import React from 'react'

class Bio extends React.Component {
  renderLink() {
    const { link, hint } = this.props;
    if (link && hint) {
      return  (
        <Link to={this.props.link}>
          <i>{this.props.hint}</i>
        </Link>
      );
    } else {
      return (
        <div>
          <a href="https://twitter.com/_ChrisXu?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @_ChrisXu</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      );
    }
  }
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
          {this.renderLink()}
        </div>
      </div>
    )
  }
}

export default Bio
