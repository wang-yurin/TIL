import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../features/counter/counterSlice';

export default function Counter2() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}

// 어떤 컴포넌트에서든 dispatch를 호출하면 store에 있는 값을 업데이트 할 수 있음(Provider로 감싸있으니까)
