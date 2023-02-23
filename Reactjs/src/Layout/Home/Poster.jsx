import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { Slide } from "react-awesome-reveal";
import "./style.scss";
import "./responsive.scss";

import { ThemeApp } from "../../Utils/context";
import Button from "../../Components/Button";

const Poster = () => {
    const [theme, setTheme] = useContext(ThemeApp);

    return (
        <div
            className='row g-0 wrapper_poster_home'
            style={{
                color: theme.color,
                position: "relative",
                backgroundColor: theme.backgroundColor,
            }}
        >
            <div className='col-lg-6 col-md-12'>
                <Slide
                    direction='bottom'
                    style={{
                        height: "100%",
                        width: "100%%",
                    }}
                >
                    <div
                        className='hover_button'
                        style={{
                            backgroundImage: `url(https://i.ibb.co/3mcxbpf/poster1.png})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <Button
                            nameButton='Shop'
                            backgroundColorCustom='rgba(0,0,0,.5)'
                            addStyleCustom={{
                                borderRadius: "4rem",
                                color: "#fff",
                                fontWeight: "bold",
                            }}
                            width='20%'
                            height='4rem'
                        ></Button>
                    </div>
                </Slide>
            </div>
            <div
                className='col-lg-3 col-md-12'
                style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    height: "50%",
                    width: "50%",
                }}
            >
                <Slide
                    direction='right'
                    style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <div
                        className=''
                        style={{
                            backgroundImage: ` url(https://i.ibb.co/LP3zVm7/poster2.png)`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        <Button
                            nameButton='Shop'
                            backgroundColorCustom='rgba(0,0,0,.5)'
                            addStyleCustom={{
                                borderRadius: "4rem",
                                color: "#fff",

                                fontWeight: "bold",
                            }}
                            width='20%'
                            height='4rem'
                        ></Button>
                    </div>
                </Slide>
            </div>
            <div
                className='col-lg-3 col-md-12'
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    height: "50%",
                    width: "50%",
                }}
            >
                <Slide
                    delay={500}
                    direction='right'
                    style={{
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <div
                        className=''
                        style={{
                            backgroundImage: `url(https://i.ibb.co/7p6Hthm/poster3.jpg)`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            nameButton='Shop'
                            backgroundColorCustom='rgba(0,0,0,.5)'
                            addStyleCustom={{
                                borderRadius: "4rem",
                                color: "#fff",
                                fontWeight: "bold",
                            }}
                            width='20%'
                            height='4rem'
                        ></Button>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Poster;
