import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { Zoom, Fade, Slide } from "react-awesome-reveal";

import "./style.scss";
import { Link } from "react-router-dom";

import { ThemeApp } from "../../Utils/context";
import Button from "../Button";
import { FaYoutubeSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";

const Contact = () => {
    const [theme, setTheme] = useContext(ThemeApp);

    return (
        <div
            className='row g-0 wrapper_contact d-flex justify-content-center'
            style={{
                color: theme.color,
                paddingTop: "5rem",
                position: "relative",
            }}
        >
            <div
                style={{
                    width: "unset",
                }}
            >
                <Fade direction='up' triggerOnce={true}>
                    <Button
                        nameButton='Contact Me'
                        addStyleCustom={{
                            borderRadius: "3.2rem",
                            color: "#fff",
                            minWidth: "20rem",
                            marginTop: "5rem",
                        }}
                        backgroundColorCustom='#751FFF'
                        width='10%'
                    />
                </Fade>
            </div>
            <div className='col-12'>
                <Slide triggerOnce={true} direction='up' delay={500}>
                    <div>
                        <span>Email : </span>
                        <span>Huutaitran201@gmail.com</span>
                    </div>
                </Slide>
                <Slide direction='up' triggerOnce={true} delay={1000}>
                    <div>
                        <span>Phone Number : </span>
                        <span>0376100548</span>
                    </div>
                </Slide>
            </div>
            <div className='col-12 d-flex justify-content-center'>
                <Zoom direction='up' triggerOnce={true}>
                    <Link to='https://www.youtube.com/'>
                        <FaYoutubeSquare
                            style={{
                                "--color_hover": "#FB2576",
                            }}
                        />
                    </Link>
                </Zoom>
                <Zoom direction='up' triggerOnce={true} delay={500}>
                    <Link to='https://www.tiktok.com/foryou?is_copy_url=1&is_from_webapp=v1'>
                        <SiTiktok
                            style={{
                                "--color_hover": "#000",
                            }}
                        />
                    </Link>
                </Zoom>
                <Zoom direction='up' triggerOnce={true} delay={1000}>
                    <Link to='https://github.com/Tran-Huu-Tai-12-04-23'>
                        {" "}
                        <BsGithub
                            style={{
                                "--color_hover": "#000",
                            }}
                        />
                    </Link>
                </Zoom>
                <Zoom direction='up' triggerOnce={true} delay={1500}>
                    <Link to='https://www.facebook.com/profile.php?id=100037828690010'>
                        <ImFacebook2
                            style={{
                                "--color_hover": "#332FD0",
                            }}
                        />
                    </Link>
                </Zoom>
            </div>
        </div>
    );
};

export default Contact;
