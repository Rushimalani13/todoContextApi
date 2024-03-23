// todoList.js

import React, { useContext } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { TodoContext } from '../context/TodoContext';

const todoList = () => {
  
  const {todoList, updateTodoList,deleteTodo,todoCompleted} = useContext(TodoContext);
  
  return ( 
    <>
      { 
      todoList.map((item)=>(
      <li className="flex items-center justify-between mb-2" key={item.id}>
         <div className="flex items-center">
           <input type="checkbox" className="mr-2 text-blue-500 focus:outline-none" onClick={()=>todoCompleted(item.id)} />
           <span className={`${item.complete?'line-through':''}`}>{item.title}</span>
         </div>
         <div className="flex items-center">
           <button className="text-yellow-500 hover:text-yellow-700" onClick={()=>updateTodoList(item.id)}>
             <FaEdit />
           </button>
           <button className="text-red-500 hover:text-red-700 ml-2" onClick={()=>deleteTodo(item.id)}>
             <FaTrash />
           </button>
       </div>
     </li>
    ))
    }
    </>   
  );
};

export default todoList;
