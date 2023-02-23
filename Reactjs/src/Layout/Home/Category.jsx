import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import { Flip, Fade } from "react-awesome-reveal";
import "./style.scss";

import { ThemeApp } from "../../Utils/context";
import Button from "../../Components/Button";

const Category = () => {
    const [theme, setTheme] = useContext(ThemeApp);
    const categoryList = [
        {
            name: "Men",
            linkImage:
                "https://static.nike.com/a/images/f_auto/dpr_0.8,cs_srgb/w_1824,c_limit/20c78cca-5faf-4caf-9afe-7a2a1ccb9f05/men-s-shoes-clothing-accessories.jpg",
            linkTo: "/",
        },
        {
            name: "Women",
            linkImage:
                "https://static.nike.com/a/images/f_auto/dpr_0.8,cs_srgb/w_1824,c_limit/ad4c2b50-6a86-4f41-b719-67dbb6a14eca/women-s-shoes-clothing-accessories.jpg",
            linkTo: "/",
        },
        {
            name: "Sales",
            linkImage:
                "https://static.nike.com/a/images/f_auto/dpr_0.8,cs_srgb/w_1824,c_limit/5bc2d4fc-00ab-4a15-b383-88943b65b58d/running-shoe-finder.jpg",
            linkTo: "/",
        },
    ];

    const renderCategory = () => {
        return categoryList.map((item) => {
            return (
                <div className='item col-12 col-md-12 col-lg-4' key={uuid()}>
                    <Fade left>
                        <div>
                            <img className='' src={item.linkImage} />
                            <div className='hover'></div>
                            <Link to={item.linkTo}>
                                <Button
                                    nameButton='Get'
                                    backgroundColorCustom={"rgba(0,0,0,.5)"}
                                    addStyleCustom={{
                                        color: "#fff",
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%",
                                        borderRadius:
                                            "calc(var(--primary_border_radius) * 3)",
                                    }}
                                ></Button>
                            </Link>
                        </div>
                        <span>{item.name}</span>
                    </Fade>
                </div>
            );
        });
    };
    return (
        <div
            className='row g-0 wrapper_category_home'
            style={{
                color: theme.color,
                position: "relative",
                paddingTop: "10rem",
                paddingBottom: "10rem",
            }}
        >
            <Flip bottom>
                <h1
                    className='mb-5'
                    style={{
                        textAlign: "center",
                        color: theme.color,
                        textTransform: "uppercase",
                        fontSize: "2.4rem",
                        marginTop: "4rem",
                    }}
                >
                    Shop By Category
                </h1>
            </Flip>
            <div className='row wrapper_slider_category'>
                {renderCategory()}
            </div>
        </div>
    );
};

export default Category;
