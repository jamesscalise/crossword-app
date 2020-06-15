export const fetchCrosswords = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_CROSSWORDS'})
      fetch('http://localhost:3001/crosswords').then(response => {
        return response.json()
      }).then(responseJSON => {
        console.log(responseJSON)
        dispatch({ type: 'ADD_CROSSWORDS', crosswords: responseJSON.data })

      })
    }
}