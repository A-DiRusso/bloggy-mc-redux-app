import { ACTION_CREATE_POST, ACTION_DELETE_POST, ACTION_UPDATE_POST } from "../actions";
import { generateId } from "../utils";

//a reducer is a function that accepts 
// the current state and an action 
// then caluculates and returns the next new 
// version of state
export default function posts(state={}, action={ type: '' }) {
    switch(action.type) {
        case ACTION_CREATE_POST:
            const id = generateId();
            console.log(`The new id is: ${id}`);
            const newState = {
                ...state,
                // to use a variable 
                //in an object literal
                //wrap the varible
                // in square brackets
                [id]: action.payload, 
            };
            return newState;
        // break;
        case ACTION_DELETE_POST:
            const deleteState = {
                ...state,
            };
            delete deleteState[action.payload.id];
            return deleteState;
        case ACTION_UPDATE_POST:
            const postToUpdate = state[action.payload.id];
            if (postToUpdate) {
                return {
                    ...state,
                    [action.payload.id]: {
                        title: action.payload.title || postToUpdate.title,
                        content: action.payload.content || postToUpdate.content,
                    }
                }
            }
            break;
            default:
                return state;
        }
    }

