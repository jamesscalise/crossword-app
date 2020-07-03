import React, { Component } from 'react'

class Index extends Component {

    computeTime = (time) => {
        let minutes = Math.floor(time/60)
        let seconds = time - (minutes * 60)
        return `${minutes}m ${seconds}s`
    }

    renderScores = () => (
        this.props.scores.map(score => (
            <div>
                <div>Crossword:{score.crossword.title}</div>
                 <div>User: {score.username}</div>
                <div>Time: {this.computeTime(score.time)}</div>
                <br></br>
            </div>
        ))
    )

 render() {
  return (
      <div>{console.log(this.props.scores)}
    <div>{this.props.scores ? this.renderScores() : (2+2)} </div>
    </div>
     )
  }
}

export default Index;
