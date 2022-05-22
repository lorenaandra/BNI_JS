import React, { Component } from 'react'

class Transfer extends Component {
  render() {
    return (
      <form>
        <h3>Create new transfer</h3>

        <div className="mb-3">
          <label>Receiver full name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter full name"
          />
        </div>

        <div className="mb-3">
          <label>Receiver IBAN</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter IBAN" />
        </div>

        <div className="mb-3">
          <label>Amount of money</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter amount"
          />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <input
            type="password"
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