import React, { Component } from 'react'
import { connect } from 'react-redux'
import Square from '../components/Square'
import SquaresContainer from './SquaresContainer.js'
import CluesContainer from './CluesContainer'
import crosswordReducer from '../reducers/crosswordReducer'
import Crossword from './Crossword'

class CrosswordsContainer extends Component  {
   
    

    createCrosswords = () => {
        if (this.props.crossword){
            return(
                <div>
                    <h1>{this.props.crossword.title}</h1>
                    <SquaresContainer squares={this.props.crossword.squares} length ={this.props.crossword.length}/>
                    <CluesContainer clues = {this.props.crossword.clues}/>
                </div>
            )
        }
    }

    render(){   
        return (
        <div>
            {this.createCrosswords()}
        </div>
    )}
  
}

export default CrosswordsContainer
