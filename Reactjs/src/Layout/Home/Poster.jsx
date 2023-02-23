import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import Fade from "react-reveal/Fade";
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
            <Fade bottom>
                <div
                    className='col-lg-6 col-md-12'
                    style={{
                        backgroundImage: `url(https://i.ibb.co/3mcxbpf/poster1.png})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
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
                <div
                    className='col-lg-3 col-md-12'
                    style={{
                        backgroundImage: ` url(https://i.ibb.co/LP3zVm7/poster2.png)`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        top: 0,
                        left: "50%",
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
                <div
                    className='col-lg-3 col-md-12'
                    style={{
                        backgroundImage: `url(https://i.ibb.co/7p6Hthm/poster3.jpg)`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        top: "50%",
                        left: "50%",
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
            </Fade>
        </div>
    );
};

export default Poster;
