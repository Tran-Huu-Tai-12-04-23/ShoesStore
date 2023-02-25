import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { Slide } from "react-awesome-reveal";

import "./style.scss";
import { Link } from "react-router-dom";

import { ThemeApp } from "../../Utils/context";
import Button from "../../Components/Button";
import helpImage from "../../assets/img/Home/helpImage.png";

const Help = () => {
    const [theme, setTheme] = useContext(ThemeApp);

    return (
        <div
            className='row g-0 wrapper_help_home '
            style={{
                color: theme.color,
                position: "relative",
                background: theme.secondBackgroundColor,
            }}
        >
            <img src={helpImage}></img>
            <div>
                <div>
                    <Slide fraction={0} triggerOnce={true} direction='left'>
                        <h1
                            style={{
                                color: "#fff",
                            }}
                        >
                            Need Help? Check Out Our Help Center
                        </h1>
                    </Slide>
                    <Slide fraction={0} triggerOnce={true} direction='right'>
                        <p>
                            I'm a paragraph. Click here to add your own text and
                            edit me. Let your users get to know you.
                        </p>
                    </Slide>
                    <Slide fraction={0} triggerOnce={true} direction='up'>
                        <Button
                            nameButton='Go To Help Center?'
                            backgroundColorCustom={"#751FFF"}
                            addStyleCustom={{
                                borderRadius: "10rem",
                                color: "#fff",
                                fontWeight: "bold",
                                minWidth: "25rem",
                                fontSize: "1.8rem",
                            }}
                            height='5rem'
                            width='50%'
                        ></Button>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default Help;
