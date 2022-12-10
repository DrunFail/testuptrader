import { ProjectAction, ProjectsActionTypes, ProjectState } from "./interfaces"


const initialState:ProjectState  = {
    projects: [],
    loading: false,
    error: null
    }
   

export  function projectReducer(state=initialState, action: ProjectAction):ProjectState{
    switch (action.type) {
        case ProjectsActionTypes.FETCH_PROJECTS:
            return { loading: true, error: null, projects: [] }
        case ProjectsActionTypes.FETCH_PROJECTS_SUCCESS:
            return { loading: false, error: null, projects: action.payload }
        case ProjectsActionTypes.FETCH_PROJECTS_ERROR:
            return {loading: false, error: action.payload, projects: []}
        case ProjectsActionTypes.ADD_PROJECT:
            return {
                ...state, projects: [...state.projects, action.payload
                   
                ]
            }
        case ProjectsActionTypes.DELETE_PROJECT:
            return { ...state, projects: [...state.projects.filter(project => project.id !== action.payload)] }
        case ProjectsActionTypes.UPDATE_PROJECT:
        default:
            return state
    }
}