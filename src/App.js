import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import cookie from 'react-cookies'

import Login from '../src/components/sign-in'
import SignUp from '../src/components/sign-up'
import Home from '../src/components/home_account'
import SavingsAccount from './components/savings_account'
import Transfer from './components/create_transfer'
import Cards from './components/cards'



function App() {

  const [data, setState] = useState({})

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            
            <div className="logo-image">
              <img src = "logoBNI.png" className="img-fluid"></img>
            </div>

            <span className="navbar-brand">
              BNI Banking
            </span>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Sign in
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/home_account'}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/transfer'}>
                    Create transfer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/cards'}>
                    Cards
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sAccount'}>
                    Create savings account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/home_account" element={<Home />}  />
              <Route path="/transfer" element={<Transfer />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/sAccount" element={<SavingsAccount />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )

  // useEffect(() => {
  //   userId => setState(cookie.load('userId'))
  // })

  // const [data, setData] = useState({})



  // useEffect(() => {
  //   // Your code here
  //   fetch('http://localhost:3001/sign-in')
  //     .then(res => res.json())
  //        //return res.json()
      
      
  //     .then(data => setState(data))
  //     .then(console.log(data))
  // }, [])

//   const [dbdata, setData] = useState({});
 
//  useEffect(() => {
//    async function getData() {
//    //const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
//    const response = await fetch(`http://localhost:3001/sign-in`);
 
//      if (!response.ok) {
//        const message = `An error occurred: ${response.statusText}`;
//        window.alert(message);
//        return;
//      }
     
//      const dbdata = await response.json();
//      window.alert(JSON.stringify(dbdata));
//      setData(dbdata);
//      //setData('fake data')
//    }
//    getData();
//    return;
//  },[dbdata]);

  console.log("my data " + Login.session)
  console.log("data name "+ data?.name)

  // if (data?.name !== undefined) {
  //   return (

  //     <Router>
  //       <div className="App">
  //         <nav className="navbar navbar-expand-lg navbar-light fixed-top">
  //           <div className="container">
              
  //             <div className="logo-image">
  //               <img src = "logoBNI.png" className="img-fluid"></img>
  //             </div>
  
  //             <span className="navbar-brand">
  //               BNI Banking
  //             </span>
  
  //             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
  //               <ul className="navbar-nav ml-auto">
  //                 {/* <li className="nav-item">
  //                   <Link className="nav-link" to={'/sign-in'}>
  //                     Sign in
  //                   </Link>
  //                 </li>
  //                 <li className="nav-item">
  //                   <Link className="nav-link" to={'/sign-up'}>
  //                     Sign up
  //                   </Link>
  //                 </li> */}
               
  //                 <li className="nav-item">
  //                   <Link className="nav-link" to={'/home_account'}>
  //                     Home
  //                   </Link>
  //                 </li>
  //                 <li className="nav-item">
  //                   <Link className="nav-link" to={'/transfer'}>
  //                     Create transfer
  //                   </Link>
  //                 </li>
  //                 <li className="nav-item">
  //                   <Link className="nav-link" to={'/cards'}>
  //                     Cards
  //                   </Link>
  //                 </li>
  //                 <li className="nav-item">
  //                   <Link className="nav-link" to={'/sAccount'} >
  //                     Create savings account
  //                   </Link>
  //                 </li>
  //               </ul>
  //             </div>
  //           </div>
  //         </nav>
  
  //         <div className="auth-wrapper">
  //           <div className="auth-inner">
  //             <Routes>
  //               <Route exact path="/" element={<Login />} />
  //               <Route path="/sign-in" element={<Login />} />
  //               <Route path="/sign-up" element={<SignUp />} />
                // <Route path="/home_account" />
                //   <Route path = ":id" element={<Home />}  />
  //               <Route path="/transfer"  />
  //                 <Route path="/:id" element={<Transfer />} />
  //               <Route path="/cards" element={<Cards />} />
  //               <Route path="/sAccount" element={<SavingsAccount />} />
  //             </Routes>
  //           </div>
  //         </div>
  //       </div>
  //     </Router>
  //   )
  

  // } else {

  //   return (
  //     <Router>
  //       <div className="App">
  //         <nav className="navbar navbar-expand-lg navbar-light fixed-top">
  //           <div className="container">
              
  //             <div className="logo-image">
  //               <img src = "logoBNI.png" className="img-fluid"></img>
  //             </div>
  
  //             <span className="navbar-brand">
  //               BNI Banking
  //             </span>
  
  //             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
  //               <ul className="navbar-nav ml-auto">
  //                 <li className="nav-item">
  //                   <Link className="nav-link" to={'/sign-in'}>
  //                     Sign in
  //                   </Link>
  //                 </li>
  //                 <li className="nav-item">
  //                   <Link className="nav-link" to={'/sign-up'}>
  //                     Sign up
  //                   </Link>
  //                 </li>
  //                 </ul>
  //             </div>
  //           </div>
  //         </nav>
  
  //         <div className="auth-wrapper">
  //           <div className="auth-inner">
  //             <Routes>
  //               <Route exact path="/" element={<Login />} />
  //               <Route path="/sign-in" element={<Login />} />
  //               <Route path="/sign-up" element={<SignUp />} />
                
  //             </Routes>
  //           </div>
  //         </div>
  //       </div>
  //     </Router>
  //   )
  // }


  

 
}

export default App