import React from 'react';
import ToDoItem from './ToDoItem.js'

function MainContent() {
	return (
		<div>
			<h1>To do list</h1>
			<p></p>
			<form className='todo-list'>
				<ToDoItem />
				<ToDoItem />
				<ToDoItem />
				<ToDoItem />
			</form>
		</div>
	)
}

export default MainContent;