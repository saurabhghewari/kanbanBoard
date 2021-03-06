import React from 'react';
import { render } from 'react-dom';
import KanbanBoard from './KanbanBoard';

let cardList = [
	{
		id: 1,
		title: "Read the Book",
		description: "I should read the whole book",
		color: '#BD8D31',
		status: "in-progress",
		tasks: []
	},
	{
		id: 2,
		title: "Lets do something",
		description: "Doing Something",
		color: '#3A7E28',
		status: "todo",
		tasks: [
			{
				id: 1,
				name: "ContactList Example",
				done: true
			},
			{
				id: 2,
				name: "Kanban Example",
				done: false
			},
			{
				id: 3,
				name: "My own experiments",
				done: false
			}
		]
	}
]

render(<KanbanBoard cards={cardList} />, document.getElementById("root"));