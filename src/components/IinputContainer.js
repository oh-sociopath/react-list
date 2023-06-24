import styles from '../styles/styles.module.css';
import { Input } from './Input';
import { Button } from './Button';

export function InputContainer({ inputData, onSubmit, handleChange, showDelete }) {

    return (
        <div className={ styles.inputContainer }>
            <h2>
                Add some point to list
            </h2>
            <form className={ styles.inputWraper } onSubmit={ onSubmit }>
                <Input
                    onHandleChange={ handleChange }
                    inputData={ inputData }
                    showDelete={ showDelete }
                />
                <Button
                    showDelete={ showDelete }
                />
            </form>
        </div>
    )
}
