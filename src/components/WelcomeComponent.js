import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';

class WelcomeComponent extends Component {

    submit(route) {
        browserHistory.push(`/${route}`);
    }

    render() {
        return (
            <div className="centered">
                <center className="welcome-message">Welcome!</center>
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
};

export default WelcomeComponent;
