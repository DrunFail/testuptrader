import { Moment } from "moment"

export interface Comment {
    id: string,
    commentText: string,
    parentNodeId: string | null,
    isRootNode: boolean,
    childComments: string[]
}

 export interface MapperComment {
    id: string,
    commentText: string,
    parentNodeId: string | null,
    isRootNode: boolean,
    childComments: MapperComment[]
}


export interface WrapperComment {
    [key: string]: Comment
}

export enum PriorityStatus{
    Medium = 'Medium',
    High = 'High',
    Normal = 'Normal'
}
export enum CurrentStatus {
    Done = 'Done',
    Queue = 'Queue',
    Development = 'Development'
    
}


export interface Todo {
    id: number,
    title: string,
    description: string,
    dateCreated: Date | Moment | string,
    timeWork: null,
    dateEnd: Date | null | Moment | number,
    parentId: number | null,
    priority: PriorityStatus,
    files: string | null,
    currentStatus: CurrentStatus,
    nestedTodo: Todo[],
    comments: WrapperComment
}






export interface Projects {
    id: number,
    title: string,
    tasks: Todo[]
}