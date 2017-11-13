import {delay} from "redux-saga";
import * as sgEffects from "redux-saga/effects";

export function* helloSaga() {
  yield console.log("hello sagas!");
}

export function* incrementAsync() {
  yield sgEffects.call(delay, 1000);
  yield sgEffects.put({type : "INCREMENT"});
}

export function* watchIncrementAsync() {
  yield sgEffects.takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export function* rootSaga() {
	yield sgEffects.all([
		helloSaga(),
		watchIncrementAsync()
	])
}
