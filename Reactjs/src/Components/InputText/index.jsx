import { useContext, useState, useRef, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import './style.scss';
import { ThemeApp } from '../../Utils/context';

import { GoArrowSmallDown } from 'react-icons/go';

const InputText = ({
    value,
    type = 'text',
    nameInput = '',
    labelInput,
    styleCustomWrapper = {},
    styleCustomInput = {},
    color = '#fff',
    width = '30rem',
    onFocus = (e) => {},
    onBlur = (e) => {},
    onChange = (e) => {},
    onClick = (e) => {},
    height = 40,
    arrow = false,
}) => {
    const [theme, setTheme] = useContext(ThemeApp);
    const [Type, setType] = useState(type === 'textarea' ? 'textarea' : 'input');

    return (
        <div
            className="input_text"
            style={{
                ...styleCustomWrapper,
                '--width_input': type === 'textarea' ? 'unset' : width,
                height: type === 'textarea' ? 'unset' : height,
                position: 'relative',
                paddingRight: arrow ? '1.2rem' : 'unset',
            }}
        >
            <Type
                className="z-2"
                type={type}
                value={value}
                onChange={onChange}
                style={{
                    zIndex: 2,
                    ...styleCustomInput,
                }}
                placeholder=" "
                onFocus={onFocus}
                onBlur={onBlur}
                onClick={onClick}
            ></Type>
            <label
                style={{
                    '--color_label': '#F2CD5C',
                    zIndex: 1,
                }}
            >
                {labelInput}
            </label>
            {arrow && (
                <GoArrowSmallDown
                    style={{
                        fontSize: '3.2rem',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translateY(-50%)',
                    }}
                />
            )}
        </div>
    );
};

export default InputText;
