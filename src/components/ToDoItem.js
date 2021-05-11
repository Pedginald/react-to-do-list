import React from 'react';

function ToDoItem(props) {
	return (
		<div className='todo-item'>
			<input type='checkbox' checked={props.item.completed} onChange={() => console.log('clicked')}></input>
			<p>{props.item.name}</p>
		</div>
	)
}

export default ToDoItem;