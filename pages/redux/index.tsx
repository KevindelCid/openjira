import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../slices/entries/counterSlice'
import { RootState } from '../../store'

export default function index (){

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
  


  return (
<div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>  )
}
