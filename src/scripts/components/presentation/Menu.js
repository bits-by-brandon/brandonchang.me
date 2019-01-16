import PropTypes from 'prop-types';
import React, {Component} from 'react';
import 'Styles/components/menu.scss';
import MenuItem from "../container/MenuItem";

class menu extends Component {
    render() {
        return (
            <ul className="menu">
                {this.props.menuItems.map((menuItem, index) =>
                    <MenuItem key={index} input={menuItem.slug} label={menuItem.label} />
                )}
            </ul>
        );
    }
}

menu.propTypes = {
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            slug: PropTypes.string.isRequired,
        })
    )
};

menu.defaultProps = {
    menuItems: [
        {label: 'work', slug: 'work'},
        {label: 'about', slug: 'about'},
        {label: 'contact', slug: 'contact'},
    ]
};

export default menu;