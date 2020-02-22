import React from 'react';
import ListItem from './list_item';

function ToDoList(props) {
    const toDoElements = props.list.map((item) => 
        <ListItem key={item._id} title={item.title} />
    );

    return (
        <ol>
            {toDoElements}
        </ol>
    );
}

export default ToDoList;