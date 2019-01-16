import React from 'react';

const MenuItem = ({input, label, onClick}) => (
    <li className="menu__item">
        <button onClick={() => onClick(input)}>{label}</button>
    </li>
);

export default MenuItem;