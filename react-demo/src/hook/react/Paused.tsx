import React, { Component } from 'react'

export class Paused extends Component {

  paused = () => {
    this.setState({
      isPaused: false
    })
  }
  resumed = () => {
    this.setState({
      isPaused: true
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.paused}>暂停</button>
        <button onClick={this.resumed}>继续</button>
      </div>
    )
  }
}

export default Paused
