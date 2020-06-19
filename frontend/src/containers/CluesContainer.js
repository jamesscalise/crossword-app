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
                
                <h2>Clues</h2>
                <div style={{cssFloat: "left", margin: "10px"}}>
                <h3 >Across:</h3>
                <ul style={{listStyleType:"none"}}>
                {this.renderHorizontals()}
                </ul>
                </div>
                <div style={{cssFloat: "left", margin: "10px"}}>
                <h3>Verticals</h3>
                <ul style={{listStyleType:"none"}}>
                {this.renderVerticals()}
                </ul>
                </div>
            </div>
        )
    }
}

export default CluesContainer