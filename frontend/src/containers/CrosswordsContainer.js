import React, { Component } from 'react'
import { connect } from 'react-redux'
import SquaresContainer from './SquaresContainer.js'
import CluesContainer from './CluesContainer'
import {postScore} from '../actions/crosswordActions'
class CrosswordsContainer extends Component  {

    state = {
        winTime: 0
    }
   
    computeTime = (time) => {
        let minutes = Math.floor(time/60)
        let seconds = time - (minutes * 60)
        return `${minutes}m ${seconds}s`
    }
    
    renderTimes = () => (
      this.props.test_scores.sort(function(a, b){
            return a.time-b.time
        }).slice(0, 5).map(score => (
        <li>{score.username}: {this.computeTime(score.time)}</li>
        ))

        )

    handleWin = (time) => {
        console.log("hit")
        this.setState({
            winTime: time
        }, this.handlePost)
    }

    createCrosswords = () => {
        if (this.props.crossword){
            return(
                <div>
                    <h1>{this.props.crossword.attributes.title}</h1>
                    <h3>Best times:</h3>
                   
                    <ol>{this.renderTimes()}</ol>
                    <SquaresContainer computeTime={this.computeTime}squares={this.props.crossword.attributes.squares} handleWin = {this.handleWin} length ={this.props.crossword.attributes.length}/>
                    <CluesContainer clues = {this.props.crossword.attributes.clues}/>
                </div>
            )
        }
    }

    handlePost = () => {
        console.log(this.props.crossword)
        this.props.postScore({
            score: this.state.winTime,
            username: this.props.current_user,
            crossword: this.props.crossword.id
        })
    
    }

    render(){   
        return (
        <div>
            {this.createCrosswords()}
            {console.log(this.props.test_scores)}
            <button onClick={this.handlePost}>Test post score</button>

        </div>
    )}
  
}

const mapStateToProps = (state, {crossword}) => {
    return {
        current_user: state.current_user,
        test_scores: state.scores.filter(score => score.crossword_id == crossword.id)
    }
}

const mapDispatchToProps = dispatch => ({
    postScore: ({score, username, crossword}) => {dispatch(postScore({score, username, crossword}))}
})

export default connect(mapStateToProps, mapDispatchToProps)(CrosswordsContainer)
