import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import Arrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import { browserHistory } from 'react-router';

class HeaderComponent extends Component {

    constructor() {
        super();

        this.state = {
            open: false
        };
    }

    handleOpen = () => this.setState(
        { open: !this.state.open }
    );

    handleClose = (route) => {
        this.setState({ open: false });
        if (route !== '') {
            browserHistory.push(route);
        }
    }

    render() {
        return (
            <div>
                <AppBar
                    className="App-header"
                    title="YoMeetup"
                    iconElementLeft={ <div /> }
                    iconElementRight={
                        <IconButton
                            onTouchTap={ this.handleOpen }
                        >
                            <Menu />
                        </IconButton>
                    }
                />
                <Drawer
                    docked={ false }
                    width={ 200 }
                    openSecondary={ true }
                    open={ this.state.open }
                    onRequestChange={ (open) => this.setState({ open }) }
                >
                    <AppBar
                        iconElementLeft={
                            <IconButton
                                onTouchTap={ () => this.handleClose('') }
                            >
                                <Arrow />
                            </IconButton>
                        }
                    />
                    <MenuItem
                        onTouchTap={ () => this.handleClose('/') }
                    >
                        Home
                    </MenuItem>
                    <MenuItem
                        onTouchTap={ () => this.handleClose('signin') }
                    >
                        Sign In
                    </MenuItem>
                    <MenuItem
                        onTouchTap={ () => this.handleClose('signout') }
                    >
                        Sign Out
                    </MenuItem>
                    <MenuItem
                        onTouchTap={ () => this.handleClose('signup') }
                    >
                        Sign Up
                    </MenuItem>
                    <MenuItem
                        onTouchTap={ () => this.handleClose('feature') }
                    >
                        Events
                    </MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default HeaderComponent;
