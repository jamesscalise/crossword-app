import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import { fetchCrosswords } from './actions/crosswordActions'
import './App.css';
import CrosswordsContainer from './containers/CrosswordsContainer';
 
class App extends Component {

 componentDidMount() {
    this.props.fetchCrosswords()
    
  }

  render(){
    return(
    <div>
      {console.log(this.props)}
      <CrosswordsContainer crosswords={this.props} />
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    crosswords: state.crosswords,
    loading: state.loading
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchCrosswords: () => dispatch(fetchCrosswords()) 
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
