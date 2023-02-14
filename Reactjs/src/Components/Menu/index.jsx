import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeApp } from '../../Utils/context';

import './style.scss';

const Menu = ({
    display,
    addStyle,
    position,
    children,
    width = '100px',
    height = 'unset',
    top = 'unset',
    left = 'unset',
    right = 'unset',
    bottom = 'unset',
    backgroundColor = '#fff',
    classNameMenu,
}) => {
    return (
        <div
            className={`wrapper_menu_header ${classNameMenu}`}
            style={{
                ...addStyle,
                display: display ? 'block' : 'none',
                position: position,
                top: top,
                left: left,
                right: right,
                bottom: bottom,
                '--width_menu': width,
                '--height_menu': height,
                backgroundColor: backgroundColor,
            }}
        >
            {children}
        </div>
    );
};
export default Menu;
