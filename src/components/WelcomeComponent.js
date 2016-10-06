import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const RaisedButtonExampleSimple = () => (
    <div className="centered">
        <RaisedButton className="button" label="Sign In" />
        <RaisedButton className="button" label="Sign Up" primary={true} />
    </div>
);

export default RaisedButtonExampleSimple;
