import React from 'react'
import ReactDom from 'react-dom'

class CoordinatesButton extends React.Component {
  constructor() {
    super();

    this.coordzShit = this.coordzShit.bind(this);
  }
  coordzShit(event){
    let coordz = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordz)
  }

  render(){
    return (
      <div>
        <button onClick={this.coordzShit}></button>
      </div>
    )
  }
}

module.exports = CoordinatesButton
