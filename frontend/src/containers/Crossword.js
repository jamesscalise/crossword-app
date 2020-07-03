import React, { Component } from 'react'


class Crossword extends Component  {
   
   

    render(){   
        return (
        <div>
            {this.props.crossword.title}
            {this.props.crossword.length}
        </div>
    )}
  
}

export default Crossword
