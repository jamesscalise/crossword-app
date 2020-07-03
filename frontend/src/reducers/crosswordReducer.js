const crosswordReducer = (state = { crosswords: [], loading: false }, action) => {
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
      case 'ADD_USER':
        return {
          ...state,
          current_user: action.text,
          loading: false
        }
      case 'ADD_SCORE':
          console.log('hit reducer')
          return {
            ...state,
            
          }
      return state
      default:
        return state;
    }
  }
    
  export default crosswordReducer;