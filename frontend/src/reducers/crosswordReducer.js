const crosswordReducer = (state = { crosswords: [], scores: [], comments: [], loading: false }, action) => {
  console.dir(state)
    switch(action.type) {
      
      case 'LOADING_CROSSWORDS':
        return {
          ...state,
          loading: true
        }
      case 'ADD_CROSSWORDS':
        return {
          ...state,
          crosswords: action.crosswords,
          loading: false
        }
      case 'LOADING_SCORES':
        return {
          ...state,
          loading: true
        }
      case 'ADD_SCORES':
        return {
          ...state,
          scores: action.scores,
          loading: false
        }
      case 'LOADING_COMMENTS':
        return {
          ...state,
          loading: true
        }
      case 'ADD_COMMENTS':
        console.log("this has been hit")
        return {
          ...state,
          comments: action.comments,
          loading: false
        }
      case 'ADD_USER':
        return {
          ...state,
          current_user: action.text,
          loading: false
        }
      case 'ADD_SCORE':
          console.log(state.scores)
          return {
            ...state,
            scores: [
              ...state.scores,
              action.score
            ]

          }
      return state
      default:
        return state;
    }
  }
    
  export default crosswordReducer;