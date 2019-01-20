import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'Styles/components/repl.scss';

class ConsoleLine extends Component {
    constructor(props){
        super(props);
    }


    render() {
        const {type, output, prompt} = this.props;
        const classes = ['line', ...type];
        return (
            <span className={classes.join(' ')}>
                {(type.includes('input')) ? prompt + ' ' : ''}
                <span dangerouslySetInnerHTML={{__html: output}}/>
            </span>
        )
    }
}

ConsoleLine.propTypes = {
    type: PropTypes.array.isRequired,
    output: PropTypes.string,
    prompt: PropTypes.string.isRequired
};

export default ConsoleLine;
