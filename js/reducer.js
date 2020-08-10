let state;

function changeState(state = { count: 0 }, action){
  // I didn't realize that I could use default arguments like this.
  // If I send a state of 'undefined', it still sets it correctly,
  // despite the default argument not being at the end.
  // It only breaks if I send one argument instead of two.  
  
  switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
    state = changeState(state, action)
    render()
}

function render(){
    document.body.textContent = state.count
}

dispatch({ type: '@@INIT' });