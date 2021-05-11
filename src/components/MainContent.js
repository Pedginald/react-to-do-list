import React, { Component } from 'react';
import ToDoItem from './ToDoItem.js';
import toDoData from '../toDoData';

class MainContent extends Component {
	constructor() {
		super()
		this.state = {
			todos: toDoData
		}
	}

	render() {
		const toDoComponent = this.state.todos.map(item => <ToDoItem key={item.id} item={item}/>)
		return (
			<div>
				<h1>To do list</h1>
				<form className='todo-list'>
					{toDoComponent}
				</form>
			</div>
		)
	}
}

export default MainContent;