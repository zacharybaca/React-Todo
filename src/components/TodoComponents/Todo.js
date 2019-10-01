import React from 'react'


const Todo = (props) => {
    return (
        <div
            style={props.todo.completed ? { textDecoration: 'line-through' } : null}
            onClick={() => props.toggleTodoStatus(props.todo.id)}>
                {props.todo.task}
        </div>
    )
}

export default Todo;