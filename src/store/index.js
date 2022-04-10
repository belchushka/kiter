import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {videoReducer} from "./reducers/videoReducer";
import thunk from "redux-thunk";


const reducers = combineReducers({
    video:videoReducer
})

const store = createStore(reducers, compose(applyMiddleware(thunk)))

export default store