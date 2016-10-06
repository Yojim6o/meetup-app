import React, { Component } from 'react';
import {
    Step,
    Stepper,
    StepLabel
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';

import NameEmailFormComponent from './NameEmailFormComponent';

class SignupComponent extends Component {

    state = {
        finished: false,
        stepIndex: 0,
    };

    handleNext = () => {
        const { stepIndex } = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <NameEmailFormComponent />
                );
            case 1:
                return (
                    'What is an ad group anyways?'
                );
            case 2:
                return (
                    'This is the bit I really care about!'
                );
            default:
                return ('You\'re a long way from home sonny jim!');
        }
    }

    render() {
        const { finished, stepIndex } = this.state;
        const contentStyle = { margin: '0 16px' };

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
                <Stepper activeStep={ stepIndex }>
                    <Step>
                        <StepLabel>Name/Email</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Password</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Optional</StepLabel>
                    </Step>
                </Stepper>
                <div style={contentStyle}>
                    {finished ? (
                        <p>
                            <a
                                href="#"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.setState({ stepIndex: 0, finished: false });
                                }}
                            >
                                Click here
                            </a> to reset the example.
                        </p>
                    ) : (
                        <div>
                            { this.getStepContent(stepIndex) }
                            <center style={ {marginTop: 40} }>
                                <FlatButton
                                    label="Back"
                                    disabled={ stepIndex === 0 }
                                    onTouchTap={ this.handlePrev }
                                    style={ {marginRight: 12} }
                                />
                                <RaisedButton
                                    label={ stepIndex === 2 ? 'Finish' : 'Next' }
                                    primary={ true }
                                    onTouchTap={ this.handleNext }
                                />
                            </center>
                        </div>
                    )}
                </div>
            </Paper>
        );
    }
}

export default SignupComponent;
