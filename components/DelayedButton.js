import React from 'react'
import ReactDom from 'react-dom'

class DelayedButton extends React.Component {
  constructor(){
    super()

    this.randoShit = this.randoShit.bind(this)
  }
  randoShit(event){
    event.persist()
    setTimeout(function(){this.props.onDelayedClick(event)}.bind(this), this.props.delay)
  }
  render(){
    return (
      <div>
        <button onClick={this.randoShit}></button>
      </div>
    )
  }
}

module.exports = DelayedButton
