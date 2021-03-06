import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
    ,
    document.getElementById('root')
);
