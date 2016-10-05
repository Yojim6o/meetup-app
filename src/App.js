import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import YoMeetup from './components/YoMeetup';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <YoMeetup />
            </MuiThemeProvider>
        );
    }
}

export default App;
