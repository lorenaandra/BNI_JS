import React, { Component } from 'react'

class SavingsAccount extends Component {
  render() {
    return (
      <div>
        <h3>Create new savings account</h3>

        <div className="mb-3">
          <label>Savings account name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>

        <p className="info-savings-acc">
            Find out the benefits of our savings account!
        </p>

      </div>
    )
  }
}

export default SavingsAccount;