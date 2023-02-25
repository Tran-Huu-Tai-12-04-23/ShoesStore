import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import "./style.scss";
import { Slide } from "react-awesome-reveal";
import LottiePlayer from "@lottiefiles/lottie-player";

import avatarDefault from "../../assets/img/Home/avatarDefault.png";
import { ThemeApp } from "../../Utils/context";
import Button from "../../Components/Button";

import { AiFillStar } from "react-icons/ai";

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
                x: "20%",
                y: 0,
            },
        },
        {
            avatar: avatarDefault,
            position: {
                x: "40%",
                y: 0,
            },
        },
        {
            avatar: avatarDefault,
            position: {
                x: "60%",
                y: 0,
            },
        },
        {
            avatar: avatarDefault,
            position: {
                x: "80%",
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
                        position: "absolute",
                        top: user.position.y,
                        left: user.position.x,
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        border: "1px solid #ccc",
                        backgroundColor: "#000",
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
                        color: "yellow",
                        fontSize: "1.8rem",
                        transform: "translate(-, -1px)",
                    }}
                ></AiFillStar>
            );
        });
    };
    return (
        <div
            className='container '
            style={{
                height: "unset",
                minHeight: "50rem",
            }}
        >
            <div
                className='row g-0 wrapper_about_home '
                style={{
                    color: theme.color,
                    backgroundColor: theme.backgroundColor,
                    marginTop: "var(--height_header)",
                    height: "unset",
                }}
            >
                <div
                    className='col-lg-6 col-md-12 col-12 detail_info_about '
                    style={{
                        color: theme.color,
                    }}
                >
                    <Slide triggerOnce={true} direction='left'>
                        <Button
                            nameButton='ExClusive Collections'
                            width='unset'
                            backgroundColorCustom={theme.button_primary}
                            addStyleCustom={{
                                borderRadius:
                                    "calc(3 * var(--primary_border_radius)",
                                color: "#Fff",
                                marginTop: "20%",
                                padding: "0 ",
                                padding: "0 1.2rem ",
                            }}
                        ></Button>
                        <h1
                            style={{
                                color: theme.color,
                            }}
                        >
                            Grab unique style of the future
                        </h1>
                        <span>
                            Step into serious comfort with the Tree Runner
                        </span>
                        <div
                            className='w-50  d-flex justify-content-between w-md-100 w-sm-100 '
                            style={{}}
                        >
                            <Button
                                nameButton='Start With ?'
                                width='unset'
                                backgroundColorCustom={theme.button_primary}
                                addStyleCustom={{
                                    borderRadius:
                                        " var(--primary_border_radius)",
                                    margin: 0,
                                    color: "#fff",
                                    marginTop: "10%",
                                    marginRight: "",
                                    padding: "0 ",
                                    minWidth: "15rem",
                                }}
                            ></Button>
                            <Button
                                nameButton='Buy Now'
                                width='unset'
                                backgroundColorCustom={"rgba(0, 0, 0, 0.5)"}
                                addStyleCustom={{
                                    borderRadius:
                                        " var(--primary_border_radius)",
                                    padding: 0,
                                    margin: 0,
                                    color: "#fff",
                                    marginTop: "10%",
                                    border: `1px outset  ${theme.button_primary}`,
                                    minWidth: "15rem",
                                }}
                            ></Button>
                        </div>
                    </Slide>
                </div>
                <div
                    className='col-lg-6 col-md-12 col-12 poster_shop'
                    style={{
                        "--background_color": theme.secondBackgroundColor,
                    }}
                >
                    <Slide triggerOnce={true} direction='right'>
                        <lottie-player
                            autoplay
                            loop
                            mode='normal'
                            src='https://assets2.lottiefiles.com/packages/lf20_t1pL2Z4MIA.json'
                        ></lottie-player>
                    </Slide>
                </div>
                <div
                    className='col-lg-2 col-md-3 col-7'
                    style={{
                        height: "14rem",
                        textAlign: "center",
                    }}
                >
                    <Slide triggerOnce={true} direction='up'>
                        <div className='container'>
                            <div
                                className='row'
                                style={{
                                    position: "relative",
                                    height: "50%",
                                    minHeight: "6rem",
                                }}
                            >
                                <div className='col-12'>{renderFeedback()}</div>
                            </div>
                            <div
                                className='col-12'
                                style={{
                                    width: "max-content",
                                    height: "20%",
                                    marginTop: "",
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <div
                                    className='col-12'
                                    style={{
                                        padding: "0",
                                    }}
                                >
                                    Happy customer
                                </div>
                                <div
                                    className='col-12'
                                    style={{
                                        marginTop: ".6rem",
                                    }}
                                >
                                    {renderStarFeedback()}
                                    <span
                                        style={{
                                            color: "#ccc",
                                            fontSize: "",
                                            height: "4rem",
                                        }}
                                    >
                                        +128.800 Review
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default About;
