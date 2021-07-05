import {
    put,
    call,
    takeLatest,
    takeEvery
  } from 'redux-saga/effects'

import { GET_CAT,SET_LOADING,SET_LOADED } from '../features/catSlice'
import { getCat } from '../api/api'

function* getCatsSaga (){
    yield put({type:SET_LOADING})

    const cats = yield call(getCat)

    
    yield put({type:GET_CAT, payload:cats})
    
    yield put({type:SET_LOADED})
}

export default function* catSaga(){
    yield takeEvery(GET_CAT,getCatsSaga)
}