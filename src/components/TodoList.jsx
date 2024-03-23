// TodoList.js


import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {

  const {todo,setTodo,todoList,setTodoList,updateTodo,addTodoList} = useContext(TodoContext);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-8">
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-md">
        <h1 className="text-2xl font-semibold mb-4">Todo List</h1>

        {/* Add Todo Form */}
          <input
            type="text"
            placeholder="Add a new todo"
            className="flex-1 border-b-2 border-gray-300 p-2 focus:outline-none"
            value={todo}
            onChange={(e)=> setTodo(e.target.value) }
          
          />
          { updateTodo?<button className="bg-blue-500 text-white p-2 rounded-md ml-2 hover:bg-blue-600 focus:outline-none" onClick={addTodoList}> Update </button>:<button className="bg-blue-500 text-white p-2 rounded-md ml-2 hover:bg-blue-600 focus:outline-none" onClick={addTodoList}> Add </button> }
          
        
        {/* Todo Items using TodoItem component */}
        <ul>
          {/* Sample Todo Items */}
             <TodoItem />
           
          {/* <TodoItem todos={todoList} /> */}
          {/* End Sample Todo Items */}
        </ul>
        {  todoList.length>0 && <button className="bg-red-500 my-4 text-white p-2 rounded-md ml-2 hover:bg-red-600 focus:outline-none" onClick={()=>{setTodoList([])}}> Remove All Todo </button>}
      </div>
    </div>
  );
};

export default TodoList;
