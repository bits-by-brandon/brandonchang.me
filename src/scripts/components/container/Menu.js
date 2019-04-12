import React from 'react';
import {connect} from 'react-redux'
import Menu from '../presentation/Menu';

const mapStateToProps = (state, ownProps) => ({
  consoleState: state.console.consoleState,
  menuItems: ownProps.menuItems,
  currentCommand: state.console.inputHistory[state.console.inputHistory.length - 1] || null,
});

export default connect(mapStateToProps)(Menu);
