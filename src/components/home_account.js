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
        // async function ceva () {
        // const response = await fetch('http://localhost:3001/', {credentials: "same-origin"});
        // if (!response.ok) {
        //   const message = `An error has occured: ${response.status}`;
        //   throw new Error(message);
        // }
        // const session = await response.json();
        // await this.setState(await response.json());
        // //this.setState({session})
        // //console.log("muviii " + movies.firstname)

        // return session;
        fetch('http://54.174.7.45:3001/', {credentials: "same-origin"})
        // .then(function(response) {
        //     if (!response.ok) {
        //         throw Error(response.statusText);
        //     }
        //     return "erro" + response;
        // })
        .then(res => res.json())

        .then(
            (result) => {
              this.setState({
                session: result
              })
            })
        //   .then(session => { 
              
        //       this.setState({ session })
        //       console.log("Mysession " + this.session);
        //    })
        //    .catch(error => console.log(error) );
    }
//     ceva().catch(err => {
//         console.log(err);
//         // do something with the error here
//     });
//     ceva()
    
// }
       

       
    

    render() {
        return (
            <div>
                <div className='text-sold'> NUME: {this.state.session.firstname + " " + this.state.session.lastname} </div>
                <div className='text-sold'> SOLD: {this.state.session.sold} LEI </div>
                <div className='text-sold'> IBAN: {this.state.session.iban} </div>

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