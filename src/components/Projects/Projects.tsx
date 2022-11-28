import { Link } from "react-router-dom";
import { PROJECT_DATA } from "../../data/data";
import styles from './Projects.module.scss';


export default function Projects() {
    return (
        <section className={styles.container }>
            <h1>Project list</h1>
            {PROJECT_DATA.map(elem => <Link to={`${elem.id}`} >{elem.title }</Link>) }
        </section>
        );
}