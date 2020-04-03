// Let's begin by simply declaring our state, but not assigning it to equal anything.
// So, we accordingly change the first line of our JavaScript:
let state; // = {count: 0};

// What would be really nice is if we could say when you pass a state of undefined to our reducer,
// assign that value to our initial state. Luckily, ES6 allows us to pass default arguments to functions
// and we can give our changeState() reducer a default argument to do just that.
function changeState(state = { count: 0 }, action) {
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
