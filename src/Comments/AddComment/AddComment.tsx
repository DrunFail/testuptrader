import styles from './AddComment.module.scss';

export default function AddComment() {
    return (
        <section className={styles.container }>
            <form>
                <h1>add Commment</h1>
                <label>enter comment</label>
                <textarea />
                <button>send</button>
            </form>
            </section>
        
        );
}