export const fetchScores = () => {
    
      return (dispatch) => {
        
        dispatch({ type: 'LOADING_SCORES'})
        fetch('http://localhost:3001/scores').then(response => {
          return response.json()
        }).then(responseJSON => {
          
          dispatch({ type: 'ADD_SCORES', scores: responseJSON })
  
        })
      }
  }