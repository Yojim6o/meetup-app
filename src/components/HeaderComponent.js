import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
// import FlatButton from 'material-ui/FlatButton';
// import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';
// import injectTapEventPlugin from 'react-tap-event-plugin';

// class Login extends Component {
//     static muiName = 'FlatButton';

//     render() {
//         return (
//             <FlatButton {...this.props} label="Login" />
//         );
//     }
// }

// const Logged = (props) => (
//     <IconMenu
//         {...props}
//         iconButtonElement={
//             <IconButton><MoreVertIcon /></IconButton>
//         }
//         targetOrigin={{horizontal: 'right', vertical: 'top'}}
//         anchorOrigin={{horizontal: 'right', vertical: 'top'}}
//     >
//         <MenuItem primaryText="Refresh" />
//         <MenuItem primaryText="Help" />
//         <MenuItem primaryText="Sign out" />
//     </IconMenu>
// );

// Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class AppBarExampleComposition extends Component {

    state = {
        logged: true,
    };

    handleChange = (event, logged) => {
        this.setState({logged: logged});
    };

    render() {
        return (
            <div>
                <AppBar
                    className="App-header"
                    title="YoMeetup"
                    iconElementLeft={<div></div>}
                    iconElementRight={
                        <IconMenu
                            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                        >
                            <MenuItem primaryText="Refresh" />
                            <MenuItem primaryText="Send feedback" />
                            <MenuItem primaryText="Settings" />
                            <MenuItem primaryText="Help" />
                            <MenuItem primaryText="Sign out" />
                        </IconMenu>}
                />
            </div>
        );
    }
}

export default AppBarExampleComposition;
