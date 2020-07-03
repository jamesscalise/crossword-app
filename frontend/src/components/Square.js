import React, { Component } from 'react';

class Square extends Component {

state = {
    text: '',
    isCorrect: false
}

handleOnChange = event => {
    if (this.state.text.length > 0){
        this.setState({
            text: event.target.value.charAt(1).toUpperCase()
          }, this.updateState);
    }
    else{
    this.setState({
      text: event.target.value.toUpperCase()
    }, this.updateState);
    }

    }
  
updateState = () => {
  console.log(this.state.text)
  if (this.state.text === this.props.square.letter.toUpperCase()){
    if (this.state.isCorrect === false)
    this.setState({
      isCorrect: true
    }, this.props.addCorrect())
    
  }
    else{
      if (this.state.isCorrect === true){
      this.setState({
        isCorrect: false
      }, this.props.reduceCorrect())
      
    } 
    }
}


  render (){
      return (
      
          <input 
            style={{textAlign: "center", border: "none", outline: "none",  width: "70%", height: "55%"}}
            name="name"
            type="text"
            value={this.state.text}
            maxLength="2"
           
            onChange = {this.handleOnChange}
          />
     
      )
  }

}

export default Square

