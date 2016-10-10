import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import * as firebase from 'firebase';

class WelcomeComponent extends Component {

    constructor() {
        super();

        this.state = {
            loggedIn: (null !== firebase.auth().currentUser)
        };
    }

    submit(route) {
        browserHistory.push(`/${route}`);
    }

    render() {
        return (
            <center className="centered content">
                <div className="welcome-message">Welcome!</div>
                <RaisedButton
                    className="button"
                    label="Events Near You"
                    primary={true}
                    onClick={ ()=> this.submit('feature') }
                />
            </center>
        );
    }
};

export default WelcomeComponent;
