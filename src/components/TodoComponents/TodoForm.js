import React from 'react';


const TodoForm = (props) => {
    return (
        <form>
          <input 
            type = "text"
            placeholder = "Task"
            name = "todo"
            value = {props.value}
            onChange = {props.changeTodo}
          />
          <button onClick={props.addTodo}>Add</button>
          <button onClick={props.clearCompleted}>Clear</button>
        </form>
    )
}

export default TodoForm;