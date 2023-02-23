import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { Flip, Fade } from "react-awesome-reveal";

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
                <Fade bottom>
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
                <Flip bottom>
                    <div>
                        <span>Email : </span>
                        <span>Huutaitran201@gmail.com</span>
                    </div>
                </Flip>
                <Flip bottom>
                    <div>
                        <span>Phone Number : </span>
                        <span>0376100548</span>
                    </div>
                </Flip>
            </div>
            <div className='col-12 d-flex justify-content-center'>
                <Fade bottom>
                    <Link to='https://www.youtube.com/'>
                        <FaYoutubeSquare
                            style={{
                                "--color_hover": "#FB2576",
                            }}
                        />
                    </Link>
                </Fade>
                <Fade bottom delay={500}>
                    <Link to='https://www.tiktok.com/foryou?is_copy_url=1&is_from_webapp=v1'>
                        <SiTiktok
                            style={{
                                "--color_hover": "#000",
                            }}
                        />
                    </Link>
                </Fade>
                <Fade bottom delay={1000}>
                    <Link to='https://github.com/Tran-Huu-Tai-12-04-23'>
                        {" "}
                        <BsGithub
                            style={{
                                "--color_hover": "#000",
                            }}
                        />
                    </Link>
                </Fade>
                <Fade bottom delay={1500}>
                    <Link to='https://www.facebook.com/profile.php?id=100037828690010'>
                        <ImFacebook2
                            style={{
                                "--color_hover": "#332FD0",
                            }}
                        />
                    </Link>
                </Fade>
            </div>
        </div>
    );
};

export default Contact;
