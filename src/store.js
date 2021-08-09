import { createStore } from "redux";
import rootReducers from "./reducers";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

    const store=createStore(rootReducers,
    compose(applyMiddleware(thunk)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;