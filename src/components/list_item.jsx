import React from 'react';

class ListItem extends React.Component {
    render() {
        return <li>{this.props.title}</li>;
    }
}

export default ListItem;