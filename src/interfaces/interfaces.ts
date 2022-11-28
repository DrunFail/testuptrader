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
    dateCreate: string,
    timeWork: string,
    dateEnd: string | null,
    priority: string,
    files: string | null,
    currentStatus: 'Queue' | 'Development' | 'Done',
    nestedTodo: Todo[]

}
