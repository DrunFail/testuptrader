import React from "react";
import { useEffect} from "react";
import { Link } from "react-router-dom";
import { PROJECT_DATA } from "../../data/data";
import { Projects } from "../../interfaces/interfaces";
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

    console.log(projects)
    

    

    const newProjects = {
        id: newId,
        title: 'project',
        tasks: []
        }

    
    



  



    const setDataLS = () => {
        localStorage.setItem('projects', JSON.stringify(PROJECT_DATA))
    }
    let x
    let y: Projects[]

    if (localStorage['projects']) {
        x = localStorage.getItem('projects')
        if (x === null) {
            throw new Error('skfjsfk')
        }
        y = JSON.parse(x)
    }


    const clearDataLS = () => {
        localStorage.clear()
    }

   
    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    


    return (
        <section className={styles.container}>
            <h1>Project list</h1>
            <button onClick={() => {
                dispatch<any>(addProject(newProjects))
                dispatch<any>(addRootComment())
            }
            }>add project</button>
            <CustomButton refer='/' onClick={setDataLS} children='set data to LS' />
            <CustomButton refer='/' onClick={clearDataLS} children='delete data from LS' />
            {
                projects.map(elem =>
                    <React.Fragment key={elem.id}>
                        <Link
                            
                            to={`${elem.id}`} >
                            {elem.title}
                        </Link>
                        <button onClick={() => dispatch<any>(deleteProject(elem.id)) }>delete</button>
                    </React.Fragment>
                )
            }
        </section>
    );
}


