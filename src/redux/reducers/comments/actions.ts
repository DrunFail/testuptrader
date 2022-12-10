import axios from "axios"
import { Dispatch } from "redux"
import { WrapperComment } from "../../../interfaces/interfaces"
import { CommentsAction, CommentsActionTypes } from "./interfaces"

export const fetchComments = (projectId: number) => {
    return async (dispatch: Dispatch<CommentsAction>) => {
        try {
            dispatch({ type: CommentsActionTypes.FETCH_COMMENTS })
            const response = await axios.get(`https://638efcdd4ddca317d7eb2309.mockapi.io/api/v1/comment/${projectId}`)


            dispatch({ type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS, payload: response.data?.comments })

        } catch (error) {
            dispatch({
                type: CommentsActionTypes.FETCH_COMMENTS_ERROR,
                payload: 'Произошла ошибка при загрузке комментариев'
            })
        }
    }
}

export const addRootComment = () => {
    return async (dispatch: Dispatch<CommentsAction>) => {

        try {
            await axios.post('https://638efcdd4ddca317d7eb2309.mockapi.io/api/v1/comment', { comments: {} })

        } catch (error) {
            throw new Error('не удалось создать рут коммент')
        }
    }
}




export const addComment = (newComment: WrapperComment) => {
    return async (dispatch: Dispatch<CommentsAction>) => {
        try {
            await axios.put('https://638efcdd4ddca317d7eb2309.mockapi.io/api/v1/comment/1', { comments:  newComment   })
            dispatch({type: CommentsActionTypes.ADD_COMMENT, payload: newComment})

        } catch (error) {
            throw new Error('ошибка добавления комментария')
        }
    }
}