import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class SignUp extends Component {
  
  constructor(props)
  {
  
    super(props);
    this.state={
      firstName:'',
      lastName:'',
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
  
  render(){
    return (
      <form method='post' action='http://localhost:3001'>
        <h3>Sign Up</h3>
          
          <div className='mb-3'>
            <label htmlFor='name'>First Name</label>
            <input 
              type='text' 
              name='firstName' 
              onChange={this.handleChange}
              className="form-control"
              placeholder="First name"
              />
          </div>
          <div className='mb-3'>
            <label htmlFor='lastname'>Last Name</label>
            <input 
              type='text' 
              name='lastName' 
              onChange={this.handleChange}
              className="form-control"
              placeholder="Last name"
              />
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>Email address</label>
            <input 
              type='text' 
              name='email' 
              onChange={this.handleChange}
              className="form-control"
              placeholder="Email address"
              />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input 
              type='password' 
              name='password' 
              onChange={this.handleChange}
              className="form-control"
              placeholder="Password"
              />
          </div>
          <div className='d-grid'>
            <button type="submit" className="btn btn-primary">
              Sign up
            </button>
            {/* <Link to="/sign-in" type="button" className = 'btn btn-primary'> Sign up </Link> */}
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>        
      </form>               
    );
      }
}

export default SignUp;
