

//action types
export const ACTION_CREATE_POST =  'ACTION_CREATE_POST';
export const ACTION_UPDATE_POST = 'ACTION_UPDATE_POST';
export const ACTION_DELETE_POST = 'ACTION_DELETE_POST';

//Action creators
export function createPost(payload) {
    //assumes that the `payload` argument looks like this:
    // {
    // title: 'lorem impsum,
    // content: 'dolar ainer ne',
    // }
    return {
        type: ACTION_CREATE_POST,
        payload,
    };
}
// the window is for devleopment and should be 
//commmented out or removed later
//it's like littering
window.createPost = createPost;

export function updatePost(id, payload) {
    return {
        type: ACTION_UPDATE_POST,
        payload: {
            id,
            ...payload,
        }
    };
}

window.updatePost = updatePost;

export function deletePost(id) {
    return {
        type: ACTION_DELETE_POST,
        payload: {
            id
        }
    };    
}

window.deletePost = deletePost;