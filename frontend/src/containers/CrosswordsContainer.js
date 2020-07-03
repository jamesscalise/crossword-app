import React, { Component } from 'react'
import { connect } from 'react-redux'
import SquaresContainer from './SquaresContainer.js'
import CluesContainer from './CluesContainer'
import {postScore} from '../actions/crosswordActions'
class CrosswordsContainer extends Component  {
   
    computeTime = (time) => {
        let minutes = Math.floor(time/60)
        let seconds = time - (minutes * 60)
        return `${minutes}m ${seconds}s`
    }
    
    renderTimes = () => (
      this.props.crossword.scores.sort(function(a, b){
            return a.time-b.time
        }).slice(0, 5).map(score => (
        <li>{score.username}: {this.computeTime(score.time)}</li>
        ))

        )

    createCrosswords = () => {
        if (this.props.crossword){
            return(
                <div>
                    <h1>{this.props.crossword.title}</h1>
                    <h3>Best times:</h3>
                    {console.log(this.props.crossword.scores)}
                    <ol>{this.renderTimes()}</ol>
                    <SquaresContainer computeTime={this.computeTime}squares={this.props.crossword.squares} length ={this.props.crossword.length}/>
                    <CluesContainer clues = {this.props.crossword.clues}/>
                </div>
            )
        }
    }

    handleOnClick = () => {
        console.log("hit")
        this.props.postScore(this.props.current_user)
    }

    render(){   
        return (
        <div>
            {this.createCrosswords()}
            <button onClick={this.handleOnClick}>Test post score</button>

        </div>
    )}
  
}

const mapStateToProps = state => {
    return {
        current_user: state.current_user
    }
}

const mapDispatchToProps = dispatch => ({
    postScore: (score) => {dispatch(postScore(score))}
})

export default connect(mapStateToProps, mapDispatchToProps)(CrosswordsContainer)
