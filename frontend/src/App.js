import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { fetchCrosswords } from './actions/crosswordActions'
import {fetchScores} from './actions/scoresActions'
import {fetchComments} from './actions/commentActions'
import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import Index from './components/Index'
import CrosswordsContainer from './containers/CrosswordsContainer';
  
class App extends Component {

 componentDidMount() {
    
    this.props.fetchCrosswords()
    this.props.fetchScores()
    this.props.fetchComments()

  }

  handleAddUser = (text) => {
    console.log(text)
    this.props.addUser(text)
  }

  renderCrosswordRoutes = () => (
    
    this.props.crosswords.map((crossword) => (
      <Route path={`/${crossword.attributes.title.replace(/\s/g, '')}`} render={routerProps => <CrosswordsContainer {...routerProps} crossword={crossword} />} />
    ))
  )


  handleLoading = () => {
    
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return (
      <div>
      <Route  exact path="/" render={routerProps => <Home {...routerProps} current_user={this.props.current_user}/>} />
      <Route path = "/index" render={routerProps => <Index {...routerProps} scores={this.props.scores}/>}  />
        {this.renderCrosswordRoutes()}
      </div>)
    
  }
  }

  

  loadHome = () => {
    return(
      <div>
        <Route  path="/" render={routerProps => <Login {...routerProps}  handleAddUser={this.handleAddUser}/>} />
      </div>
    )
  }

  loadCrosswords = () => {
    return(
      <div>
        <NavBar crosswords = {this.props.crosswords}/>
        {this.handleLoading()}
      </div>
    )
  }

  render(){
    return(
    <div>
      <Router>
        {this.props.current_user ? this.loadCrosswords() : this.loadHome()}
        
      
      </Router>
      
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    crosswords: state.crosswords,
    loading: state.loading,
    current_user: state.current_user,
    scores: state.scores
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCrosswords: () => {dispatch(fetchCrosswords())},
  fetchScores: () => {dispatch(fetchScores())},
  fetchComments: () => {dispatch(fetchComments())},
  addUser: (text) => dispatch({type: 'ADD_USER', text})
})
  
export default connect(mapStateToProps, mapDispatchToProps)(App)
