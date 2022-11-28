import { Link } from 'react-router-dom';
import styles from './Header.module.scss';


export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <ul>
                   <li><Link to='/'>projects</Link></li>                
                   <li><Link to='todo'>todo</Link></li>
                </ul>
            </nav>

        </header>
    );
}