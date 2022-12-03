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



export interface Priority {
    priority: 'Medium' | 'High' | 'Normal'
}

export interface NestedTodo {
    id: number,
    title: string,
    description: string,
    dateCreated: Date | Moment | string,
    timeWork: null,
    dateEnd: Date | null | Moment | number,
    parentId: number | null,
    priority: any,
    files: string | null,
    currentStatus: 'Queue' | 'Development' | 'Done'
}




export interface Todo extends NestedTodo {
    nestedTodo: NestedTodo[],
    comments: any

}

export interface Projects {
    id: number,
    title: string,
    tasks: Todo[]
}