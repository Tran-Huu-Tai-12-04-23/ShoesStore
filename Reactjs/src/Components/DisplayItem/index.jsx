import { useEffect, useLayoutEffect, useState, useContext, memo } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './style.scss';

import nikeMax1 from '../../assets/img/nikeMax1.png';
import { ThemeApp } from '../../Utils/context';
import ItemCart from '../../Components/ItemCart';
import Button from '../../Components/Button';

const DisplayItem = ({ data = [], width, numberProduct, dataFilter }) => {
    const [theme, setTheme] = useContext(ThemeApp);

    const renderProducts = () => {
        return data.map((item, index) => {
            return (
                <div
                    className="m-1 wrapper_cart_item_main"
                    key={uuid()}
                    style={{
                        borderRadius: 'var(--primary_border_radius)',
                        overflow: 'hidden',
                        width: width,
                        display: index < numberProduct ? 'block' : 'none',
                        height: '300px',
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
                                    }}
                                    height="30px"
                                    width="40%"
                                ></Button>
                                <Button
                                    nameButton="Add Cart"
                                    backgroundColorCustom={'#FF8B13'}
                                    addStyleCustom={{
                                        color: '#fff',
                                        borderRadius: 'var(--primary_border_radius)',
                                    }}
                                    height="30px"
                                    width="40%"
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
