import { useContext, useState, useRef, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import './style.scss';
import { ThemeApp } from '../../Utils/context';

const InputText = ({
    value,
    type = 'text',
    nameInput = '',
    labelInput,
    styleCustomWrapper = {},
    styleCustomInput = {},
    color = '#fff',
    width = '30rem',
    handleOnFocus = (e) => {},
    handleOnBlur = (e) => {},
    handleOnchange = (e) => {},
    height = 40,
}) => {
    const [theme, setTheme] = useContext(ThemeApp);

    return (
        <div
            className="input_text"
            style={{
                ...styleCustomWrapper,
                '--width_input': width,
                height: height,
            }}
        >
            <input
                className="z-2"
                type={type}
                value={value}
                onChange={handleOnchange}
                style={{
                    zIndex: 2,
                    ...styleCustomInput,
                }}
                placeholder=" "
                onFocus={handleOnFocus}
                // onBlurCapture={handleOnBlur}
            ></input>
            <label
                style={{
                    '--color_label': '#F2CD5C',
                    zIndex: 1,
                }}
            >
                {labelInput}
            </label>
        </div>
    );
};

export default InputText;
