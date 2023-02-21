import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import adminAvatar from '../../assets/img/adminAvatar.png';
import { AiOutlineHome } from 'react-icons/ai';

import { ThemeApp } from '../../Utils/context';
import SettingTheme from '../../Components/SettingTheme';
import Menu from '../../Components/Menu';
import Button from '../../Components/Button';

import { IoSettingsOutline } from 'react-icons/io5';
import { ImProfile } from 'react-icons/im';
import { IoIosClose } from 'react-icons/io';
import { MdOutlinePostAdd } from 'react-icons/md';

const HeaderAdmin = ({}) => {
    const [theme, setTheme] = useContext(ThemeApp);
    const [menu, setMenu] = useState(false);

    return (
        <div className={'wrapper_header'}>
            <div className={'info_header'}>
                <Link to="/">
                    <AiOutlineHome
                        className={'icon_back_home'}
                        style={{
                            color: theme.color,
                        }}
                    />
                </Link>
                <div className={'info_header_sub'}>
                    <h1
                        style={{
                            color: theme.color,
                        }}
                    >
                        Admin
                    </h1>
                    <h5
                        style={{
                            fontSize: '1.2rem',
                        }}
                    >
                        Management users
                    </h5>
                </div>
            </div>
            <div
                className={'wrapper_info'}
                style={{
                    position: 'relative',
                }}
            >
                <SettingTheme></SettingTheme>

                <img style={{ width: '5rem', borderRadius: '50%' }} src={adminAvatar} onClick={(e) => setMenu(!menu)} />
                <Menu
                    position="absolute"
                    addStyle={{
                        borderRadius: 'var(--primary_border_radius)',
                        padding: ' 1rem',
                        zIndex: '1000',
                    }}
                    top="calc(var(--height_header))"
                    right="1rem"
                    width="25rem"
                    backgroundColor={theme.secondBackgroundColor}
                    display={menu}
                    arrow={true}
                    positionArrow={{
                        top: '-1.6rem',
                        right: '1.4rem',
                    }}
                >
                    <Button
                        nameButton="Settings"
                        addStyleCustom={{
                            borderRadius: 'var(--primary_border_radius)',
                            '--hover_background_color': theme.thirdBackgroundColor,
                            '--hover_color': theme.color,
                            justifyContent: 'flex-start',
                            padding: ' .5rem 1rem',
                        }}
                        width="100%"
                        icon={
                            <IoSettingsOutline
                                style={{
                                    marginRight: '1rem',
                                    fontSize: '32px',
                                }}
                            />
                        }
                    ></Button>
                    <Button
                        nameButton="Profile"
                        addStyleCustom={{
                            borderRadius: 'var(--primary_border_radius)',
                            '--hover_background_color': theme.thirdBackgroundColor,
                            '--hover_color': theme.color,
                            justifyContent: 'flex-start',
                            padding: ' .5rem 1rem',
                            marginTop: '1rem',
                        }}
                        width="100%"
                        icon={
                            <ImProfile
                                style={{
                                    marginRight: '1rem',
                                    fontSize: '32px',
                                }}
                            />
                        }
                    ></Button>
                    <Button
                        nameButton="Post New Shoes"
                        addStyleCustom={{
                            borderRadius: 'var(--primary_border_radius)',
                            '--hover_background_color': theme.thirdBackgroundColor,
                            '--hover_color': theme.color,
                            justifyContent: 'flex-start',
                            padding: ' .5rem 1rem',
                            marginTop: '1rem',
                            transform: 'translateX(-.5rem)',
                        }}
                        width="100%"
                        icon={
                            <MdOutlinePostAdd
                                style={{
                                    marginRight: '0rem',
                                    fontSize: '45px',
                                }}
                            />
                        }
                        to="/post-new-item"
                    ></Button>

                    <Button
                        nameButton=""
                        addStyleCustom={{
                            borderRadius: 'var(--primary_border_radius)',
                            '--hover_background_color': '#EB455F',
                            '--hover_color': theme.color,
                            justifyContent: 'flex-start',
                            padding: ' .5rem 1rem',
                            margin: '1rem auto',
                            marginBottom: '0',
                        }}
                        width="unset"
                        icon={
                            <IoIosClose
                                style={{
                                    margin: '0 auto',
                                }}
                            />
                        }
                        action={(e) => setMenu(!menu)}
                    ></Button>
                </Menu>
            </div>
        </div>
    );
};
export default HeaderAdmin;
