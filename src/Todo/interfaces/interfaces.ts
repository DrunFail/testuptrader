


export interface Comment {
    id: number,
    taskId: number,
    commentId: number | null,
    value: string,
    comments: Comment[]
    
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
    currentStatus: string

}

export interface TodoItem extends Todo {
    id: number,
    title: string,
    description: string,
    dateCreate: string,
    timeWork: string,
    dateEnd: string,
    priority: string,
    files: string,
    currentStatus: string,
    nestedTasks: Todo[],
    comments: Comment[]
}