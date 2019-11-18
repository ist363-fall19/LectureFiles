import React from 'react';


class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li>{ this.props.item.text }</li>
        )
    }
}

export default TodoItem