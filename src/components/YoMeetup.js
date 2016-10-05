import React, { Component } from 'react';
import WelcomeComponent from './WelcomeComponent';

class YoMeetup extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>YoMeetup</h2>
                </div>
                <WelcomeComponent />
            </div>
        );
    }
}

export default YoMeetup;
