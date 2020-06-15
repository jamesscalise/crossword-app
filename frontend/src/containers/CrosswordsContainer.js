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
            <Square />
            <SquaresContainer crosswords={this.props.crosswords[0]} />
            <CluesContainer />
        </div>
    )}
  
}

export default CrosswordsContainer
