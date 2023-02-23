import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";

import "./style.scss";
import { ThemeApp } from "../../Utils/context";
import nikeAir2 from "../../assets/img/nikeAir2.png";
import Button from "../../Components/Button";

import { FaOpencart } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { SiVirustotal } from "react-icons/si";
import { IoBagCheck } from "react-icons/io5";
import ItemStore from "./ItemStore";
import StepCheckOut from "./StepCheckOut";

const Store = () => {
    const [theme, setTheme] = useContext(ThemeApp);
    const [showOrder, setShowOrder] = useState(false);
    const [cartItems, setCartItems] = useState([
        {
            id: uuid(),
            name: "nike air",
            des: "Men shoes",
            color: "white",
            linkImage: nikeAir2,
            quantity: 2,
            size: 40,
            cost: 120,
        },
        {
            id: uuid(),
            des: "Men shoes",
            name: "nike air",
            linkImage: nikeAir2,
            color: "white",
            quantity: 2,
            size: 45,
            cost: 120,
        },
        {
            id: uuid(),
            name: "nike air",
            color: "white",
            linkImage: nikeAir2,
            quantity: 2,
            size: 45,
            cost: 120,
        },
        {
            id: uuid(),
            name: "nike air",
            linkImage: nikeAir2,
            quantity: 2,
            color: "white",
            size: 45,
            cost: 120,
        },
        {
            id: uuid(),
            name: "nike air",
            color: "white",
            linkImage: nikeAir2,
            quantity: 2,
            size: 45,
            cost: 120,
        },
        {
            id: uuid(),
            name: "nike air",
            color: "white",
            linkImage: nikeAir2,
            quantity: 2,
            size: 45,
            cost: 120,
        },
    ]);

    const renderItem = () => {
        return cartItems.map((item) => {
            return (
                <div
                    className='container-fluid p-sm-custom-0 p-2 '
                    key={item.id}
                >
                    <ItemStore
                        backgroundColorCustom={theme.secondBackgroundColor}
                        data={item}
                        styleCustom={{
                            borderRadius: "var(--primary_border_radius)",
                            marginBottom: "2.4rem",
                        }}
                        colorCustom={theme.color}
                    />
                </div>
            );
        });
    };

    return (
        <>
            <div className='container-fluid  ' style={{ height: "100vh" }}>
                <div
                    className={`row d-flex justify-content-${
                        showOrder ? "between" : "center"
                    } `}
                    style={{
                        color: theme.color,
                        position: "relative",
                    }}
                >
                    <div
                        className='col-lg-12 col-xl-12 '
                        style={{
                            height: "calc(var(--height_header)/2)",
                            backgroundColor: theme.thirdBackgroundColor,
                        }}
                    ></div>

                    <div className='col-lg-8 col-xl-8 col-md-12 col-sm-12 p-0'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div
                                    className='col-lg-12 col-xl-12 m-3 '
                                    style={{
                                        fontSize: "2.4rem",
                                    }}
                                >
                                    <FaOpencart
                                        style={{
                                            fontSize: "3.2rem",
                                            marginRight: "1.2rem",
                                        }}
                                    />
                                    <span>Your shopping Cart</span>
                                </div>
                                <div
                                    className='col-lg-12 col-xl-12 pt-5 pb-5 main_content_item-store'
                                    style={{
                                        overflowY: "scroll",
                                        height: "70vh",
                                        borderRadius:
                                            "var(--primary_border_radius)",
                                        // boxShadow: '2px 1px 10px 0px #EBEBEB ',
                                    }}
                                >
                                    {renderItem()}
                                </div>
                                <div className='col-lg-12 col-xl-12 mt-4 d-flex justify-content-between flex-wrap'>
                                    <div className='w-50'>
                                        <Button
                                            nameButton='Back to shop'
                                            icon={<BsArrowLeft />}
                                            width='150px'
                                            addStyleCustom={{
                                                color: theme.color,
                                                borderRadius:
                                                    "var(--primary_border_radius)",
                                            }}
                                            to='/'
                                        />
                                    </div>
                                    <div className='w-25 w-sm-custom-50'>
                                        <div className='d-flex align-items-center'>
                                            <Button
                                                nameButton='Totals : '
                                                icon={<SiVirustotal />}
                                                width='150px'
                                                addStyleCustom={{
                                                    color: theme.color,
                                                }}
                                                disable={true}
                                            />
                                            <span
                                                style={{
                                                    color: "#FF8B13",
                                                }}
                                            >
                                                $
                                            </span>
                                            <span>200</span>
                                        </div>
                                    </div>
                                    <div
                                        className='w-25 w-sm-custom-50'
                                        style={{
                                            margin: "0 auto",
                                            display: !showOrder
                                                ? "flex"
                                                : "none",
                                        }}
                                    >
                                        <Button
                                            nameButton='Check Out'
                                            backgroundColorCustom={"#E90064"}
                                            addStyleCustom={{
                                                color: "#fff",
                                                borderRadius:
                                                    "var(--primary_border_radius)",
                                                display: !showOrder
                                                    ? "flex"
                                                    : "none",
                                                margin: "0 auto",
                                            }}
                                            icon={
                                                <IoBagCheck
                                                    style={{
                                                        fontSize: "3.2rem",
                                                    }}
                                                />
                                            }
                                            positionIcon='left'
                                            width='100%'
                                            action={(e) => setShowOrder(true)}
                                        ></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <StepCheckOut
                        setShowOrder={setShowOrder}
                        theme={theme}
                        color={theme.color}
                        display={showOrder ? "block" : "none"}
                    />
                </div>
            </div>
        </>
    );
};
export default Store;
