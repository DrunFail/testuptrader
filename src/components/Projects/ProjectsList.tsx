import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/newhooks";
import { addRootComment } from "../../redux/reducers/comments/actions";
import { addProject, deleteProject, fetchProjects } from "../../redux/reducers/project/actions";
import CustomButton from "../../ui/buttons/CustomButton/CustomButton";
import styles from './Projects.module.scss';


export default function ProjectsList() {
    const { projects, error, loading } = useAppSelector(state => state.project)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch<any>(fetchProjects());
    }, [])


    let newId: number = 1;

    if (projects.length) {
        newId = +projects[projects.length - 1].id + 1
    }

    const newProjects = {
        id: newId,
        title: 'project',
        tasks: []
    }

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    const handleAddProject = () => {
        dispatch<any>(addProject(newProjects))
        dispatch<any>(addRootComment())
    }

    return (
        <section className={styles.container}>
            <h1>Project list</h1>
            <CustomButton children='add project' onClick={handleAddProject} />
            {projects.map(elem =>
                <React.Fragment key={elem.id}>
                    <Link
                        to={`${elem.id}`} >
                        {elem.title}
                    </Link>
                    <CustomButton children='delete' onClick={() => dispatch<any>(deleteProject(elem.id))} />
                </React.Fragment>
            )
            }
        </section>
    );
}


