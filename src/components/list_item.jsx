import React from 'react';

class ListItem extends React.Component {
    render() {
        return <li className="list-group-item">{this.props.title}</li>;
    }
}

export default ListItem;