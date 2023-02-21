import { useContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { motion } from 'framer-motion';

import './style.scss';
import HeaderAdmin from '../../Components/HeaderAdmin';

import { ThemeApp } from '../../Utils/context';
import Button from '../../Components/Button';
import InputText from '../../Components/InputText';
import DropDown from '../../Components/DropDown';

const PostNewItem = () => {
    const [theme, setTheme] = useContext(ThemeApp);
    const [name, setName] = useState('');
    const [linkImage, setLinkImage] = useState('');
    const [cost, setCost] = useState('');
    const [color, setColor] = useState('#000');
    const [size, setSize] = useState(32);
    const [des, setDes] = useState('');

    return (
        <div
            className="container"
            style={{
                color: theme.color,
            }}
        >
            <HeaderAdmin />
            <div className="row">
                <div className="col-lg-12 col-xl-12 mt-4">
                    <h1
                        style={{
                            textAlign: 'center',
                        }}
                    >
                        Post New
                    </h1>
                </div>
                <div
                    className="w-75 mt-4 p-5"
                    style={{
                        backgroundColor: theme.secondBackgroundColor,
                        borderRadius: 'var(--primary_border_radius)',
                        margin: '0 auto',
                    }}
                >
                    <InputText
                        value={name}
                        styleCustomInput={{
                            color: theme.color,
                            fontSize: '1.6rem',
                        }}
                        onChange={(e) => setName(e.target.value)}
                        styleCustomWrapper={{
                            border: '1px solid #ccc',
                            margin: '0 auto',
                            borderRadius: 'var(--primary_border_radius)',
                            zIndex: 100,
                            backgroundColor: 'rgba(0, 0, 0, .2)',
                            marginTop: '1.2rem',
                        }}
                        width="100%"
                        labelInput={'Name'}
                    ></InputText>
                    <InputText
                        value={linkImage}
                        styleCustomInput={{
                            color: theme.color,
                            fontSize: '1.6rem',
                        }}
                        onChange={(e) => setLinkImage(e.target.value)}
                        styleCustomWrapper={{
                            border: '1px solid #ccc',
                            margin: '0 auto',
                            borderRadius: 'var(--primary_border_radius)',
                            marginTop: '6rem',
                            zIndex: 100,
                            backgroundColor: 'rgba(0, 0, 0, .2)',
                        }}
                        width="100%"
                        labelInput={'Link Image'}
                    ></InputText>

                    <div
                        className="w-100 d-flex justify-content-between flex-wrap "
                        style={{
                            marginTop: '6rem',
                        }}
                    >
                        <InputText
                            value={cost}
                            onChange={(e) => setCost(e.target.value)}
                            styleCustomWrapper={{
                                border: '1px solid #ccc',
                                borderRadius: 'var(--primary_border_radius)',
                                zIndex: 100,
                                backgroundColor: 'rgba(0, 0, 0, .2)',
                            }}
                            styleCustomInput={{
                                width: '100%',
                                height: '100%',
                                color: theme.color,
                                fontSize: '1.6rem',
                            }}
                            width="15%"
                            labelInput={'Cost $'}
                            type="number"
                        ></InputText>
                        <Button
                            nameButton="Color"
                            addStyleCustom={{
                                '--hover_background_color': 'transparent',
                                fontSize: '2.4rem',
                                borderRight: '1px solid #ccc',
                                borderLeft: '1px solid #ccc',
                                paddingLeft: '1.2rem',
                            }}
                            backgroundColorCustom={'transparent'}
                            icon={
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginLeft: '1.2rem',
                                    }}
                                >
                                    <InputText
                                        type="color"
                                        styleCustomWrapper={{
                                            borderRadius: 'var(--primary_border_radius)',
                                            backgroundColor: color,
                                            border: '1px solid #ccc',
                                            cursor: 'pointer',
                                            padding: 0,
                                        }}
                                        styleCustomInput={{
                                            backgroundColor: color,
                                            border: '1px solid #ccc',
                                            cursor: 'pointer',
                                            padding: 0,
                                        }}
                                        width="4rem"
                                        height="4rem"
                                        onChange={(e) => setColor(e.target.value)}
                                    ></InputText>
                                    <InputText
                                        value={color}
                                        styleCustomInput={{
                                            color: theme.color,
                                            fontSize: '1.6rem',
                                        }}
                                        styleCustomWrapper={{
                                            border: '1px solid #ccc',
                                            margin: '0 auto',
                                            borderRadius: 'var(--primary_border_radius)',
                                            zIndex: 100,
                                            backgroundColor: 'rgba(0, 0, 0, .2)',
                                        }}
                                        width="50%"
                                        onChange={(e) => setColor(e.target.value)}
                                        labelInput={'Color #'}
                                    ></InputText>
                                </div>
                            }
                            positionIcon="right"
                            disable
                            width="60%"
                        ></Button>
                        <Button
                            nameButton="Size"
                            addStyleCustom={{
                                '--hover_background_color': 'transparent',
                                fontSize: '2.4rem',
                            }}
                            backgroundColorCustom={'transparent'}
                            icon={
                                <DropDown
                                    width="60px"
                                    height="40px"
                                    display="block"
                                    name={size}
                                    styleCustomWrapper={{
                                        fontSize: '1.8rem',
                                        color: theme.color,
                                        borderRadius: 'var(primary_border_radius)',
                                    }}
                                    backgroundColor={theme.thirdBackgroundColor}
                                    hasInput
                                    typeDropDown="number"
                                    border="1px solid #ccc"
                                    action={(e) => setSize(e.target.value)}
                                    listOptions={[
                                        {
                                            name: 37,
                                            action: (e) => setSize(37),
                                        },
                                        {
                                            name: 38,
                                            action: (e) => setSize(38),
                                        },
                                        {
                                            name: 39,
                                            action: (e) => setSize(39),
                                        },
                                        {
                                            name: 40,
                                            action: (e) => setSize(40),
                                        },
                                        {
                                            name: 41,
                                            action: (e) => setSize(41),
                                        },
                                        {
                                            name: 42,
                                            action: (e) => setSize(42),
                                        },
                                        {
                                            name: 43,
                                            action: (e) => setSize(43),
                                        },
                                    ]}
                                    styleCustomOption={{
                                        padding: '.4rem 1.2rem',
                                        backgroundColor: theme.thirdBackgroundColor,
                                        fontSize: '1.8rem',
                                    }}
                                ></DropDown>
                            }
                            positionIcon="right"
                            disable
                            width="20%"
                        ></Button>
                    </div>
                    <div
                        className="w-100 "
                        style={{
                            marginTop: '6rem',
                        }}
                    >
                        <label
                            style={{
                                fontSize: '1.8rem',
                            }}
                            className="mb-4"
                        >
                            Description
                        </label>
                        <InputText
                            type="textarea"
                            value={des}
                            styleCustomInput={{
                                color: theme.color,
                                fontSize: '1.6rem',
                                height: '100px',
                                lineHeight: '1.8rem',
                            }}
                            onChange={(e) => setDes(e.target.value)}
                            styleCustomWrapper={{
                                border: '1px solid #ccc',
                                margin: '0 auto',
                                borderRadius: 'var(--primary_border_radius)',
                                zIndex: 100,
                                backgroundColor: 'rgba(0, 0, 0, .2)',
                            }}
                            width="100%"
                            labelInput={''}
                        ></InputText>
                    </div>
                    <Button
                        nameButton="Post"
                        addStyleCustom={{
                            textTransform: 'uppercase',
                            minWidth: '200px',
                            borderRadius: 'var(--primary_border_radius)',
                            margin: '3rem auto 0 auto',
                            marginTop: '3rem',
                        }}
                        backgroundColorCustom={'#FF8B13'}
                        width="20%"
                    />
                </div>
            </div>
        </div>
    );
};
export default PostNewItem;
