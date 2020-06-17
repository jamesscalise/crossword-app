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
import Home from './components/Home'
import CrosswordsContainer from './containers/CrosswordsContainer';
 
class App extends Component {

 componentDidMount() {
    this.props.fetchCrosswords()
    
  }

  handleLoading = () => {
    console.log(this.props.loading)
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return (
      <div>
        <Route exact path="/" component={Home} />
      <Route path="/crossword1" render={routerProps => <CrosswordsContainer {...routerProps} crossword={this.props.crosswords[0]}/>}/>
      </div>)
    }
  }

  render(){
    return(
    <div>
      <Router>
        <NavBar />
        <div>{this.handleLoading()}</div>
      </Router>
      
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
 
export default connect(mapStateToProps, {fetchCrosswords})(App)
