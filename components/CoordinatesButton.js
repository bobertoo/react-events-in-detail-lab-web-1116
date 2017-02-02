import React from 'react'
import ReactDOM from 'react-dom'

class CoordinatesButton extends React.Component {
  render(){
    return (
      <div>
        <button onClick={(event => this.props.onReceiveCoordinates([event.clientX, event.clientY]))}></button>
      </div>
    )
  }
}


module.exports = CoordinatesButton
