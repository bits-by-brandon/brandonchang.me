//React Component: Sidebar
//============================

import PropTypes from 'prop-types';
import React, {Component} from 'react';
import 'Styles/components/sidebar.scss';

class sidebar extends Component {
    render() {
        return (
            <ul className="sidebar">
                {this.props.listItems.map((text, index)=>
                    <li key={index} >
                        <h3>{text}</h3>
                    </li>
                )}
            </ul>
        );
    }
}

sidebar.propTypes = {
    listItems: PropTypes.arrayOf(
        PropTypes.string
    ).isRequired
};

export default sidebar;