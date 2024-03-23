import {  createContext, useEffect } from "react";
import React,{ useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const TodoContext = createContext("");

const getLocalItem = ()=>{

    const storelocaltodo= localStorage.getItem("todolistlocal");
    return storelocaltodo?JSON.parse(storelocaltodo):[];
}

const TodoProvider = ({children})=>{
    
        const [todo, setTodo] = useState("");

        const [todoList, setTodoList] = useState(getLocalItem());

        const [updateTodo, setUpdateTodo] = useState(false);

        const [updateId, setUpdateId]=useState("");

        
        useEffect(() =>{

            localStorage.setItem('todolistlocal',JSON.stringify(todoList));  

        },[todoList]);

        const addTodoList = () =>
        {
            if(updateTodo)
            {
                const findTodo = todoList.find((current)=>current.id===updateId);
                findTodo.title=todo;
                // console.log(findTodo);
                // console.log(updateId);
                setUpdateTodo(false);
                setTodo("");
            }
            else
            {
                if(todo != "")
                {
                const newTodoObject={id:uuidv4(),title:todo,complete:false}
                setTodoList([...todoList, newTodoObject]);     
                setTodo("");
                }
            }
        }

        const deleteTodo = (id)=>{
                if(window.confirm("You want to delete this todo?"))
                {
                setTodoList(todoList.filter((current)=>current.id!==id));
                
                }
            }
        
            const updateTodoList = (id)=>{
              const findTodo = todoList.find((current)=>current.id===id);
              setTodo(findTodo.title);
              setUpdateTodo(true);
              setUpdateId(findTodo.id);
              // console.log(findTodo.title);
            }
          
            const todoCompleted = (id)=>{
              const findTodo = todoList.find((current)=>current.id===id);
              findTodo.complete =!findTodo.complete;
              setTodoList([...todoList]);
            }

    const allprops={todo,setTodo,todoList,setTodoList,updateTodo,setUpdateTodo,updateId,setUpdateId,addTodoList,deleteTodo,updateTodoList,todoCompleted};
    return (
        <TodoContext.Provider value={allprops}>
            {children}
        </TodoContext.Provider>
    )
}


export {TodoContext,TodoProvider};