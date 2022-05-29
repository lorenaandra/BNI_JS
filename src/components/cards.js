import React, { Component } from 'react'

class Cards extends Component {

  constructor(props)
    {
    
      super(props);
      this.state={
        session : {}
        
      }
    }

    componentDidMount() {
      
      fetch('http://54.174.7.45:3001/', {credentials: "same-origin"})

      .then(res => res.json())

      .then(
          (result) => {
            this.setState({
              session: result
            })
          })
     
  }

  handleClick() {
    alert("Card set as default!");
    
  }

  handleClick2() {
    
  }

  changeStyle_button(){
    alert("Can't remove card as default!");
    var element = document.getElementById("myDiv");
    element.style.backgroundColor = "#d9153c";
  }

  render() {
    return (
      <form>
        <h2>Cards</h2>

        <div className="flex-container">
          <div id = "myDiv" onClick={this.handleClick}>
            <div className='text-align'>Main card</div>
            <div>{this.state.session.firstname + " " + this.state.session.lastname}</div>
            <div className='text-right'>{this.state.session.cardNR}</div>
            <div>CVV: {this.state.session.cvv}</div>
            <div>Valid Thru: {this.state.session.anul + "/" + this.state.session.luna}</div>
        

          </div>

          <button className="button_cards" onClick={this.changeStyle_button}> Remove card as default </button>

        </div>
      </form>

    )
  }
 
}

export default Cards;