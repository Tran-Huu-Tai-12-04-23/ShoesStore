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

const PageProduct = () => {
    const [theme, setTheme] = useContext(ThemeApp);

    return (
        <div
            className=""
            style={{
                color: theme.color,
                marginTop: '5rem',
                position: 'relative',
                background: theme.secondBackgroundColor,
            }}
        ></div>
    );
};

export default PageProduct;
