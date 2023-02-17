import { useContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import './style.scss';
import { ThemeApp } from '../../Utils/context';
import nikeAir2 from '../../assets/img/nikeAir2.png';
import Button from '../../Components/Button';

import { FaOpencart } from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';
import { SiVirustotal } from 'react-icons/si';
import { MdPayments } from 'react-icons/md';
import ItemStore from './ItemStore';
import InputText from '../../Components/InputText';
import StepCheckOut from './StepCheckOut';

const Store = () => {
    const [theme, setTheme] = useContext(ThemeApp);
    const [cartItems, setCartItems] = useState([
        {
            id: uuid(),
            name: 'nike air',
            des: 'Men shoes',
            color: 'white',
            linkImage: nikeAir2,
            quantity: 2,
            size: 40,
            cost: 120,
        },
        {
            id: uuid(),
            des: 'Men shoes',
            name: 'nike air',
            linkImage: nikeAir2,
            color: 'white',
            quantity: 2,
            size: 45,
            cost: 120,
        },
        {
            id: uuid(),
            name: 'nike air',
            color: 'white',
            linkImage: nikeAir2,
            quantity: 2,
            size: 45,
            cost: 120,
        },
        {
            id: uuid(),
            name: 'nike air',
            linkImage: nikeAir2,
            quantity: 2,
            color: 'white',
            size: 45,
            cost: 120,
        },
        {
            id: uuid(),
            name: 'nike air',
            color: 'white',
            linkImage: nikeAir2,
            quantity: 2,
            size: 45,
            cost: 120,
        },
        {
            id: uuid(),
            name: 'nike air',
            color: 'white',
            linkImage: nikeAir2,
            quantity: 2,
            size: 45,
            cost: 120,
        },
    ]);

    const renderItem = () => {
        return cartItems.map((item) => {
            return (
                <div className="container-fluid " key={item.id}>
                    <ItemStore
                        backgroundColorCustom={theme.secondBackgroundColor}
                        data={item}
                        styleCustom={{
                            borderRadius: 'var(--primary_border_radius)',
                            marginBottom: '24px',
                        }}
                        colorCustom={theme.color}
                    />
                </div>
            );
        });
    };

    return (
        <>
            <div className="container-fluid  " style={{ overflow: 'hidden', height: '100vh' }}>
                <div
                    className="row d-flex justify-content-between "
                    style={{
                        color: theme.color,
                    }}
                >
                    <div
                        className="col-lg-12 col-xl-12"
                        style={{
                            height: 'calc(var(--height_header)/2)',
                            backgroundColor: theme.thirdBackgroundColor,
                        }}
                    ></div>

                    <div className="col-lg-8 col-xl-8">
                        <div className="container-fluid">
                            <div className="row">
                                <div
                                    className="col-lg-12 col-xl-12 m-3 "
                                    style={{
                                        fontSize: '24px',
                                    }}
                                >
                                    <FaOpencart
                                        style={{
                                            fontSize: '32px',
                                            marginRight: '12px',
                                        }}
                                    />
                                    <span>Your shopping Cart</span>
                                </div>
                                <div
                                    className="col-lg-12 col-xl-12 pt-5 pb-5 main_content_item-store"
                                    style={{
                                        overflowY: 'scroll',
                                        height: '70vh',
                                        borderRadius: 'var(--primary_border_radius)',
                                        // boxShadow: '2px 1px 10px 0px #EBEBEB ',
                                    }}
                                >
                                    {renderItem()}
                                </div>
                                <div className="col-lg-12 col-xl-12 mt-4 d-flex justify-content-between">
                                    <Button
                                        nameButton="Back to shop"
                                        icon={<BsArrowLeft />}
                                        width="150px"
                                        addStyleCustom={{
                                            color: theme.color,
                                            borderRadius: 'var(--primary_border_radius)',
                                        }}
                                    />
                                    <div className="d-flex align-items-center">
                                        <Button
                                            nameButton="Totals : "
                                            icon={<SiVirustotal />}
                                            width="150px"
                                            addStyleCustom={{
                                                color: theme.color,
                                            }}
                                            disable={true}
                                        />
                                        <span
                                            style={{
                                                color: '#FF8B13',
                                            }}
                                        >
                                            $
                                        </span>
                                        <span>200</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <StepCheckOut theme={theme} color={theme.color} />
                </div>
            </div>
        </>
    );
};
export default Store;
