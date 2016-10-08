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
            .then( browserHistory.push('/') );
    }

    render() {
        const self = this;

        return (
            <Paper
                style={ {
                    width: '100%',
                    maxWidth: 700,
                    margin: 'auto',
                    padding: 20,
                    marginTop: 20
                } }
                zDepth={ 2 }
            >
                <center>
                    <Formsy.Form
                        onValid={ () => this.enableButton(self) }
                        onInvalid={ () => this.disableButton(self) }
                        onValidSubmit={ () => this.submitForm(self) }
                        onInvalidSubmit={ () => this.notifyFormError(self) }
                    >
                        <FormsyText
                            hintText="First Name"
                            floatingLabelText="Hi! What's your name?"
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
                            ref="pw"
                            name="Password"
                            required
                        />
                        <br />
                        <FormsyText
                            floatingLabelText="Verify Password"
                            type="password"
                            name="Verify Password"
                            required
                        />
                        <br />
                        <br />
                        <RaisedButton
                            label={ 'Submit' }
                            primary={ true }
                            type="submit"
                            disabled={ !this.state.canSubmit }
                        />
                    </Formsy.Form>
                </center>
            </Paper>
        );
    }
}

export default SignupComponent;
