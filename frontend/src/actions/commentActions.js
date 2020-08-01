export const fetchComments = () => {
    
    return (dispatch) => {
      
      dispatch({ type: 'LOADING_COMMENTS'})
      fetch('http://localhost:3001/comments').then(response => {
        return response.json()
      }).then(responseJSON => {
        
        dispatch({ type: 'ADD_COMMENTS', scores: responseJSON })

      })
    }
}

