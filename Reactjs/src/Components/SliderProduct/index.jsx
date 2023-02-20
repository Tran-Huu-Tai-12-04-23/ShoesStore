import { useContext, useState, useRef, useEffect, memo } from 'react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import './style.scss';

import { ThemeApp } from '../../Utils/context';
import Button from '../Button';
import nikeAir2 from '../../assets/img/nikeAir2.png';
import nikeMax1 from '../../assets/img/nikeMax1.png';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const SliderProduct = () => {
    const [theme, setTheme] = useContext(ThemeApp);
    const listItems = useRef();
    const [itemActive, setItemActive] = useState(0);
    const [product, setProduct] = useState([
        {
            id: uuid(),
            name: 'Nike air max ',
            price: '1.800.000đ',
            linkImage: nikeMax1,
        },
        {
            id: uuid(),
            name: 'Nike air max ',
            price: '1.800.000đ',
            linkImage: nikeAir2,
        },
        {
            id: uuid(),
            name: 'Nike air max ',
            price: '1.800.000đ',
            linkImage: nikeMax1,
        },
        {
            id: uuid(),
            name: 'Nike air max ',
            price: '1.800.000đ',
            linkImage: nikeAir2,
        },
        {
            id: uuid(),
            name: 'Nike air max ',
            price: '1.800.000đ',
            linkImage:
                'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/38d2ffca-b7ed-45d2-b3de-e3f9595048f5/air-max-90-g-golf-shoe-qlD3wL.png',
        },
        {
            id: uuid(),
            name: 'Nike air max ',
            price: '1.800.000đ',
            linkImage:
                'https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/ce4516f3-0b21-4125-814f-3fcc0a39f887/air-max-90-g-golf-shoe-qlD3wL.png',
        },
        {
            id: uuid(),
            name: 'Nike air max ',
            price: '1.800.000đ',
            linkImage:
                'https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/38d2ffca-b7ed-45d2-b3de-e3f9595048f5/air-max-90-g-golf-shoe-qlD3wL.png',
        },
    ]);

    const handleShowNextItem = (flag) => {
        if (listItems && listItems.current) {
            const items = listItems.current.querySelectorAll('.item');
            listItems.current.appendChild(items[0]);
        }
    };
    const handleShowPrevItem = (flag) => {
        if (listItems && listItems.current) {
            const items = listItems.current.querySelectorAll('.item');
            listItems.current.prepend(items[items.length - 1]);
        }
    };
    const renderProduct = () => {
        return product.map((item, index) => {
            return (
                <div
                    className={`item_slide_product col-2 col-md-3 col-lg-6 col-xl-6 flex-wrap justify-content-evenly ${
                        itemActive === index ? 'active_flex' : ''
                    }   ${itemActive - 1 === index ? 'hidden' : ''}`}
                    key={uuid()}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        right: `50%`,

                        background: 'rgba(255, 255, 255,.1)',
                        backdropFilter: 'blur(20px)',
                    }}
                >
                    <div className="tag_sale">Sale</div>
                    <div className="w-50 d-flex justify-content-center">
                        <img src={item.linkImage}></img>
                    </div>
                    <div
                        className="info_item w-50 "
                        style={{
                            margin: '0 auto',
                        }}
                    >
                        <h1>{item.name}</h1>
                        <span>{item.price}</span>
                    </div>
                    <Button
                        nameButton="Buy Now"
                        backgroundColorCustom={'rgba(0,0,0,.5)'}
                        addStyleCustom={{
                            '--hover_background_color': '#FF0032',
                            color: '#fff',
                            borderRadius: 'var(--primary_border_radius)',
                        }}
                        width="200px"
                        to="/store"
                    ></Button>
                </div>
            );
        });
    };

    return (
        <div
            className="container-fluid px-4 wrapper_category_home"
            style={{
                color: theme.color,
                marginTop: '5rem',
                position: 'relative',
                backgroundColor: theme.secondBackgroundColor,
                height: '48rem',
                overflow: 'hidden',
            }}
        >
            <IoIosArrowBack className="icon_back" onClick={(e) => handleShowNextItem()} />
            <IoIosArrowForward className="icon_next" onClick={(e) => handleShowPrevItem()} />
            <div
                ref={listItems}
                className="row wrapper_slider_show_product"
                style={{
                    position: 'relative',
                    width: '100vw',
                    height: '100%',
                }}
            >
                {renderProduct()}
            </div>
        </div>
    );
};

export default memo(SliderProduct);
