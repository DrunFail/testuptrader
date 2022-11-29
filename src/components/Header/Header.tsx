import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import styles from './Header.module.scss';


export default function Header() {
    return (
        <header className={styles.header}>
            <Search />

            <nav className={styles.navbar}>
                <ul>
                   <li><Link to='/'>projects</Link></li>                
                </ul>
            </nav>
        </header>
    );
}