import React from 'react'

class Feedback extends React.Component {
  render() {
    return (
      <div class="feedback">
        <h2>Your opinion matters</h2>
        <textarea id="feedback" placeholder="Tell me your thought">
        </textarea>
      </div>
    )
  }
}

export default Feedback