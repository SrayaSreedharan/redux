import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Counterslice'


export function Counter2() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <h1>counter:{count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}