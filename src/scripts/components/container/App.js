import React from 'react';
import {connect} from 'react-redux'
import App from '../presentation/App';
import boot from '../../utility/boot';

const mapStateToProps = state => ({
    consoleState: state.console.consoleState,
});

const mapDispatchToProps = dispatch => ({
    boot: () => dispatch(boot()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
