import React from 'react';
import {connect} from 'react-redux'
import MenuItem from '../presentation/MenuItem';

const mapStateToProps = (state, ownProps) => ({
    input: ownProps.input
});

const mapDispatchToProps = dispatch => ({
    // onClick: command => dispatch(consoleTypeAndSubmitCommand(command)),
    onClick: command => console.log('Replace this in MenuItem.js'),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
