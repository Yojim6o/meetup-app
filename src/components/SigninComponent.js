import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory, Link } from 'react-router';
import * as firebase from 'firebase';
import Formsy from 'formsy-react';
import { FormsyText } from 'formsy-material-ui/lib';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

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

    notifyFormError(data) {
        console.error('Form error:', data);
    }

    submitForm(data){
        console.log(data);
        const { refs } = data;
        const email = refs.email.state.value;
        const pw = refs.pw.state.value;

        firebase.auth().signInWithEmailAndPassword(email, pw).then(result => {
            browserHistory.push('/feature');

            // User signed in!
            console.log('User signed in!');
            // var uid = result.user.uid;
        }).catch(error => {
            debugger;
            this.setState({error: error});
        });
    }

    render() {
        const self = this;

        return (
            <center
                className="centered"
                style={{
                    width: '90%',
                    maxWidth: 700
                }}>
                <Paper
                    style={ {
                        margin: 'auto',
                        padding: 10,
                        marginTop: 20
                    } }
                    zDepth={ 2 }
                >
                    <div className="welcome-message">Please Sign In</div>
                    <Formsy.Form
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
                        { this.state.error ?
                            <div style={{ color: "red" }}>Sorry. Please try again.</div>
                            : null
                        }
                        <br />
                        <br />
                        <RaisedButton
                            className="submit"
                            label={ 'Submit' }
                            primary={ true }
                            type="submit"
                        />
                    </Formsy.Form>
                </Paper>
                <br />
                <br />
                <Link to="/signup" className="link">
                    <FlatButton label="Create Account" />
                </Link>
            </center>
        );
    }
}

export default SigninComponent;
