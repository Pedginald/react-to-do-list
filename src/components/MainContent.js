import React from 'react';
import ToDoItem from './ToDoItem.js';
import toDoData from '../toDoData';

function MainContent() {
	const toDoComponent = toDoData.map(item => <ToDoItem key={item.id} item={item}/>)
	return (
		<div>
			<h1>To do list</h1>
			<p></p>
			<form className='todo-list'>
				{toDoComponent}
			</form>
		</div>
	)
}

export default MainContent;