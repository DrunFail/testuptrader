import axios from "axios"
import { Dispatch } from "redux"
import { Projects } from "../../../interfaces/interfaces"
import { ProjectAction, ProjectsActionTypes } from "./interfaces"

export const fetchProjects = () => {
    return async (dispatch: Dispatch<ProjectAction>) => {
        try {
            dispatch({ type: ProjectsActionTypes.FETCH_PROJECTS })
            const response = await axios.get('https://638efcdd4ddca317d7eb2309.mockapi.io/api/v1/projects')

            dispatch({ type: ProjectsActionTypes.FETCH_PROJECTS_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({
                type: ProjectsActionTypes.FETCH_PROJECTS_ERROR,
                payload: 'Произошла ошибка при загрузке проектов'
            })
        }
    }
}


export const addProject = (newProject: Projects) => {
    return async (dispatch: Dispatch<ProjectAction>) => {
        try {
             await axios.post('https://638efcdd4ddca317d7eb2309.mockapi.io/api/v1/projects', {
                 title: newProject.title
            })
            dispatch({ type: ProjectsActionTypes.ADD_PROJECT, payload: newProject })
        } catch (error) {
            throw new Error('ошибка добавления нового проекта')
        }
    }
}


export const deleteProject = (projectId: number) => {
    return async (dispatch: Dispatch<ProjectAction>) => {
        try {
            await axios.delete(`https://638efcdd4ddca317d7eb2309.mockapi.io/api/v1/projects/${projectId}`)
            dispatch({ type: ProjectsActionTypes.DELETE_PROJECT, payload: projectId })
        } catch (error) {
            throw new Error('ошибка удаления проекта')
        }
    }
}