import {createStore, applyMiddleware} from "redux";
import "babel-polyfill";
import createSagaMiddleware from "redux-saga";
import React from "react";
import ReactDOM from "react-dom";
import {rootSaga} from "./sagas";
import reducer from "./reducer";
import Counter from "./counter";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

const action = type => store.dispatch({type});

ReactDOM.render(
	<Counter
		value={store.getState()}
		onIncrement={() => action("INCREMENT")}
		onDecrement={() => action("DECREMENT")}
		onIncrementAsync={() => action("INCREMENT_ASYNC")}
	/>,
	document.getElementById("root")
);

