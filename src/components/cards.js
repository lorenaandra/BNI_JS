import React, { Component } from 'react'

class Cards extends Component {

  style = {
    color: 'black'
  };

  handleClick() {
    alert("Setat card default");
  }

  render() {
    return (
      <form>
        <h2>Cards</h2>

        <div className="flex-container">
          <div style={this.style} onClick={this.handleClick}>
            <div className='text-align'>Card 1</div>
            <div>Popescu Alexandru</div>
            <div className='text-right'>9876 4567 6543 1234</div>
          </div>

          <div onClick={this.handleClick}>
            <div className='text-align'>Card 2</div>
            <div>Popescu Alexandru</div>
            <div className='text-right'>1234 6543 5678 9087</div>
          </div>

          <div onClick={this.handleClick}>
            <div className='text-align'>Card 3</div>
            <div>Popescu Alexandru</div>
            <div className='text-right'>5442 2782 9829 3448</div>
          </div>

          <div onClick={this.handleClick}>
            <div className='text-align'>Card 4</div>
            <div>Popescu Alexandru</div>
            <div className='text-right'>3487 8374 3348 7347</div>
          </div>

          <div onClick={this.handleClick}>
            <div className='text-align'>Card 5</div>
            <div>Popescu Alexandru</div>
            <div className='text-right'>3484 0998 2398 2378</div>
          </div>
        </div>
      </form>

    )
  }
 
}

export default Cards;
