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
    width = '300px',
}) => {
    const [theme, setTheme] = useContext(ThemeApp);
    const [valueInput, setValueInput] = useState(value ? value : '');

    return (
        <div
            className="input_text"
            style={{
                ...styleCustomWrapper,
                '--width_input': width,
            }}
        >
            <input
                className="z-2"
                type={type}
                value={valueInput}
                onChange={(e) => setValueInput(e.target.value)}
                style={{
                    zIndex: 2,
                    ...styleCustomInput,
                }}
                placeholder=" "
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
