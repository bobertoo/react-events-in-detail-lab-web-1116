import React from 'react'
import ReactDOM from 'react-dom'

class DelayedButton extends React.Component {
  constructor(){
    super()

    this.clickShit = this.clickShit.bind(this)
  }
  clickShit(event){
    event.persist()
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }
  render(){
    return (
      <div>
        <button onClick={this.clickShit}></button>
      </div>
    )
  }
}


module.exports = DelayedButton
