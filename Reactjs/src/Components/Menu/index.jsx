import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeApp } from '../../Utils/context';

import './style.scss';

const Menu = ({
    display = 'false',
    addStyle,
    position = 'relative',
    children,
    width = '10rem',
    height = 'unset',
    top = 'unset',
    left = 'unset',
    right = 'unset',
    bottom = 'unset',
    backgroundColor = '#fff',
    classNameMenu,
    arrow = false,
    positionArrow = {
        top: 0,
        left: 0,
    },
}) => {
    console.log(display);
    return (
        <div
            className={`wrapper_menu_header ${classNameMenu}`}
            style={{
                ...addStyle,
                position: position,
                top: top,
                left: left,
                right: right,
                bottom: bottom,
                '--width_menu': width,
                '--height_menu': height,
                backgroundColor: backgroundColor,
                '--background_color': backgroundColor,
                display: display ? 'block' : 'none',
            }}
        >
            {children}
            {arrow && (
                <div
                    className="arrow_menu"
                    style={{
                        ...positionArrow,
                    }}
                ></div>
            )}
        </div>
    );
};
export default Menu;
