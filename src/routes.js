import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import WelcomeComponent from './components/WelcomeComponent';
import FeatureComponent from './components/FeatureComponent';
import SigninComponent from './components/SigninComponent';
import SignupComponent from './components/SignupComponent';
import SignoutComponent from './components/SignoutComponent';

import requireAuth from './utils/authenticated';

export default(
    <Route path="/" component={App} >
        <IndexRoute component={WelcomeComponent} />
        <Route path="signin" component={SigninComponent} />
        <Route path="signout" component={SignoutComponent} />
        <Route path="signup" component={SignupComponent} />
        <Route path="feature" component={FeatureComponent} onEnter={requireAuth} />
    </Route>
);
