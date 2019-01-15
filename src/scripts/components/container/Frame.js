import React from 'react';
import {connect} from 'react-redux';
import Frame from '../presentation/Frame';

const mapStateToProps = state => ({
    consoleVisible: state.console.consoleVisible
});

export default connect(mapStateToProps)(Frame);
