import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';

class Comments extends Component {

    handleAddComment = (text) => {
        data ={
            text: text,
            username: this.props.urrent_user
        }
        this.props.addUser(data)
    }

   render(){
    return(
    <div>
      <CommentForm />
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      comments: state.comments,
      current_user: state.current_user

  }
}

const mapDispatchToProps = dispatch => ({
    addUser: (data) => dispatch({type: 'ADD_USER', data})
})
  
export default connect(mapStateToProps, mapDispatchToProps)(xxx)