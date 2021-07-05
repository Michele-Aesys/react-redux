import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCat, GET_CAT} from '../features/catSlice'

const ShowCat = () => {
    const { cats, loading } = useSelector(state => state.cat)
    const dispatch = useDispatch()
    return <div>
        <div>
            <button onClick={() => dispatch(GET_CAT())}>Show Cat</button>
        </div>
        <div>{loading}</div>
        {cats.length > 0 ? cats.map((elem, index) => {
            return <img key={index} src={elem[0].url}></img>
        }) : <div></div>}
    </div>
}
export default ShowCat