import { useContext, useState, useEffect } from 'react';

import './style.scss';
import Button from '../../Components/Button';
import InputText from '../../Components/InputText';

import { MdPayments } from 'react-icons/md';
import { BsArrowRightShort, BsArrowLeftShort, BsCashCoin, BsCreditCard } from 'react-icons/bs';

const StepCheckOut = ({ theme }) => {
    const [indexStep, setIndexStep] = useState(0);
    const steps = [
        <>
            <div
                className="h-75 d-flex flex-column align-items-center"
                style={{
                    color: theme.color,
                }}
            >
                <h1 className="mb-5 mt-2" style={{ fontSize: 20, color: '#FF8B13' }}>
                    Order Information
                </h1>
                <InputText
                    value=""
                    labelInput={'Name'}
                    styleCustomWrapper={{
                        color: theme.color,
                        borderRadius: 'var(--primary_border_radius)',
                        borderBottom: '1px solid',
                        borderImageSlice: 1,
                        borderWidth: '1px',
                        borderImageSource: ' linear-gradient(to left, #743ad5, #d53a9d)',
                        marginBottom: '10%',
                    }}
                    styleCustomInput={{ color: theme.color }}
                    color={theme.color}
                    width="80%"
                />
                <InputText
                    value=""
                    labelInput={'Phone Number'}
                    styleCustomWrapper={{
                        color: theme.color,
                        borderRadius: 'var(--primary_border_radius)',
                        borderBottom: '1px solid',
                        borderImageSlice: 1,
                        borderWidth: '1px',
                        borderImageSource: ' linear-gradient(to left, #743ad5, #d53a9d)',
                        marginBottom: '10%',
                    }}
                    styleCustomInput={{ color: theme.color }}
                    color={theme.color}
                    width="80%"
                />
                <InputText
                    value=""
                    labelInput={'Email'}
                    styleCustomWrapper={{
                        color: theme.color,
                        borderRadius: 'var(--primary_border_radius)',
                        borderBottom: '1px solid',
                        borderImageSlice: 1,
                        borderWidth: '1px',
                        borderImageSource: ' linear-gradient(to left, #743ad5, #d53a9d)',
                        marginBottom: '10%',
                    }}
                    styleCustomInput={{ color: theme.color }}
                    color={theme.color}
                    width="80%"
                />
                <InputText
                    value=""
                    labelInput={'Address'}
                    styleCustomWrapper={{
                        color: theme.color,
                        borderRadius: 'var(--primary_border_radius)',
                        borderBottom: '1px solid',
                        borderImageSlice: 1,
                        borderWidth: '1px',
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
                            fontSize: '24px',
                            marginRight: '12px',
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
                <h1 className="mb-5 mt-2 text-center" style={{ fontSize: 20, color: '#FF8B13', lineHeight: '24px' }}>
                    Check Information and apply discount code
                </h1>
                <div
                    className="d-flex justify-content-start"
                    style={{
                        height: '10%',
                        width: '80%',
                        fontSize: '14px',
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
                        fontSize: '14px',
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
                        fontSize: '14px',
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
                        fontSize: '14px',
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
                        borderBottom: '1px solid',
                        borderImageSlice: 1,
                        borderWidth: '1px',
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
                            fontSize: '24px',
                            marginRight: '12px',
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
                <h1 className="mb-5 mt-2" style={{ fontSize: 20, color: '#FF8B13' }}>
                    Choose Payment
                </h1>
                <div
                    className="d-flex justify-content-start "
                    style={{
                        height: '10%',
                        fontSize: '14px',
                        width: '80%',
                        borderBottom: '2px solid',
                        borderImageSlice: 1,
                        borderWidth: '2px',
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
                        nameButton="Cash"
                        backgroundColorCustom={'#AD7BE9'}
                        addStyleCustom={{
                            color: theme.color,
                            borderRadius: 'var(--primary_border_radius)',
                            minWidth: '150px',
                            marginLeft: '12px',
                            maxWidth: '50%',
                        }}
                        icon={
                            <BsCashCoin
                                style={{
                                    fontSize: '24px',
                                    marginRight: '12px',
                                }}
                            />
                        }
                        width="unset"
                    />
                    <Button
                        nameButton="Credit Card"
                        backgroundColorCustom={'#E90064'}
                        addStyleCustom={{
                            color: theme.color,
                            minWidth: '150px',
                            marginRight: '12px',
                            maxWidth: '50%',
                            borderRadius: 'var(--primary_border_radius)',
                        }}
                        icon={
                            <BsCreditCard
                                style={{
                                    fontSize: '24px',
                                    marginRight: '12px',
                                }}
                            />
                        }
                        width="unset"
                    />
                </div>
            </div>
            <Button
                nameButton="Back"
                backgroundColorCustom={'#FF8B13'}
                addStyleCustom={{
                    color: theme.color,
                    justifyContent: 'center',
                    borderRadius: 'var(--primary_border_radius)',
                    marginTop: '10vh',
                }}
                width="100%"
                icon={
                    <BsArrowLeftShort
                        style={{
                            fontSize: '24px',
                            marginRight: '12px',
                        }}
                    />
                }
                positionIcon="left"
                action={(e) => setIndexStep((prev) => prev - 1)}
            />
        </>,
        <>
            <div
                className="h-75 d-flex flex-column align-items-center"
                style={{
                    color: theme.color,
                }}
            >
                <h1 className="mb-5 mt-2" style={{ fontSize: 20, color: '#FF8B13' }}>
                    Order Information
                </h1>
                <InputText
                    value=""
                    labelInput={'Name'}
                    styleCustomWrapper={{
                        color: theme.color,
                        borderRadius: 'var(--primary_border_radius)',
                        borderBottom: '1px solid',
                        borderImageSlice: 1,
                        borderWidth: '1px',
                        borderImageSource: ' linear-gradient(to left, #743ad5, #d53a9d)',
                        marginBottom: '10%',
                    }}
                    styleCustomInput={{ color: theme.color }}
                    color={theme.color}
                    width="80%"
                />
                <InputText
                    value=""
                    labelInput={'Phone Number'}
                    styleCustomWrapper={{
                        color: theme.color,
                        borderRadius: 'var(--primary_border_radius)',
                        borderBottom: '1px solid',
                        borderImageSlice: 1,
                        borderWidth: '1px',
                        borderImageSource: ' linear-gradient(to left, #743ad5, #d53a9d)',
                        marginBottom: '10%',
                    }}
                    styleCustomInput={{ color: theme.color }}
                    color={theme.color}
                    width="80%"
                />
                <InputText
                    value=""
                    labelInput={'Email'}
                    styleCustomWrapper={{
                        color: theme.color,
                        borderRadius: 'var(--primary_border_radius)',
                        borderBottom: '1px solid',
                        borderImageSlice: 1,
                        borderWidth: '1px',
                        borderImageSource: ' linear-gradient(to left, #743ad5, #d53a9d)',
                        marginBottom: '10%',
                    }}
                    styleCustomInput={{ color: theme.color }}
                    color={theme.color}
                    width="80%"
                />
                <InputText
                    value=""
                    labelInput={'Address'}
                    styleCustomWrapper={{
                        color: theme.color,
                        borderRadius: 'var(--primary_border_radius)',
                        borderBottom: '1px solid',
                        borderImageSlice: 1,
                        borderWidth: '1px',
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
                            fontSize: '24px',
                            marginRight: '12px',
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
                <h1 className="mb-5 mt-2" style={{ fontSize: 20, color: '#FF8B13' }}>
                    Order Information
                </h1>
                <InputText
                    value=""
                    labelInput={'Name'}
                    styleCustomWrapper={{
                        color: theme.color,
                        borderRadius: 'var(--primary_border_radius)',
                        borderBottom: '1px solid',
                        borderImageSlice: 1,
                        borderWidth: '1px',
                        borderImageSource: ' linear-gradient(to left, #743ad5, #d53a9d)',
                        marginBottom: '10%',
                    }}
                    styleCustomInput={{ color: theme.color }}
                    color={theme.color}
                    width="80%"
                />
                <InputText
                    value=""
                    labelInput={'Phone Number'}
                    styleCustomWrapper={{
                        color: theme.color,
                        borderRadius: 'var(--primary_border_radius)',
                        borderBottom: '1px solid',
                        borderImageSlice: 1,
                        borderWidth: '1px',
                        borderImageSource: ' linear-gradient(to left, #743ad5, #d53a9d)',
                        marginBottom: '10%',
                    }}
                    styleCustomInput={{ color: theme.color }}
                    color={theme.color}
                    width="80%"
                />
                <InputText
                    value=""
                    labelInput={'Email'}
                    styleCustomWrapper={{
                        color: theme.color,
                        borderRadius: 'var(--primary_border_radius)',
                        borderBottom: '1px solid',
                        borderImageSlice: 1,
                        borderWidth: '1px',
                        borderImageSource: ' linear-gradient(to left, #743ad5, #d53a9d)',
                        marginBottom: '10%',
                    }}
                    styleCustomInput={{ color: theme.color }}
                    color={theme.color}
                    width="80%"
                />
                <InputText
                    value=""
                    labelInput={'Address'}
                    styleCustomWrapper={{
                        color: theme.color,
                        borderRadius: 'var(--primary_border_radius)',
                        borderBottom: '1px solid',
                        borderImageSlice: 1,
                        borderWidth: '1px',
                        borderImageSource: ' linear-gradient(to left, #743ad5, #d53a9d)',
                        marginBottom: '10%',
                    }}
                    styleCustomInput={{ color: theme.color }}
                    color={theme.color}
                    width="80%"
                />
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
                            fontSize: '24px',
                            marginRight: '12px',
                        }}
                    />
                }
                action={(e) => setIndexStep((prev) => prev + 1)}
            />
        </>,
    ];

    const renderStep = () => {
        return steps[indexStep];
    };
    return (
        <div
            className="col-lg-3 col-xl-3 "
            style={{
                backgroundColor: theme.thirdBackgroundColor,
                height: '100vh',
                position: 'relative',
            }}
        >
            <div
                className="wrapper_manager_step_check-out"
                style={{
                    backgroundColor: theme.thirdBackgroundColor,
                }}
            >
                <div
                    style={{
                        backgroundColor: theme.backgroundColor,
                    }}
                ></div>
                <div
                    style={{
                        backgroundColor: theme.color,
                    }}
                ></div>
                <div
                    style={{
                        backgroundColor: theme.color,
                    }}
                ></div>
                <div
                    style={{
                        backgroundColor: theme.color,
                    }}
                ></div>
            </div>
            {renderStep()}
        </div>
    );
};
export default StepCheckOut;
