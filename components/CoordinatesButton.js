import React, { Component } from 'react';

class CoordinatesButton extends Component {
  constructor() {
    super();

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    let x = event.clientX;
    let y = event.clientY;
    this.props.onReceiveCoordinates([x, y]);
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler} />
      </div>
    );
  }
}

module.exports = CoordinatesButton;
