import React, { Component } from 'react';
import firebase from 'firebase';
import TodoComponent from './TodoComponent';

class WelcomeComponent extends Component {

    constructor() {
        super();

        this.state = {
            items: [],
            text: ''
        }
    }

    componentWillMount() {
        var config = {
            apiKey: "",
            authDomain: "yomeetup.firebaseapp.com",
            databaseURL: "https://yomeetup.firebaseio.com"
        };

        firebase.initializeApp(config);

        this.firebaseRef = firebase.database().ref('todoApp/items');
        this.firebaseRef.limitToLast(25).on('value', function(dataSnapshot) {
            var items = [];

            dataSnapshot.forEach(function(childSnapshot) {
                var item = childSnapshot.val();
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
        var firebaseRef = firebase.database().ref('todoApp/items');
        firebaseRef.child(key).remove();
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.text && this.state.text.trim().length !== 0) {
            this.firebaseRef.push({
                text: this.state.text
            });
            this.setState({
                text: ''
            });
        }
    }

    render() {
        return (
            <div>
                <TodoComponent items={ this.state.items } removeItem={ this.removeItem } />
                <form onSubmit={ (e) => this.handleSubmit(e) }>
                    <input onChange={ (e) => this.onChange(e) } value={ this.state.text } />
                    <button>{ 'Add #' + (this.state.items.length + 1) }</button>
                </form>
            </div>
        );
    }
}

export default WelcomeComponent;
