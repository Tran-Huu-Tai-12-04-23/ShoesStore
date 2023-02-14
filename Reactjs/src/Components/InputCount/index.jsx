import { useContext, useState, useRef, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';
import './style.scss';
import { ThemeApp } from '../../Utils/context';

import { IoIosAdd } from 'react-icons/io';
import { RiSubtractLine } from 'react-icons/ri';

const InputCount = ({
    addStyleWrapper = {},
    type = 'text',
    value,
    width,
    height,
    addStyle = {},
    color,
    actionNext = (e) => {},
    actionPrev = (e) => {},
    action = (e) => {},
}) => {
    const [theme, setTheme] = useContext(ThemeApp);
    const [valueInput, setValueInput] = useState(value ? value : 0);
    const [sizes, setSizes] = useState([36, 37, 38, 39, 40, 41, 42, 43]);
    const renderOptionsSelect = () => {
        return sizes.map((size) => {
            return (
                <option name="size" key={uuid()}>
                    {size}
                </option>
            );
        });
    };
    return (
        <div
            className="wrapper_input_count"
            style={{
                ...addStyleWrapper,
            }}
        >
            {type !== 'select' && (
                <>
                    <RiSubtractLine onClick={actionPrev} />
                    <input
                        type={type}
                        value={value}
                        onChange={action}
                        onClick={action}
                        style={{
                            ...addStyle,
                            height: height,
                            width: width,
                            color: color,
                        }}
                    ></input>
                    <IoIosAdd onClick={actionNext} />
                </>
            )}
            {type === 'select' && (
                <select
                    value={valueInput}
                    onChange={(e) => setValueInput(e.target.value)}
                    style={{
                        ...addStyle,
                        height: height,
                        width: width,
                        color: color,
                    }}
                >
                    {renderOptionsSelect()}
                </select>
            )}
        </div>
    );
};

export default InputCount;
