import PropTypes from 'prop-types';
import React, {Component} from 'react';
import 'Styles/components/menu.scss';

class menu extends Component {
    render() {
        return (
            <ul className="menu">
                {this.props.menuItems.map((menuItem, index) =>
                    <li className="menu__item" key={index}>
                        <a href={"/" + menuItem.slug}>{menuItem.label}</a>
                    </li>
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