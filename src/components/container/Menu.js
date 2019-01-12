import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { Link } from "react-router-dom";
import 'Styles/components/menu.scss';

class menu extends Component {
    render() {
        return (
            <ul className="menu">
                {
                    this.props.menuItems.map((menuItem, index)=>{
                        return (
                            <li className="menu__item" key={index}>
                                <Link to={"/" + menuItem.slug} >
                                    {menuItem.label}
                                </Link>
                            </li>
                        )
                    })
                }
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
        {
            label: 'work',
            slug: 'work'
        },
        {
            label: 'about',
            slug: 'about'
        },
        {
            label: 'contact',
            slug: 'contact'
        },
    ]};

export default menu;