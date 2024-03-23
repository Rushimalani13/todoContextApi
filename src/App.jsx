import './App.css'
import TodoList from './components/TodoList';
import { TodoProvider } from './context/TodoContext';
function App() {
  
  return (
    <>
    <TodoProvider>
         <div className="App min-h-screen flex items-center justify-center bg-gray-100">
            <TodoList />
        </div>
    </TodoProvider>
    </>
  )
}

export default App
