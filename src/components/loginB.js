import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
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
    <div className="App">
        <form method='post' action='http://localhost:3001'>
            <div className='name'>
              <label htmlFor='name'>Enter FirstName:</label>
              <input type='text' name='firstName' onChange={this.handleChange}/>
            </div>
            <div className='lastname'>
              <label htmlFor='lastname'>Enter LastName:</label>
              <input type='text' name='lastName' onChange={this.handleChange}/>
            </div>
            <div className='name'>
              <label htmlFor='email'>Enter email:</label>
              <input type='text' name='email' onChange={this.handleChange}/>
            </div>
            <div className='name'>
              <label htmlFor='password'>Enter password:</label>
              <input type='text' name='password' onChange={this.handleChange}/>
            </div>
            <div className='submit'>
              <input type='submit'/>
            </div>            
        </form>               

     </div>
  );
    }
}
export default App;
