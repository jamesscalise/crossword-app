import React, { Component } from 'react';

class commentForm extends Component {

    state = {
        text: ''
    }

    handleOnChange = event => {
        this.setState({
            text: event.target.value
        })
    }

    handleOnSubmit(event) {
        event.preventDefault();
       // this.props.handleAddUser(this.state.text)
        this.setState({
          text: ''
        })
    }

    render (){
        return(
            <input 
            name="name"
            type="text"
            value={this.state.text}
           
            onChange = {this.handleOnChange}
          />
        )
    }
}  

export default commentFrom