import React from 'react';
import {connect} from 'react-redux'
import App from '../presentation/App';

const mapStateToProps = state => ({
    consoleState: state.console.consoleState,
});

export default connect(mapStateToProps)(App);
