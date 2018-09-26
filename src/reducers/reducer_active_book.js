// every reducer gets 2 arguements: current state and action
// reducers are only ever called when an action is called
// state

// state arguement for a reducer is not the application state,
// but only the state this reducer is responsible for

// state = null: is a es6 syntax of setting an arguement that comes in as
// undefined and turning it into null
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
  }
  return state
}
