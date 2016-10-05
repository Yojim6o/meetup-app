import React, { Component } from 'react';

class TodoComponent extends Component {

    renderList(self) {
        return this.props.items.map((item, index)=> {
            return (
                <li key={ index }>
                    { item.text }
                    <span
                        onClick={
                            self.props.removeItem.bind(null, item['.key'])
                        }
                        style={
                            { color: 'red', marginLeft: '10px', cursor: 'pointer' }
                        }
                    >
                        X
                    </span>
                </li>
            );
        });
    }

    render() {
        return <ul>{ this.renderList(this) }</ul>;
    }
}

export default TodoComponent;
