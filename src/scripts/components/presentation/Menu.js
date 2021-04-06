import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import MenuItem from "../container/MenuItem";

const Menu = ({consoleState, menuItems, currentCommand}) => {
  return (
    <ul className={classnames("menu", consoleState)}>
      {menuItems.map((menuItem, index) =>
        <MenuItem key={index} input={menuItem.slug} label={menuItem.label} active={currentCommand === menuItem.label}/>
      )}
    </ul>
  );
};

Menu.propTypes = {
  consoleState: PropTypes.string,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  )
};

export default Menu;
