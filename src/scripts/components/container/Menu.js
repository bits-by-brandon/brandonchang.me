import React from 'react';
import {connect} from 'react-redux'
import Menu from '../presentation/Menu';

const mapStateToProps = (state, ownProps) => ({
    consoleState: state.console.consoleState,
    menuItems: ownProps.menuItems,
});

export default connect(mapStateToProps)(Menu);
