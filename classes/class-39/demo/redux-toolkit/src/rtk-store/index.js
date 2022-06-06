import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import peopleSlice from './people'


const reducers = combineReducers({people:peopleSlice});

//The store now has redux-thunk added and the Redux DevTools Extension is turned on
const store = configureStore({reducer: reducers});

export default store;