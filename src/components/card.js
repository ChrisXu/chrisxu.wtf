import React from 'react'
import PropTypes from 'prop-types'
import './card.scss'

class Card extends React.Component {
  render() {
    return (
      <div class="card-containter">
        <div class="card-title">
          <h4>{this.props.title}</h4>
        </div>
        <div class="card-image">
          <img src={this.props.imageURL} alt="cover" />
        </div>
        <div class="card-description">
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

Card.defaultProps = {
  // title: "This is a card",
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  description: PropTypes.string,
}

export default Card
