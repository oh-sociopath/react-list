import styles from "./styles/styles.module.css"
import { InputContainer } from './components/IinputContainer';
import { ListContainer } from './components/ListContainer';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';



function App() {
    const [data, setData] = useState([])
    const [inputData, setInputData ] = useState('');
    const [showDelete, setShowDelete] = useState(false);

    function onSubmit(e) {
        e.preventDefault();
        if(inputData.trim()) {
            setData(prev => [...prev, {
                id: uuidv4(),
                text: inputData,
                isChecked: false
            }]);
            setInputData('');
        }
    }

    function handleCheckbox(id) {
        const actualData = data.map(dataObj => {
            if( dataObj.id === id ) {
                return {
                    ...dataObj,
                    isChecked: !dataObj.isChecked,
                }
            }
            return dataObj
        })

        setData(actualData)
    }

    function handleChange(event) {
        const value = event.target.value;
        setInputData(value);
    }

    function editButtonHandler() {
        setShowDelete(prev => !prev)
    }

    function deleteButtonHandler() {
        const uncheckedList = data.filter(dataObj => !dataObj.isChecked);
        setData(uncheckedList)
    }

  return (
      <div className={styles.container}>
          <InputContainer
              inputData={ inputData }
              onSubmit={ onSubmit }
              handleChange={ handleChange }
              showDelete={ showDelete }
          />
          <ListContainer
              list={ data }
              editButtonHandler={ editButtonHandler }
              deleteButtonHandler={ deleteButtonHandler }
              showDelete={ showDelete }
              handleCheckbox={ handleCheckbox }
          />
      </div>
  );
}

export default App;
