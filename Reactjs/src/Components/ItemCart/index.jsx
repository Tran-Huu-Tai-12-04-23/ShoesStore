import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const ItemCart = ({
    backgroundColorCustom = '#fff',
    backgroundColorCustomImg = '#fff',
    width,
    height = 'unset',
    addStyle = {},
    img,
    nameItem,
    des,
    cost,
    button,
    children,
}) => {
    return (
        <div
            className="wrapper_item_show_cart container-fluid pt-2 "
            style={{
                ...addStyle,
                width: width,
                height: height,
                backgroundColor: backgroundColorCustom,
            }}
        >
            <div
                className="col-lg-12 mb-2"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: backgroundColorCustomImg,
                    borderRadius: 'var(--primary_border_radius)',
                    height: '50%',
                }}
            >
                <img src={img}></img>
            </div>
            <div className="item_show_cart_content col-lg-12">
                <h1>{nameItem}</h1>
                <span
                    style={{
                        fontSize: '1.2rem',
                        color: '#ccc',
                        margin: '.2rem 0 1.2rem 0',
                        display: 'block',
                    }}
                >
                    {des}
                </span>
            </div>
            <div className="col-lg-12">
                <span
                    style={{
                        color: '#FDA769',
                        fontSize: '1.2rem',
                    }}
                >
                    {cost}
                </span>
                <span>$</span>
            </div>
            <div className="col-lg-12 pt-2">{button}</div>
            {children}
        </div>
    );
};
export default ItemCart;
