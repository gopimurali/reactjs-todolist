import { useState } from "react"

export default function TodoInput(props) {

    const {handleAddTodos, todoValue, setTodoValue} = props

    return (
        <header>
            <input value={todoValue} type="text" onChange={(e)=>{
                setTodoValue(e.target.value)
            }} placeholder="Enter todo..." />
            <button onClick={()=>{
                if(todoValue.match(/(?!\s+$).+/)){
                    handleAddTodos(todoValue)
                    setTodoValue('')
                }else{
                    alert('Empty Todo cannot be added')
                }
            }}>Add</button>
        </header>
    )
}