

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

export function updatePost() {
    return {

    };
}

export function deletePost() {
    return {

    };    
}