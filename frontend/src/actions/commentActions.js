export const fetchComments = () => {
    
    return (dispatch) => {
      
      dispatch({ type: 'LOADING_COMMENTS'})
      fetch('https://mighty-bastion-16545.herokuapp.com/comments').then(response => {
        return response.json()
      }).then(responseJSON => {
        
        dispatch({ type: 'ADD_COMMENTS', scores: responseJSON })

      })
    }
}

