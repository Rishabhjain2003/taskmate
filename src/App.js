import './App.css';
import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {

  const [InputList, setInputList] = useState('go to school')
  const [Item , setItem] = useState([])

  const  itemEvent = (event) =>{
    setInputList(event.target.value)
  }

  const listofitems = () =>{
    setItem((oldItems)=> {
      return[...oldItems, InputList]
    })
    setInputList('')
  }

  const deletetodo = (id) =>{
    console.log('delete');
    setItem((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div className="App">
      <div className='container'>
        <div className='box'>
          <div className='header'>
            <input type='search' onChange={itemEvent} value={InputList} placeholder='Enter A Task...'></input>
            <button type='btn' onClick={listofitems}> ADD TASK </button>
          </div>

          <div className='tasks'>
            {Item.map((itemval, index) => {
              return(
                <TodoList
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deletetodo}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
