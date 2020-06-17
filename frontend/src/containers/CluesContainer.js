import React, { Component } from 'react';

class CluesContainer extends Component {

    renderHorizontals = ()=> {
        return(
        this.props.clues.filter(clue => clue.orientation === "horizontal").map(clue =>
            <li>{clue.number}: {clue.content}</li>
            )
        )
        console.log(this.props.clues)
    }

    renderVerticals = () => {
        return(
            this.props.clues.filter(clue => clue.orientation === "vertical").map(clue =>
                <li>{clue.number}: {clue.content}</li>
                )
            )

    }


    render (){
        return(
            <div>
                <div>
                <h2>Clues</h2>
                <h3 >Across:</h3>
                <ul >
                {this.renderHorizontals()}
                </ul>
                </div>
                <div>
                <h3>Verticals</h3>
                <ul>
                {this.renderVerticals()}
                </ul>
                </div>
            </div>
        )
    }
}

export default CluesContainer