import React, { Component } from 'react';
import { FormsyText } from 'formsy-material-ui/lib';

export default class NameEmailFormComponent extends Component {

    render() {
        return (
            <center>
                <FormsyText
                    hintText="First Name"
                    floatingLabelText="Hi! What's your name?"
                    name="First Name"
                />
                <br />
                <FormsyText
                    floatingLabelText="Email Address"
                    ref="email"
                    name="Email Address"
                />
            </center>
        );
    }
}
