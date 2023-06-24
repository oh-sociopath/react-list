import styles from '../styles/styles.module.css';

export function Button({ showDelete }) {
    return (
        <button
            className={styles.addButton}
            disabled={ showDelete }
            type={'submit'}
        >Add</button>
    )
}
