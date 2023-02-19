import { useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './style.scss';

import { ThemeApp } from '../../Utils/context';
import Button from '../../Components/Button';

const FilterProduct = ({
    typeShoes,
    setTypeShoes,
    setType,
    type,
    listPrice,
    setListPrice,
    rangePrice,
    setRangePrice,
    gender,
    setGender,
    dataFilter,
    setDataFilter,
    setNumberProduct,
    display = 'block',
    styleCustom,
    setShowFilter,
}) => {
    const [theme, setTheme] = useContext(ThemeApp);
    const renderTypeShoes = () => {
        return typeShoes.map((it) => {
            return (
                <li
                    key={uuid()}
                    style={{
                        color: it.id === type ? '#e90064' : theme.color,
                        fontSize: '1.4rem',
                        margin: 0,
                        padding: '.4rem 1.2rem',
                    }}
                    onClick={(e) => {
                        setType(it.id);
                    }}
                >
                    {it.name}
                </li>
            );
        });
    };
    const renderPrice = () => {
        return listPrice.map((it) => {
            return (
                <div
                    key={uuid()}
                    style={{
                        width: '100%',
                        fontSize: '1.4rem',
                    }}
                >
                    <Button
                        nameButton={it.type}
                        width="100%"
                        addStyleCustom={{
                            borderRadius: 'var(--primary_border_radius)',
                            color: theme.color,
                            justifyContent: 'flex-start',
                            backgroundColor: rangePrice.type === it.type ? theme.secondBackgroundColor : 'unset',
                        }}
                        action={(e) => setRangePrice(it)}
                    ></Button>
                </div>
            );
        });
    };

    return (
        <div
            style={{
                display: display,
                ...styleCustom,
                overflow: 'hidden',
            }}
        >
            <ul className="name_type_shoes">{renderTypeShoes()}</ul>
            <div
                className="wrapper_select_gender mb-2"
                style={{
                    fontSize: '1.4rem',
                }}
            >
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Unisex"
                        onChange={(e) => setGender(e.target.value)}
                        checked={gender.toString().toLowerCase() === 'unisex' ? true : false}
                    />
                    <span>Unisex</span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Men"
                        onChange={(e) => setGender(e.target.value)}
                        checked={gender.toString().toLowerCase() === 'men' ? true : false}
                    />
                    <span>Men</span>
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Women"
                        onChange={(e) => setGender(e.target.value)}
                        checked={gender.toString().toLowerCase() === 'women' ? true : false}
                    />
                    <span>Women</span>
                </label>
            </div>
            <div className="wrapper_select_price">
                <h1
                    style={{
                        marginLeft: '1.2rem',
                        marginBottom: '1.2rem',
                        margin: '1.2rem',
                    }}
                >
                    Price
                </h1>
                <div
                    className=" pb-2"
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    {renderPrice()}
                </div>
                <Button
                    nameButton="Apply"
                    width="70%"
                    addStyleCustom={{
                        color: theme.color,
                        margin: '0 auto',
                        borderRadius: '3rem',
                        marginBottom: '1.2',
                        backgroundColor: theme.secondBackgroundColor,
                    }}
                    height="3rem"
                    action={(e) => {
                        setDataFilter((prev) => {
                            return { gender, typeShoes: type, rangePrice };
                        });
                        setShowFilter(false);
                        setNumberProduct(6);
                    }}
                ></Button>
            </div>
        </div>
    );
};

export default FilterProduct;
