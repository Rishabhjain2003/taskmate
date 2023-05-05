import React from "react";
import {FaTrash} from 'react-icons/fa';


const TodoList = (props) => {
    return(
        <div className='task'>
            <p style={{width:'80%'}}>{props.text}</p>
            <div className='icons'>
                <FaTrash className='icon ' onClick={() =>{
                props.onSelect(props.id)
            }}/>
            </div>
        </div>
    )
}

export default TodoList;