import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Home extends Component{

    render() {
        return (
            <div>
                <div className='text-sold'> NUME: </div>
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