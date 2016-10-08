import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import * as firebase from 'firebase';

class SignoutComponent extends Component {

    submit(route) {
        browserHistory.push(`/${route}`);
    }

    componentDidMount() {
        firebase.auth().signOut();
    }

    render() {
        return (
            <div className="centered content">
                <center className="welcome-message">Have A Great Day!</center>
                <RaisedButton
                    className="button"
                    label="Sign In"
                    onClick={ ()=> this.submit('signin') }
                />
                <RaisedButton
                    className="button"
                    label="Sign Up"
                    primary={true}
                    onClick={ ()=> this.submit('signup') }
                />
            </div>
        );
    }
}

export default SignoutComponent;
