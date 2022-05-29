import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Home extends Component{

    constructor(props)
    {
    
      super(props);
      this.state={
        session : {}
      }
    }

    componentDidMount() {
        fetch('http://localhost:3001/home_account')
          .then(res => {
              console.log(res);
              return res.json()
           })
          .then(session => { 
              
              this.setState({ session })
              console.log("mysession " + session); 
           });
       }

    render() {
        return (
            <div>
                <div className='text-sold'> NUME:{this.state.session.firstname + " " + this.state.session.lastname} </div>
                <div className='text-sold'> SOLD: </div>
                <div className='text-sold'> IBAN: </div>

                <div className='button'>
                    <button type='button' className='btn btn-primary'> Extras de cont </button>
                </div>

                <div className='button'>
                    <button type='button' className='btn btn-primary'> Logout </button>
                </div>
            </div>

            
            
        )
    }

}

export default Home;