import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from '../features/counterSlice'

const Counter = ()=>{
    const counter = useSelector(state=>state.counter.value)
    const dispatch = useDispatch()
    console.log(counter);
    return <div>
            <div>{counter}</div>
            <div><button onClick={()=>{dispatch(increment())}}>increment</button>
            <button onClick={()=>{dispatch(decrement())}}>decrement</button></div>
    </div>
}

export default Counter