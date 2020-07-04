import React, { Component } from 'react'

class Index extends Component {

    state={
        filter: "none"
    }

    computeTime = (time) => {
        let minutes = Math.floor(time/60)
        let seconds = time - (minutes * 60)
        return `${minutes}m ${seconds}s`
    }

    handleOnChange = (event) => {
        console.log(event.target.value)
        this.setState({
            filter: event.target.value
        })
    }



    renderScores = (filter) => {
        if (filter == "none"){
        return this.props.scores.map(score => (
            <div>
                <div>Crossword:{score.crossword.title}</div>
                 <div>User: {score.username}</div>
                <div>Time: {this.computeTime(score.time)}</div>
                <br></br>
            </div>
        ))
        }else{
            return this.props.scores.filter(score => score.crossword.title === filter).map(score =>(
                <div>
                <div>Crossword:{score.crossword.title}</div>
                 <div>User: {score.username}</div>
                <div>Time: {this.computeTime(score.time)}</div>
                <br></br>
                </div> 
            ))
        }
        }

 render() {
  return (
      <div>
      <select onChange={this.handleOnChange}name="filters">
          <option value="none">No filter</option>
          <option value="Hard Crossword">Hard Crossword Scores</option>
          <option value="Easy Crossword">Easy Crossword Scores</option>
      </select>
    <div>{this.props.scores ? this.renderScores(this.state.filter) : (2+2)} </div>
    </div>
     )
  }
}

export default Index;
