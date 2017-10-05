//React Component: Menu
//============================

import React, {Component} from 'react';
import '../../styles/components/menu.scss';

class menu extends Component {
    render() {
        return (
            <ul className="menu">
                <li className="menu__item grid"></li>
                {
                    this.props.menuItems.map((menuItem, index)=>{
                        return (
                            <li
                                className="menu__item"
                                key={index}
                            >
                                <a href={"/" + menuItem.slug} >
                                    <h4>{menuItem.label}</h4>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

menu.propTypes = {
    menuItems: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            label: React.PropTypes.string.isRequired,
            slug: React.PropTypes.string.isRequired,
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
    ]}

export default menu;