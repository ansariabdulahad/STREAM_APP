import { combineReducers } from "redux";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

import AnimationReducer from "../Tailwind/Animation/Animation.reducer";

const middlewares = applyMiddleware(logger, thunk);

const root = combineReducers({
    // reducers...
    AnimationReducer
});

const store = createStore(root, {}, middlewares);

export default store;