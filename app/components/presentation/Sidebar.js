//React Component: Sidebar
//============================

import React, {Component} from 'react';
import '../../styles/components/sidebar.scss';

class sidebar extends Component {
    render() {
        return (
            <ul className="sidebar">
                {this.props.textList.map((text, index)=>
                    <li key={index} >
                        <h3>{text}</h3>
                    </li>
                )}
            </ul>
        );
    }
}

sidebar.propTypes = {
    textList: React.PropTypes.arrayOf(
        React.PropTypes.string
    ).isRequired
};

sidebar.defaultProps = {
    textList: [
        'design',
        'develop',
        'hack'
    ]
};

export default sidebar;