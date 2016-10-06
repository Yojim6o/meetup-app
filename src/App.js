import React, { Component } from 'react';
import './App.css';

import HeaderComponent from './components/HeaderComponent';

class App extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                { this.props.children }
            </div>
        );
    }
}

export default App;
