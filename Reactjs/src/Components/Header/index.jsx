import { useContext, useState, useRef, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import './style.scss';
import headerShoes from '../../assets/img/Home/headerShoes.png';
import avatarDefault from '../../assets/img/Home/avatarDefault.png';

import { ThemeApp } from '../../Utils/context';
import SettingTheme from '../SettingTheme';

import { AiOutlineMenu, AiOutlineShoppingCart, AiOutlineSetting } from 'react-icons/ai';
import { IoIosPersonAdd } from 'react-icons/io';
import { BiLogOut, BiLogIn } from 'react-icons/bi';
import { BsBoxArrowRight } from 'react-icons/bs';
import { FcPrevious } from 'react-icons/fc';

import Button from '../Button';
import InputCount from '../InputCount';
import Menu from '../Menu';

const Header = ({ typeProductActive = '', setTypeProductActive = () => {}, nav }) => {
    const [isLogging, setIslogging] = useState(false);
    const [theme, setTheme] = useContext(ThemeApp);

    const header = useRef();
    const [showMenuSetting, setShowMenuSetting] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([
        {
            id: uuid(),
            name: 'nike air',
            linkImage: avatarDefault,
            quantity: 2,
            size: 40,
            cost: 120.00000001,
        },
        {
            id: uuid(),
            name: 'nike air',
            linkImage: avatarDefault,
            quantity: 2,
            size: 45,
            cost: 120.00000001,
        },
        {
            id: uuid(),
            name: 'nike air',
            linkImage: avatarDefault,
            quantity: 2,
            size: 45,
            cost: 120.00000001,
        },
        {
            id: uuid(),
            name: 'nike air',
            linkImage: avatarDefault,
            quantity: 2,
            size: 45,
            cost: 120.00000001,
        },
        {
            id: uuid(),
            name: 'nike air',
            linkImage: avatarDefault,
            quantity: 2,
            size: 45,
            cost: 120.00000001,
        },
        {
            id: uuid(),
            name: 'nike air',
            linkImage: avatarDefault,
            quantity: 2,
            size: 45,
            cost: 120.00000001,
        },
    ]);

    const optionsSelect = {
        all: {
            name: 'All',
            menu: '',
            id: 'id_all',
        },
        men: {
            name: 'Men',
            menu: '',
            id: 'id_men',
        },
        women: {
            name: 'Women',
            menu: '',
            id: 'id_women',
        },
        kid: {
            name: 'Kids',
            menu: '',
            id: 'id_kids',
        },
        sale: {
            name: 'Sale',
            menu: '',
            id: 'id_sale',
        },
    };

    const renderCartStore = () => {
        return cartItems.map((item) => {
            return (
                <div
                    key={uuid()}
                    className="item_cart_store"
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        '--hover_background': theme.thirdBackgroundColor,
                    }}
                >
                    <img
                        src={item.linkImage}
                        style={{
                            width: '5rem',
                            borderRadius: '50%',
                        }}
                    ></img>
                    <div
                        className="info_item_cart"
                        style={{
                            color: theme.color,
                        }}
                    >
                        <label>{item.name}</label>
                        <label
                            style={{
                                color: '#FF6E31',
                                fontSize: '1.4rem',
                            }}
                        >
                            Cost : {item.cost}
                        </label>
                        <div
                            className="wrapper_action_cart"
                            styyle={{
                                color: theme.color,
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    width: 'calc(100% - 5rem)',
                                }}
                            >
                                <span
                                    style={{
                                        marginRight: '1rem',
                                        fontSize: '1.4rem',
                                    }}
                                >
                                    Size
                                </span>
                                <InputCount
                                    value={item.size}
                                    type="select"
                                    height="3rem"
                                    width={'5rem'}
                                    addStyle={{
                                        color: theme.color,
                                        backgroundColor: theme.secondBackgroundColor,
                                        fontSize: '1.4rem',
                                    }}
                                    color={theme.color}
                                />
                            </div>
                            <InputCount
                                value={item.quantity}
                                height="3rem"
                                addStyle={{
                                    color: theme.color,
                                    fontSize: '1.4rem',
                                }}
                                type="number"
                                addStyleWrapper={{
                                    border: '1px solid #fff',
                                    borderRadius: 'var(--primary_border_radius)',
                                    marginLeft: '1.2rem',
                                }}
                            />
                        </div>
                    </div>
                </div>
            );
        });
    };

    const renderOptionsSelect = () => {
        return Object.keys(optionsSelect).map((key) => {
            return (
                <li
                    key={uuid()}
                    className="col-lg-2"
                    style={{
                        '--color': typeProductActive === optionsSelect[key].id ? theme.colorActive : theme.color,
                        minWidth: '20%',
                        textAlign: 'center',
                    }}
                    onClick={(e) => {
                        setTypeProductActive(optionsSelect[key].id);
                    }}
                >
                    {optionsSelect[key].name}
                    {optionsSelect[key].menu}
                </li>
            );
        });
    };

    useEffect(() => {
        const hiddenMenu = () => {
            setShowMenuSetting(false);
            setShowCart(false);
        };
        window.addEventListener('click', hiddenMenu);
        return () => {
            window.removeEventListener('click', hiddenMenu);
        };
    });
    return (
        <div
            className="fixed-top"
            style={{
                position: 'fixed',
                margin: 0,
                padding: 0,
            }}
        >
            <div
                ref={header}
                className="container-fluid wrapper_header_home"
                style={{
                    color: theme.color,
                    background: theme.backgroundColor,
                    borderBottom: '1px outset #fff',
                }}
            >
                <div
                    className="col-lg-4 
                        col-md-6 col-6
                    wrapper_name_shop"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: theme.backgroundColor,
                        fontSize: '2.4rem',
                        padding: 0,
                        cursor: 'pointer',
                    }}
                    onClick={(e) => {
                        setTypeProductActive('');
                    }}
                >
                    <Link to="/">
                        <span
                            style={{
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                fontSize: '2.4rem',
                                color: theme.color,
                            }}
                        >
                            fit
                        </span>
                        <span
                            style={{
                                color: theme.colorActive,
                                fontSize: '2.4rem',
                                fontFamily: 'Pacifico,cursive',
                                cursor: 'pointer',
                            }}
                        >
                            Shoes
                        </span>
                    </Link>
                </div>

                <div className="col-lg-4 d-lg-block d-md-none d-none">
                    <div className="container">
                        <ul
                            className="row options_header"
                            style={{
                                '--color_hover': theme.colorActive,
                            }}
                        >
                            {renderOptionsSelect()}
                        </ul>
                    </div>
                </div>
                <div
                    className="col-lg-4 col-md-6 col-6 wrapper_setting_user"
                    style={{
                        color: theme.color,
                        '--color_hover': theme.colorActive,
                    }}
                >
                    <SettingTheme />
                    <Link
                        to="/"
                        style={{
                            margin: 12,
                            color: theme.color,
                            position: 'relative',
                            '--color_cart': theme.colorActive,
                        }}
                    >
                        <h5 className="icon_cart_home_header">
                            <AiOutlineShoppingCart
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setShowCart(!showCart);
                                }}
                            />
                        </h5>

                        
                        <span className="number_cart_header">1</span>
                    </Link>
                    <Menu
                            display={showCart}
                            // height="30vh"
                            classNameMenu="cart_store"
                            width="40rem"
                            position="fixed"
                            top="var(--height_header)"
                            right="0"
                            addStyle={{
                                borderRadius: 'var(--primary_border_radius) 0 0 var(--primary_border_radius) ',
                                zIndex: 2,
                                padding: '1.2rem',
                                height: 'calc(100vh - var(--height_header)',
                                position: 'relative',
                                zIndex: 2,
                            }}
                            backgroundColor={theme.secondBackgroundColor}
                        >
                            <div
                                className="action_back"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    setShowCart(!showCart);
                                }}
                            >
                                <FcPrevious
                                    style={{
                                        fontSize: '3.2rem',
                                    }}
                                ></FcPrevious>
                                <span>Close</span>
                            </div>
                            <div className="wrapper_store_item_cart">{renderCartStore()}</div>
                            <div className="wrapper_footer_cart_store">
                                <div>
                                    <span>Quantity : </span>
                                    <span>2</span>
                                </div>
                                <div
                                    style={{
                                        margin: '1.2rem 0',
                                    }}
                                >
                                    <span>Total : </span>
                                    <span style={{ color: '#FF6E31' }}>12.300000</span>
                                    <span>đ</span>
                                </div>
                                <Button
                                    nameButton="Cart"
                                    icon={
                                        <BsBoxArrowRight
                                            style={{
                                                fontSize: '2.4rem',
                                            }}
                                        />
                                    }
                                    positionIcon={'right'}
                                    addStyleCustom={{
                                        borderRadius: 'var(--primary_border_radius)',
                                        color: '#fff',
                                        fontSize: '2rem',
                                        margin: '0 auto ',
                                        marginTop: '1.2rem',
                                    }}
                                    backgroundColorCustom={'#FF8B13'}
                                    to="/store"
                                ></Button>
                            </div>
                        </Menu>
                    {isLogging && (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                            }}
                        >
                            <span
                                style={{
                                    height: '3rem',
                                    width: '.2rem',
                                    backgroundColor: '#ccc',
                                    borderLeft: '1px solid #ccc',
                                    display: 'block',
                                    marginLeft: '1.2rem',
                                }}
                            ></span>
                            <img
                                className="avatar_home_header"
                                src={avatarDefault}
                                onClick={(e) => setShowMenuSetting(!showMenuSetting)}
                            ></img>
                        </div>
                    )}
                    {!isLogging && (
                        <div
                            className="d-md-none d-none d-lg-flex"
                            style={{
                                borderLeft: '1px solid #ccc',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Link to="/register">
                                <Button
                                    nameButton="Register"
                                    addStyleCustom={{
                                        color: theme.color,
                                        borderRadius: 'var(--primary_border_radius)',
                                        margin: '0 1.2rem',
                                    }}
                                    width="unset"
                                    height="4rem"
                                ></Button>
                            </Link>

                            <Link to="/login">
                                <Button
                                    backgroundColorCustom={'#03C988'}
                                    nameButton="Login"
                                    addStyleCustom={{
                                        color: '#fff',
                                        borderRadius: 'var(--primary_border_radius)',
                                    }}
                                    width="unset"
                                    height="3.8rem"
                                ></Button>
                            </Link>
                        </div>
                    )}
                    <div
                        className="d-block d-sm-block  d-lg-none"
                        style={{
                            display: !isLogging ? 'block' : 'none',
                        }}
                    >
                        <AiOutlineMenu
                            className="icon_show_menu_header"
                            style={{
                                fontSize: '4rem',
                                paddingLeft: '.4rem',
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setShowMenuSetting(!showMenuSetting);
                            }}
                        ></AiOutlineMenu>
                    </div>
                    <Menu
                        display={showMenuSetting}
                        // height="30vh"
                        width="50%"
                        position="absolute"
                        top="var(--height_header)"
                        right="2rem"
                        addStyle={{
                            borderRadius: 'var(--primary_border_radius)',
                            zIndex: 2,
                            padding: '1.2rem',
                            maxWidth: '20rem',
                        }}
                        backgroundColor={theme.secondBackgroundColor}
                    >
                        {isLogging && (
                            <>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-around',
                                        borderBottom: '1px solid #ccc',
                                    }}
                                >
                                    <img
                                        src={avatarDefault}
                                        style={{
                                            width: '5rem',
                                            borderRadius: '50%',
                                        }}
                                    ></img>
                                    <span
                                        style={{
                                            fontSize: '2.4rem',
                                        }}
                                    >
                                        User Name
                                    </span>
                                </div>
                                <Button
                                    nameButton="Settings"
                                    width="100%"
                                    backgroundColorCustom={'rgba(0,0,0,.5)'}
                                    addStyleCustom={{
                                        color: '#fff',
                                        borderRadius: 'var(--primary_border_radius)',
                                    }}
                                    icon={
                                        <AiOutlineSetting
                                            style={{
                                                fontSize: '3.2rem',
                                            }}
                                        />
                                    }
                                    to="/setting"
                                ></Button>
                                <Button
                                    nameButton="Log Out"
                                    width="100%"
                                    backgroundColorCustom={'rgba(0,0,0,.5)'}
                                    addStyleCustom={{
                                        color: '#fff',
                                        marginTop: '1.2rem',
                                        borderRadius: 'var(--primary_border_radius)',
                                    }}
                                    icon={
                                        <BiLogOut
                                            style={{
                                                fontSize: '3.2rem',
                                            }}
                                        />
                                    }
                                ></Button>
                            </>
                        )}
                        {!isLogging && (
                            <>
                                <Button
                                    nameButton="Log In"
                                    width="100%"
                                    backgroundColorCustom={'#1F8A70'}
                                    addStyleCustom={{
                                        color: '#fff',
                                        borderRadius: 'var(--primary_border_radius)',
                                    }}
                                    icon={
                                        <BiLogIn
                                            style={{
                                                fontSize: '3.2rem',
                                            }}
                                        />
                                    }
                                    to="login"
                                ></Button>
                                <Button
                                    nameButton="Register"
                                    width="100%"
                                    backgroundColorCustom={'#FF0032'}
                                    addStyleCustom={{
                                        color: '#fff',
                                        marginTop: '1.2rem',
                                        borderRadius: 'var(--primary_border_radius)',
                                    }}
                                    icon={
                                        <IoIosPersonAdd
                                            style={{
                                                fontSize: '3.2rem',
                                            }}
                                        />
                                    }
                                    to="/register"
                                ></Button>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default Header;
