import { ACTION_CREATE_POST } from "../actions";

//a reducer is a function that accepts 
// the current state and an action 
// then caluculates and returns the next new 
// version of state
export function posts(state={}, action={ type: '' }) {
    switch(action.type) {
        case ACTION_CREATE_POST:
            console.log(`Sounds like you want to create a post`);
        break;
        default:
            return state;
    }
}
