import React, { Component } from 'react';
import Square from '../components/Square'
import BlackSquare from '../components/BlackSquare'


class SquaresContainer extends Component {

    state ={
        rows: [],
        correct: 0,
        time: 0,
        won: false,
        total: this.props.squares.filter((square) => square.is_black===false).length
    }

    componentDidMount() {
        this.genMatrix()
        this.interval = setInterval(this.clockTick, 1000)
      }
    
      componentWillUnmount() {
        clearInterval(this.interval)
      }

    clockTick = () => {
        this.setState(prevState => ({
          time: prevState.time+1
        }))
      }
    

    addCorrect = () => {
       this.setState({
            correct: this.state.correct + 1
        }, this.checkTotal)
    }

    reduceCorrect = () =>{
        this.setState({
            correct: this.state.correct - 1
        }, this.checkTotal)
    }

    checkTotal = () =>{
        console.log(this.state.correct)
        if (this.state.correct === this.state.total){
            if (this.state.won === false){
                alert(`You win! Your time was: ${this.props.computeTime(this.state.time) }`)
                clearInterval(this.interval)
                this.props.handleWin(this.state.time)
                this.setState({
                    won:true
                })
            }
           

        }
    }

    

    genMatrix = () =>{
        
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
            <td key ={idx} style={{backgroundColor: "black", cssFloat: "left", width: "19px", height: "20Px", border: "1px solid black"}}><BlackSquare square ={val} /></td> :
            <td key ={idx} style={{cssFloat: "left", width: "19px",  height: "20px", border: "1px solid black"}}><div style={{fontSize: "8px", height: "20%"}}>{val.corner_value}</div><Square style={{height: "50%"}}square ={val} addCorrect={this.addCorrect} reduceCorrect={this.reduceCorrect}/></td> 
            )}
     ))

    render() {
        return(
            
            <div>
                <h3>Time: { this.props.computeTime(this.state.time) }</h3>
                <table style={{display: "grid", width: "70%", height: "60%", borderCollapse: "Collapse"}}>
                    <tbody>
                {this.genRows()}
                </tbody>
                </table>
            </div>
        )
    }
}

export default SquaresContainer