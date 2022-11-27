import { PROJECT_DATA } from "../../data/data";

export default function Projects() {
    return (
        <div>
            {PROJECT_DATA.map(elem => <p>{elem.title }</p>) }
        </div>
        );
}