import { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './style.scss';
import './responsive.scss';

import { ThemeApp } from '../../Utils/context';
import Button from '../../Components/Button';

import poster1 from '../../assets/img/Home/poster1.png';
import poster2 from '../../assets/img/Home/poster2.png';
import poster3 from '../../assets/img/Home/poster3.jpg';

const Poster = () => {
    const [theme, setTheme] = useContext(ThemeApp);

    return (
        <div
            className="row g-0 wrapper_poster_home"
            style={{
                color: theme.color,
                marginTop: '50px',
                position: 'relative',
            }}
        >
            <div
                className="col-lg-6 col-md-12"
                style={{
                    backgroundImage: `url(${poster1})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Button
                    nameButton="Shop"
                    backgroundColorCustom="rgba(0,0,0,.5)"
                    addStyleCustom={{
                        borderRadius: '40px',
                        color: '#fff',
                        fontWeight: 'bold',
                    }}
                    width="20%"
                    height="40px"
                ></Button>
            </div>
            <div
                className="col-lg-3 col-md-12"
                style={{
                    backgroundImage: ` url(${poster2})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    top: 0,
                    left: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Button
                    nameButton="Shop"
                    backgroundColorCustom="rgba(0,0,0,.5)"
                    addStyleCustom={{
                        borderRadius: '40px',
                        color: '#fff',

                        fontWeight: 'bold',
                    }}
                    width="20%"
                    height="40px"
                ></Button>
            </div>
            <div
                className="col-lg-3 col-md-12"
                style={{
                    backgroundImage: `url(${poster3})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    top: '50%',
                    left: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Button
                    nameButton="Shop"
                    backgroundColorCustom="rgba(0,0,0,.5)"
                    addStyleCustom={{
                        borderRadius: '40px',
                        color: '#fff',
                        fontWeight: 'bold',
                    }}
                    width="20%"
                    height="40px"
                ></Button>
            </div>
        </div>
    );
};

export default Poster;
