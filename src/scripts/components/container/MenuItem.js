import React from 'react';
import {connect} from 'react-redux'
import MenuItem from '../presentation/MenuItem';
import {consoleInputCommand} from "../../actions/console";

const mapStateToProps = (state, ownProps) => ({
    input: ownProps.input
});

const mapDispatchToProps = dispatch => ({
    onClick: command => dispatch(consoleInputCommand(command)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
