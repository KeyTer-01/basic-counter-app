import logo from './logo.svg';
import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/counter';

function App() {
  const {value} = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>The count is: {value}</h1>
      <button onClick={()=> dispatch(increment())}>increment</button>
      <button onClick={()=> dispatch(decrement())}>decrement</button>
      <button onClick={()=> dispatch(incrementByAmount(20))}>increment by 20</button>
    </div>
  );
}

export default App;
