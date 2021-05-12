import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import toDosData from '../toDosData';

class MainContent extends Component {
	constructor() {
		super()
		this.state = {
			todos: toDosData
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(id) {
		this.setState(prevState => {
			const upDatedTodos = prevState.todos.map(item => {
				if (item.id === id) {
					item.completed = !item.completed
				}
				return item;
			})
			return {
				todos: upDatedTodos
			}
		})
	}

	render() {
		const toDosComponent = this.state.todos.map(item => {
			return <ToDoItem 
				key={item.id} 
				item={item}
				handleChange={this.handleChange}
			/>
		})

		return (
			<div>
				<h1>To do list</h1>
				<form className='todo-list'>
					{toDosComponent}
				</form>
			</div>
		)
	}
}

export default MainContent;