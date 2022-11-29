export interface Comment {
    id: string,
    commentText: string,
    parentNodeId: string | null,
    isRootNode: boolean,
    childComments: Comment[]
    
}

export interface TodoItem {
    id: number,
    title: string,
    description: string,
    dateCreated: Date,
    timeWork: null,
    dateEnd: null,
    parentId: number | null,
    priority: 'Medium' | 'High' | 'Normal',
    files: string | null,
    currentStatus: 'Queue' | 'Development' | 'Done'
}




export interface Todo {
    id: number,
    title: string,
    description: string,
    dateCreated: Date,
    timeWork: null,
    dateEnd: null,
    parentId: number | null,
    priority: 'Medium' | 'High' | 'Normal',
    files: string | null,
    currentStatus: 'Queue' | 'Development' | 'Done',
    nestedTodo: TodoItem[],
    comments: Comment[]

}

export interface Projects {
    id: number,
    title: string,
    tasks: Todo[]
}