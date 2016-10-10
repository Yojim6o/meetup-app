import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import * as firebase from 'firebase';
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import { browserHistory } from 'react-router';

class SignupComponent extends Component {

    constructor() {
        super();

        this.state = {
            canSubmit: false
        };
    }

    enableButton(self) {
        self.setState({
            canSubmit: true
        });
    }

    disableButton(self) {
        self.setState({
            canSubmit: false
        });
    }

    notifyFormError(data) {
        console.error('Form error:', data);
    }

    submitForm(data) {
        console.log(data);
        const { refs } = data;
        const email = refs.email.state.value;
        const pw = refs.pw.state.value;

        firebase.auth().createUserWithEmailAndPassword( email, pw )
            .then( browserHistory.push('/feature') );
    }

    render() {
        const self = this;

        return (
            <Paper
                style={ {
                    width: '90%',
                    maxWidth: 700,
                    margin: 'auto',
                    padding: 10,
                    marginTop: 20
                } }
                zDepth={ 2 }
            >
                <center>
                    <center className="welcome-message">Let's Get Started</center>
                    <Formsy.Form
                        onValid={ () => this.enableButton(self) }
                        onInvalid={ () => this.disableButton(self) }
                        onValidSubmit={ () => this.submitForm(self) }
                        onInvalidSubmit={ () => this.notifyFormError(self) }
                    >
                        <FormsyText
                            hintText="First Name"
                            floatingLabelText="What's your name?"
                            name="First Name"
                            validations="isWords"
                            validationError="Please use letters only"
                            required
                        />
                        <br />
                        <FormsyText
                            hintText="john@example.com"
                            floatingLabelText="Email Address"
                            ref="email"
                            name="Email Address"
                            validations="isEmail"
                            validationError="This is not a valid email"
                            required
                        />
                        <br />
                        <FormsyText
                            floatingLabelText="Password"
                            type="password"
                            name="password"
                            ref="pw"
                            required
                        />
                        <br />
                        <FormsyText
                            floatingLabelText="Verify Password"
                            type="password"
                            name="repeated_password"
                            validations="equalsField:password"
                            required
                        />
                        <br />
                        <br />
                        <br />
                        <RaisedButton
                            className="submit"
                            label={ 'Submit' }
                            primary={ true }
                            type="submit"
                        />
                    </Formsy.Form>
                </center>
            </Paper>
        );
    }
}

export default SignupComponent;
