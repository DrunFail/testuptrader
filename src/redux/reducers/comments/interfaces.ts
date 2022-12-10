import { WrapperComment } from "../../../interfaces/interfaces"



export interface CommentsState {
    comments: WrapperComment,
    loading: boolean,
    error: null | string
}




export enum CommentsActionTypes {
    FETCH_COMMENTS = 'FETCH_COMMENTS',
    FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS',
    FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR',
    ADD_COMMENT = 'ADD_COMMENT',
}


interface FetchCommentsAction {
    type: CommentsActionTypes.FETCH_COMMENTS,
}

interface FetchCommentsSuccessAction {
    type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS,
    payload: any
}

interface FetchCommentsErrorAction {
    type: CommentsActionTypes.FETCH_COMMENTS_ERROR,
    payload: string
}

interface AddCommentAction {
    type: CommentsActionTypes.ADD_COMMENT,
    payload: any
}




export type CommentsAction =
    FetchCommentsAction
    | FetchCommentsSuccessAction
    | FetchCommentsErrorAction
    | AddCommentAction 
