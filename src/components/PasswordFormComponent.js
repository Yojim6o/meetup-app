import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class PasswordFormComponent extends Component {

    render() {
        return (
            <center>
                <TextField
                    floatingLabelText="Password"
                    type="password"
                    ref="pw"
                />
                <br />
                <TextField
                    floatingLabelText="Verify Password"
                    type="password"
                />
            </center>
        );
    }
}
