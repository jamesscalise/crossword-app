import React, { Component } from 'react';


class CommentForm extends Component {

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
            <div>
                <h3>Leave a comment: </h3>
            <form>
                <input 
                name="name"
                type="text"
                value={this.state.text}
            
                onChange = {this.handleOnChange}
                />
                <input type="submit"/>
            </form>
          </div>
        )
    }
}  

export default CommentForm