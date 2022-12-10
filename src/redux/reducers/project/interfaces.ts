import { Projects } from "../../../interfaces/interfaces"

export interface ProjectState {
    projects: Projects[],
    loading: boolean,
    error: null | string
}




export enum ProjectsActionTypes {
    FETCH_PROJECTS = 'FETCH_PROJECTS',
    FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS',
    FETCH_PROJECTS_ERROR = 'FETCH_PROJECTS_ERROR',
    ADD_PROJECT = 'ADD_PROJECT',
    DELETE_PROJECT = 'DELETE_PROJECT',
    UPDATE_PROJECT = 'UPDATE_PROJECT'
}


interface FetchProjectsAction {
    type: ProjectsActionTypes.FETCH_PROJECTS,
}

interface FetchProjectsSuccessAction {
    type: ProjectsActionTypes.FETCH_PROJECTS_SUCCESS,
    payload: Projects[]
}

interface FetchProjectsErrorAction {
    type: ProjectsActionTypes.FETCH_PROJECTS_ERROR,
    payload: string
}

interface AddProjectAction {
    type: ProjectsActionTypes.ADD_PROJECT,
    payload: Projects
}

interface DeleteProjectAction {
    type: ProjectsActionTypes.DELETE_PROJECT,
    payload: number
}

interface UpdateProjectAction {
    type: ProjectsActionTypes.UPDATE_PROJECT,
    payload: number
}


export type ProjectAction = FetchProjectsAction | FetchProjectsSuccessAction | FetchProjectsErrorAction | AddProjectAction | DeleteProjectAction | UpdateProjectAction

