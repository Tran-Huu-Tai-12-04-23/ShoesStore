import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import Flip from "react-reveal/Flip";

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
            <Flip bottom>
                <img src={helpImage}></img>
            </Flip>
            <div>
                <div>
                    <Flip left>
                        <h1
                            style={{
                                color: "#fff",
                            }}
                        >
                            Need Help? Check Out Our Help Center
                        </h1>
                    </Flip>
                    <Flip bottom>
                        <p>
                            I'm a paragraph. Click here to add your own text and
                            edit me. Let your users get to know you.
                        </p>
                    </Flip>
                    <Flip bottom>
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
                    </Flip>
                </div>
            </div>
        </div>
    );
};

export default Help;
