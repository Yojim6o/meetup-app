import * as firebase from 'firebase';
import * as config from '../../firebase.config.js';

firebase.initializeApp(config);

function requireAuth(nextState, replace) {

    debugger;
    if(null === firebase.auth().currentUser) {
        replace({
          pathname: '/signin',
          state: { nextPathname: nextState.location.pathname }
        })
    }
}

module.exports = requireAuth;
