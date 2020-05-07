import React, { Component } from 'react'

class AutoSearch extends Component {
  render() {
    return (
      <div className='auto-search'>
        <input type='checkbox' onChange={this.props.toggleAuto.bind(this)} />
        {'  '}
        Auto search?
      </div>
    )
  }
}

export default AutoSearch