import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='container login-container'>
          <div className='login'>
          <h2>Login</h2>
          <form onSubmit={this.props.onLogin}>
            <input name="username" type="text" placeholder="Username"></input>
            <input name="password" type="password" placeholder='Password'></input>
            <button type='submit' value='Create User'>Submit</button>
          </form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Login
