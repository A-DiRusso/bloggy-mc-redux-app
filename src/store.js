import {
    combineReducers,
    createStore,
} from 'redux';

import post from './reducers/post';

const rootReducer = combineReducers({
    //pass an object to combined reducers
    //this object should be shaped like your state
    post, // this is the key in our state
})

const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

export default store;