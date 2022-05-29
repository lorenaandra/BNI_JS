import React, { Component } from 'react'

class Transfer extends Component {

  constructor(props)
  {
  
    super(props);
    this.state={
      email:'',
      IBAN:'',
      amount_of_money:'',
      description:''
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
      <form method='post' action='http://54.174.7.45:3001/transfer'>
        <h3>Create new transfer</h3>

        <div className="mb-3">
          <label>Receiver email</label>
          <input
            type="text"
            name = 'email'
            onChange={this.handleChange}
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Receiver IBAN</label>
          <input
            type="text"
            name = 'IBAN'
            onChange={this.handleChange}
            className="form-control"
            placeholder="Enter IBAN" />
        </div>

        <div className="mb-3">
          <label>Amount of money</label>
          <input
            type="text"
            name = 'amount_of_money'
            onChange={this.handleChange}
            className="form-control"
            placeholder="Enter amount"
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <input
            type="text"
            name = 'description'
            onChange={this.handleChange}
            className="form-control"
            placeholder="Enter description"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
    )
  }
}

export default Transfer;