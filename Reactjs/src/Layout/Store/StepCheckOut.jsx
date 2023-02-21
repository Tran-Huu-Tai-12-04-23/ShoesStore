import { useContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import './style.scss';
import Button from '../../Components/Button';
import InputText from '../../Components/InputText';
import FormAddress from './FormAddress';

import { MdPayments } from 'react-icons/md';
import { SlArrowRight } from 'react-icons/sl';
import { RiCloseFill } from 'react-icons/ri';
import { FaCcVisa } from 'react-icons/fa';
import { AiOutlineCreditCard } from 'react-icons/ai';
import { BsArrowRightShort, BsArrowLeftShort, BsCashCoin, BsCreditCard, BsCheck2Circle } from 'react-icons/bs';

const StepCheckOut = ({ theme, display = 'block', setShowOrder }) => {
    const [indexStep, setIndexStep] = useState(0);
    const [typePayment, setTypePayment] = useState('');
    const [typeCard, setTypeCard] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [wards, setWards] = useState('');
    const [detail, setDetail] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expireDay, setExpireDay] = useState('');
    const [CVV, setCVV] = useState('');

    const steps = [
        <>
            <div
                className="h-75 d-flex flex-column align-items-center "
                style={{
                    color: theme.color,
                }}
            >
                <Button
                    nameButton="Back"
                    icon={<BsArrowLeftShort />}
                    width="30%"
                    addStyleCustom={{
                        borderRadius: 'var(--primary_border_radius)',
                        color: theme.color,
                        justifySelf: 'flex-start',
                        marginRight: 'calc(80% )',
                        '--hover_background_color': 'unset',
                        '--color_hover': '#E90064',
                        display: typePayment ? 'block' : 'none',
                    }}
                    action={(e) => setIndexStep((prev) => prev - 1)}
                />
                <h1 className="mb-5 mt-2" style={{ fontSize: 20, color: '#FF8B13' }}>
                    Fill Address
                </h1>
                <FormAddress
                    theme={theme}
                    city={city}
                    district={district}
                    wards={wards}
                    detail={detail}
                    name={name}
                    number={number}
                    setCity={setCity}
                    setDistrict={setDistrict}
                    setWards={setWards}
                    setDetail={setDetail}
                    setName={setName}
                    setNumber={setNumber}
                />
            </div>
            <Button
                nameButton="Next"
                backgroundColorCustom={'#FF8B13'}
                addStyleCustom={{
                    color: theme.color,
                    justifyContent: 'center',
                    borderRadius: 'var(--primary_border_radius)',
                    marginTop: '10vh',
                }}
                width="100%"
                icon={
                    <BsArrowRightShort
                        style={{
                            fontSize: '2.4rem',
                            marginRight: '1.2rem',
                        }}
                    />
                }
                positionIcon="right"
                action={(e) => setIndexStep((prev) => prev + 1)}
            />
        </>,
        <>
            <div
                className="h-75 d-flex flex-column align-items-center"
                style={{
                    color: theme.color,
                }}
            >
                <Button
                    nameButton="Back"
                    icon={<BsArrowLeftShort />}
                    width="30%"
                    addStyleCustom={{
                        borderRadius: 'var(--primary_border_radius)',
                        color: theme.color,
                        justifySelf: 'flex-start',
                        marginRight: 'calc(80% )',
                        '--hover_background_color': 'unset',
                        '--color_hover': '#E90064',
                    }}
                    action={(e) => setIndexStep((prev) => prev - 1)}
                />
                <h1 className="mb-5 mt-2 text-center" style={{ fontSize: 20, color: '#FF8B13', lineHeight: '2.4rem' }}>
                    Check Information and apply discount code
                </h1>
                <div
                    className="d-flex justify-content-start"
                    style={{
                        height: '10%',
                        width: '80%',
                        fontSize: '1.4rem',
                    }}
                >
                    <span
                        className="d-block"
                        style={{
                            color: '#F2CD5C',
                            marginRight: '10%',
                            minWidth: '40%',
                        }}
                    >
                        Name:
                    </span>
                    <span>Huu tai</span>
                </div>
                <div
                    className="d-flex justify-content-start"
                    style={{
                        height: '10%',
                        fontSize: '1.4rem',
                        width: '80%',
                    }}
                >
                    <span
                        className="d-block"
                        style={{
                            marginRight: '10%',
                            color: '#F2CD5C',
                            minWidth: '40%',
                        }}
                    >
                        Phone Number:
                    </span>
                    <span>0376100548</span>
                </div>
                <div
                    className="d-flex justify-content-start"
                    style={{
                        height: '10%',
                        fontSize: '1.4rem',
                        width: '80%',
                    }}
                >
                    <span
                        className="d-block"
                        style={{
                            color: '#F2CD5C',
                            marginRight: '10%',
                            minWidth: '40%',
                        }}
                    >
                        Email:
                    </span>
                    <span>Huutaitran201@gmail.com</span>
                </div>
                <div
                    className="d-flex justify-content-start mb-5"
                    style={{
                        height: '10%',
                        fontSize: '1.4rem',
                        width: '80%',
                    }}
                >
                    <span
                        className="d-block"
                        style={{
                            color: '#F2CD5C',
                            minWidth: '40%',
                            marginRight: '10%',
                        }}
                    >
                        Delivery to:
                    </span>
                    <span>HCM city</span>
                </div>
                <InputText
                    value=""
                    labelInput={'Discount Code'}
                    styleCustomWrapper={{
                        color: theme.color,
                        borderRadius: 'var(--primary_border_radius)',
                        borderBottom: '.1rem solid',
                        borderImageSlice: 1,
                        borderWidth: '.1rem',
                        borderImageSource: ' linear-gradient(to left, #743ad5, #d53a9d)',
                        marginBottom: '10%',
                    }}
                    styleCustomInput={{ color: theme.color }}
                    color={theme.color}
                    width="80%"
                />
            </div>
            <Button
                nameButton="Next"
                backgroundColorCustom={'#FF8B13'}
                addStyleCustom={{
                    color: theme.color,
                    justifyContent: 'center',
                    borderRadius: 'var(--primary_border_radius)',
                    marginTop: '10vh',
                }}
                width="100%"
                icon={
                    <BsArrowRightShort
                        style={{
                            fontSize: '2.4rem',
                            marginRight: '1.2rem',
                        }}
                    />
                }
                positionIcon="right"
                action={(e) => setIndexStep((prev) => prev + 1)}
            />
        </>,
        <>
            <div
                className="h-75 d-flex flex-column align-items-center"
                style={{
                    color: theme.color,
                }}
            >
                <Button
                    nameButton="Back"
                    icon={<BsArrowLeftShort />}
                    width="30%"
                    addStyleCustom={{
                        borderRadius: 'var(--primary_border_radius)',
                        color: theme.color,
                        justifySelf: 'flex-start',
                        marginRight: 'calc(80% )',
                        '--hover_background_color': 'unset',
                        '--color_hover': '#E90064',
                        display: typePayment ? 'block' : 'none',
                    }}
                    action={(e) => setIndexStep((prev) => prev - 1)}
                />
                <h1 className="mb-5 mt-2" style={{ fontSize: 20, color: '#FF8B13' }}>
                    Choose Payment
                </h1>
                <div
                    className="d-flex justify-content-start "
                    style={{
                        height: '10%',
                        fontSize: '1.4rem',
                        width: '80%',
                        borderBottom: '.2rem solid',
                        borderImageSlice: 1,
                        borderWidth: '.2rem',
                        borderImageSource: ' linear-gradient(to left, #743ad5, #d53a9d)',
                    }}
                >
                    <span
                        className="d-block"
                        style={{
                            color: '#F2CD5C',
                            minWidth: '40%',
                            marginRight: '10%',
                        }}
                    >
                        Total:
                    </span>
                    <span
                        style={{
                            color: '#F2921D',
                        }}
                    >
                        $
                    </span>
                    <span>200</span>
                </div>
                <div className="d-flex justify-content-around mt-5 w-100">
                    <Button
                        nameButton={'Cash'}
                        backgroundColorCustom={typePayment === 'cash' ? '#1F8A70' : '#AD7BE9'}
                        addStyleCustom={{
                            color: theme.color,
                            borderRadius: 'var(--primary_border_radius)',
                            minWidth: '15rem',
                            marginLeft: '1.2rem',
                            maxWidth: '50%',
                            border: typePayment === 'cash' ? '.1rem solid #ccc' : 'unset',
                        }}
                        icon={
                            <BsCashCoin
                                style={{
                                    fontSize: '2.4rem',
                                    marginRight: '1.2rem',
                                }}
                            />
                        }
                        width="unset"
                        action={(e) => setTypePayment('cash')}
                    />
                    <Button
                        nameButton="Credit Card"
                        backgroundColorCustom={typePayment === 'credit' ? '#1F8A70' : '#E90064'}
                        addStyleCustom={{
                            color: theme.color,
                            minWidth: '15rem',
                            marginRight: '1.2rem',
                            maxWidth: '50%',
                            borderRadius: 'var(--primary_border_radius)',
                            border: typePayment === 'credit' ? '.1rem solid #ccc' : 'unset',
                        }}
                        icon={
                            <BsCreditCard
                                style={{
                                    fontSize: '2.4rem',
                                    marginRight: '1.2rem',
                                }}
                            />
                        }
                        width="unset"
                        action={(e) => setTypePayment('credit')}
                    />
                </div>
            </div>
            <Button
                nameButton={typePayment ? 'Next' : 'Back'}
                backgroundColorCustom={'#FF8B13'}
                addStyleCustom={{
                    color: theme.color,
                    justifyContent: 'center',
                    borderRadius: 'var(--primary_border_radius)',
                    marginTop: '10vh',
                }}
                width="100%"
                icon={
                    typePayment ? (
                        <BsArrowRightShort
                            style={{
                                fontSize: '2.4rem',
                                marginRight: '1.2rem',
                            }}
                        />
                    ) : (
                        <BsArrowLeftShort
                            style={{
                                fontSize: '2.4rem',
                                marginRight: '1.2rem',
                            }}
                        />
                    )
                }
                positionIcon={typePayment ? 'right' : 'left'}
                action={(e) => {
                    if (typePayment) {
                        if (typePayment === 'cash') {
                            setIndexStep((prev) => prev + 2);
                        } else {
                            setIndexStep((prev) => prev + 1);
                        }
                    } else {
                        setIndexStep((prev) => prev - 1);
                    }
                }}
            />
        </>,
        <>
            <div
                className="h-75 d-flex flex-column align-items-center"
                style={{
                    color: theme.color,
                }}
            >
                <Button
                    nameButton="Back"
                    icon={<BsArrowLeftShort />}
                    width="30%"
                    addStyleCustom={{
                        borderRadius: 'var(--primary_border_radius)',
                        color: theme.color,
                        justifySelf: 'flex-start',
                        marginRight: 'calc(80% )',
                        '--hover_background_color': 'unset',
                        '--color_hover': '#E90064',
                        display: typePayment ? 'block' : 'none',
                    }}
                    action={(e) => setIndexStep((prev) => prev - 1)}
                />
                <h1 className="mb-5 mt-2" style={{ fontSize: 20, color: '#FF8B13' }}>
                    Card Detail
                </h1>
                <div className="w-100 ">
                    <h5
                        className="mb-4 "
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Select Card tType
                    </h5>
                    <div className="option d-flex justify-content-evenly align-items-center mb-5">
                        <Button
                            addStyleCustom={{
                                borderRadius: 'var(--primary_border_radius)',
                            }}
                            icon={
                                <FaCcVisa
                                    style={{
                                        fontSize: '2.4rem',
                                        color: typeCard === 'visa' ? '#1F8A70' : theme.color,
                                    }}
                                ></FaCcVisa>
                            }
                            action={(e) => setTypeCard('visa')}
                            nameButton=""
                        ></Button>
                        <Button
                            addStyleCustom={{
                                borderRadius: 'var(--primary_border_radius)',
                            }}
                            icon={
                                <AiOutlineCreditCard
                                    style={{
                                        fontSize: '2.4rem',
                                        color: typeCard === 'normal' ? '#1F8A70' : theme.color,
                                    }}
                                />
                            }
                            action={(e) => setTypeCard('normal')}
                            nameButton=""
                        ></Button>
                    </div>
                    <InputText
                        value={cardNumber}
                        styleCustomWrapper={{
                            color: theme.color,
                            borderRadius: 'var(--primary_border_radius)',
                            borderBottom: '.2rem solid',
                            borderImageSlice: 1,
                            borderWidth: '.2rem',
                            borderImageSource: ' linear-gradient(to left, #743ad5, #d53a9d)',
                            marginBottom: '10%',
                            marginTop: '2rem',
                        }}
                        styleCustomInput={{ color: theme.color }}
                        color={theme.color}
                        width="100%"
                        height="5rem"
                        labelInput={'Card Number'}
                        onChange={(e) => setCardNumber(e.target.value)}
                    ></InputText>
                    <div className="d-flex justify-content-between align-items-center ">
                        <InputText
                            value={expireDay}
                            styleCustomWrapper={{
                                color: theme.color,
                                borderRadius: 'var(--primary_border_radius)',
                                borderBottom: '.2rem solid',
                                borderImageSlice: 1,
                                borderWidth: '.2rem',
                                borderImageSource: ' linear-gradient(to left, #743ad5, #d53a9d)',
                                marginBottom: '10%',
                                marginTop: '2rem',
                            }}
                            styleCustomInput={{ color: theme.color }}
                            color={theme.color}
                            width="60%"
                            height="5rem"
                            labelInput={'Expire Day '}
                            onChange={(e) => setExpireDay(e.target.value)}
                        ></InputText>
                        <InputText
                            value={CVV}
                            styleCustomWrapper={{
                                color: theme.color,
                                borderRadius: 'var(--primary_border_radius)',
                                borderBottom: '.2rem solid',
                                borderImageSlice: 1,
                                borderWidth: '.2rem',
                                borderImageSource: ' linear-gradient(to left, #743ad5, #d53a9d)',
                                marginBottom: '10%',
                                marginTop: '2rem',
                            }}
                            styleCustomInput={{ color: theme.color }}
                            color={theme.color}
                            width="25%"
                            height="5rem"
                            labelInput={'CVV'}
                            onChange={(e) => setCVV(e.target.value)}
                        ></InputText>
                    </div>
                </div>
            </div>
            <Button
                nameButton={'Next'}
                backgroundColorCustom={'#FF8B13'}
                addStyleCustom={{
                    color: theme.color,
                    justifyContent: 'center',
                    borderRadius: 'var(--primary_border_radius)',
                    marginTop: '10vh',
                }}
                width="100%"
                icon={
                    <BsArrowRightShort
                        style={{
                            fontSize: '2.4rem',
                            marginRight: '1.2rem',
                        }}
                    />
                }
                positionIcon={'right'}
                action={(e) => {
                    setIndexStep((prev) => prev + 1);
                }}
            />
        </>,
        <>
            <div
                className="h-75 d-flex flex-column align-items-center"
                style={{
                    color: theme.color,
                }}
            >
                <Button
                    nameButton="Back"
                    icon={<BsArrowLeftShort />}
                    width="30%"
                    addStyleCustom={{
                        borderRadius: 'var(--primary_border_radius)',
                        color: theme.color,
                        justifySelf: 'flex-start',
                        marginRight: 'calc(80% )',
                        '--hover_background_color': 'unset',
                        '--color_hover': '#E90064',
                    }}
                    action={(e) => setIndexStep((prev) => prev - 1)}
                />
                <h1 className="mb-5 mt-2" style={{ fontSize: 20, color: '#FF8B13' }}>
                    Check Information
                </h1>
                <table>
                    <tbody>
                        <tr>
                            <td className="w-25">Name:</td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td className="w-25">Your phone:</td>
                            <td>{number}</td>
                        </tr>
                        <tr>
                            <td className="w-25">City:</td>
                            <td>{city}</td>
                        </tr>
                        <tr>
                            <td className="w-25">District:</td>
                            <td>{district}</td>
                        </tr>
                        <tr>
                            <td className="w-25">Ward:</td>
                            <td>{wards}</td>
                        </tr>
                        <tr>
                            <td className="w-25">Detail:</td>
                            <td>{detail}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Button
                nameButton="Check Out"
                backgroundColorCustom={'#FF8B13'}
                addStyleCustom={{
                    color: theme.color,
                    justifyContent: 'center',
                    borderRadius: 'var(--primary_border_radius)',
                    marginTop: '10vh',
                }}
                width="100%"
                icon={
                    <MdPayments
                        style={{
                            fontSize: '2.4rem',
                            marginRight: '1.2rem',
                        }}
                    />
                }
                action={(e) => {
                    setIndexStep((prev) => prev + 1);
                }}
            />
        </>,
        <div
            className="w-100 d-flex justify-content-center align-items-center "
            style={{
                height: '100%',
            }}
        >
            <BsCheck2Circle
                style={{
                    color: '#1F8A70',
                    fontSize: '4rem',
                }}
            />
            <h1
                style={{
                    color: theme.color,
                    fontSize: '2.4rem',
                    marginLeft: '1.2rem',
                }}
            >
                Order Successfully!
            </h1>
        </div>,
    ];

    useEffect(() => {
        setTimeout(() => {
            if (indexStep === 5) {
                setIndexStep(0);
                setShowOrder(false);
            }
        }, 3000);
    }, [indexStep]);
    const renderStep = () => {
        return steps[indexStep];
    };

    const renderNofiStep = () => {
        return Array.from(Array(5).keys()).map((number) => {
            return (
                <div
                    key={uuid()}
                    style={{
                        backgroundColor: indexStep === number ? theme.backgroundColor : theme.color,
                    }}
                    onClick={(e) => setIndexStep(number)}
                ></div>
            );
        });
    };

    return (
        <div
            className="col-lg-3 col-xl-3 position-md-custom-absolute"
            style={{
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: theme.thirdBackgroundColor,
                height: '100vh',
                position: 'relative',
                display: display,
                transition: 'all 0.5s ease-in-out',
            }}
        >
            {indexStep < 5 && (
                <div
                    className="wrapper_manager_step_check-out d-lg-flex d-xl-flex d-md-none"
                    style={{
                        backgroundColor: theme.thirdBackgroundColor,
                    }}
                >
                    {renderNofiStep()}
                </div>
            )}
            <div
                className="icon_close d-md-none d-lg-block d-xl-block"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '-3rem',
                    backgroundColor: theme.thirdBackgroundColor,
                    borderRadius: '.8rem 0 0 .8rem',
                    cursor: 'pointer',
                }}
                onClick={(e) => setShowOrder(false)}
            >
                <Button
                    width="3rem"
                    height="100%"
                    addStyleCustom={{
                        padding: '2.4rem 0',
                        color: theme.color,
                        borderRadius: '.8rem 0 0 .8rem',
                        minWidth: '2rem',
                    }}
                    icon={
                        <SlArrowRight
                            style={{
                                fontSize: '2.4rem',
                                margin: '0 auto',
                            }}
                        ></SlArrowRight>
                    }
                    nameButton=""
                ></Button>
            </div>
            <div
                className="icon_close d-md-block d-lg-none d-xl-none"
                style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '-3rem',
                    transform: 'translateX(-50%)  ',
                    backgroundColor: theme.thirdBackgroundColor,
                    borderRadius: '.8rem 0 0 .8rem',
                    cursor: 'pointer',
                }}
                onClick={(e) => setShowOrder(false)}
            >
                <Button
                    width="5rem"
                    height="3rem"
                    addStyleCustom={{
                        padding: '2.4rem 0',
                        color: theme.color,
                        borderRadius: '.8rem 0 0 .8rem',
                        minWidth: '2rem',
                        minHeight: '3rem',
                    }}
                    icon={
                        <RiCloseFill
                            style={{
                                fontSize: '2.4rem',
                                margin: '0 auto',
                            }}
                        ></RiCloseFill>
                    }
                    nameButton=""
                ></Button>
            </div>
            {renderStep()}
        </div>
    );
};
export default StepCheckOut;
