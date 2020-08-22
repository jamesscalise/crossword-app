import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentForm from './CommentForm';

class Comments extends Component {

    handleAddComment = (text) => {
        
        let data ={
            text: text,
            username: this.props.current_user
        }
        this.props.addComment(data)
     
    }

    renderComments = () => {
        console.log('this worked')
    }

   render(){
    return(
    <div>
       
      <CommentForm handleAddComment={this.handleAddComment}/>
        
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
    addComment: (data) => dispatch({type: 'ADD_COMMENT', data})
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Comments)