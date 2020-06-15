const crosswordReducer = (state = { crosswords: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_CROSSWORDS':
        return {
          ...state,
          crosswords: [...state.crosswords],
          loading: true
        }
      case 'ADD_CROSSWORDS':
        return {
          ...state,
          crosswords: action.crosswords.map(crossword => (crossword.attributes)),
          loading: false
        }
      default:
        return state;
    }
  }
   
  export default crosswordReducer;