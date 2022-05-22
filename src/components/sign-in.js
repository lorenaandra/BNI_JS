import React, { Component } from 'react'

class Login extends Component {

  constructor(props)
  {
  
    super(props);
    this.state={
      email:'',
      password:''
    }
  }

  handleChange= (event) =>{
    event.preventDefault();
    const {name, value} = event.target;
  this.setState({[name]:value});
  console.log(this.state);
  }

  render() {
    return (
      <form method='post' action='http://localhost:3001'>
        <h3>Sign In</h3>

        <div className='mb-3'>
            <label htmlFor='name'>Email address</label>
            <input 
              type='text'
              name='email' 
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter email address"
              />
          </div>

        <div className='mb-3'>
            <label htmlFor='lastname'>Password</label>
            <input 
              type='password' 
              name='password' 
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter password"
              />
          </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            NU APASA INCA !!! Submit
          </button>
        </div>

        <p className="forgot-password text-right">
          Do you want to <a href="/sign-up">sign up?</a>
        </p>

      </form>
    )
  }
 
}

export default Login;