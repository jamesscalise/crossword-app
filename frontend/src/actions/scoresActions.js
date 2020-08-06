export const fetchScores = () => {
    
      return (dispatch) => {
        
        dispatch({ type: 'LOADING_SCORES'})
        fetch('https://mighty-bastion-16545.herokuapp.com/scores').then(response => {
          return response.json()
        }).then(responseJSON => {
          
          dispatch({ type: 'ADD_SCORES', scores: responseJSON })
  
        })
      }
  }