export interface Comment {
    id: string,
    commentText: string,
    parentNodeId: string | null,
    isRootNode: boolean,
    childComments: Comment[]
    
}


export interface Todo {
    id: number,
    title: string,
    description: string,
    dateCreated: Date,
    timeWork: null,
    dateEnd: null,
    parentId: number | null,
    priority: 'medium' | 'high' | 'normal',
    files: string | null,
    currentStatus: 'Queue' | 'Development' | 'Done',
    nestedTodo: Todo[]

}
