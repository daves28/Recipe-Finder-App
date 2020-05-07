import React, { Component } from 'react'

class Signup extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='container login-container'>
          <div className='login'>
            <h2>Sign-up</h2>
            <form onSubmit={this.props.onSignup}>
              <input name="username" type="text" placeholder="Username"></input>
              <input name="password" type="password" placeholder="Password"></input>
              <input name="password" type="password" placeholder='Verify password'></input>
              <button type='submit' value='Create User'>Submit</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Signup