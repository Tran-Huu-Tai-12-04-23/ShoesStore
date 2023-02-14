import { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './style.scss';

import nikeMax1 from '../../assets/img/nikeMax1.png';

import avatarDefault from '../../assets/img/Home/avatarDefault.png';
import { ThemeApp } from '../../Utils/context';
import Button from '../../Components/Button';

import { AiFillStar } from 'react-icons/ai';

const About = () => {
    const [theme, setTheme] = useContext(ThemeApp);

    const userFeedback = [
        {
            avatar: avatarDefault,
            position: {
                x: 0,
                y: 0,
            },
        },
        {
            avatar: avatarDefault,
            position: {
                x: '20%',
                y: 0,
            },
        },
        {
            avatar: avatarDefault,
            position: {
                x: '40%',
                y: 0,
            },
        },
        {
            avatar: avatarDefault,
            position: {
                x: '60%',
                y: 0,
            },
        },
        {
            avatar: avatarDefault,
            position: {
                x: '80%',
                y: 0,
            },
        },
    ];

    const renderFeedback = () => {
        return userFeedback.map((user) => {
            return (
                <img
                    key={uuid()}
                    src={user.avatar}
                    style={{
                        position: 'absolute',
                        top: user.position.y,
                        left: user.position.x,
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        border: '1px solid #ccc',
                        backgroundColor: '#000',
                    }}
                ></img>
            );
        });
    };

    const renderStarFeedback = () => {
        return userFeedback.map((user) => {
            return (
                <AiFillStar
                    key={uuid()}
                    style={{
                        color: 'yellow',
                        fontSize: '18px',
                        transform: 'translate(-12px, -1px)',
                    }}
                ></AiFillStar>
            );
        });
    };
    return (
        <div className="container">
            <div
                className="row g-0 wrapper_about_home"
                style={{
                    color: theme.color,
                    marginTop: 'var(--height_header)',
                }}
            >
                <div
                    className="col-lg-6 col-md-12 col-12 detail_info_about"
                    style={{
                        color: theme.color,
                    }}
                >
                    <Button
                        nameButton="ExClusive Collections"
                        width="unset"
                        backgroundColorCustom={theme.button_primary}
                        addStyleCustom={{
                            borderRadius: 'calc(3 * var(--primary_border_radius)',
                            color: '#Fff',
                            marginTop: '20%',
                            padding: '0 12px',
                        }}
                    ></Button>
                    <h1
                        style={{
                            color: theme.color,
                        }}
                    >
                        Grab unique style of the future
                    </h1>
                    <span>Step into serious comfort with the Tree Runner</span>
                    <div style={{}}>
                        <Button
                            nameButton="Start With ?"
                            width="unset"
                            backgroundColorCustom={theme.button_primary}
                            addStyleCustom={{
                                borderRadius: ' var(--primary_border_radius)',
                                margin: 0,
                                color: '#fff',
                                marginTop: '10%',
                                marginRight: '12px',
                                padding: '0 12px',
                                minWidth: '150px',
                            }}
                        ></Button>
                        <Button
                            nameButton="Buy Now"
                            width="unset"
                            backgroundColorCustom={'rgba(0, 0, 0, 0.5)'}
                            addStyleCustom={{
                                borderRadius: ' var(--primary_border_radius)',
                                padding: 0,
                                margin: 0,
                                color: '#fff',
                                marginTop: '10%',
                                border: `1px outset  ${theme.button_primary}`,
                                minWidth: '150px',
                            }}
                        ></Button>
                    </div>
                </div>
                <div
                    className="col-lg-6 col-md-12 col-12 poster_shop"
                    style={{
                        '--background_color': theme.secondBackgroundColor,
                    }}
                >
                    <img
                        src={nikeMax1}
                        style={{
                            width: '80%',
                        }}
                    ></img>
                </div>
                <div
                    className="col-lg-2 col-md-3 col-7"
                    style={{
                        height: '140px',
                        textAlign: 'center',
                    }}
                >
                    <div
                        className="row"
                        style={{
                            position: 'relative',
                            height: '50%',
                        }}
                    >
                        <div className="col-12"> {renderFeedback()}</div>
                    </div>
                    <div
                        className="col-12"
                        style={{
                            width: 'max-content',
                            height: '20%',
                            marginTop: '12px',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <div
                            className="col-12"
                            style={{
                                padding: '0',
                            }}
                        >
                            Happy customer
                        </div>
                        <div
                            className="col-12"
                            style={{
                                marginTop: '6px',
                            }}
                        >
                            {renderStarFeedback()}
                            <span
                                style={{
                                    color: '#ccc',
                                    fontSize: '12px',
                                    height: '40px',
                                }}
                            >
                                +128.800 Review
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
