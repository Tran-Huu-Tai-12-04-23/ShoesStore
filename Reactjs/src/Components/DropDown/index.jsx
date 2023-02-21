import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';

import { GoArrowSmallDown } from 'react-icons/go';
import InputText from '../InputText';

const DropDown = ({
    display = 'block',
    name,
    listOptions = [],
    width = '100px',
    height = '60px',
    styleCustomWrapper = {},
    styleCustomOption = {},
    action = (e) => {},
    arrow = 'true',
    hasInput = false,
    backgroundColor,
    typeDropDown,
    border,
}) => {
    const [option, setOption] = useState(false);

    const renderOptions = () => {
        return listOptions.map((option) => {
            return (
                <div
                    className="dropdown-item"
                    onClick={option.action ? option.action : (e) => {}}
                    style={{
                        ...styleCustomOption,
                    }}
                >
                    {option.name ? option.name : ''}
                </div>
            );
        });
    };

    useEffect(() => {
        const handleClickOtherPlace = (e) => {
            setOption(false);
        };
        window.addEventListener('click', handleClickOtherPlace);
        return () => {
            window.removeEventListener('click', handleClickOtherPlace);
        };
    }, []);
    return (
        <div
            className="dropdown_item"
            style={{
                width: width,
                height: height,
            }}
        >
            {!hasInput && (
                <Button
                    nameButton={name}
                    width={width}
                    height={height}
                    addStyleCustom={{
                        fontSize: '1.8rem',
                        borderRadius: 'var(--primary_border_radius)',
                        ...styleCustomWrapper,
                    }}
                    backgroundColorCustom={backgroundColor}
                    icon={
                        <GoArrowSmallDown
                            style={{
                                fontSize: '3.2rem',
                            }}
                        />
                    }
                    positionIcon="right"
                    action={(e) => setOption(!option)}
                ></Button>
            )}
            {hasInput && (
                <InputText
                    value={name}
                    type={typeDropDown}
                    styleCustomWrapper={{
                        ...styleCustomWrapper,
                        border: border,
                    }}
                    styleCustomInput={{
                        width: '100%',
                        height: '100%',
                        ...styleCustomWrapper,
                        margin: 0,
                        padding: 0,
                        textAlign: 'center',
                    }}
                    height={height}
                    width={width}
                    arrow
                    onChange={action}
                    onFocus={(e) => setOption(!option)}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setOption(!option);
                    }}
                />
            )}
            {listOptions.length > 0 && (
                <div
                    className=""
                    style={{
                        display: option ? display : 'none',
                        ...styleCustomOption,
                        borderRadius: 'var(--primary_border_radius)',
                    }}
                >
                    {renderOptions()}
                </div>
            )}
        </div>
    );
};
export default DropDown;
