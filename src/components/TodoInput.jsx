import { useState } from "react"

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props

    const addTodos = () => {
        handleAddTodos(todoValue)
        setTodoValue('')
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          addTodos()
        }
      };

    return (
        <header>
            <input 
                value={todoValue} 
                onKeyDown={handleKeyDown}
                onChange={(e) => {
                    setTodoValue(e.target.value)
            }} placeholder='Enter a todo...'/>
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}> Add </button>
        </header>
    )
}