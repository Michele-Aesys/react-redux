import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchCat } from '../features/catSlice'
const ShowCat = ()=>{
const {cats,loading} = useSelector(state=>state.cat)
const dispatch = useDispatch()
console.log(cats,loading);
    return <div>
            <div>
                <button onClick={()=>dispatch(fetchCat())}>Show Cat</button>
                </div>
            {cats.length>0?cats.map((elem,index)=>{
                return <img key={index} src={elem[0].url}></img>
                    }):<div>{loading}</div>}
    </div>
}
export default ShowCat