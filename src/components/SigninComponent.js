import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import * as firebase from 'firebase';
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';

class SigninComponent extends Component {

    constructor() {
        super();

        this.state = {
            canSubmit: false,
            error: false
        };
    }

    submit(route) {
        browserHistory.push(`/${route}`);
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

    submitForm(data){
        console.log(data);
        const { refs } = data;
        const email = refs.email.state.value;
        const pw = refs.pw.state.value;

        firebase.auth().signInWithEmailAndPassword(email, pw).then(result => {
            browserHistory.push('/feature')

            // User signed in!
            console.log('User signed in!');
            // var uid = result.user.uid;
        }).catch(error => {
            this.setState({error: error});
        });
    }

    render() {
        const self = this;

        return (
            <center className="centered">
                <Formsy.Form
                    onValid={ () => this.enableButton(self) }
                    onInvalid={ () => this.disableButton(self) }
                    onValidSubmit={ () => this.submitForm(self) }
                    onInvalidSubmit={ () => this.notifyFormError(self) }
                >
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
                    <br />
                    <RaisedButton
                        label={ 'Submit' }
                        primary={ true }
                        type="submit"
                        disabled={ !this.state.canSubmit }
                    />
                </Formsy.Form>
            </center>
        );
    }
}

export default SigninComponent;
