import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';

class SigninComponent extends Component {

    submit(route) {
        browserHistory.push(`/${route}`);
    }

    render() {
        return (
            <center className="centered">
                <TextField
                    floatingLabelText="Email Address"
                />
                <br />
                <TextField
                    floatingLabelText="Password"
                />
                <br />
                <RaisedButton
                    className="button"
                    label="Submit"
                    onClick={ ()=> this.submit('/events') }
                />
            </center>
        );
    }
}

export default SigninComponent;
