import React, { useState } from 'react';
import { addTodo, deleteTodo, removeTodo } from '../../action/index';
import { useDispatch, useSelector } from "react-redux";
import './todo.css'

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const list = useSelector(state => state.todoReducers.list);
    const dispatch = useDispatch();
    
    return (
        <>
            <div class="inputDiv">
                <input 
                    type="text" 
                    placeholder="✍️ Add Item..." 
                    className="form-control"
                    value={inputData} 
                    onChange={(event) => setInputData(event.target.value)}
                />
                {/* <span class="addButton">
                    <a onClick={() => dispatch(addTodo(inputData), setInputData(''))}/>
                </span> */}

                <a className="btn1" onClick={() => dispatch(addTodo(inputData), setInputData(''))}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    ADD
                </a>
                
            </div>
            

            <div className="dataCard">
                {
                    list.map((elem) => {
                        return (
                        <sapn className="dataCardBody" key={elem.id}>
                            <span className="elemData">{elem.data}</span>
                            {/* <input type="button" value="delete" onClick={() => dispatch(deleteTodo(elem.id))}/> */}
                            <a className="btn2" onClick={() => dispatch(deleteTodo(elem.id))}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                DELETE
                            </a>
                        </sapn>
                        )
                    })
                    
                }
            </div>
            
            <div className="removeButton">
                {list.length !== 0 && 
                // <input type="button" value="Remove all" onClick={() => dispatch(removeTodo())}/>
                <a className="btn3" onClick={() => dispatch(removeTodo())}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Remove all
                </a>
                }
            </div>
            
        </>
    )
}

export default Todo
