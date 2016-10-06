import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import Arrow from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import { Link } from 'react-router';

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

    handleClose = () => {
        this.setState({ open: false });
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
                            <IconButton onTouchTap={ this.handleClose }>
                                <Arrow />
                            </IconButton>
                        }
                    />
                    <Link to="/" className="link">
                        <MenuItem onTouchTap={ this.handleClose }>
                            Home
                        </MenuItem>
                    </Link>
                    <Link to="/signin" className="link">
                        <MenuItem onTouchTap={ this.handleClose }>
                            Sign In
                        </MenuItem>
                    </Link>
                    <Link to="/signout" className="link">
                        <MenuItem onTouchTap={ this.handleClose }>
                            Sign Out
                        </MenuItem>
                    </Link>
                    <Link to="/signup" className="link">
                        <MenuItem onTouchTap={ this.handleClose }>
                            Sign Up
                        </MenuItem>
                    </Link>
                    <Link href="/feature" className="link">
                        <MenuItem onTouchTap={ this.handleClose }>
                            Events
                        </MenuItem>
                    </Link>
                </Drawer>
            </div>
        );
    }
}

export default HeaderComponent;
