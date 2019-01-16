import React from 'react';
import {connect} from 'react-redux'
import MenuItem from '../presentation/MenuItem';
import {consoleRunCommand} from "../../actions/console";

const mapStateToProps = (state, ownProps) => ({
    input: ownProps.input
});

const mapDispatchToProps = dispatch => ({
    onClick: command => dispatch(consoleRunCommand(command)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
