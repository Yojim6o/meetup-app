import React, { Component } from 'react';
import * as firebase from 'firebase';
import TodoComponent from './TodoComponent';

class FeatureComponent extends Component {
    constructor() {
        super();

        this.state = {
            events: [],
            text: ''
        }
    }

    handleFirebase() {

        this.firebaseRef = firebase.database().ref('todoApp/items');
        this.firebaseRef.limitToLast(25).on('value', function(dataSnapshot) {
            const events = [];

            dataSnapshot.forEach(function(childSnapshot) {
                const event = childSnapshot.val();
                event['.key'] = childSnapshot.key;
                events.push(event);
            });

            this.setState({
                events: events
            });

        }.bind(this));
    }

    componentDidMount() {
        this.handleFirebase();
    }

    componentWillReceiveProps() {
        this.handleFirebase();
    }

    componentWillUnmount() {
        this.firebaseRef.off();
    }

    onChange(e) {
        this.setState({text: e.target.value});
    }

    removeEvent(key) {
        const firebaseRef = firebase.database().ref('todoApp/items');
        firebaseRef.child(key).remove();
    }

    handleSubmit(e) {
        e.preventDefault();
        const { text } = this.state;

        if (text && text.trim().length !== 0) {
            this.firebaseRef.push({
                text: text
            });
            this.setState({
                text: ''
            });
        }
    }

    render() {
        const { events, text } = this.state;

        return (
            <div>
                <TodoComponent events={ events } removeEvent={ this.removeEvent } />
                <form onSubmit={ (e) => this.handleSubmit(e) }>
                    <input onChange={ (e) => this.onChange(e) } value={ text } />
                    <button>{ 'Add #' + (events.length + 1) }</button>
                </form>
            </div>
        );
    }
}

export default FeatureComponent;
