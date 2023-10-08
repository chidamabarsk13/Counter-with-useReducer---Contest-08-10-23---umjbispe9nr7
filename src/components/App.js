import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
  const initialState={count:0};
  const [state,dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
    <button id="increment-btn" onClick={() => dispatch ({type: 'INCREMENT'})}>Increment</button>
  <span id="counter">{state.count}</span>
  <button id="decrement-btn" onclick={() => dispatch ({type: 'DECREMENT'})}>Decrement</button>
  

    </div>
  );
};


export default App;
