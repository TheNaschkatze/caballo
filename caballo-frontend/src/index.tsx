import * as React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import App from "./App"
import reducer from "./store/reducer"
import {ICourseState} from "./store/interfaces/ICourseState";
import {ICourseAction} from "./store/interfaces/ICourseAction";
import {IDispatchType} from "./store/interfaces/IDispatchAction";

const store: Store<ICourseState, ICourseAction> & {
    dispatch: IDispatchType
} = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
