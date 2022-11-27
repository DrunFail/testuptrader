import { PROJECT_DATA } from "../data";



export default function Projects() {
    return (
        <div>
            {PROJECT_DATA.map(elem => <p>{elem.title }</p>) }
        </div>
        
        );
}