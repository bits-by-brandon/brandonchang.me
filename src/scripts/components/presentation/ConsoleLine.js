import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'Styles/components/repl.scss';

class ConsoleLine extends Component {
    constructor(props){
        super(props);
    }


    render() {
        const {type, payload, prompt} = this.props;
        const classes = ['line', ...type];
        return (
            <span className={classes.join(' ')}>{(type.includes('input')) ? prompt + ' ' : ''}{payload}</span>
        )
    }
}

ConsoleLine.propTypes = {
    type: PropTypes.array,
    payload: PropTypes.string,
};

export default ConsoleLine;
