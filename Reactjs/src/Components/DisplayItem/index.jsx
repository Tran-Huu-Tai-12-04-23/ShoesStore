import { useEffect, useLayoutEffect, useState, useContext, memo } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './style.scss';

import nikeMax1 from '../../assets/img/nikeMax1.png';
import { ThemeApp } from '../../Utils/context';
import ItemCart from '../../Components/ItemCart';
import Button from '../../Components/Button';

const DisplayItem = ({ data = [], classNameCustom, numberProduct, dataFilter }) => {
    const [theme, setTheme] = useContext(ThemeApp);

    const renderProducts = () => {
        return data.map((item, index) => {
            return (
                <div
                    key={uuid()}
                    className={`wrapper_cart_item_main ${classNameCustom} pt-1 pb-1`}
                    style={{
                        borderRadius: 'var(--primary_border_radius)',
                        display: index < numberProduct ? 'block' : 'none',
                    }}
                >
                    <ItemCart
                        backgroundColorCustom={theme.secondBackgroundColor}
                        backgroundColorCustomImg={theme.thirdBackgroundColor}
                        addStyle={{
                            borderRadius: 'var(--primary_border_radius)',
                        }}
                        img={nikeMax1}
                        width={'100%'}
                        nameItem={item.name}
                        des={item.des}
                        height={'100%'}
                        cost={item.cost}
                        button={
                            <div
                                className="mt-4 pb-2"
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <Button
                                    nameButton="Buy"
                                    backgroundColorCustom={theme.thirdBackgroundColor}
                                    addStyleCustom={{
                                        color: theme.color,
                                        borderRadius: 'var(--primary_border_radius)',
                                        fontSize: '14px',
                                    }}
                                    height="30px"
                                    width="45%"
                                ></Button>
                                <Button
                                    nameButton="Add Cart"
                                    backgroundColorCustom={'#FF8B13'}
                                    addStyleCustom={{
                                        color: '#fff',
                                        borderRadius: 'var(--primary_border_radius)',
                                        fontSize: '14px',
                                    }}
                                    height="30px"
                                    width="45%"
                                ></Button>
                            </div>
                        }
                    ></ItemCart>
                </div>
            );
        });
    };

    return <>{renderProducts()}</>;
};
export default memo(DisplayItem);
