import { Moment } from "moment"

export interface Comment {
    id: string,
    commentText: string,
    parentNodeId: string | null,
    isRootNode: boolean,
    childComments: Comment[]
    
}

export interface NestedTodo {
    id: number,
    title: string,
    description: string,
    dateCreated: Date | Moment,
    timeWork: null,
    dateEnd: Date | null | Moment,
    parentId: number | null,
    priority: 'Medium' | 'High' | 'Normal',
    files: string | null,
    currentStatus: 'Queue' | 'Development' | 'Done'
}




export interface Todo extends NestedTodo {
    nestedTodo: NestedTodo[],
    comments: Comment[]

}

export interface Projects {
    id: number,
    title: string,
    tasks: Todo[]
}