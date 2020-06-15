const crosswordReducer = (state = { crosswords: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_CROSSWORDS':
        return {
          ...state,
          crosswords: [...state.crosswords],
          loading: true
        }
      case 'ADD_CROSSWORDS':
        console.log(action.crosswords)
        return {
          ...state,
          crosswords: action.crosswords,
          loading: false
        }
      default:
        return state;
    }
  }
   
  export default crosswordReducer;