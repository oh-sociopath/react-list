import styles from '../styles/styles.module.css';

export function Input({ onHandleChange, inputData, showDelete }){
    return (
        <input
            type="text"
            className={ styles.input }
            onChange={ onHandleChange }
            value={ inputData }
            disabled={ showDelete }
        />

    )
}
