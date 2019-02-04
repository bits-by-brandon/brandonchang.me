import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'Styles/components/repl.scss';

class ConsoleLine extends Component {
    constructor(props){
        super(props);
    }


    render() {
        const {style, output, prompt} = this.props;
        const classes = ['line', ...style];
        return (
            <span className={classes.join(' ')}>
                {(style.includes('input')) ? prompt + ' ' : ''}
                <span dangerouslySetInnerHTML={{__html: output}}/>
            </span>
        )
    }
}

ConsoleLine.propTypes = {
    style: PropTypes.arrayOf(PropTypes.string).isRequired,
    output: PropTypes.string,
    prompt: PropTypes.string.isRequired
};

export default ConsoleLine;
