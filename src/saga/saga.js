import {
    put,
    call,
    takeLatest,
    takeEvery
  } from 'redux-saga/effects'

import { GET_CAT,SET_LOADING,SET_LOADED,GET_CAT_REQUESTED} from '../features/catSlice'
import { getCat } from '../api/api'

function* getCatsSaga (){
    yield put(SET_LOADING())

    const cats = yield call(getCat)

    
    yield put(GET_CAT(cats))
    
    yield put(SET_LOADED())
}

export default function* catSaga(){
    yield takeEvery(GET_CAT_REQUESTED,getCatsSaga)
}