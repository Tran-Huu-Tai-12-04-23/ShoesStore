import { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './style.scss';
import { Link } from 'react-router-dom';

import { ThemeApp } from '../../Utils/context';
import Button from '../Button';
import { FaYoutubeSquare } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import { BsGithub } from 'react-icons/bs';
import { SiTiktok } from 'react-icons/si';

const Contact = () => {
    const [theme, setTheme] = useContext(ThemeApp);

    return (
        <div
            className="row g-0 wrapper_contact"
            style={{
                color: theme.color,
                marginTop: '5rem',
                position: 'relative',
                background: theme.secondBackgroundColor,
            }}
        >
            <Button
                nameButton="Contact Me"
                addStyleCustom={{
                    borderRadius: '3.2rem',
                    color: '#fff',
                    minWidth: '20rem',
                    marginTop: '5rem',
                }}
                backgroundColorCustom="#751FFF"
                width="10%"
            />
            <div className="col-12">
                <div>
                    <span>Email : </span>
                    <span>Huutaitran201@gmail.com</span>
                </div>
                <div>
                    <span>Phone Number : </span>
                    <span>0376100548</span>
                </div>
            </div>
            <div>
                <Link to="https://www.youtube.com/">
                    <FaYoutubeSquare
                        style={{
                            '--color_hover': '#FB2576',
                        }}
                    />
                </Link>
                <Link to="https://www.tiktok.com/foryou?is_copy_url=1&is_from_webapp=v1">
                    <SiTiktok
                        style={{
                            '--color_hover': '#000',
                        }}
                    />
                </Link>
                <Link to="https://github.com/Tran-Huu-Tai-12-04-23">
                    {' '}
                    <BsGithub
                        style={{
                            '--color_hover': '#000',
                        }}
                    />
                </Link>
                <Link to="https://www.facebook.com/profile.php?id=100037828690010">
                    <ImFacebook2
                        style={{
                            '--color_hover': '#332FD0',
                        }}
                    />
                </Link>
            </div>
        </div>
    );
};

export default Contact;
