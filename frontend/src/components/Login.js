import React, { Component } from 'react';

class Login extends Component {

    state = {
        text: ''
    }

    handleOnChange(event) {
        this.setState({
          text: event.target.value,
        });
      }

      handleOnSubmit(event) {
        event.preventDefault();
        this.props.handleAddUser(this.state.text)
        this.setState({
          text: ''
        })
    }

  
    
      render (){
          return (
          <div  >
              <div>
              Welcome to my crossword app! I've imported a number of fun New York Times crosswords of varying difficulties.
              Before you begin, please enter a username so we may track your score.
              </div>
             
              <form onSubmit={(event) => this.handleOnSubmit(event)} >
                <input
                    type="text"
                    value={this.state.text}
                    onChange={(event) => this.handleOnChange(event)} />
                <input type="submit" />
                </form>
          </div>
          )
      }
    
    }

export default Login