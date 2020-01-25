import React from 'react';
import ListItem from './list_item';

const toDos = [
    {
        id: '01',
        title: 'Wash Car'
    },
    {
        id: '02',
        title: 'Practice React'
    },
    {
        id: '03',
        title: 'Watch NBA'
    },
    {
        id: '04',
        title: 'Clean House'
    }
]

function ToDoList(props) {
    const toDoElements = toDos.map((item) => 
        <ListItem key={item.id} title={item.title} />
    );

    return (
        <ol>
            {toDoElements}
        </ol>
    );
}

export default ToDoList;