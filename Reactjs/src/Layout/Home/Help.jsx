import { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './style.scss';
import { Link } from 'react-router-dom';

import { ThemeApp } from '../../Utils/context';
import Button from '../../Components/Button';
import helpImage from '../../assets/img/Home/helpImage.png';

const Help = () => {
    const [theme, setTheme] = useContext(ThemeApp);

    return (
        <div
            className="row g-0 wrapper_help_home"
            style={{
                color: theme.color,
                marginTop: '5rem',
                position: 'relative',
            }}
        >
            <img src={helpImage}></img>
            <div>
                <div>
                    <h1
                        style={{
                            color: '#fff',
                        }}
                    >
                        Need Help? Check Out Our Help Center
                    </h1>
                    <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                    <Link to="/help-center">
                        <Button
                            nameButton="Go To Help Center?"
                            backgroundColorCustom={'#751FFF'}
                            addStyleCustom={{
                                borderRadius: '10rem',
                                color: '#fff',
                                fontWeight: 'bold',

                                fontSize: '1.8rem',
                            }}
                            height="5rem"
                            width="100%"
                        ></Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Help;
