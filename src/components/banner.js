import { Link } from 'gatsby'
import React from 'react'

class Banner extends React.Component {
  renderLink() {
    const { title, link } = this.props;
    if (title && link) {
      return  (
        <Link to={this.props.link}>
          <h2>{this.props.title}</h2>
        </Link>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
  render() {
    return (
      <div class="banner">
        {this.renderLink()}
      </div>
    )
  }
}

export default Banner
