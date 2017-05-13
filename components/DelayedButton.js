import React, { Component } from 'react';

class DelayedButton extends Component {
  constructor() {
    super();

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(event) {
    event.persist();
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay);
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler} />
      </div>
    );
  }
}

module.exports = DelayedButton;
