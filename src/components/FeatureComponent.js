import React, { Component } from 'react';
import firebase from 'firebase';
import TodoComponent from './TodoComponent';

class FeatureComponent extends Component {
    constructor() {
        super();

        this.state = {
            items: [],
            text: ''
        }
    }

    componentDidMount() {
        const config = {
            apiKey: "",
            authDomain: "yomeetup.firebaseapp.com",
            databaseURL: "https://yomeetup.firebaseio.com"
        };

        firebase.initializeApp(config);

        this.firebaseRef = firebase.database().ref('todoApp/items');
        this.firebaseRef.limitToLast(25).on('value', function(dataSnapshot) {
            const items = [];

            dataSnapshot.forEach(function(childSnapshot) {
                const item = childSnapshot.val();
                item['.key'] = childSnapshot.key;
                items.push(item);
            });

            this.setState({
                items: items
            });

        }.bind(this));

    }

    componentWillUnmount() {
        this.firebaseRef.off();
    }

    onChange(e) {
        this.setState({text: e.target.value});
    }

    removeItem(key) {
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
        const { items, text } = this.state;

        return (
            <div>
                <TodoComponent items={ items } removeItem={ this.removeItem } />
                <form onSubmit={ (e) => this.handleSubmit(e) }>
                    <input onChange={ (e) => this.onChange(e) } value={ text } />
                    <button>{ 'Add #' + (items.length + 1) }</button>
                </form>
            </div>
        );
    }
}

export default FeatureComponent;
