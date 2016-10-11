import React, { Component } from 'react';

class TodoComponent extends Component {

    renderList(self) {
        return this.props.events.map((event, index)=> {
            return (
                <li key={ index }>
                    { event.text }
                    <span
                        onClick={
                            () => self.props.removeEvent(event['.key'])
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
