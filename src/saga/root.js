import { spawn } from "@redux-saga/core/effects";
import catSaga from "./saga";

export default function* rootSaga(){
    yield spawn(catSaga)
}