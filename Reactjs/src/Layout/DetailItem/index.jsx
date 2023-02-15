import { useContext, useState, memo, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import './style.scss';

import { ThemeApp } from '../../Utils/context';
import Contact from '../../Components/Contact';
import Button from '../../Components/Button';
import DisplayItem from '../../Components/DisplayItem';
import Menu from '../../Components/Menu';
import Header from '../../Components/Header';

import nikeAir2 from '../../assets/img/nikeAir2.png';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import SliderProduct from '../../Components/SliderProduct';

const DisplayProduct = ({ typeProductActive = 'All' }) => {
    const [theme, setTheme] = useContext(ThemeApp);
    const [size, setSize] = useState('41');

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Header></Header>
                    </div>
                    <div className="col-lg-12 col-xl-12">
                        <div className="container-fluid">
                            <div className="row g-2" id="slider_item">
                                <div
                                    className="col-lg-12 col-xl-12 item_detail"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        position: 'relative',
                                        color: theme.color,
                                        alignItems: 'center',
                                    }}
                                >
                                    <img
                                        src={nikeAir2}
                                        style={{ width: '40%', transform: 'rotate(20deg) translateX(-15%)', zIndex: 2 }}
                                    ></img>
                                    <div
                                        className="infor_shoes_detail"
                                        style={{
                                            transform: 'translateX(-100%)',
                                        }}
                                    >
                                        <h5
                                            style={{
                                                fontSize: '24px',
                                            }}
                                        >
                                            Nike Air
                                        </h5>
                                        <label
                                            style={{
                                                fontSize: '14px',
                                                color: '#ccc',
                                                margin: '12px 0 ',
                                            }}
                                        >
                                            Men Shoes
                                        </label>
                                        <div>
                                            <span
                                                style={{
                                                    color: '#FDA769',
                                                }}
                                            >
                                                $200
                                            </span>
                                        </div>
                                    </div>
                                    <div className="frame_shoes"></div>
                                    <div className="sub-frame_shoes"></div>
                                    <IoIosArrowBack
                                        style={{
                                            position: 'absolute',
                                            left: '16%',
                                            fontSize: '100px',
                                            cursor: 'pointer',
                                        }}
                                    />
                                    <IoIosArrowForward
                                        style={{
                                            position: 'absolute',
                                            right: '16%',
                                            fontSize: '100px',
                                            cursor: 'pointer',
                                        }}
                                    />
                                </div>
                                <div
                                    className="col-lg-12 col-xl-12"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        position: 'relative',
                                        color: theme.color,
                                        alignItems: 'center',
                                        transform: 'translateY(-100px)',
                                        zIndex: 4,
                                    }}
                                >
                                    <div className="options_color_detail_item">
                                        <div
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                                backgroundColor: 'red',
                                                display: 'inline-block',
                                                borderRadius: '4px',
                                                border: '1px solid #fff',
                                            }}
                                        ></div>
                                        <div
                                            style={{
                                                width: '40px',
                                                backgroundColor: '#000',
                                                borderRadius: '4px',
                                                display: 'inline-block',
                                                height: '40px',
                                                border: '1px solid #fff',
                                                margin: '0 12px',
                                            }}
                                        ></div>
                                        <div
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: '4px',
                                                display: 'inline-block',
                                                border: '1px solid #fff',
                                                backgroundColor: '#fff',
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-12 col-xl-12 mt-3"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        position: 'relative',
                                        color: theme.color,
                                        alignItems: 'center',
                                        transform: 'translateY(-100px)',
                                        zIndex: 4,
                                    }}
                                >
                                    <span>Select Size : </span>
                                    <select
                                        name={'size'}
                                        value={size}
                                        onChange={(e) => setSize(e.target.value)}
                                        style={{
                                            width: '100px',
                                            background: theme.secondBackgroundColor,
                                            marginLeft: 12,
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <option value={35}>35</option>
                                        <option value={36}>36</option>
                                        <option value={37}>37</option>
                                        <option value={38}>38</option>
                                        <option value={39}>39</option>
                                        <option value={40}>40</option>
                                        <option value={41}>41</option>
                                        <option value={42}>42</option>
                                        <option value={43}>43</option>
                                    </select>
                                </div>
                                <div
                                    className="col-lg-12 col-xl-12 mt-5"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        position: 'relative',
                                        color: theme.color,
                                        alignItems: 'center',
                                        transform: 'translateY(-100px)',
                                        zIndex: 4,
                                    }}
                                >
                                    <Button
                                        nameButton="Buy"
                                        backgroundColorCustom={'rgba(0,0,0,.5)'}
                                        width="150px"
                                        height="40px"
                                        addStyleCustom={{
                                            color: '#fff',
                                            borderRadius: 'var(--primary_border_radius)',
                                            margin: '0 12px',
                                        }}
                                    ></Button>
                                    <Button
                                        nameButton="Add Cart"
                                        backgroundColorCustom={'#FF8B13'}
                                        width="150px"
                                        height="40px"
                                        addStyleCustom={{
                                            color: '#fff',
                                            margin: '0 12px',
                                            borderRadius: 'var(--primary_border_radius)',
                                        }}
                                    ></Button>
                                </div>
                            </div>
                            <div className="row g-2">
                                <div
                                    className="col-lg-12 col-xl-12 mt-5"
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        position: 'relative',
                                        color: theme.color,
                                        alignItems: 'center',
                                        transform: 'translateY(-100px)',
                                        zIndex: 4,
                                    }}
                                >
                                    <img
                                        src={nikeAir2}
                                        style={{
                                            width: '350px',
                                            border: '1px solid #fff',
                                            cursor: 'pointer',
                                            height: '250px',
                                        }}
                                    ></img>
                                    <img
                                        src={nikeAir2}
                                        style={{
                                            width: '350px',
                                            border: '1px solid #fff',
                                            height: '250px',
                                            margin: '0 24px',
                                            cursor: 'pointer',
                                        }}
                                    ></img>
                                    <img
                                        src={nikeAir2}
                                        style={{
                                            width: '350px',
                                            border: '1px solid #fff',
                                            cursor: 'pointer',
                                            height: '250px',
                                        }}
                                    ></img>
                                </div>
                            </div>
                            <div
                                className="row"
                                style={{
                                    color: '#757575',
                                }}
                            >
                                <div className="col-lg-8 col-xl-8 review_detail_product">
                                    <h1
                                        style={{
                                            color: theme.color,
                                        }}
                                    >
                                        Review about item:
                                    </h1>
                                    <span>1.The Nike Air Force sneakers are a staple in the world of footwear.</span>
                                    <span>
                                        2.They offer a perfect blend of comfort, style, quality, and versatility.
                                    </span>
                                    <span>
                                        3. The iconic Air cushioning technology provides comfort for all-day wear.
                                    </span>
                                    <span>
                                        4. The classic design of the sneakers is timeless and can be paired with a
                                        variety of outfits
                                    </span>
                                </div>
                                <div className="col-lg-8 col-xl-8 review_detail_product">
                                    <h1
                                        style={{
                                            color: theme.color,
                                        }}
                                    >
                                        Nike Air Force sneakers are popular for a few reasons:
                                    </h1>

                                    <span>
                                        1.Comfort: They feature the iconic Air cushioning technology which provides
                                        comfortable support for all-day wear..
                                    </span>
                                    <span>
                                        2.Style: Air Force sneakers have a classic design that has been popular for
                                        decades and can be paired with a variety of outfits.
                                    </span>
                                    <span>
                                        3.Quality: Nike is a well-known brand known for producing high-quality footwear.
                                    </span>
                                    <span>
                                        4.Versatility: The sneakers are suitable for casual and athletic wear, making
                                        them a versatile choice for a range of activities.
                                    </span>
                                </div>
                                <div
                                    className="col-xl-8 col-lg-8"
                                    style={{
                                        color: theme.color,
                                        textAlign: 'center',
                                        lineHeight: '24px',
                                        margin: '0 auto',
                                    }}
                                >
                                    <h1>
                                        Ultimately, the choice to buy a Nike Air Force sneaker comes down to personal
                                        preference and how well it meets your needs for comfort, style, and quality.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SliderProduct />
            <Contact />
        </>
    );
};

export default memo(DisplayProduct);
