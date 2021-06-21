import { ISinglePost } from '../entities/posts';
import * as actionTypes from '../actions/actionTypes/IPostTypes';

export interface IPostsReducer {
    postsList: ISinglePost[];
}

const defaultState = (): IPostsReducer => ({
    postsList: []
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
    switch (action.type) {

        case actionTypes.GET_POSTS: {
            const paylod: actionTypes.IPostTypes['GET_POSTS'] = action;
            return {
                ...state,
                postsList: paylod.postsList
            }
        }

        default: {
            return state
        }
    }
}