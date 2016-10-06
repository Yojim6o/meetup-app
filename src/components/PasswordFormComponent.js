import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';

export default class PasswordFormComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSource: [],
        };
    }

    handleUpdateInput = (value) => {
        if (value.indexOf('@') < 0) {
            this.setState({
                dataSource: [
                    value + '@gmail.com',
                    value + '@yahoo.com',
                    value + '@udacity.com',
                    value + '@outlook.com',
                    value + '@inbox.com',
                    value + '@me.com',
                    value + '@aol.com'
                ]
            });
        }
    };

    render() {
        return (
            <center>
                <TextField
                    hintText="First Name"
                    floatingLabelText="Hi! What's your name?"
                />
                <br />
                <AutoComplete
                    dataSource={ this.state.dataSource }
                    onUpdateInput={ this.handleUpdateInput }
                    floatingLabelText="Email Address"
                    maxSearchResults={ 5 }
                    filter={ AutoComplete.fuzzyFilter }
                />
            </center>
        );
    }
}
