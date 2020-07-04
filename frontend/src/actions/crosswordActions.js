export const fetchCrosswords = () => {
 
    return (dispatch) => {
     
      dispatch({ type: 'LOADING_CROSSWORDS'})
      fetch('http://localhost:3001/crosswords').then(response => {
        return response.json()
      }).then(responseJSON => {
        console.log(responseJSON.data)
        dispatch({ type: 'ADD_CROSSWORDS', crosswords: responseJSON.data })

      })
    
    } 
}

export const postScore = ({score, username, crossword}) => {
  console.log(score)
  console.log(username)
  console.log(crossword)
  return (dispatch) => {
    fetch('http://localhost:3001/scores', {
            method: 'POST',
            headers:{
            'Content-Type': 'application/json',
            'Accept': "application/json"
            },
            body: JSON.stringify({
              username: username,
              time: score,
              crossword_id: crossword
            })
             }).then(res => res.json()).
             then(obj => {
                console.log(obj)
                dispatch({ type: 'ADD_SCORE', score: obj })

             })
   
  }
  
}