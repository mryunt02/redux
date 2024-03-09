const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
}; // Reducer Function
const store = redux.createStore(counterReducer); // Cenral Data Store

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
}; // Component

store.subscribe(counterSubscriber); //subscription
store.dispatch({ type: "increment" }); // action
store.dispatch({ type: "decrement" }); // action
