import { CommentsAction, CommentsActionTypes, CommentsState } from "./interfaces"

const initialState: CommentsState = {
    comments: {},
    loading: false,
    error: null
}


export function commentsReducer(state = initialState, action: CommentsAction): CommentsState {
    switch (action.type) {
        case CommentsActionTypes.FETCH_COMMENTS:
            return { loading: true, error: null, comments: {} }
        case CommentsActionTypes.FETCH_COMMENTS_SUCCESS:
            return {
                loading: false, error: null, comments: action.payload
            }

        case CommentsActionTypes.FETCH_COMMENTS_ERROR:
            return {loading: false, error: action.payload, comments: {}}
        case CommentsActionTypes.ADD_COMMENT:
            return { ...state, comments: { ...state.comments,  ...action.payload} }
        default:
            return state
    }
}