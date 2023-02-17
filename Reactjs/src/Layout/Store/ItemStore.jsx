import { useContext, useState, useEffect } from 'react';

import './style.scss';
import InputCount from '../../Components/InputCount';

import { IoCloseOutline } from 'react-icons/io5';

const ItemStore = ({ data, action, backgroundColorCustom, styleCustom = {}, colorCustom }) => {
    return (
        <div className="row">
            <div
                className="col-lg-12 col-xl-12 p-2 d-flex justify-content-between align-items-center wrapper_item_store_cart"
                style={{
                    backgroundColor: backgroundColorCustom,
                    textTransform: 'capitalize  ',
                    ...styleCustom,
                    color: colorCustom,
                }}
            >
                <div className="w-75 d-flex justify-content-between align-items-center">
                    <img
                        className="image_item_store"
                        src={data.linkImage}
                        style={{
                            width: '100px',
                            height: '100px',
                            border: '1px solid #ccc',
                            borderRadius: '50%',
                        }}
                    ></img>
                    <div>
                        <h6>{data.name}</h6>
                        <label
                            style={{
                                fontSize: '14px ',
                                color: '#ccc',
                            }}
                        >
                            {data.des}
                        </label>
                    </div>
                    <div>{data.color}</div>
                    <InputCount
                        addStyle={{
                            color: colorCustom,
                        }}
                        addStyleWrapper={{
                            border: '1px solid #ccc',
                            borderRadius: 'var(--primary_border_radius)',
                        }}
                        value={data.quantity}
                    />
                    <div>
                        <span
                            style={{
                                color: '#FF8B13',
                            }}
                        >
                            $
                        </span>
                        <span>{data.cost}</span>
                    </div>
                </div>
                <div className="w-15 d-flex justify-content-center align-items-center">
                    <IoCloseOutline
                        className="icon_remove_icon"
                        style={{
                            fontSize: 32,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
export default ItemStore;
