import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import thunk from 'redux-thunk';
// import thunk from './middleware/thunk';


const reducers = combineReducers({todos:reducer});

const store = ()=>{
    return createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
}

export default store();