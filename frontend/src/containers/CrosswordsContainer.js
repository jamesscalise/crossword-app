import React, { Component } from 'react'
import { connect } from 'react-redux'
import Square from '../components/Square'
import SquaresContainer from './SquaresContainer.js'
import CluesContainer from './CluesContainer'

class CrosswordsContainer extends Component  {
    
    render(){   
        return (
        <div>
            This loaded
            {console.log(this.props.crossword)}
            <Square />
            <SquaresContainer  />
            <CluesContainer  />
        </div>
    )}
  
}

export default CrosswordsContainer
