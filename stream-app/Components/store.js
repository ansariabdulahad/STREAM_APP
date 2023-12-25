import { combineReducers } from "redux";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

import AnimationReducer from "../Tailwind/Animation/Animation.reducer";
import DialogReducer from "../Tailwind/Dialog/Dialog.reducer";
import MoviesReducer from "./AdminPanel/Movies/Movies.reducer";

const middlewares = applyMiddleware(logger, thunk);

const root = combineReducers({
    // reducers...
    AnimationReducer,
    DialogReducer,
    MoviesReducer
});

const store = createStore(root, {}, middlewares);

export default store;