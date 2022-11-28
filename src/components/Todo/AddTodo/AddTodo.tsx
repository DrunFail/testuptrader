import CustomButton from '../../../ui/buttons/CustomButton/CustomButton';
import styles from './AddTodo.module.scss';


export default function AddTodo() {


    return (
        <section className={styles.container }>
            <h1>add todo form</h1>
            <form className={styles.form}>
                
                    <label htmlFor='titleTask'>enter task name</label>
                    <input type='text' />
               
               
                
                    <label htmlFor='bodyTask'>enter description</label>
                    <textarea />
              
                
                
                <CustomButton children='create'/>

            </form>        </section>
        );
}