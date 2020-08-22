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

export const postComment = (data) => {
  console.log(data)
  return (dispatch) => {
    fetch('https://mighty-bastion-16545.herokuapp.com/comments', {
            method: 'POST',
            headers:{
            'Content-Type': 'application/json',
            'Accept': "application/json"
            },
            body: JSON.stringify({
              username: data.username,
              content: data.content,
              crossword_id: data.crossword_id
            })
             }).then(res => res.json()).
             then(obj => {
                console.log(obj)
                dispatch({ type: 'ADD_COMMENT', comment: obj })

             })
   
  }
}

