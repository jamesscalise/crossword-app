import React, { Component } from 'react';
import Square from '../components/Square'
import BlackSquare from '../components/BlackSquare'


class SquaresContainer extends Component {

    state ={
        rows: [],
        correct: 0,
        total: this.props.squares.filter((square) => square.is_black===false).length
    }

    addCorrect = () => {
        (console.log('add correct has been hit'))
       this.setState({
            correct: this.state.correct + 1
        }, this.checkTotal)
    }

    reduceCorrect = () =>{
       (console.log('add reduce has been hit'))
        this.setState({
            correct: this.state.correct - 1
        }, this.checkTotal)
    }

    checkTotal = () =>{
        console.log(this.state.correct)
        if (this.state.correct === this.state.total){
            alert("You win!")
        }
    }

    componentDidMount() {
        this.genMatrix()
    }

    genMatrix = () =>{
        console.log(this.props.length)
        
        var i
        
        for (i = 0; i < this.props.length; i++){
            var vals = this.props.squares.filter(square => square.y === i)
           
            var join = this.state.rows
            join.push(vals)
           
             this.setState({
                rows: join
              });
        }
        
    }

    genRows = () => (
        this.state.rows.map((rowVals, idx) => 
            <tr key={idx} className = "row" >{this.genSquares(rowVals)}</tr>
        )
    ) 

    genSquares = (squares) => (
        squares.map((val, idx) =>  {return(
            val.is_black ? 
            <td key ={idx} style={{backgroundColor: "black", cssFloat: "left", width: "10%", height: "20Px", border: "1px solid black"}}><BlackSquare square ={val} /></td> :
            <td key ={idx} style={{cssFloat: "left", width: "10%",  height: "20px", border: "1px solid black"}}><div style={{fontSize: "8px", height: "20%"}}>{val.corner_value}</div><Square style={{height: "50%"}}square ={val} addCorrect={this.addCorrect} reduceCorrect={this.reduceCorrect}/></td> 
            )}
     ))

    render() {
        return(
            
            <div>
                <table style={{display: "grid", width: "30%", height: "60%"}}>
                {this.genRows()}
                </table>
            </div>
        )
    }
}

export default SquaresContainer