import {
    combineReducers,
    createStore,
} from 'redux';

import posts from './reducers/post';

const FREQUENCY = 2000;
const LS_KEY = 'bloggy-mc-redux';


const rootReducer = combineReducers({
    //pass an object to combined reducers
    //this object should be shaped like your state
    posts, // this is the key in our state
})

//check localStorage for any previously saved app state
//if it's there, pass as second argument to createStore
// let initialState = {};
// const dataFromLocalStorage = JSON.parse(localStorage.getItem(LS_KEY));

// if (dataFromLocalStorage) {
//     initialState = dataFromLocalStorage;
// }
const initialState = JSON.parse(localStorage.getItem(LS_KEY)) || {};

const store = createStore(
    rootReducer,
    initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
    

    
setInterval(() => {
    const state = store.getState();
    localStorage.setItem(LS_KEY, JSON.stringify(state));
}, FREQUENCY);

export default store;