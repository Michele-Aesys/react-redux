import {
    put,
    call,
    takeLatest,
    takeEvery
  } from 'redux-saga/effects'

import { GET_CAT,SET_LOADING,SET_LOADED,GET_CAT_REQUESTED} from '../features/catSlice'
import { getCat } from '../api/api'

function* getCatsSaga (){
    yield put({type:SET_LOADING.type})

    const cats = yield call(getCat)

    
    yield put({type:GET_CAT.type , payload:cats})
    
    yield put({type:SET_LOADED.type})
}

export default function* catSaga(){
    console.log(GET_CAT.type)
    yield takeEvery(GET_CAT_REQUESTED.type,getCatsSaga)
}