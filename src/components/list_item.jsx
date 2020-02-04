import React from 'react';

class ListItem extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.title}</li>
            </div>
        );
    }
}

export default ListItem;