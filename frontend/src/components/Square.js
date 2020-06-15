import React, { Component } from 'react';

class Square extends Component {

state = {
    text: ''
}

handleOnChange = event => {
    if (this.state.text.length > 0){
        this.setState({
            text: event.target.value.charAt(1).toUpperCase()
          });
    }
    else{
    this.setState({
      text: event.target.value.toUpperCase()
    });
    }
  }

  render (){
      return (
      <div>
          <input 
            name="name"
            type="text"
            value={this.state.text}
            maxLength="2"
            onChange = {this.handleOnChange}
          />
      </div>
      )
  }

}

export default Square

