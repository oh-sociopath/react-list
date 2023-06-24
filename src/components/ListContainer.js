import styles from '../styles/styles.module.css';
// import { useState } from 'react';

export function ListContainer({
    list,
    editButtonHandler,
    deleteButtonHandler,
    showDelete,
    handleCheckbox
}) {

    function rend(dataObject, index) {
        return (
            <label>
                <p key={index} className={styles.elemWrapper}>
                    { showDelete && <input type="checkbox" onChange={ (e) => {
                        handleCheckbox(dataObject.id)
                    } } checked={dataObject.isChecked} /> }
                    { dataObject.text }
                </p>
            </label>

        )
    }

    return (
        <div className={styles.listContainer}>
            <h1>List container</h1>
            <button
                className={ styles.editButton }
                onClick={ editButtonHandler }
            >
                Edit
            </button>
            {
                showDelete ?
                    <button onClick={ deleteButtonHandler }>Delete</button> :
                    <></>
            }
            <div className={ styles.listWrapper }>
                {
                    list.map((data, index) => {
                        return rend(data, index)
                    })
                }
            </div>
        </div>
    )
}
