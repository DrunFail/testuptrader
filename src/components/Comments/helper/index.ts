import { v4 as uuidv4 } from "uuid";
import {Comment } from '../../../interfaces/interfaces'



export const getNewComment = (commentValue: string, isRootNode = false, parentNodeId: string | null): Comment => {
    return {
        id: uuidv4(),
        commentText: commentValue,
        parentNodeId,
        isRootNode,
        childComments: []
    };
};