import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PROJECT_DATA } from "../../data/data";
import { Projects } from "../../interfaces/interfaces";
import CustomButton from "../../ui/buttons/CustomButton/CustomButton";
import styles from './Projects.module.scss';


export default function ProjectsList() {
    const [dataProjects, setDataProjects] = useState<Projects[]>([])

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
    


    useEffect(() => {
        setDataProjects(y)
    },[])

    return (
        <section className={styles.container}>
            <h1>Project list</h1>
            <CustomButton onClick={setDataLS} children='set data to LS' />
            {dataProjects && 
                
            
                dataProjects.map(elem =>
                    <Link
                        key={elem.id}
                        to={`${elem.id}`} >
                        {elem.title}
                    </Link>)
            }
        </section>
    );
}