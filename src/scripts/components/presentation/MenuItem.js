import React from 'react';
import classnames from 'classnames';

const MenuItem = ({input, label, active, onClick}) => (
    <li className={classnames("menu__item", {active})}>
        <button onClick={() => onClick(input)}>{active ? '=> ' : <span>&nbsp;&nbsp;&nbsp;</span>}{label}</button>
    </li>
);

export default MenuItem;